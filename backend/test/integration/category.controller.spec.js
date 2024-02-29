const supertest = require('supertest');
const app = require('../../app');
const shell = require('shelljs');
const { ProductCategory } = require('../../models');
describe("Category Controller Testing", () => {
    beforeEach(() => {
        shell.exec('npx sequelize-cli db:migrate --name 20240207164729-create-product-category.js');
    })

    afterEach(() => {
        shell.exec('npx sequelize-cli db:migrate:undo:all');
    })

    //insert - failed - data empty
    it("should return 400 if category name is empty", async () => {
        await supertest(app)
            .post('/api/categories')
            .send({
                name: '',
            })
            .expect(400)
            .then((res) => {
                // console.log(res.body)
                expect(res.body.message).toEqual('Category name is required')
            })

    })
    //insert
    it("should return 201 if insert category is success", async () => {
        await supertest(app)
            .post('/api/categories')
            .send({
                name: 'Sneakers',
            })
            .expect(201)
            .then((res) => {
                expect(res.body.categoryName).toEqual('Sneakers')
            })

    })
    //insert - failed - category  already exists
    it("should return 400 if category is exist", async () => {
        await ProductCategory.create({
            categoryName: 'Sneakers'
        })

        await supertest(app)
            .post('/api/categories')
            .send({
                name: 'Sneakers',
            })
            .expect(400)
            .then((res) => {
                expect(res.body.message).toEqual('Category already exists')
            })

    })
    //edit - sucess
    it("should return 200 if update is success", async () => {
        await ProductCategory.create({
            categoryName: 'Sneakers'
        })

        await supertest(app).patch('/api/categories/1').send({
            name: 'Sneaker',
        })
            .expect(200)
            .then((res) => {
                expect(res.body.categoryName).toEqual('Sneaker')
            })
    })

    //edit - failed - not found
    it("edit category should return 404 if category id not found", async () => {
        await ProductCategory.create({
            categoryName: 'Sneakers'
        })

        await supertest(app).patch('/api/categories/2').send({
            name: 'Sneaker',
        })
            .expect(404)
            .then((res) => {
                expect(res.body.message).toEqual('Category not found')
            })
    })
    // delete - failed - not found
    it("should return 404 if update is success", async () => {
        await ProductCategory.create({
            categoryName: 'Sneakers'
        })

        await supertest(app).delete('/api/categories/2')
            .expect(404)
            .then((res) => {
                expect(res.body.message).toEqual('Category not found')
            })
    })
    // delete - success
    it("should return 200 if delete is success", async () => {
        await ProductCategory.create({
            categoryName: 'Sneakers'
        })

        await supertest(app).delete('/api/categories/1')
            .expect(200)
            .then((res) => {
                expect(res.body.message).toEqual('Category deleted successfully')
            })
    })
    // list
    it("should get category list", async () => {
        await supertest(app)
            .get('/api/categories')
            .expect(200)

    })
})