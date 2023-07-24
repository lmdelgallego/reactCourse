import { useState } from "react"
import AddCategory from "./components/AddCategory"

function GifExpertApp() {

  const [categories, setCategories] = useState( [ 'One Punch', 'Dragon Ball' ] )

  const addCategory = ( newCategory ) => {
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
          return <li key={ category }>{ category }</li>
        }) }
      </ol>
    </>
  )
}

export default GifExpertApp