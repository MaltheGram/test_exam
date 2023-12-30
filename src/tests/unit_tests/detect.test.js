import { detectLanguage } from "../../apiRouter";


const detectValidTestData = [
    {"input": "Goeie dag, hoe gaan dit met jou vandag?", "expectedLanguage": "af"},
    {"input": "Maakye. Wo ho te sɛn?", "expectedLanguage": "ak"},
    {"input": "ሰላም። እንዴት ነህ?", "expectedLanguage": "am"},
    {"input": "مرحبا. كيف حالك اليوم؟", "expectedLanguage": "ar"},
    {"input": "Salam. Necəsən?", "expectedLanguage": "az"},
    {"input": "Добры дзень. Як у вас справы?", "expectedLanguage": "be"},
    {"input": "Здравей. Как си днес?", "expectedLanguage": "bg"},
    {"input": "I ni ce. I be ka kene?", "expectedLanguage": "bm"},
    {"input": "হ্যালো। আপনি কেমন আছেন?", "expectedLanguage": "bn"},
    {"input": "Hola. Com estàs avui?", "expectedLanguage": "ca"},
    {"input": "سڵاو. چۆنیت؟", "expectedLanguage": "ckb"},
    {"input": "Salute. Cumu va oghje?", "expectedLanguage": "co"},
    {"input": "Ahoj. Jak se dnes máš?", "expectedLanguage": "cs"},
    {"input": "Helo. Sut wyt ti heddiw?", "expectedLanguage": "cy"},
    {"input": "Hej. Hvordan har du det i dag?", "expectedLanguage": "da"},
    {"input": "Gør det ondt idag?", "expectedLanguage": "da"},
    {"input": "Hallo. Wie geht es dir heute?", "expectedLanguage": "de"},
    {"input": "ހެލޯ. ތިބާ ކިހިނެއްތަ?", "expectedLanguage": "dv"},
    {"input": "Mia woe. Wo se wo ho te sɛn?", "expectedLanguage": "ee"},
    {"input": "Γειά σου. Πώς είσαι σήμερα;", "expectedLanguage": "el"},
    {"input": "Hello. How are you doing today?", "expectedLanguage": "en"},
    {"input": "Saluton. Kiel vi fartas hodiaŭ?", "expectedLanguage": "eo"},
    {"input": "Hola. ¿Cómo estás hoy?", "expectedLanguage": "es"},
    {"input": "Tere. Kuidas läheb sul täna?", "expectedLanguage": "et"},
    {"input": "Kaixo. Zer moduz zaude gaur?", "expectedLanguage": "eu"},
    {"input": "سلام. حال شما چطور است؟", "expectedLanguage": "fa"},
    {"input": "Hei. Miten voit tänään?", "expectedLanguage": "fi"},
    {"input": "Bonjour. Comment vas-tu aujourd'hui?", "expectedLanguage": "fr"},
    {"input": "Goeie dei. Hoe giet it mei dy hjoed?", "expectedLanguage": "fy"},
    {"input": "Dia dhuit. Conas atá tú inniu?", "expectedLanguage": "ga"},
    {"input": "Halò. Ciamar a tha thu an-diugh?", "expectedLanguage": "gd"},
    {"input": "Ola. Como estás hoxe?", "expectedLanguage": "gl"},
    {"input": "Mba'éichapa. Mba'éichapa reiko ko’êrô?", "expectedLanguage": "gn"},
    {"input": "કેમ છો. તમે આજે કેમ છો9?", "expectedLanguage": "gu"},
    {"input": "Sannu. Yaya kake/yake yau?", "expectedLanguage": "ha"},
    {"input": "Aloha. Pehea ‘oe i kēia lā?", "expectedLanguage": "haw"},
    {"input": "नमस्ते। आप कैसे हैं?", "expectedLanguage": "hi"},
    {"input": "Nyob zoo. Koj nyob li cas hnub no?", "expectedLanguage": "hmn"},
    {"input": "Bok. Kako ste danas?", "expectedLanguage": "hr"},
    {"input": "Bonjou. Koman ou ye jodi a?", "expectedLanguage": "ht"},
    {"input": "Szia. Hogy vagy ma?", "expectedLanguage": "hu"},
    {"input": "Բարեւ Ձեզ. Ինչպես եք այսօր?", "expectedLanguage": "hy"},
    {"input": "Halo. Bagaimana kabarmu hari ini?", "expectedLanguage": "id"},
    {"input": "Ndewo. Kedu ka ị mere taa?", "expectedLanguage": "ig"},
    {"input": "Kablaaw. Kasano ka nga agdama?", "expectedLanguage": "ilo"},
    {"input": "Halló. Hvernig hefur þú það í dag?", "expectedLanguage": "is"},
    {"input": "Ciao. Come stai oggi?", "expectedLanguage": "it"},
    {"input": "こんにちは. お元気ですか？", "expectedLanguage": "ja"},
    {"input": "Გამარჯობა. როგორ ხარ დღეს?", "expectedLanguage": "ka"},
    {"input": "Сәлеметсіз бе. Бүгін қалайсыз?", "expectedLanguage": "kk"},
    {"input": "ជំរាបសួរ. អ្នកសុខសប្បាយទេថ្ងៃនេះ?", "expectedLanguage": "km"},
    {"input": "ನಮಸ್ಕಾರ. ಇಂದು ನೀವು ಹೇಗಿದ್ದೀರಿ?", "expectedLanguage": "kn"},
    {"input": "안녕하세요. 오늘 어떻게 지내세요?", "expectedLanguage": "ko"},
    {"input": "Slav. Tu çawa yî?", "expectedLanguage": "ku"},
    {"input": "Саламатсызбы. Бүгүн кандайсыз?", "expectedLanguage": "ky"},
    {"input": "Salve. Quomodo hodie te habes?", "expectedLanguage": "la"},
    {"input": "Moien. Wéi geet et Iech haut?", "expectedLanguage": "lb"},
    {"input": "Kiwedde. Oli otya leero?", "expectedLanguage": "lg"},
]

const detectInvalidTestData = [  
    {"input": "👋 🌍", "expectedLanguage": undefined},
    // Dette vil vel virke? Hvorfor ikke?
    // {"input": "Salve. Quomodo hodie te habes?", "expectedLanguage": "la"},
    {"input": "👋 45", "expectedLanguage": undefined},
    {"input": "€%&&/ 45", "expectedLanguage": undefined},
    {"input": "€%&&/ 🌍 45", "expectedLanguage": undefined},
    {"input": "", "expectedLanguage": undefined},
    {"input": " ", "expectedLanguage": undefined},
    {"input": "j", expectedLanguage: undefined},
    {"input": "!@#$%^&*()_+", "expectedLanguage": undefined},
    {"input": undefined, "expectedLanguage": undefined},    
    {"input": null, "expectedLanguage": undefined},
    {"input": 42, "expectedLanguage": undefined},
    {"input": "H", "expectedLanguage": undefined},
    {"input": "42", "expectedLanguage": undefined},
    {"input": "2023", "expectedLanguage": undefined},
    {"input": "3.14159", "expectedLanguage": undefined},
    {"input": "!!!@@@###$$$", "expectedLanguage": undefined}, 
]

describe("Detect language", () => {
    it.each(detectValidTestData)("Should be able to detect the language", async (test) => {
        const data = await detectLanguage(test.input, detectValidTestData);
        const extractedLanguage = data.data.detections[0][0].language;

        await expect(extractedLanguage).toBe(test.expectedLanguage);
    })
});