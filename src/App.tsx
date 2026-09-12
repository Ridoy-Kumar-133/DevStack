import { Suspense } from "react"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Nav from "./Components/Nav"
import Technologies from "./Components/Technologies/Technologies"
import type { ICard } from "./Components/Types/Types"

 const CardsFetch = async () : Promise<ICard[]> =>{
      const des = await fetch("/Data.json");
      const data = await des.json();
      return data;
  }

function App() {

  const CardsPromise = CardsFetch();

  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Suspense fallback = { <h2>Loading......</h2>}>
      <Technologies CardsPromise = {CardsPromise}></Technologies>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
