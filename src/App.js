import logo from './logo.svg';
import './App.css';
import { Header, Faq, Roadmap, Team, Utility, About } from './containers';
import { TextSection, Footer, Navbar } from './components';

function App() {
  return (
    <div className="w-full min-h-screen relative overflow-x-hidden flex flex-col justify-center">
        <Navbar />
        <Header />
        <div className="max-w-6xl mx-auto px-4">
          <About />
          <Utility />
          <Roadmap />
          <Team />
          <Faq />
        </div>
        <Footer />
    </div>
  );
}

export default App;
