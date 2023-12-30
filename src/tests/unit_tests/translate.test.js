import { translate } from "../../apiRouter.js";

const translateValidTestData = [
    {
        "input": "Hello, how are you?",
        "expectedOutput": "¿Hola, cómo estás?",
        "originLanguage": "en",
        "outputLanguage": "es"
    }, 
    {
        "input": "Bonjour, comment ça va?",
        "expectedOutput": "Hello how are you?",
        "originLanguage": "fr",
        "outputLanguage": "en"
    },
    {
        "input": "Wo finde ich die nächste U-Bahn-Station?",
        "expectedOutput": "Where can I find the nearest subway station?",
        "originLanguage": "de",
        "outputLanguage": "en"
    },
    {
        "input": "こんにちは、元気ですか？",
        "expectedOutput": "Hello how are you?",
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
        "expectedOutput": "Have a nice day!",
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
        "expectedOutput": "Life is good in Italy.",
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
        "expectedOutput": "I go for a walk in the park.",
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
        "expectedOutput": "It is a beautiful day today.",
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


describe("Translation", () => {
    it.each(translateValidTestData)("Should be able to translate a paragraph", async (test) => {
        const data = await translate(test.input, test.originLanguage, test.outputLanguage);
        const extractedLanguage = data.data.translations[0].translatedText;
        await expect(extractedLanguage).toEqual(test.expectedOutput);
        
    })
});

// Behøver vi overhovedet at teste for invalid data, da dette allerede er testet for i validateText.test.js?