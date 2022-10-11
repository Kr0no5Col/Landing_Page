import Navbar from "./components/Navbar";
import { InicioPage } from "./pages/InicioPage";
import { PerfilPage } from "./pages/PerfilPage";
import { ExperienciePage } from "./pages/ExperiencePage"; 
import { PortafolioPage } from "./pages/ProjectsPage"; 
import { ContactoPage } from "./pages/ContactoPage";
import {StudiesPage} from "./pages/StudiesPage"




function App() {
  return (
    <>
      <Navbar />
      <section  id="inicio">
        <InicioPage />
      </section>
      <section id="perfil">
        <PerfilPage />
      </section>
      <section id="estudios">
        <StudiesPage />
      </section>
      <section id="experiencia">
        <ExperienciePage />
      </section>
      <section id="portafolio">
        <PortafolioPage />
      </section>
      <section id="contacto">
        <ContactoPage />
      </section>
    </>
  );
}

export default App;
