import './Services.css';
import code from '../images/code.svg';
import figma from '../images/figma.svg';
import smartphone from '../images/smartphone.svg';

const Services = () => {
    return (
        <div id="servicos" className="services">
            <h1>Serviços</h1>
            <div className="servicesContent">     

                <div className="servicesItem">
                    <div className="servicesIcon">
                        <img src={code} alt='code'/>
                    </div>
                    <p>Criação de Sites</p>
                </div>

                <div className="servicesItem">
                    <div className="servicesIcon">
                        <img src={figma} alt='figma'/>
                    </div>
                    <p>UI / UX designer</p>
                </div>

                <div className="servicesItem">
                    <div className="servicesIcon">
                        <img src={smartphone} alt='smartphone'/>
                    </div>
                    <p>Sites responsivos</p>
                </div>      

            </div>
        </div>  
    );
};

export default Services;