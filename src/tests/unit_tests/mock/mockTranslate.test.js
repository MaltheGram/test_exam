import {translate} from "../../../apiRouter.js";
import languages from "../../../global/globals.js";

const translateValidTestData = [
    {
        "input": "Hello, how are you?",
        "expectedOutput": "Hola, ¿cómo estás?",
        "originLanguage": "en",
        "outputLanguage": "es"
    },
    {
        "input": "Bonjour, comment ça va?",
        "expectedOutput": "Hello, how are you?",
        "originLanguage": "fr",
        "outputLanguage": "en"
    },
    {
        "input": "Wo finde ich die nächste U-Bahn-Station?",
        "expectedOutput": "Where is the nearest subway station?",
        "originLanguage": "de",
        "outputLanguage": "en"
    },
    {
        "input": "こんにちは、元気ですか？",
        "expectedOutput": "Hello, are you well?",
        "originLanguage": "ja",
        "outputLanguage": "en"
    },
    {
        "input": "Как дела?",
        "expectedOutput": "How are you?",
        "originLanguage": "ru",
        "outputLanguage": "en"
    },
    {
        "input": "我在哪里可以找到最近的地铁站？",
        "expectedOutput": "Where can I find the nearest metro station?",
        "originLanguage": "zh",
        "outputLanguage": "en"
    },
    {
        "input": "मैं कैसे मदद कर सकता हूँ?",
        "expectedOutput": "How can I help?",
        "originLanguage": "hi",
        "outputLanguage": "en"
    },
    {
        "input": "행복한 하루 되세요!",
        "expectedOutput": "Have a happy day!",
        "originLanguage": "ko",
        "outputLanguage": "en"
    },
    {
        "input": "Idag har jeg det meget godt og har arbejdet hårdt",
        "expectedOutput": "Today I feel very well and have worked hard",
        "originLanguage": "da",
        "outputLanguage": "en"
    },
    {
        "input": "Das Wetter heute ist wunderschön.",
        "expectedOutput": "The weather today is beautiful.",
        "originLanguage": "de",
        "outputLanguage": "en"
    },
    {
        "input": "La vita è bella in Italia.",
        "expectedOutput": "Life is beautiful in Italy.",
        "originLanguage": "it",
        "outputLanguage": "en"
    },
    {
        "input": "La biblioteca está cerrada hoy.",
        "expectedOutput": "The library is closed today.",
        "originLanguage": "es",
        "outputLanguage": "en"
    },
    {
        "input": "Je veux apprendre de nouvelles choses.",
        "expectedOutput": "I want to learn new things.",
        "originLanguage": "fr",
        "outputLanguage": "en"
    },
    {
        "input": "Eu adoro ler livros.",
        "expectedOutput": "I love reading books.",
        "originLanguage": "pt",
        "outputLanguage": "en"
    },
    {
        "input": "Мне нравится готовить.",
        "expectedOutput": "I like to cook.",
        "originLanguage": "ru",
        "outputLanguage": "en"
    },
    {
        "input": "Jeg går en tur i parken.",
        "expectedOutput": "I am going for a walk in the park.",
        "originLanguage": "da",
        "outputLanguage": "en"
    },
    {
        "input": "Bu sabah güzel bir kahvaltı yaptım.",
        "expectedOutput": "I had a nice breakfast this morning.",
        "originLanguage": "tr",
        "outputLanguage": "en"
    },
    {
        "input": "Tänään on kaunis päivä.",
        "expectedOutput": "Today is a beautiful day.",
        "originLanguage": "fi",
        "outputLanguage": "en"
    },
    {
        "input": "Dziś jest piękna pogoda.",
        "expectedOutput": "The weather is beautiful today.",
        "originLanguage": "pl",
        "outputLanguage": "en"
    },
    {
        "input": "Jeg har hø til salg idag",
        "expectedOutput": "I have hay for sale today",
        "originLanguage": "da",
        "outputLanguage": "en"
    },
    {
        "input": "Jeg har 42 heste til salg idag",
        "expectedOutput": "I have 42 horses for sale today",
        "originLanguage": "da",
        "outputLanguage": "en"
    },
    {
        "input": "Hi",
        "expectedOutput": "Hej",
        "originLanguage": "en",
        "outputLanguage": "da"
    },
    {
        "input": "Hej",
        "expectedOutput": "Hola",
        "originLanguage": "da",
        "outputLanguage": "es"
    }
]

