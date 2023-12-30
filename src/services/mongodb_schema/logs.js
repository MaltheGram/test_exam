import mongoose from 'mongoose';
const detectionSchema = new mongoose.Schema({
    input: String,
    language: String,
    isReliable: Boolean,
    confidence: Number
});


const translationSchema = new mongoose.Schema({
    translate_from: String,
    translate_to: String,
    translate_word: String
});

const logSchema = new mongoose.Schema({
    level: {
        type: String,
        required: true,
        enum: ['Detection', 'Translation']
    },
    timestamp: Date,
    data: {
        type: mongoose.Schema.Types.Mixed,
    },
});

const Detection = mongoose.model('Detection', detectionSchema);
const Translation = mongoose.model('Translation', translationSchema);
const Logs = mongoose.model('Logs', logSchema);

export { Detection, Translation, Logs };
