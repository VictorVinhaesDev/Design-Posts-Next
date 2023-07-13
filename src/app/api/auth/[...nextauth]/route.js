import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import { User } from "@/models/User";

//lembrando q o cadastro no mongodb fi feito como bcrypt, temos que procurar com o bcrypt denovo comprando as senhas
import bcrypt from "bcryptjs"

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    CredentialsProvider({
      //voce pode escolher o nome que quiser
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        //perceba que sempre temos que connectar no banco de dados e depois passar o schema para procurar em tal local, em baixo pegamos o schema do "User"
        await connect()
        try {
          //esse "credential.email" é oq a pessoa escreve no navegador e compara se tem igual ao do mongodb
          //a const abaixo é para procurar o user no banco de dados
          const user = await User.findOne({ email: credentials.email })

          if (user) {
            //dps caso ache o usuario cdastrado, vamos checar se o a senha é igual para liberar o acesso
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user
              //se tudo ocorrer bem, ele retorna o usuario
            } else {
              throw new Error("Wrong password")
            }
          } else {
            throw new Error("User not found")
          }
        } catch (error) {
          throw new Error(error)
        }
      },
    })
  ],
  //quando colocamos a senha ou email errado, vai para uma página para escolher "logar com google ou tentr logar com credenciais denovo"
  //essa pages e dps o error quando vc clica na credenciais, vai ir para essa página
  pages: {
    error: "/dashboard/login",
  },
})
export { handler as GET, handler as POST }