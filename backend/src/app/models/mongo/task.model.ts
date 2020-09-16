import { model, Schema } from 'mongoose';

export const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

export const Task = model('task', taskSchema);