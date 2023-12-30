import { validateText } from "../../apiRouter.js";

const validateTextValidTestData = [
    {"input": "Goeie dag, hoe gaan dit met jou vandag?", "expectedOutput": "Goeie dag, hoe gaan dit met jou vandag?"},
    {"input": "Maakye. Wo ho te sɛn?", "expectedOutput": "Maakye. Wo ho te sɛn?"},
    {"input": "ሰላም። እንዴት ነህ?", "expectedOutput": "ሰላም። እንዴት ነህ?"},
    {"input": "مرحبا. كيف حالك اليوم؟", "expectedOutput": "مرحبا. كيف حالك اليوم؟"},
    {"input": "নমস্কার। আপনি কেমন আছেন?", "expectedOutput": "নমস্কার। আপনি কেমন আছেন?"},
    {"input": "Kamisaraki. Imaynallam kachkanki?", "expectedOutput": "Kamisaraki. Imaynallam kachkanki?"},
    {"input": "Salam. Necəsən?", "expectedOutput": "Salam. Necəsən?"},
    {"input": "Добры дзень. Як у вас справы?", "expectedOutput": "Добры дзень. Як у вас справы?"},
    {"input": "Здравей. Как си днес?", "expectedOutput": "Здравей. Как си днес?"},
    {"input": "I ni ce. I be ka kene?", "expectedOutput": "I ni ce. I be ka kene?"},
    {"input": "হ্যালো। আপনি কেমন আছেন?", "expectedOutput": "হ্যালো। আপনি কেমন আছেন?"},
    {"input": "Zdravo. Kako si danas?", "expectedOutput": "Zdravo. Kako si danas?"},
    {"input": "Hola. Com estàs avui?", "expectedOutput": "Hola. Com estàs avui?"},
    {"input": "Kumusta. Kamusta ka na?", "expectedOutput": "Kumusta. Kamusta ka na?"},
    {"input": "سڵاو. چۆنیت؟", "expectedOutput": "سڵاو. چۆنیت؟"},
    {"input": "Salute. Cumu va oghje?", "expectedOutput": "Salute. Cumu va oghje?"},
    {"input": "Ahoj. Jak se dnes máš?", "expectedOutput": "Ahoj. Jak se dnes máš?"},
    {"input": "Helo. Sut wyt ti heddiw?", "expectedOutput": "Helo. Sut wyt ti heddiw?"},
    {"input": "Hej. Hvordan har du det i dag?", "expectedOutput": "Hej. Hvordan har du det i dag?"},
    {"input": "Gør det ondt idag?", "expectedOutput": "Gør det ondt idag?"},
    {"input": "Hallo. Wie geht es dir heute?", "expectedOutput": "Hallo. Wie geht es dir heute?"},
    {"input": "ਸਤ ਸ੍ਰੀ ਅਕਾਲ। ਤੁਹਾਡਾ ਕੀ ਹਾਲ ਹੈ?", "expectedOutput": "ਸਤ ਸ੍ਰੀ ਅਕਾਲ। ਤੁਹਾਡਾ ਕੀ ਹਾਲ ਹੈ?"},
    {"input": "ހެލޯ. ތިބާ ކިހިނެއްތަ?", "expectedOutput": "ހެލޯ. ތިބާ ކިހިނެއްތަ?"},
    {"input": "Mia woe. Wo se wo ho te sɛn?", "expectedOutput": "Mia woe. Wo se wo ho te sɛn?"},
    {"input": "Γειά σου. Πώς είσαι σήμερα?", "expectedOutput": "Γειά σου. Πώς είσαι σήμερα?"},
    {"input": "Hello. How are you doing today?", "expectedOutput": "Hello. How are you doing today?"},
    {"input": "Saluton. Kiel vi fartas hodiaŭ?", "expectedOutput": "Saluton. Kiel vi fartas hodiaŭ?"},
    {"input": "Hola. ¿Cómo estás hoy?", "expectedOutput": "Hola. ¿Cómo estás hoy?"},
    {"input": "Tere. Kuidas läheb sul täna?", "expectedOutput": "Tere. Kuidas läheb sul täna?"},
    {"input": "Kaixo. Zer moduz zaude gaur?", "expectedOutput": "Kaixo. Zer moduz zaude gaur?"},
    {"input": "سلام. حال شما چطور است؟", "expectedOutput": "سلام. حال شما چطور است؟"},
    {"input": "Hei. Miten voit tänään?", "expectedOutput": "Hei. Miten voit tänään?"},
    {"input": "Bonjour. Comment vas-tu aujourd'hui?", "expectedOutput": "Bonjour. Comment vas-tu aujourd'hui?"},
    {"input": "Goeie dei. Hoe giet it mei dy hjoed?", "expectedOutput": "Goeie dei. Hoe giet it mei dy hjoed?"},
    {"input": "Dia dhuit. Conas atá tú inniu?", "expectedOutput": "Dia dhuit. Conas atá tú inniu?"},
    {"input": "Halò. Ciamar a tha thu an-diugh?", "expectedOutput": "Halò. Ciamar a tha thu an-diugh?"},
    {"input": "Ola. Como estás hoxe?", "expectedOutput": "Ola. Como estás hoxe?"},
    {"input": "Mba'éichapa. Mba'éichapa reiko ko’êrô?", "expectedOutput": "Mba'éichapa. Mba'éichapa reiko ko’êrô?"},
    {"input": "नमस्कार. तुम्ही कसे आहात?", "expectedOutput": "नमस्कार. तुम्ही कसे आहात?"},
    {"input": "કેમ છો. તમે આજે કેમ છો9?", "expectedOutput": "કેમ છો. તમે આજે કેમ છો9?"},
    {"input": "Sannu. Yaya kake/yake yau?", "expectedOutput": "Sannu. Yaya kake/yake yau?"},
    {"input": "Aloha. Pehea ‘oe i kēia lā?", "expectedOutput": "Aloha. Pehea ‘oe i kēia lā?"},
    {"input": "שלום. מה שלומך היום?", "expectedOutput": "שלום. מה שלומך היום?"},
    {"input": "नमस्ते। आप कैसे हैं?", "expectedOutput": "नमस्ते। आप कैसे हैं?"},
    {"input": "Nyob zoo. Koj nyob li cas hnub no?", "expectedOutput": "Nyob zoo. Koj nyob li cas hnub no?"},
    {"input": "Bok. Kako ste danas?", "expectedOutput": "Bok. Kako ste danas?"},
    {"input": "Bonjou. Koman ou ye jodi a?", "expectedOutput": "Bonjou. Koman ou ye jodi a?"},
    {"input": "Szia. Hogy vagy ma?", "expectedOutput": "Szia. Hogy vagy ma?"},
    {"input": "Բարեւ Ձեզ. Ինչպես եք այսօր?", "expectedOutput": "Բարեւ Ձեզ. Ինչպես եք այսօր?"},
    {"input": "Halo. Bagaimana kabarmu hari ini?", "expectedOutput": "Halo. Bagaimana kabarmu hari ini?"},
    {"input": "Ndewo. Kedu ka ị mere taa?", "expectedOutput": "Ndewo. Kedu ka ị mere taa?"},
    {"input": "Kablaaw. Kasano ka nga agdama?", "expectedOutput": "Kablaaw. Kasano ka nga agdama?"},
    {"input": "Halló. Hvernig hefur þú það í dag?", "expectedOutput": "Halló. Hvernig hefur þú það í dag?"},
    {"input": "Ciao. Come stai oggi?", "expectedOutput": "Ciao. Come stai oggi?"},
    {"input": "こんにちは. お元気ですか？", "expectedOutput": "こんにちは. お元気ですか？"},
    {"input": "안녕하세요. 오늘 기분이 어떠세요?", "expectedOutput": "안녕하세요. 오늘 기분이 어떠세요?"},
    {"input": "Sveiki. Kaip sekasi šiandien?", "expectedOutput": "Sveiki. Kaip sekasi šiandien?"},
    {"input": "ສະບາຍດີ. ທ່ານແມ່ນແນ່ນອນໃດ?", "expectedOutput": "ສະບາຍດີ. ທ່ານແມ່ນແນ່ນອນໃດ?"},
    {"input": "Labas. Kaip sekasi šiandien?", "expectedOutput": "Labas. Kaip sekasi šiandien?"},
    {"input": "Sveiks. Kā jums šodien klājas?", "expectedOutput": "Sveiks. Kā jums šodien klājas?"},
    {"input": "Sveikas. Kaip sekasi šiandien?", "expectedOutput": "Sveikas. Kaip sekasi šiandien?"},
    {"input": "Hello. How are you doing today?", "expectedOutput": "Hello. How are you doing today?"},
    {"input": "ഹലോ. ഇന്ന് നിങ്ങൾ എങ്ങനെ ആണ്?", "expectedOutput": "ഹലോ. ഇന്ന് നിങ്ങൾ എങ്ങനെ ആണ്?"},
    {"input": "Hai. Apa khabar anda hari ini?", "expectedOutput": "Hai. Apa khabar anda hari ini?"},
    {"input": "Saluton. Kiel vi fartas hodiaŭ?", "expectedOutput": "Saluton. Kiel vi fartas hodiaŭ?"},
    {"input": "नमस्ते। आप कैसे हैं?", "expectedOutput": "नमस्ते। आप कैसे हैं?"},
    {"input": "Hallo. Hoe gaat het vandaag met jou?", "expectedOutput": "Hallo. Hoe gaat het vandaag met jou?"},
    {"input": "Hallo. Hoe gaat het vandaag met jou?", "expectedOutput": "Hallo. Hoe gaat het vandaag met jou?"},
    {"input": "Helo. Sut wyt ti heddiw?", "expectedOutput": "Helo. Sut wyt ti heddiw?"},
    {"input": "Hei. Hvordan har du det i dag?", "expectedOutput": "Hei. Hvordan har du det i dag?"},
    {"input": "Halo. Apa kabar anda hari ini?", "expectedOutput": "Halo. Apa kabar anda hari ini?"},
    {"input": "ສະບາຍດີ. ທ່ານແມ່ນແນ່ນອນໃດ?", "expectedOutput": "ສະບາຍດີ. ທ່ານແມ່ນແນ່ນອນໃດ?"},
]

