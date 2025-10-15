import { Header } from './components/header/header.jsx';
import { CarruselHeader } from './components/header/carruselHeader.jsx';
import { Categorias } from './components/body/categorias.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {

  return (
    <>
      <section>
        <Header />
        <CarruselHeader />
      </section>
      <section>
        <Categorias />
      </section>
    </>
  )
}

export default App
