import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import { Logs, Detection, Translation} from '../src/services/mongodb_schema/logs.js';
import languages from './global/globals.js';

dotenv.config();
const router = express.Router();

router.get('/langs' , async (req, res) => {
    try{
        const data = await getLanguages();
        res.send(data);
    }catch(error){
        res.status(500).send({ message: error.message});
        console.error("Error in langs[Nr. 1] ", error);
    }
});

export const validateText = (textToTranslate) => {
    if (typeof textToTranslate !== 'string') {
        throw new Error("Invalid input type. Must be a text string");
    }
    if (textToTranslate.length < 2) {
        throw new Error("Must consist of 2 or more characters");
    }
    const numericRegex = /^\d+(\.\d+)?$/;
    if (numericRegex.test(textToTranslate)) {
        throw new Error("Translation of only numeric values are not allowed");
    }
    const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}]/u;
    if (emojiRegex.test(textToTranslate)) {
        throw new Error("Translation of emojis are not allowed");
    }
    const specialCharacterRegex = /^(?=.*\p{L})[\p{L}\p{M}\p{Z}\p{N}\p{P}\p{S}]+$/u
    if (!specialCharacterRegex.test(textToTranslate)) {
        throw new Error("Translation of special characters are not allowed");
    }

    return textToTranslate
}

// get all possible languages, not really usefull for the user, but nice for testing
export async function getLanguages() {
    const options = {
        method: 'GET',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
        headers: {
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        }
    };
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error("Error in langs[Nr. 2] ", error);
    }
}

// Detects the language of the text from the input field in frontend
router.post('/detect', async (req, res) => {
    try{
        const data = await detectLanguage(req.body.text);
        res.send(data);
    }catch(error){
        res.status(500).send({ message: error.message});
        console.error("Error in detect[Nr. 1] ");
    }
});

export async function detectLanguage(textToDetect) {
    const encodedParams = new URLSearchParams();
    encodedParams.set('q', textToDetect);

    validateText(textToDetect);
    
    const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: encodedParams,
    };

    try {
        const response = await axios.request(options);
        if (process.env.NODE_ENV !== 'test') {
            await createLogToDB("Detection", new Detection({
                input: textToDetect,
                language: response.data.data.detections[0][0].language,
                isReliable: response.data.data.detections[0][0].isReliable,
                confidence: response.data.data.detections[0][0].confidence
            }));
        }
        return response.data
    } catch (error) {
        console.error("Error in detect[Nr. 2] ", error);
    }
}


// Translate the text from the input field in frontend
router.post('/translate', async (req, res) => {
    try{
        const data = await translate(req.body.text, req.body.source, req.body.target);
        res.send(data);
    } catch (error) {
        res.status(500).send({ message: error.message});
        console.error("Error in translate[Nr. 1] ");
    }
});


export async function translate(textToTranslate, sourceLanguage, targetLanguage) {
    const encodedParams = new URLSearchParams();
    encodedParams.set('q', textToTranslate);
    encodedParams.set('target', targetLanguage);
    encodedParams.set('source', sourceLanguage);


    if (sourceLanguage === targetLanguage) throw new Error("Source and target language cannot be the same");
    if (!languages.some(language => language.value === sourceLanguage)) throw new Error("Source language is not supported");
    if (!languages.some(language => language.value === targetLanguage)) throw new Error("Target language is not supported");

    validateText(textToTranslate);

    const options = {
        method: 'POST',
        url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        data: encodedParams,
    };

    try {
        const response = await axios.request(options);
        if (process.env.NODE_ENV !== 'test') {
            await createLogToDB("Translation", new Translation({
                translate_from: sourceLanguage,
                translate_to: targetLanguage,
                translate_word: textToTranslate
            }));
        }
        return response.data;
    } catch (error) {
        console.error("Error in translate[Nr. 2] ", error);
    }
};


export async function createLogToDB(level, levelData){
    try{
        const logEntry = new Logs({
            level: level,
            timestamp: new Date(),
            data: levelData, 
        });
        
        const result = await logEntry.save();
        //console.log('Successfully created new log to the DB [Nr. 1]', result);

        return result;
    }catch(error){
        console.log('Error in creating new translation to the DB [Nr. 1]', error)
    }
}

export default router;