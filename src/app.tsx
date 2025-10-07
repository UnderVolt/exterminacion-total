import React, { useState } from 'react';

import Banner from './assets/banner.jpeg'
import Banner2 from './assets/bn2.jpeg'
import Logo from './assets/logo.png'
import WhatsAppIcon from './assets/whatsapp.png'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

// --- I18N Translations ---
const translations = {
    en: {
        header: {
            navLinks: [
                { href: "#services", label: "Services" },
                { href: "#about", label: "About Us" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#contact", label: "Contact" },
            ],
            quoteButton: "Get a Free Quote",
            companyName: "Exterminacion Total",
        },
        hero: {
            title: "Your Trusted Partner for a",
            highlight: "Pest-Free",
            title_end: "Environment",
            subtitle: "Fast, effective, and safe pest control solutions for your home and business. We handle everything from tiny ants to stubborn rodents, ensuring your peace of mind.",
            button1: "Request Inspection",
            button2: "Our Services",
        },
        services: {
            title: "Our Comprehensive Services",
            subtitle: "We offer a wide range of services to tackle any pest problem, big or small.",
            cards: [
                { title: "Insect Control", description: "Comprehensive solutions for ants, cockroaches, bed bugs, and other common household insects." },
                { title: "Rodent Exclusion", description: "Effective removal and prevention strategies for rats, mice, and other rodents to protect your property." },
                { title: "Spider & Scorpion Removal", description: "Specialized treatments to eliminate dangerous pests like spiders and scorpions from your home." },
                { title: "Preventive Treatments", description: "Customized plans to create a protective barrier around your property, stopping pests before they get in." },
            ],
        },
        about: {
            title: "Why Choose Exterminacion Total?",
            subtitle: "With over 35 years of experience, Exterminacion Total is dedicated to providing top-quality, environmentally responsible pest management. Our certified technicians are committed to customer satisfaction and safety.",
            features: [
                { title: "Certified & Insured", description: "Fully licensed and insured for your peace of mind." },
                { title: "Eco-Friendly Options", description: "Safe and effective treatments for your family and pets." },
                { title: "Satisfaction Guaranteed", description: "We're not happy until you're pest-free. We stand by our work." },
            ],
        },
        testimonials: {
            title: "What Our Clients Say",
            subtitle: "We're proud to have earned the trust of homeowners and businesses across the country.",
            reviews: [
                { quote: "Exterminacion Total was a lifesaver! They were professional, punctual, and got rid of our ant problem in just one visit. Highly recommend!", name: "Maria S.", location: "Mexico City" },
                { quote: "The team was fantastic. They explained the whole process and used pet-safe products, which was a huge relief for us. Our home is finally rodent-free.", name: "Carlos R.", location: "Morelos" },
                { quote: "I was impressed with their thoroughness and attention to detail. They didn't just treat the problem; they helped us prevent future issues. Excellent service!", name: "Ana G.", location: "Morelos" },
            ],
        },
        contact: {
            title: "Get Your Free Quote Today!",
            subtitle: "Fill out the form below, and one of our experts will get back to you shortly.",
            placeholders: {
                name: "Your Name",
                email: "Your Email",
                phone: "Your Phone Number",
                pestType: "Type of Pest...",
                message: "Tell us about your pest problem...",
            },
            pestOptions: ["Insects", "Rodents", "Spiders/Scorpions", "Unsure", "Other"],
            button: {
                default: "Request My Free Quote",
                sending: "Submitting...",
            },
            successMessage: "Thank you! Your request has been sent.",
        },
        footer: {
            about: "Your trusted experts in creating safe, pest-free environments for homes and businesses.",
            quickLinks: "Quick Links",
            contactUs: "Contact Us",
            legal: "Legal",
            privacy: "Privacy Policy",
            terms: "Terms of Service",
            copyright: "All Rights Reserved."
        },
        whatsapp: {
            tooltip: "Chat on WhatsApp"
        }
    },
    es: {
        header: {
            navLinks: [
                { href: "#services", label: "Servicios" },
                { href: "#about", label: "Nosotros" },
                { href: "#testimonials", label: "Testimonios" },
                { href: "#contact", label: "Contacto" },
            ],
            quoteButton: "Cotización Gratis",
            companyName: "Exterminacion Total",
        },
        hero: {
            title: "Tu Aliado de Confianza para un Ambiente",
            highlight: "Libre de Plagas",
            title_end: "",
            subtitle: "Soluciones de control de plagas rápidas, efectivas y seguras para tu hogar y negocio. Nos encargamos de todo, desde pequeñas hormigas hasta roedores difíciles, garantizando tu tranquilidad.",
            button1: "Solicitar Inspección",
            button2: "Nuestros Servicios",
        },
        services: {
            title: "Nuestros Servicios Integrales",
            subtitle: "Ofrecemos una amplia gama de servicios para solucionar cualquier problema de plagas, grande o pequeño.",
            cards: [
                { title: "Control de Insectos", description: "Soluciones completas para hormigas, cucarachas, chinches y otros insectos comunes del hogar." },
                { title: "Exclusión de Roedores", description: "Estrategias efectivas de eliminación y prevención de ratas, ratones y otros roedores para proteger tu propiedad." },
                { title: "Eliminación de Arañas y Alacranes", description: "Tratamientos especializados para eliminar plagas peligrosas como arañas y alacranes de tu hogar." },
                { title: "Tratamientos Preventivos", description: "Planes personalizados para crear una barrera protectora alrededor de tu propiedad, deteniendo las plagas antes de que entren." },
            ],
        },
        about: {
            title: "¿Por Qué Elegir Exterminacion Total?",
            subtitle: "Con más de 35 años de experiencia, Exterminacion Total se dedica a proporcionar un manejo de plagas de alta calidad y ambientalmente responsable. Nuestros técnicos certificados están comprometidos con la satisfacción y seguridad del cliente.",
            features: [
                { title: "Certificados y Asegurados", description: "Totalmente licenciados y asegurados para tu tranquilidad." },
                { title: "Opciones Ecológicas", description: "Tratamientos seguros y efectivos para tu familia y mascotas." },
                { title: "Satisfacción Garantizada", description: "No estamos contentos hasta que estés libre de plagas. Respaldamos nuestro trabajo." },
            ],
        },
        testimonials: {
            title: "Lo Que Dicen Nuestros Clientes",
            subtitle: "Estamos orgullosos de habernos ganado la confianza de propietarios de viviendas y empresas en todo el país.",
            reviews: [
                { quote: "¡Exterminacion Total fue un salvavidas! Fueron profesionales, puntuales y eliminaron nuestro problema de hormigas en una sola visita. ¡Muy recomendables!", name: "Maria S.", location: "Ciudad de México" },
                { quote: "El equipo fue fantástico. Explicaron todo el proceso y usaron productos seguros para mascotas, lo cual fue un gran alivio para nosotros. Nuestra casa finalmente está libre de roedores.", name: "Carlos R.", location: "Morelos" },
                { quote: "Me impresionó su minuciosidad y atención al detalle. No solo trataron el problema, sino que nos ayudaron a prevenir futuros inconvenientes. ¡Excelente servicio!", name: "Ana G.", location: "Morelos" },
            ],
        },
        contact: {
            title: "¡Obtén tu Cotización Gratis Hoy!",
            subtitle: "Completa el formulario a continuación y uno de nuestros expertos se pondrá en contacto contigo en breve.",
            placeholders: {
                name: "Tu Nombre",
                email: "Tu Correo Electrónico",
                phone: "Tu Teléfono",
                pestType: "Tipo de Plaga...",
                message: "Cuéntanos sobre tu problema de plagas...",
            },
            pestOptions: ["Insectos", "Roedores", "Arañas/Alacranes", "No estoy seguro", "Otro"],
            button: {
                default: "Solicitar Mi Cotización Gratis",
                sending: "Enviando...",
            },
            successMessage: "¡Gracias! Tu solicitud ha sido enviada.",
        },
        footer: {
            about: "Tus expertos de confianza en la creación de ambientes seguros y libres de plagas para hogares y negocios.",
            quickLinks: "Enlaces Rápidos",
            contactUs: "Contáctanos",
            legal: "Legal",
            privacy: "Política de Privacidad",
            terms: "Términos de Servicio",
            copyright: "Todos los Derechos Reservados."
        },
        whatsapp: {
            tooltip: "Chatea por WhatsApp"
        }
    }
};

// --- TypeScript Type Definitions ---
type TranslationKeys = keyof typeof translations;
type Translation = typeof translations[TranslationKeys];

interface HeaderProps {
    language: TranslationKeys;
    setLanguage: React.Dispatch<React.SetStateAction<TranslationKeys>>;
    t: Translation;
}

interface ComponentProps {
    t: Translation;
}


// --- SVG Icons ---
const MenuIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const ShieldCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
    </svg>
);

const BugIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20c-1.7 0-3.2-.9-4-2.2" />
        <path d="M12 20v-4" />
        <path d="M12 20c1.7 0 3.2-.9 4-2.2" />
        <path d="M17.7 14c.3-.5.7-1 1-1.5" />
        <path d="M6.3 14c-.3-.5-.7-1-1-1.5" />
        <path d="M12 16h.01" />
        <path d="M12 12h.01" />
        <path d="M14.5 9.5a5 5 0 1 0-5 0" />
        <path d="M19 9h-2" />
        <path d="M5 9h2" />
        <path d="M12 4V2" />
    </svg>
);

const RatIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4" />
        <path d="M16.5 13.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z" />
        <path d="M20 18c-1.7 0-3-1.3-3-3s1.3-3 3-3" />
        <path d="M21 21c0-1.7-1.3-3-3-3" />
        <path d="M22 22h-5" />
        <path d="M4 16c0-1.1.9-2 2-2h4" />
    </svg>
);

const SpiderIcon = (props: React.SVGProps<SVGSVGElement>) => (
     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12h.01"/>
        <path d="M12 8v-2"/>
        <path d="M12 18v2"/>
        <path d="m15 15 2 2"/>
        <path d="m7 7 2 2"/>
        <path d="m9 15-2 2"/>
        <path d="m17 7-2 2"/>
        <path d="M9 9a3 3 0 0 1 6 0"/>
        <path d="M12 12a3 3 0 0 1 0 6 3 3 0 0 1 0-6z"/>
     </svg>
);

