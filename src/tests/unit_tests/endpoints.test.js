import request from 'supertest';
import express from 'express';
import router from '../../apiRouter';
const app = express();

app.use(express.json());
app.use("/", router);

describe("GET /translate", () => {
    it('should return translated data', async () => {
        const requestBody = {
            text: 'Hello',
            source: 'en',
            target: 'es',
        };
    
        const response = await request(app)
            .post('/translate')
            .send(requestBody)
            .expect(200);
    
        expect(response.body.data.translations[0].translatedText).toBe("Hola");
    });

    test('should handle errors with invalid request body', async () => {
        const requestBody = {/** empty for invalid */};
    
        const response = await request(app)
            .post('/translate')
            .send(requestBody)
            .expect(500);
    
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('Source and target language cannot be the same'); 
        });
});

describe("GET /detect", () => {
    it('should return detected data', async () => {
        const requestBody = {
            text: 'Hello',
        };
    
        const response = await request(app)
            .post('/detect')
            .send(requestBody)
            .expect(200);
    
        expect(response.body.data.detections[0][0].language).toBe("en");
    });

    it('should handle errors with invalid request body', async () => {
        const requestBody = {/** empty for invalid */};
    
        const response = await request(app)
            .post('/detect')
            .send(requestBody)
            .expect(500);
    
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('Invalid input type. Must be a text string'); 
    });
});

describe('GET /langs', () => {
    it('should return languages', async () => {
        const response = await request(app)
            .get('/langs')
            .expect(200);
    
        expect(response.body.data).toHaveProperty('languages');
        expect(response.body.data.languages.length).toBeGreaterThan(0);    
    });
});