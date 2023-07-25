import { useState } from "react"
import AddCategory from "./components/AddCategory"

function GifExpertApp() {

  const [categories, setCategories] = useState( [ 'One Punch', 'Dragon Ball' ] )

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    const isOnCategories = categories.find(category => category.toLowerCase() === newCategory.toLowerCase())
    if (isOnCategories) return;
    setCategories( [newCategory, ...categories] )
  }

  return (
    <>
      {/* TITLE */}
      <h1>GifExpertApp</h1>
      {/* INPUT */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={addCategory}
      />
      {/* LIST GIF CARDS */}
      <ol>
        { categories.map( category => {
          return (
            <div key={category}>
              <h3>{category}</h3>
              <li>{category}</li>
            </div>
          )
        }) }
      </ol>
    </>
  )
}

export default GifExpertApp