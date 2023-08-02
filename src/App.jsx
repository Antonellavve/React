import Navbar from "./components/Navbar/Navbar"
import Layout from "./components/Layout/Layout"
import Hero from "./components/Hero/Hero"
import Categories from "./components/Categories/Categories"
import Footer from "./components/Footer/Footer"
import Cards from "./components/Cards/Cards"



function App() {
  return (
    <>
      <Navbar/>
      <Layout>
        <Hero/>
        <Categories/>
        <Cards/>
      </Layout>
      <Footer/>
    </>
  )
}

export default App
