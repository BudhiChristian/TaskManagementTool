import { Router } from "express";

import { TaskService } from '../services/task.service';

const router = Router()

router.get('/', (req, res) => {
    TaskService.getAll().then(({ statusCode, responseBody }) => {
        res.status(statusCode).json(responseBody);
    })
})

router.post('/', (req, res) => {
    const body = req.body;

    TaskService.create(body).then(({ statusCode, responseBody }) => {
        res.status(statusCode).json(responseBody);
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;

    TaskService.update(id, body).then(({ statusCode, responseBody }) => {
        res.status(statusCode).json(responseBody);
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    TaskService.delete(id).then(({ statusCode, responseBody }) => {
        res.status(statusCode).json(responseBody);
    })
})

module.exports = router