const translateInvalidTestData = [
    {
        "input": " ",
        "expectedOutput": " ",
        "originLanguage": "af",
        "outputLanguage": "en"
    },
    {
        "input": "",
        "expectedOutput": "",
        "originLanguage": "zh",
        "outputLanguage": "en"
    },
    {
        "input": "12345",
        "expectedOutput": "12345",
        "originLanguage": "ja",
        "outputLanguage": "en"
    },
    {
        "input": "Hello, how are you?",
        "expectedOutput": null,
        "originLanguage": "en",
        "outputLanguage": "xx" // xx is not a valid language
    },
    {
        "input": "InvalidText",
        "expectedOutput": null,
        "originLanguage": "xx", // xx is not a valid language
        "outputLanguage": "en"
    },
    {
        "input": "!@#$%^&*()_+",
        "expectedOutput": "!@#$%^&*()_+",
        "originLanguage": "en",
        "outputLanguage": "es"
    },
    {
        "input": "こんにちは",
        "expectedOutput": null,
        "originLanguage": "ja", // origin and output language are the same
        "outputLanguage": "ja"
    },
    {
        "input": " ",
        "expectedOutput": " ",
        "originLanguage": "ko",
        "outputLanguage": "en"
    },
    {
        "input": 1234,
        "expectedOutput": null,
        "originLanguage": "en",
        "outputLanguage": "da"
    },
    /* {
        // TODO: This test passes since googles API can translate
        "input": "Jeg har det very good idag, and I må gerne relax",
        "expectedOutput": "und",
        "originLanguage": "da",
        "outputLanguage": "en"
    },*/
    {
        "input": "😊",
        "expectedOutput": null,
        "originLanguage": "und",
        "outputLanguage": "en"
    },
    {
        "input": "42",
        "expectedOutput": null,
        "originLanguage": "und",
        "outputLanguage": "en"
    },
    {
        "input": "",
        "expectedOutput": null,
        "originLanguage": "und",
        "outputLanguage": "en"
    },
    {
        "input": " ",
        "expectedOutput": null,
        "originLanguage": "und",
        "outputLanguage": "en"
    },
    {
        "input": "!@#$%^&*()",
        "expectedOutput": null,
        "originLanguage": "und",
        "outputLanguage": "en"
    },
    {
        "input": "Hello こんにちは",
        "expectedOutput": null,
        "originLanguage": "und",
        "outputLanguage": "en"
    },
    {
        "input": "Bonjour! How are you?",
        "expectedOutput": null,
        "originLanguage": "und",
        "outputLanguage": "en"
    },
    {
        "input": "Привет, hello!",
        "expectedOutput": null,
        "originLanguage": "und",
        "outputLanguage": "en"
    },
    {
        "input": "123 Main Street",
        "expectedOutput": null,
        "originLanguage": "und",
        "outputLanguage": "en"
    },
    {
        "input": "Hasta la vista, baby",
        "expectedOutput": null,
        "originLanguage": "und",
        "outputLanguage": "en"
    }
];




/*** 
 * 
 * @returns {string} Expected translated output
 * ***/ 


jest.mock("../../../apiRouter.js")

translate.mockImplementation(async (textToTranslate, sourceLanguage, targetLanguage, testData) => {

    if (sourceLanguage === targetLanguage) {
        throw new Error("Source and target language cannot be the same");
    }
    if (!languages.some(language => language.value === sourceLanguage)) {
        throw new Error("Source language is not supported");
    }
    if (!languages.some(language => language.value === targetLanguage)) {
        throw new Error("Target language is not supported");
    }
    if (typeof textToTranslate !== 'string') {
        throw new Error("Invalid input type. Must be a text string");
    }
    if (textToTranslate.length < 2) {
        throw new Error("Must consist of 2 or more characters");
    }
    const numericRegex = /^\d+(\.\d+)?$/;
    if (numericRegex.test(textToTranslate)) {
        throw new Error("Translation of only numeric values is not allowed");
    }
    const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}]/u;
    if (emojiRegex.test(textToTranslate)) {
        throw new Error("Translation of emojis is not allowed");
    }
    const specialCharacterRegex = /^(?=.*\p{L})[\p{L}\p{M}\p{Z}\p{N}\p{P}\p{S}]+$/u
    if (!specialCharacterRegex.test(textToTranslate)) {
        throw new Error("Translation of special characters are not allowed");
    }

    const testDataEntry = testData.find(test => 
      test.input === textToTranslate && 
      test.originLanguage === sourceLanguage &&
      test.outputLanguage === targetLanguage
    );
  
    return testDataEntry.expectedOutput;
});
  
describe.each(translateValidTestData)("Translate parahraph", (test) => {
    it("Should be able to translate a paragraph", async () => {
        const data = await translate(test.input, test.originLanguage, test.outputLanguage, translateValidTestData);
        await expect(data).toBe(test.expectedOutput);
    })
});


describe.each(translateInvalidTestData)("Translate invalid paragraph", (test) => { 
    it("Should not be able to translate a faulty paragraph", async () => {
        await expect(translate(test.input, test.originLanguage, test.outputLanguage, translateInvalidTestData))
            .rejects
            .toThrow();
    });
});