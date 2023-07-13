import mongoose from "mongoose";

const {Schema} = mongoose

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
}, {timestamps: true})
export const Post = mongoose.models.Post || mongoose.model('Post', postSchema); // isso irá criar a collection, o nome é post
//timestamps para inserir "createdAt" e "updatedAt".
//O campo "createdAt" é preenchido com a data e hora em que o documento foi inserido pela primeira vez no banco de dados. Já o campo "updatedAt" é atualizado toda vez que o documento é modificado, refletindo a data e hora da última atualização.