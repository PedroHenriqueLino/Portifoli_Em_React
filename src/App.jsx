import './App.css'

//Components
import NavBar from './components/navbar/NavBar'
import Inicio from './components/inicio/Inicio'
import Sobre from './components/sobre/Sobre'
import Projetos from './components/projetos/Projetos'
import Contato from './components/contato/Contato'
import Footer from './components/footer/Footer'

function App() {


  return (
    <>
      <div className="home">
        <NavBar />
        <Inicio />
      </div>

      <main>
        <Sobre />
        <Projetos />
        <Contato />
        <Footer />
      </main>
    </>
  )
}

export default App