const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
);

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
);


// --- Components ---

function Header({ language, setLanguage, t }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = t.header.navLinks;

    const LanguageSwitcher = () => (
        <div className="flex items-center space-x-2 ml-4">
            <button onClick={() => setLanguage('en')} className={`px-2 py-1 text-sm font-semibold rounded ${language === 'en' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}>EN</button>
            <button onClick={() => setLanguage('es')} className={`px-2 py-1 text-sm font-semibold rounded ${language === 'es' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'}`}>ES</button>
        </div>
    );

    return (
        <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="flex items-center space-x-2">
                    <img src={Logo} alt="Exterminacion Total Logo" className="w-12 h-12"/>
                    <span className="text-2xl font-bold text-gray-800">{t.header.companyName}</span>
                </a>
                
                <nav className="hidden md:flex items-center">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium px-4">
                            {link.label}
                        </a>
                    ))}
                    <LanguageSwitcher />
                </nav>

                <a href="#contact" className="hidden lg:inline-block bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105">
                    {t.header.quoteButton}
                </a>

                <div className="flex items-center md:hidden">
                    <LanguageSwitcher />
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none ml-3">
                        {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <nav className="md:hidden bg-white px-6 pb-4">
                    <ul className="flex flex-col space-y-4">
                        {navLinks.map(link => (
                             <li key={link.href}>
                                <a 
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block text-gray-600 hover:text-indigo-600 py-2 transition-colors duration-300"
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                     <a href="#contact" onClick={() => setIsMenuOpen(false)} className="mt-4 w-full text-center inline-block bg-indigo-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300">
                        {t.header.quoteButton}
                    </a>
                </nav>
            )}
        </header>
    );
}

function Hero({ t }: ComponentProps) {
    return (
        <section className="bg-gray-50">
            <div className="container mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 lg:pr-12 text-center lg:text-left mb-12 lg:mb-0">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-4">
                        {t.hero.title} <span className="text-indigo-600">{t.hero.highlight}</span> {t.hero.title_end}
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
                        {t.hero.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="#contact" className="bg-indigo-600 text-white font-bold py-4 px-8 rounded-lg shadow-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-105 text-lg">
                            {t.hero.button1}
                        </a>
                        <a href="#services" className="bg-gray-200 text-gray-800 font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-gray-300 transition-all duration-300 transform hover:scale-105 text-lg">
                            {t.hero.button2}
                        </a>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <img 
                        src={Banner}
                        alt="Pest control expert inspecting a home"
                        className="rounded-lg shadow-2xl w-full h-auto object-cover" 
                    />
                </div>
            </div>
        </section>
    );
}

function Services({ t }: ComponentProps) {
    const services = [
        { icon: <BugIcon className="w-12 h-12 text-indigo-600 mb-4" />, ...t.services.cards[0] },
        { icon: <RatIcon className="w-12 h-12 text-indigo-600 mb-4" />, ...t.services.cards[1] },
        { icon: <SpiderIcon className="w-12 h-12 text-indigo-600 mb-4" />, ...t.services.cards[2] },
        { icon: <ShieldCheckIcon className="w-12 h-12 text-indigo-600 mb-4" />, ...t.services.cards[3] },
    ];

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800">{t.services.title}</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t.services.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="flex justify-center">{service.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AboutUs({ t }: ComponentProps) {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                    <img 
                        src={Banner2}
                        alt="Exterminacion Total team"
                        className="rounded-lg shadow-2xl w-full h-auto object-cover"
                    />
                </div>
                <div className="lg:w-1/2">
                    <h2 className="text-4xl font-extrabold text-gray-800 mb-4">{t.about.title}</h2>
                    <p className="text-gray-600 mb-6 text-lg">
                        {t.about.subtitle}
                    </p>
                    <ul className="space-y-4">
                        {t.about.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <ShieldCheckIcon className="w-6 h-6 text-indigo-600 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-bold text-gray-800">{feature.title}</h4>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

function Testimonials({ t }: ComponentProps) {
    const testimonials = t.testimonials.reviews;

    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-800">{t.testimonials.title}</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-lg">
                            <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl mr-4">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ContactForm({ t }: ComponentProps) {
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form submitted', e);
        const name = (e.currentTarget.elements.namedItem('name') as HTMLInputElement).value;
        const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
        const phone = (e.currentTarget.elements.namedItem('phone') as HTMLInputElement).value;
        const pestType = (e.currentTarget.elements.namedItem('pestType') as HTMLSelectElement).value;
        const message = (e.currentTarget.elements.namedItem('message') as HTMLTextAreaElement).value;

        // Open new page
        setStatus('sending');
        const text = encodeURIComponent(`Mi nombre es ${name}, Quisiera una cotizacion porque tengo un problema de ${pestType}, Mi telefono y correo son ${phone} ${email}, Como adicional ${message}, Gracias!`);
        window.open(`https://wa.me/525546487447?text=${text}`, '_blank');
        setStatus('success');
        (e.target as HTMLFormElement).reset();
    };

    return (
        <section id="contact" className="py-20 bg-gray-800 text-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold">{t.contact.title}</h2>
                    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">{t.contact.subtitle}</p>
                </div>
                <div className="max-w-2xl mx-auto bg-white text-gray-800 rounded-lg shadow-2xl p-8">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <input name="name" type="text" placeholder={t.contact.placeholders.name} className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none" required />
                            <input name="email" type="email" placeholder={t.contact.placeholders.email} className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none" required />
                        </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <input name="phone" type="tel" placeholder={t.contact.placeholders.phone} className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none" required />
                            <select name="pestType" className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none" required>
                                <option value="">{t.contact.placeholders.pestType}</option>
                                {t.contact.pestOptions.map(opt => <option key={opt}>{opt}</option>)}
                            </select>
                        </div>
                        <div className="mb-6">
                            <textarea name="message" placeholder={t.contact.placeholders.message} rows={4} className="w-full p-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-red-500 focus:outline-none" required></textarea>
                        </div>
                        <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-red-700 transition-all duration-300 disabled:bg-gray-400" disabled={status === 'sending'}>
                            {status === 'sending' ? t.contact.button.sending : t.contact.button.default}
                        </button>
                        {status === 'success' && <p className="text-center mt-4 text-indigo-600 font-semibold">{t.contact.successMessage}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}

function Footer({ t }: ComponentProps) {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                         <a href="#" className="flex items-center space-x-2 mb-4">
                            <img src={Logo} alt="Exterminacion Total Logo" className="w-7 h-7"/>
                            <span className="text-xl font-bold text-white">{t.header.companyName}</span>
                        </a>
                        <p className="text-gray-400">{t.footer.about}</p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">{t.footer.quickLinks}</h4>
                        <ul className="space-y-2">
                            <li><a href="#services" className="hover:text-red-500 transition-colors">{t.header.navLinks[0].label}</a></li>
                            <li><a href="#about" className="hover:text-red-500 transition-colors">{t.header.navLinks[1].label}</a></li>
                            <li><a href="#contact" className="hover:text-red-500 transition-colors">{t.header.quoteButton}</a></li>
                        </ul>
                    </div>
                     
                    <div>
                         <h4 className="text-lg font-semibold text-white mb-4">{t.footer.contactUs}</h4>
                         <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center">
                                <PhoneIcon className="w-5 h-5 mr-3 text-red-500" />
                                <span>(55) 1625-4854</span>
                            </li>
                            <li className="flex items-center">
                                <MailIcon className="w-5 h-5 mr-3 text-red-500" />
                                <span>exterminaciontotal@gmail.com</span>
                            </li>
                         </ul>
                    </div>

                     <div>
                        <h4 className="text-lg font-semibold text-white mb-4">{t.footer.legal}</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-red-500 transition-colors">{t.footer.privacy}</a></li>
                            <li><a href="#" className="hover:text-red-500 transition-colors">{t.footer.terms}</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} {t.header.companyName}. {t.footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
}

function WhatsAppButton({ t }: ComponentProps) {
    const phoneNumber = "5215516254854";
    const message = "Hola! Estoy interesado en sus servicios de control de plagas.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group fixed bottom-6 right-6 bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-[#128C7E] transition-all duration-300 transform hover:scale-110 z-50"
            aria-label="Chat on WhatsApp"
        >
            <img src={WhatsAppIcon} alt="WhatsApp Icon" className="w-8 h-8" />
             <span className="absolute bottom-1/2 translate-y-1/2 right-full mr-4 px-3 py-2 bg-gray-800 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {t.whatsapp.tooltip}
            </span>
        </a>
    );
}

export default function App() {
    const [language, setLanguage] = useState<TranslationKeys>('es');
    const t = translations[language];

    return (
        <div className="bg-white font-sans">
            <Header language={language} setLanguage={setLanguage} t={t} />
            <main>
                <Analytics />
                <SpeedInsights />
                <Hero t={t} />
                <Services t={t} />
                <AboutUs t={t} />
                <Testimonials t={t} />
                <ContactForm t={t} />
                <WhatsAppButton t={t} />
            </main>
            <Footer t={t} />
        </div>
    );
}

