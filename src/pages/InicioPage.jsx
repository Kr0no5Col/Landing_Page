import { MyCard } from "../components/MyCard";
import { proyectos } from "../database/proyectos";

export const InicioPage = () => {
  return (
    <>
      <div id="Inicio">
        <div id="InicioContainer">
          {/* <img class="fondo1" src="./Images/Backini.jpg" alt="rounded-2xl mx-auto mb-4 shadow-2xl" /> */}
          <img id="ImagenAn" src="./Images/Andres.png" alt="auto" />
          <h1> Andres Espitia</h1>
          <h3>ICT Support Engineer - Web Developer</h3>
        </div>
      </div>
    </>
  );
};
