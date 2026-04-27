
"use client"

//register
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault()

    const newUser = { username, password }

      await fetch("https://recipe-api-v6km.onrender.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    })

    router.push("/login")
  }

  return (
    <div>
      <h1>Register</h1>

      <form onSubmit={handleRegister}>
        <input
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  )
}