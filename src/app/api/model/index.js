import userModel from './userModel'
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://gnsyms:h9b73ieCocWLevpJ@cluster0.hm9vkza.mongodb.net/manufacturers?retryWrites=true&w=majority');

export const models = {
    userModel
}
