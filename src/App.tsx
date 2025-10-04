import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { HomeSEO } from './components/SEO';

export default function Home() {
    return (
        <HelmetProvider>
            <div className="min-h-screen">
                <HomeSEO />
                <Header />
                <main>
                    <HeroSection />
                    <AboutSection />
                    <ServicesSection />
                    <ContactSection />
                </main>
                <Footer />
            </div>
        </HelmetProvider>
    );
}

