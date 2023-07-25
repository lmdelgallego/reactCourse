import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

function GifExpertApp() {

  const [categories, setCategories] = useState( [ ] )

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    const isOnCategories = categories.find(category => category.toLowerCase() === newCategory.toLowerCase())
    if (isOnCategories) return;
    setCategories( [newCategory, ...categories] )
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={addCategory}
      />
      {
        categories.map(category => (
          <GifGrid category={category} key={category}/>
        ))
      }

    </>
  )
}

export default GifExpertApp