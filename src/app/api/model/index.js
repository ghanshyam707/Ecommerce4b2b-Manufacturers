import userModel from './userModel'
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://gnsyms:YAz9vmHz560gcclK@cluster0.f1lp78c.mongodb.net/manufacturers?retryWrites=true&w=majority');

export const models = {
    userModel
}
