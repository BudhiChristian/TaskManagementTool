# Task Management Microservice
## Run
The below command will run tests, transpile and run the application on port 3000
```bash
npm start
```
## Document Schema

```typescript 
{
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
}
```

## Endpoints
|Request|Endpoint|Body|Notes|
|---|---|---|---|
|GET| /tasks | None | Retrieve all tasks stored in database|
|POST| /tasks | Single Document | Creates new entry in the database for the given document|
|PUT| /tasks/:id | Single Document | Updates the document given the id pased in the uri and given document|
|DELETE| /tasks/:id | None | Removes document from the data base given the id