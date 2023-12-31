import app from 'app.js'
describe("Test de CRUD products",() =>{
    describe("GET /product", () =>{
        let response;
        beforeEach(async()=>{
            response = await req(app).get('/products').send()
        })
        test('should return a response with status 200 and type json, when I send a Get request', async() => {
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        })
        test("Should return all books",async() => {
            expect(response.body).toBeInstanceOf(Array);
        })
    })
    describe('POST /books',() =>{

        const newBook = {
            title: "test",
            writer: "test",
            book_description: "test",
        }

        const wrongBook = {
            wrong_field:'test'
        }

        test('should return a response with status 200 and type json', async () =>{
            const response = await request(app).post('/books').send(newBook)
            expect(response.status).toBe(200)
            expect(response.headers['content-type']).toContain('json')
        });

        test('should return a message book created successfully', async () =>{
            const response = await request(app).post('/books').send(newBook)
            expect(response.body.message).toContain("The book has been created successfully!")
        })

        test('should return a message insertion error If post wrong book ', async() => {
            const response = await request(app).post('/books').send(wrongBook)
            expect(response.status).toBe(500);
            expect(response.body.message).toContain("Field 'title' doesn't have a default value")
        })
        afterAll(async() =>{
            await BookModel.destroy({where:{ title: "test"}})
        })
    })


    afterAll(()=> {
        server.close();
        db.close()
    })
})