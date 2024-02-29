const supertest = require('supertest');
const app = require('../../app');
const shell = require('shelljs');
const { Users } = require('../../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;
describe("Auth Controller Testing", () => {
    beforeEach(() => {
        shell.exec('npx sequelize-cli db:migrate');
    })

    afterEach(() => {
        shell.exec('npx sequelize-cli db:migrate:undo:all');
    })

    it("should insert user data into database if registration is success", async () => {
        await supertest(app).post('/api/users').send({
            name: 'Yogi',
            email: 'yog@yogi.com',
            password: 'yogi123',
        })
            .expect(201)
            .then((res) => {
                expect(res.body.user.name).toEqual('Yogi')
            })
    })

    it("should return 400 if registration is failed", async () => {
        const hash = bcrypt.hashSync('yoga123', saltRounds);
        await supertest(app).post('/api/users').send({
            name: 'Yoga',
            email: '',
            password: hash,
        })
            .expect(400)
    })

    it("should return 422 if registration is failed", async () => {
        await Users.create({
            name: 'Yoga',
            email: 'yogi@yogi',
            password: 'yoga123',
        })
        await supertest(app).post('/api/users').send({
            name: 'Yoga',
            email: 'yogi@yogi',
            password: 'yoga123',
        })
            .expect(422)
            .then((res) => {
                expect(res.body.error).toEqual('User already exists')
            })
    })


    it("should return 200 if auth is success", async () => {
        const hash = bcrypt.hashSync('yoga123', saltRounds);
        await Users.create({
            name: 'Yoga',
            email: 'yogi@yogi',
            password: hash,
        })
        await supertest(app).post('/auth/').send({
            email: 'yogi@yogi',
            password: 'yoga123',
        })
            .expect(200)
    })

    it("should return 400 if auth is failed", async () => {
        const hash = bcrypt.hashSync('yoga123', saltRounds);
        await Users.create({
            name: 'Yoga',
            email: 'yogi@yogi',
            password: hash,
        })
        await supertest(app).post('/auth/').send({
            email: 'yogi@yogi',
            password: 'yoga1231',
        })
            .expect(400)
    })
})