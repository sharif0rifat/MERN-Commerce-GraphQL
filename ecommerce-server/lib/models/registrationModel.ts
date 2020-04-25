import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const RegistrationSchema = new Schema({
    email: {
        type: String
    },
    
})