
import mongoose from 'mongoose';
import { environment } from '../../environment/environment';

export function connectDB() {
    const url = environment.runConfigurations.mongoUrl;
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).then(() => {
        console.log('Succesfully Connected to Database')
    }).catch(err => {
        console.error(err);
        process.exit(1);
    })
}