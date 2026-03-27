import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Resume from './sections/Resume';
import About from './sections/About';
import Mission from './sections/Mission';
import Daily from './sections/Daily';
import Thinking from './sections/Thinking';
import NextSteps from './sections/NextSteps';
import SocialLinks from './sections/SocialLinks';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <Resume />
        <section id="blog">
          <About />
          <Mission />
          <Daily />
          <Thinking />
          <NextSteps />
        </section>
        <SocialLinks />
      </main>
    </div>
  );
}

export default App;
