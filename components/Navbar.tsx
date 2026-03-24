import Link from "next/link"

export default function Navbar() {
  return (
    <nav style={{display:"flex", gap:"20px"}}>
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </nav>
  )
}