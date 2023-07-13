"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

const Register = () => {

  const [error, setError] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    //isso aqui n usamos nada do nextauth para fazer o sistema de cadrastro
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 && router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };
  return (
    <div className="flex items-center justify-center flex-col gap-5">
      <form className="w-[300px] flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <input type="text" placeholder="username" className="p-5 bg-transparent border-2 border-[#bbb]  font-bold text-sm" required />
        <input type="email" placeholder="email" className="p-5 bg-transparent border-2 border-[#bbb]  font-bold text-sm" required />
        <input type="password" placeholder="password" className="p-5 bg-transparent border-2 border-[#bbb]  font-bold text-sm" required />
        <button type="submit" className="rounded-md font-bold text-white w-[300px] p-5 cursor-pointer bg-orange-400 ">Register</button>
      </form>
      {error && <h1>Something went Wrong!</h1>}
      <Link href="/dashboard/login">Login with an existing account</Link>
    </div>
  )
}

export default Register