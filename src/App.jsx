import { Header } from './components/general/header/header.jsx';
import { CarruselHeader } from './components/general/header/carruselHeader.jsx';
import { GridCategoria } from './components/general/body/gridCategoria.jsx';
import { TituloCat } from './components/general/body/tituloCat.jsx';
import { Footer } from './components/general/footer/Footer.jsx';
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
      <Footer />
    </>
  )
}

export default App
