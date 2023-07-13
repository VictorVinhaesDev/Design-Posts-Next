"use client"
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {FcGoogle} from "react-icons/fc"

const Login = () => {

  
  const session = useSession()
  const router = useRouter()

  if (session.status === 'loading') {
    return (
      <p>Loading...</p>
    )
  }
  //Assim que se logar ele irá te levar para o dashboard
  if (session.status === 'authenticated') {
    router?.push("/dashboard")
  }
 
  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    signIn("credentials", { email, password })
  };
console.log("params")
  return (
    <div className='flex flex-col items-center gap-5'>
      <form className="w-[300px] flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <input type="email" placeholder="email" className="p-5 bg-transparent border-2 border-[#bbb]  font-bold text-sm" required />
        <input type="password" placeholder="password" className="p-5 bg-transparent border-2 border-[#bbb]  font-bold text-sm" required />
        <button type="submit" className="rounded-md font-bold text-white w-[300px] p-5 cursor-pointer bg-green1 ">Login</button>
      </form>
      <div className='flex items-center justify-center hover:bg-blue-400 ease-in duration-200 cursor-pointer rounded p-3  border-white border '>
        <FcGoogle className='mr-2' />
      <button

        onClick={() => signIn("google")}
      >
        Login with Google
      </button>
     
      </div>
      <span>OR</span>
      <Link className="hover:text-lg " href="/dashboard/register">
        Create new account
      </Link>
    </div>

  )
}

export default Login