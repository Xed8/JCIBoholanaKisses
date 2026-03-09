import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Story from '@/components/Story';
import Impact from '@/components/Impact';
import Leadership from '@/components/Leadership';
import Voices from '@/components/Voices';
import Programs from '@/components/Programs';
import Partners from '@/components/Partners';
import CallToAction from '@/components/CallToAction';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Story />
        <Impact />
        <Leadership />
        <Voices />
        <Programs />
        <Partners />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
