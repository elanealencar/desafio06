import './Habilities.css';
import html from '../images/html.svg';
import css from '../images/css.svg';
import javascript from '../images/javascript.svg';
import tailwind from '../images/tailwind.svg';
import react from '../images/react.svg';
import next from '../images/next.svg';

const Habilities = () => {
    return (
        <div id="habilidades" className="habilities">
            <h1>Habilidades</h1>    
            <div className="habilitiesContent">
                <div className="habilitiesIcon">
                    <img src={html} alt='html5'/>
                </div>
                <div className="habilitiesIcon">
                    <img src={css} alt='css3'/>
                </div>
                <div className="habilitiesIcon">
                    <img src={javascript} alt='javascript'/>
                </div>
                <div className="habilitiesIcon">
                    <img src={tailwind} alt='tailwind'/>
                </div>
                <div className="habilitiesIcon">
                    <img src={react} alt='react'/>
                </div>
                <div className="habilitiesIcon">
                    <img src={next} alt='next'/>
                </div>
            </div>
        </div>
    );
};

export default Habilities;