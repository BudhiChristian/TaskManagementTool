import mongoose from 'mongoose';
import { TaskService } from './task.service';
import { Task } from '../models/mongo/task.model'

describe('Task Service', () => {
    const doc = {
        title: 'test doc',
        description: 'test document description',
        dueDate: new Date()
    };

    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }, err => {
            if (err) {
                console.error(err);
                process.exit(1);
            }
        });
    });

    afterEach(async () => {
        const collections = mongoose.connection.collections
        for (const key in collections) {
            await collections[key].deleteMany({});
        }
    })

    afterAll(async () => {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
    })

    it('should throw error on invalid document', async () => {
        // Responds with 400 for invalid document
        let doc = {};
        let res = await TaskService.create(doc);
        expect(res.statusCode).toBe(400);
    })

    it('should save valid document as complete false', async () => {
        // Responds with 200 and body is complete
        let res = await TaskService.create(doc);
        expect(res.statusCode).toBe(200);
        expect(res.responseBody.complete).toBe(false);
    })

    it('should get all data', async () => {
        // Start empty
        let res = await TaskService.getAll();
        expect(res.statusCode).toBe(200);
        expect(res.responseBody.length).toBe(0);
        //Create new item and check if get recieves
        await new Task(doc).save()
        res = await TaskService.getAll();
        expect(res.statusCode).toBe(200);
        expect(res.responseBody.length).toBe(1);
    })

    it('should update entry on update', async () => {
        // Create data and save id
        const { _id: id } = await new Task(doc).save()
        // Enter title change
        const newTitle = {
            title: "New Title Name"
        }
        // Update returns old data
        const res = await TaskService.update(id, newTitle)
        expect(res.statusCode).toBe(200)
        expect(res.responseBody.title).toBe(doc.title)
        // But new data exists in database
        const newItem = await Task.findById(id)
        expect(newItem['title']).toBe(newTitle.title)
    })
})