import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Historia from './components/Historia';
import Procedimentos from './components/Procedimentos';
import Equipe from './components/Equipe';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-areia-900">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Historia />
        <Procedimentos />
        <Equipe />
        <Sobre />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
