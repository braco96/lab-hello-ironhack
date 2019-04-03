/*
  Archivo principal de la aplicación.
  Importa React y ReactDOM para renderizar la landing page.
  También importamos los estilos.
*/
import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Estilos generales de la página

// Componente funcional que representa la landing page completa
const App = () => (
  <div>
    {/* Barra de navegación con el logo y el icono del menú */}
    <nav className="nav">
      <img src="images/ironhack-logo.svg" alt="logo Ironhack" />
      <img src="images/menu-top.svg" alt="icono menú" />
    </nav>

    {/* Sección principal con título, descripción y botón */}
    <header className="hero">
      <h1>Say hello to ReactJS</h1>
      <p>
        You will learn how to use the most popular frontend library, and
        become a super Ninja developer.
      </p>
      <button>Awesome!</button>
      {/* Imagen decorativa del logo de React */}
      <img className="react-logo" src="images/react-logo.svg" alt="React logo" />
    </header>

    {/* Sección de características */}
    <section className="features">
      <div>
        <img src="images/icon1.png" alt="Declarative" />
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
      </div>
      <div>
        <img src="images/icon2.png" alt="Components" />
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div>
        <img src="images/icon3.png" alt="Single-Way" />
        <h2>Single-Way</h2>
        <p>A set of immutable values are passed to the components.</p>
      </div>
      <div>
        <img src="images/icon4.png" alt="JSX" />
        <h2>JSX</h2>
        <p>Statically-typed designed to run on modern browsers.</p>
      </div>
    </section>
  </div>
);

// Inyectamos el componente principal dentro del div con id root
ReactDOM.render(<App />, document.getElementById("root"));

// Permitimos recarga en caliente si está disponible (webpack dev server)
if (module.hot) {
  module.hot.accept();
}
