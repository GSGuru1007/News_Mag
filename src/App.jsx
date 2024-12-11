import { useState } from "react"
import { Navbar } from "./components/Navbar.jsx"
import { NewsBord } from "./components/NewsBord.jsx"
import { Newsitem } from "./components/Newsitem.jsx"

export const App = () => {
  const [category ,setCategory] = useState("general");
  return (
    <div  style={{ height: '100vh'  , padding:'15px'}}>
      <Navbar setCategory={setCategory}/>
      <NewsBord category={category}/>
    </div>
  )
}


export default App;