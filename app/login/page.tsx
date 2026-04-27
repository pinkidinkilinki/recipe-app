"use client" 
import { User } from "../types"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()

      const res = await fetch("https://recipe-api-v6km.onrender.com/users")
    const users = await res.json()

    const user = users.find(
      (u: User) => u.username === username && u.password === password
    )

      if (user) {
          localStorage.setItem("user", JSON.stringify(user))

          // Sending a signal so that the Navbar can undate itself
          window.dispatchEvent(new Event("userChanged"))

          router.push("/recipes")
      } else {
          alert("Invalid credentials")
      }
  }

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>

      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

      <button type="submit">Login</button>
    </form>
  )
}