import { Header } from './components/header/header.jsx';
import { CarruselHeader } from './components/header/carruselHeader.jsx';
import { GridCategoria } from './components/body/gridCategoria.jsx';
import { TituloCat } from './components/body/tituloCat.jsx';
import './assets/styles/App.css';

function App() {

  return (
    <>
      <section>
        <Header />
        <CarruselHeader />
      </section>
      <section>
        <TituloCat />
        <GridCategoria />
      </section>
    </>
  )
}

export default App