const validateTextInvalidTestData = [
    {"input": 213, "expectedOutput": "Invalid input type. Must be a text string"},
    {"input": 2.13, "expectedOutput": "Invalid input type. Must be a text string"},
    {"input": {"test": "test"}, "expectedOutput": "Invalid input type. Must be a text string"},
    {"input": ["test", "test"], "expectedOutput": "Invalid input type. Must be a text string"},
    {"input": "A", "expectedOutput": "Must consist of 2 or more characters"},
    {"input": "I", "expectedOutput": "Must consist of 2 or more characters"},
    {"input": "1", "expectedOutput": "Must consist of 2 or more characters"},
    {"input": ":", "expectedOutput": "Must consist of 2 or more characters"},
    {"input": "213", "expectedOutput": "Translation of only numeric values are not allowed"},
    {"input": "2.13", "expectedOutput": "Translation of only numeric values are not allowed"},
    {"input": "1000", "expectedOutput": "Translation of only numeric values are not allowed"},
    {"input": "1,000,000", "expectedOutput": "Translation of special characters are not allowed"},
    {"input": "😀", "expectedOutput": "Translation of emojis are not allowed"},
    {"input": "😁", "expectedOutput": "Translation of emojis are not allowed"},
    {"input": "😂", "expectedOutput": "Translation of emojis are not allowed"},
    {"input": "😃", "expectedOutput": "Translation of emojis are not allowed"},
    {"input": "❃❃❃❃❃❃", "expectedOutput": "Translation of emojis are not allowed"},
    {"input": "Hello こんにちは", "expectedOutput": "Translation of special characters are not allowed"},
    {"input": "200￥", "expectedOutput": "Translation of special characters are not allowed"},
    {"input": "Spaß", "expectedOutput": "Translation of special characters are not allowed"},
]

describe.each(validateTextValidTestData)("Should validate everything correct", (test) => {
    it("validate", async () => {
        const result = await validateText(test.input);
        expect(result).toEqual(test.expectedOutput);
    });
});

describe.each(validateTextInvalidTestData)("Should throw an error", (test) => {
    it("Should throw an specifik error depending on what is tested", async () => {
        try {
            await validateText(test.input);
        } catch (error) {
            expect(error.message).toEqual(test.expectedOutput);
        }
    });
});
