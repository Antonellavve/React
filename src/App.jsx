import Navbar from "./components/Navbar/Navbar"
import Layout from "./components/Layout/Layout"
import Hero from "./components/Hero/Hero"
import Categories from "./components/Categories/Categories"
import Footer from "./components/Footer/Footer"



function App() {
  return (
    <>
      <Navbar/>
      <Layout>
        <Hero/>
        <Categories/>
      </Layout>
      <Footer/>
    </>
  )
}

export default App
