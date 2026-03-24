"use client"

import { useState } from "react"

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSubmit(e:any){
    e.preventDefault()

    console.log(email,password)
  }

  return (
    <div>

      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

        <input
          placeholder="email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button>Login</button>

      </form>

    </div>
  )
}