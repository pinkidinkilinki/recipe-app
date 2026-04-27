"use client"
import { User } from "../app/types"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function Navbar() {
    const router = useRouter()
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        function loadUser() {
            const storedUser = localStorage.getItem("user")
            if (storedUser) {
                setUser(JSON.parse(storedUser))
            } else {
                setUser(null)
            }
        }

        // initial load
        loadUser()

        //  listen for login/logout changes
        window.addEventListener("userChanged", loadUser)

        return () => {
            window.removeEventListener("userChanged", loadUser)
        }
    }, [])

    function logout() {
        localStorage.removeItem("user")
        setUser(null)
        router.push("/login")
    }
    return (
        <nav style={{ display: "flex", gap: "10px", marginBottom: "20px", alignItems: "center" }}>
            <Link href="/">Home</Link>
            <Link href="/recipes">Recipes</Link>

            {!user && (
                <>
                    <Link href="/login">Login</Link>
                    <Link href="/register">Register</Link>
                </>
            )}

            {user && (
                <button onClick={logout}>
                    Logout
                </button>
            )}

            <p style={{ marginLeft: "auto", color: user ? "green" : "red" }}>
                {user ? `Welcome, ${user.username}` : "Please log in"}
            </p>
        </nav>
    )
}