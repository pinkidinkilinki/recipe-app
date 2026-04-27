"use client"
import { Recipe } from "../../types"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"

export default function RecipeDetail() {
  const params = useParams()
  const [recipe, setRecipe] = useState<Recipe | null>(null)

  useEffect(() => {
    if (!params?.id) return

      fetch(`https://recipe-api-v6km.onrender.com/recipes/${params.id}`)
      .then(res => res.json())
      .then(data => setRecipe(data))
  }, [params])

  if (!recipe) return <p>Loading...</p>

  return (
    <div>
      <h1>{recipe.name}</h1>
      <p>{recipe.description}</p>
    </div>
  )
}