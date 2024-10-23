import './AboutSection.css';
import smile from '../images/smile.svg'
import mail from '../images/mail.svg'
import instagram from '../images/instagram.svg'
import phone from '../images/phone.svg'

const AboutSection = () => {
    return (
        <div id="sobreMim" className="aboutMeSection">
            <h1>Sobre mim</h1>
            <p>Meu nome é Elane Alencar, sou desenvolvedora de software. Atualmente atuo como freelancer como Frontend Web e Mobile. Desenvolvo interfaces modernas e de alta qualidade, concentradas em performance, animações, responsividade e SEO.</p>
            <div className="aboutContact">
                <div className="aboutColumn">
                    <div className="icon">
                           <img src={smile} alt='smile'/>
                    </div>
                    <div className='aboutTitle'>Nome</div>
                    <div className='aboutContent'>Elane Alencar</div>
                </div>
                <div className="aboutColumn">
                    <div className="icon">
                           <img src={mail} alt='mail'/>
                    </div>
                    <div className='aboutTitle'>E-mail</div>
                    <div className='aboutContent'>elanealencar@gmail.com</div>
                </div>
                <div className="aboutColumn">
                    <div className="icon">
                           <img src={instagram} alt='smile'/>
                    </div>
                    <div className='aboutTitle'>Instagram</div>
                    <div className='aboutContent'>@@@@@@</div>
                </div>
                <div className="aboutColumn">
                    <div className="icon">
                           <img src={phone} alt='smile'/>
                    </div>
                    <div className='aboutTitle'>Telefone</div>
                    <div className='aboutContent'>(71)99999-9999</div>
                </div>       
            </div>
        </div>
    );
  };
  
  export default AboutSection;