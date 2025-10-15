import { Header } from './components/header/header.jsx';
import { CarruselHeader } from './components/header/carruselHeader.jsx';
import { Categorias } from './components/body/categorias.jsx';
import './assets/styles/App.css';

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
