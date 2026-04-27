"use client"
import { Recipe } from "../types"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function RecipesPage() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const router = useRouter()

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (!user) router.push("/login")
  }, [])

  useEffect(() => {
      fetch("https://recipe-api-v6km.onrender.com/recipes")
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, [])

  function deleteRecipe(id: string) {
      fetch(`https://recipe-api-v6km.onrender.com/recipes/${id}`, {
      method: "DELETE"
    }).then(() => {
      setRecipes(recipes.filter(r => r.id !== id))
    })
  }

  function addRecipe(e: React.FormEvent) {
    e.preventDefault()

      const newRecipe: Omit<Recipe, "id"> = {
          name,
          description
      }

      fetch("https://recipe-api-v6km.onrender.com/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newRecipe)
    })
      .then(res => res.json())
      .then(data => {
        setRecipes([...recipes, data])
        setName("")
        setDescription("")
      })
  }

  return (
    <div>
     <div style={{ marginBottom: "100px",marginTop: "60px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px",marginTop: "20px" }}>Recipes Submit Form</h1>

      <form onSubmit={addRecipe}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
        <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
        <button>Add</button>
      </form>
      </div>
      <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px",marginTop: "20px" }}>Recipes List</h1>
      <ul>

{recipes.map((r: Recipe) => (
          <li key={r.id}>
  <Link href={`/recipes/${r.id}`} className="recipeCard">

    <div className="recipeName">{r.name}</div>

    <div className="recipeDesc">{r.description}</div>

  </Link>

  <button
    onClick={() => deleteRecipe(r.id)}
    className="deleteBtn"
  >
    Delete
  </button>
</li>
        ))}
      </ul>
      </div>
    </div>
  )
}