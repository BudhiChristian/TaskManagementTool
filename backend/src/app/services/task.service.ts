import { Task } from "../models/mongo/task.model";
import { ServiceResponse } from "../models/service-response.model";

export class TaskService {
    
    static async getFiltered(filter): Promise<ServiceResponse> {
        return new ServiceResponse(500, {message: "Not Impletmented."});
    }

    static async getAll(): Promise<ServiceResponse> {
        try {
            let items = await Task.find();
            return new ServiceResponse(200, items)
        } catch (err) {
            return new ServiceResponse(500, { message: err.message })
        }
    }

    static async create(request): Promise<ServiceResponse> {
        try {
            // Create model for document
            let newDoc = new Task(request)
            // Validate request
            let invalidParts = await newDoc.validateSync()
            if (invalidParts) {
                // Aggregate invalid details
                let response = {
                    message: "Invalid Request",
                    errors: []
                }
                for (const key in invalidParts.errors) {
                    response.errors.push(invalidParts.errors[key].message)
                }
                return new ServiceResponse(400, response)
            }
            // Do save
            let document = await newDoc.save();
            if (!document) {
                return new ServiceResponse(404, { message: 'Document Not Created' })
            }
            return new ServiceResponse(200, document)
        } catch (err) {
            return new ServiceResponse(500, { message: err.message })
        }
    }

    static async update(id, request): Promise<ServiceResponse> {
        try {
            let document = await Task.findByIdAndUpdate(id, request)
            if (!document) {
                return new ServiceResponse(404, { message: 'Document Not Found' })
            }
            return new ServiceResponse(200, document)
        } catch (err) {
            return new ServiceResponse(500, { message: err.message })
        }
    }

    static async delete(id): Promise<ServiceResponse> {
        try {
            let document = await Task.findByIdAndDelete(id)
            if (!document) {
                return new ServiceResponse(404, { message: 'Document Not Found' })
            }
            return new ServiceResponse(200, document)
        } catch (err) {
            return new ServiceResponse(500, { message: err.message })
        }

    }
}