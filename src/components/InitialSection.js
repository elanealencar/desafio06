import './InitialSection.css'; 
import image from '../images/image.svg';

const InitialSection = () => {
    return (
      <section id="inicio" className="aboutSection">
        <div className="aboutContent">
          <div className="leftColumn">
            <p>Olá, eu sou</p>
            <h1>Elane Alencar</h1>
            <p>Desenvolvedora Frontend</p>
            <button className="downloadButton">Baixar Currículo</button>
          </div>
          <div className="rightColumn">
            <img src={image} alt='imagem' />
          </div>
        </div>
      </section>
    );
  };
  
  export default InitialSection;