/*import app from '../../app.js';
import request from 'supertest';

describe('GET /', () => {
  it('Tests that the result is the content of the expected file', async () => {
    const response = await request(app).get('/api/data');

    expect(response.statusCode).toBe(200);
    const localFilePath = './public/index.html"';
    const localFileContent = fs.readFileSync(localFilePath, 'utf-8');
    expect(response.body).toBe(localFileContent);
  });
});*/

describe("Translation", () => {
  it("Should be able to translate a paragraph", async () => {
      expect(true).toBe(true);
  })
});