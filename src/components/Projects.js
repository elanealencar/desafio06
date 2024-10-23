import './Projects.css';

const Projects = () => {
    return (
    <div id="projetos" className="projects">
        <h1>Projetos</h1>
        <div className="projectsContainer">
            <div className="gridItem">
                <div className="projectImage">Imagem Projeto 1</div>
                <h2>Nome do Projeto 1</h2>
                <p>Tecnologias usadas no projeto:</p>
                <div className="buttonContainer">
                    <button className="projectButton">Acessar o projeto</button>
                    <button className="repositoryButton">Acessar repositório</button>
                </div>
            </div>
            
            <div className="gridItem">
                <div className="projectImage">Imagem Projeto 2</div>
                <h2>Nome do Projeto 2</h2>
                <p>Tecnologias usadas no projeto:</p>
                <div className="buttonContainer">
                    <button className="projectButton">Acessar o projeto</button>
                    <button className="repositoryButton">Acessar repositório</button>
                </div>
            </div>
            
            <div className="gridItem">
                <div className="projectImage">Imagem Projeto 3</div>
                <h2>Nome do Projeto 3</h2>
                <p>Tecnologias usadas no projeto:</p>
                <div className="buttonContainer">
                    <button className="projectButton">Acessar o projeto</button>
                    <button className="repositoryButton">Acessar repositório</button>
                </div>
            </div>
            
            <div className="gridItem">
                <div className="projectImage">Imagem Projeto 4</div>
                <h2>Nome do Projeto 4</h2>
                <p>Tecnologias usadas no projeto:</p>
                <div className="buttonContainer">
                    <button className="projectButton">Acessar o projeto</button>
                    <button className="repositoryButton">Acessar repositório</button>
                </div>
            </div>
        </div>
    </div>
    );
  };
  

export default Projects;