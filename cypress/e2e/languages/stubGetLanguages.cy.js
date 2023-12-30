describe("Retrieve all langauges avaliable", () => {
    it("Should be able to retrieve all languages", () => {
        cy.visit("http://localhost:3000");

        cy.intercept("GET", "/langs", {
            statusCode: 200,
            body: {
                data: {
                  languages: [
                    {
                      language: "af"
                    },
                    {
                      language: "ak"
                    },
                    {
                      language: "am"
                    },
                    {
                      language: "ar"
                    },
                    {
                      language: "as"
                    },
                    {
                      language: "ay"
                    },
                    {
                      language: "az"
                    },
                    {
                      language: "be"
                    },
                    {
                      language: "bg"
                    },
                    {
                      language: "bho"
                    },
                    {
                      language: "bm"
                    },
                    {
                      language: "bn"
                    },
                    {
                      language: "bs"
                    },
                    {
                      language: "ca"
                    },
                    {
                      language: "ceb"
                    },
                    {
                      language: "ckb"
                    },
                    {
                      language: "co"
                    },
                    {
                      language: "cs"
                    },
                    {
                      language: "cy"
                    },
                    {
                      language: "da"
                    },
                    {
                      language: "de"
                    },
                    {
                      language: "doi"
                    },
                    {
                      language: "dv"
                    },
                    {
                      language: "ee"
                    },
                    {
                      language: "el"
                    },
                    {
                      language: "en"
                    },
                    {
                      language: "eo"
                    },
                    {
                      language: "es"
                    },
                    {
                      language: "et"
                    },
                    {
                      language: "eu"
                    },
                    {
                      language: "fa"
                    },
                    {
                      language: "fi"
                    },
                    {
                      language: "fr"
                    },
                    {
                      language: "fy"
                    },
                    {
                      language: "ga"
                    },
                    {
                      language: "gd"
                    },
                    {
                      language: "gl"
                    },
                    {
                      language: "gn"
                    },
                    {
                      language: "gom"
                    },
                    {
                      language: "gu"
                    },
                    {
                      language: "ha"
                    },
                    {
                      language: "haw"
                    },
                    {
                      language: "he"
                    },
                    {
                      language: "hi"
                    },
                    {
                      language: "hmn"
                    },
                    {
                      language: "hr"
                    },
                    {
                      language: "ht"
                    },
                    {
                      language: "hu"
                    },
                    {
                      language: "hy"
                    },
                    {
                      language: "id"
                    },
                    {
                      language: "ig"
                    },
                    {
                      language: "ilo"
                    },
                    {
                      language: "is"
                    },
                    {
                      language: "it"
                    },
                    {
                      language: "iw"
                    },
                    {
                      language: "ja"
                    },
                    {
                      language: "jv"
                    },
                    {
                      language: "jw"
                    },
                    {
                      language: "ka"
                    },
                    {
                      language: "kk"
                    },
                    {
                      language: "km"
                    },
                    {
                      language: "kn"
                    },
                    {
                      language: "ko"
                    },
                    {
                      language: "kri"
                    },
                    {
                      language: "ku"
                    },
                    {
                      language: "ky"
                    },
                    {
                      language: "la"
                    },
                    {
                      language: "lb"
                    },
                    {
                      language: "lg"
                    },
                    {
                      language: "ln"
                    },
                    {
                      language: "lo"
                    },
                    {
                      language: "lt"
                    },
                    {
                      language: "lus"
                    },
                    {
                      language: "lv"
                    },
                    {
                      language: "mai"
                    },
                    {
                      language: "mg"
                    },
                    {
                      language: "mi"
                    },
                    {
                      language: "mk"
                    },
                    {
                      language: "ml"
                    },
                    {
                      language: "mn"
                    },
                    {
                      language: "mni-Mtei"
                    },
                    {
                      language: "mr"
                    },
                    {
                      language: "ms"
                    },
                    {
                      language: "mt"
                    },
                    {
                      language: "my"
                    },
                    {
                      language: "ne"
                    },
                    {
                      language: "nl"
                    },
                    {
                      language: "no"
                    },
                    {
                      language: "nso"
                    },
                    {
                      language: "ny"
                    },
                    {
                      language: "om"
                    },
                    {
                      language: "or"
                    },
                    {
                      language: "pa"
                    },
                    {
                      language: "pl"
                    },
                    {
                      language: "ps"
                    },
                    {
                      language: "pt"
                    },
                    {
                      language: "qu"
                    },
                    {
                      language: "ro"
                    },
                    {
                      language: "ru"
                    },
                    {
                      language: "rw"
                    },
                    {
                      language: "sa"
                    },
                    {
                      language: "sd"
                    },
                    {
                      language: "si"
                    },
                    {
                      language: "sk"
                    },
                    {
                      language: "sl"
                    },
                    {
                      language: "sm"
                    },
                    {
                      language: "sn"
                    },
                    {
                      language: "so"
                    },
                    {
                      language: "sq"
                    },
                    {
                      language: "sr"
                    },
                    {
                      language: "st"
                    },
                    {
                      language: "su"
                    },
                    {
                      language: "sv"
                    },
                    {
                      language: "sw"
                    },
                    {
                      language: "ta"
                    },
                    {
                      language: "te"
                    },
                    {
                      language: "tg"
                    },
                    {
                      language: "th"
                    },
                    {
                      language: "ti"
                    },
                    {
                      language: "tk"
                    },
                    {
                      language: "tl"
                    },
                    {
                      language: "tr"
                    },
                    {
                      language: "ts"
                    },
                    {
                      language: "tt"
                    },
                    {
                      language: "ug"
                    },
                    {
                      language: "uk"
                    },
                    {
                      language: "ur"
                    },
                    {
                      language: "uz"
                    },
                    {
                      language: "vi"
                    },
                    {
                      language: "xh"
                    },
                    {
                      language: "yi"
                    },
                    {
                      language: "yo"
                    },
                    {
                      language: "zh"
                    },
                    {
                      language: "zh-CN"
                    },
                    {
                      language: "zh-TW"
                    },
                    {
                      language: "zu"
                    }
                  ]
                }
            }
        }).as("langsStub")
    
        cy.get("#langsBtn").click();

        cy.wait('@langsStub');

        const expectedLanguages = [
            "af", "ak", "am", "ar", "as", "ay", "az", "be", "bg", "bho", "bm",
            "bn", "bs", "ca", "ceb", "ckb", "co", "cs", "cy", "da", "de", "doi",
            "dv", "ee", "el", "en", "eo", "es", "et", "eu", "fa", "fi", "fr",
            "fy", "ga", "gd", "gl", "gn", "gom", "gu", "ha", "haw", "he", "hi",
            "hmn", "hr", "ht", "hu", "hy", "id", "ig", "ilo", "is", "it", "iw",
            "ja", "jv", "jw", "ka", "kk", "km", "kn", "ko", "kri", "ku", "ky",
            "la", "lb", "lg", "ln", "lo", "lt", "lus", "lv", "mai", "mg", "mi",
            "mk", "ml", "mn", "mni-Mtei", "mr", "ms", "mt", "my", "ne", "nl",
            "no", "nso", "ny", "om", "or", "pa", "pl", "ps", "pt", "qu", "ro",
            "ru", "rw", "sa", "sd", "si", "sk", "sl", "sm", "sn", "so", "sq",
            "sr", "st", "su", "sv", "sw", "ta", "te", "tg", "th", "ti", "tk",
            "tl", "tr", "ts", "tt", "ug", "uk", "ur", "uz", "vi", "xh", "yi",
            "yo", "zh", "zh-CN", "zh-TW", "zu"
        ];
    
        cy.get("#allLanguagesPossible").should("contain", Object.values(expectedLanguages).join(", "));
        
      
    })
})