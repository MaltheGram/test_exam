import dotenv from 'dotenv';
import {createLogToDB} from '../../apiRouter.js';
import {Translation, Logs, Detection} from '../../services/mongodb_schema/logs.js';
import {mongoConnSetup, closeMongoConn} from '../../services/db_con/mongoConnSetup.js';
import mongoose from 'mongoose';
dotenv.config();


describe('Integration tests of the mongo database', () => {
    let mongoDBClient;
    beforeAll(async () => {
        mongoDBClient = await mongoConnSetup();
    });

    afterAll(async () => {
        // Clean up the database after tests
        await Logs.deleteMany({ "data.translate_word": "inteTest_tran_word" });
        await Logs.deleteMany({ "data.input": "inteTest_det_word"  });
        await Logs.deleteMany({ "data.translate_word": "inteTest_word"  });
        await Logs.deleteMany({ "data.input": "inteTest_input" });
        await closeMongoConn();
    });

    it('should connect to the database', async () => {
        expect(mongoDBClient).toBeDefined();
        expect(mongoDBClient).not.toBeNull();
        expect(mongoDBClient.readyState).toBe(1);
    });
    
    it('would be able to create a new translation log', async () => {
        await createLogToDB("Translation", new Translation({
            translate_from: "inteTest_tran_from_en",
            translate_to: "inteTest_tran_to_sv",
            translate_word: "inteTest_tran_word"
        }));

        const insertedDataTran = await Logs.findOne({ "data.translate_word": "inteTest_tran_word" });

        expect(insertedDataTran).toBeDefined();
        expect(insertedDataTran.data.translate_from).toBe('inteTest_tran_from_en');
        expect(insertedDataTran.data.translate_to).toBe('inteTest_tran_to_sv');
        expect(insertedDataTran.data.translate_word).toBe('inteTest_tran_word');
    });

    it('would be able to create a new detection log', async () => {
        await createLogToDB("Detection", new Detection({
            input: "inteTest_det_word",
            language: "da",
            isReliable: false,
            confidence: 0.5699999928474426
        }));

        const insertedDataDet = await Logs.findOne({ "data.input": "inteTest_det_word" });

        expect(insertedDataDet).toBeDefined();
        expect(insertedDataDet.data.input).toBe('inteTest_det_word');
        expect(insertedDataDet.data.language).toBe('da');
        expect(insertedDataDet.data.isReliable).toBe(false);
        expect(insertedDataDet.data.confidence).toBe(0.5699999928474426)

        expect(insertedDataDet.level).not.toBe('Translation');
    
    }); 
    
        it('Should correctly check if it is a detect or translation log', async () => {
            await createLogToDB("Translation", new Translation({
                translate_from: "inteTest_from_en",
                translate_to: "inteTest_to_sv",
                translate_word: "inteTest_word"
            }));
            
            const insertedData = await Logs.findOne({ "data.translate_word": "inteTest_word" });
            expect(insertedData).toBeDefined();
            expect(insertedData.level).toBe('Translation'); 
            expect(insertedData.data.translate_from).toBe('inteTest_from_en');
            expect(insertedData.data.translate_to).toBe('inteTest_to_sv');
            expect(insertedData.data.translate_word).toBe('inteTest_word');

            expect(insertedData.level).not.toBe('Detection');
    });

    it('should correctly detect if the log is a detection log', async () => {
        
        await createLogToDB("Detection", new Detection({
            input: "inteTest_input",
            language: "inteTest_language",
            isReliable: true,
            confidence: 0.9
        }));
        
        const insertedData = await Logs.findOne({ "data.input": "inteTest_input" });

        expect(insertedData).toBeDefined();
        expect(insertedData.level).toBe('Detection'); 
        expect(insertedData.data.input).toBe('inteTest_input');
        expect(insertedData.data.language).toBe('inteTest_language');
        expect(insertedData.data.isReliable).toBe(true);
        expect(insertedData.data.confidence).toBe(0.9);
        
        expect(insertedData.level).not.toBe('Translation');

    });

});


describe('mongoConnSetup', () => {
    jest.mock('mongoose');
    it('should reject with an error on connection error', async () => {
        const onMock = jest.fn();
        mongoose.connection.on = onMock;
        onMock.mockImplementationOnce((event, callback) => {
            if (event === 'error') {
                callback(new Error('Mocked connection error'));
            }
        });

        await expect(mongoConnSetup()).rejects.toThrow('Mocked connection error');
        expect(onMock).toHaveBeenCalledWith('error', expect.any(Function));
    });

    it('should log an error if closing the connection fails', async () => {
        const closeMock = jest.spyOn(mongoose.connection, 'close');
        closeMock.mockImplementationOnce(async () => {
            throw new Error('Mocked closing error');
        });

        const consoleErrorMock = jest.spyOn(console, 'error').mockImplementation();
        await closeMongoConn();

        expect(consoleErrorMock).toHaveBeenCalledWith('Error closing MongoDB connection:', expect.any(Error));

        closeMock.mockRestore();
        consoleErrorMock.mockRestore();
    });
});

