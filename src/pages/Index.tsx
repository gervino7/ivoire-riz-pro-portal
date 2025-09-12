import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Products from '@/components/sections/Products';
import News from '@/components/sections/News';
import FAQ from '@/components/sections/FAQ';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-montserrat">
      <Header />
      <main>
        <Hero />
        <About />
        <Products />
        <News />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
