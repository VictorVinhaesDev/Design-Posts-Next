import mongoose from "mongoose";

const {Schema} = mongoose

    const userSchema = new Schema({
        name: {
            type: String,
            unique: true,
            required: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
    }, {timestamps: true})
    export const  User = mongoose.models.User || mongoose.model('User', userSchema);
    // isso irá criar a collection

    //timestamps para inserir "createdAt" e "updatedAt".
    //O campo "createdAt" é preenchido com a data e hora em que o documento foi inserido pela primeira vez no banco de dados. Já o campo "updatedAt" é atualizado toda vez que o documento é modificado, refletindo a data e hora da última atualização.