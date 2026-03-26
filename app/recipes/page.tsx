"use client"

import { useState, useEffect } from "react"

type Recipe = {
  id: number
  title: string
  ingredients: string
}

export default function RecipesPage() {

  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    fetch("http://localhost:3001/recipes")
      .then(res => res.json())
      .then(data => setRecipes(data))
  }, [])

  return (
    <div className="p-6">

      <h1 className="text-2xl mb-4">Recipe List</h1>

      {recipes.map(recipe => (
        <div key={recipe.id} className="border p-4 mb-3">

          <h2 className="text-lg font-bold">
            {recipe.title}
          </h2>

          <p>{recipe.ingredients}</p>

        </div>
      ))}

    </div>
  )
}