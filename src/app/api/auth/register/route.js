import { User } from "@/models/User"
import { NextResponse } from "next/server"
import connect from "@/utils/db"

//instalamos a bcryptjs para encriptar o password enviado ao banco de dados
import bcrypt from "bcryptjs"

export const POST = async (req) => {

    //como estamos enviando algo do site para o banco de dados, usamos o req(reqsição par ao banco de dados)
    const { name, email, password } = await req.json()

    await connect()

    //assim encriptamos o password
    //o password que vai para o banco de dados fica encriptado, vc n consegue ver a senha real da pessoa pelo banco de dados.
    const encryptedPassword = await bcrypt.hash(password, 5)

    //estamos criando o schema do user do mongo db baseado no que a pessoa escreveu no formulário
    const newUser = new User({
        name,
        email,
        password: encryptedPassword,
    })
    try {
        //enviando para o mongodb o user
        await newUser.save()
        return new NextResponse("User created successfully", {
            status: 201,
        })

    } catch (error) {
        return new NextResponse(error.message, {
            status: 500
        })
    }
}