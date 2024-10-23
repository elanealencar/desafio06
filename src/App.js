import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import Habilities from "./components/Habilities";
import Header from "./components/Header";
import InitialSection from "./components/InitialSection";
import Projects from "./components/Projects";
import Services from "./components/Services";

const App = () => {
	return (
	<div className="App">
		<Header />
		<InitialSection />
		<AboutSection />
		<Projects />
		<Services />
		<Habilities />
		<Footer />
	</div>
	);
	}
export default App;



