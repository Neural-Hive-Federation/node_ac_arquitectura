import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight, 
  Layers, 
  Ruler, 
  Home, 
  Building2, 
  Hammer, 
  ShieldCheck, 
  Award, 
  HardHat 
} from 'lucide-react';

const accentColor = "#f59e0b";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }} 
        className="relative z-10 max-w-4xl mx-auto"
      >
        <div className="mb-6">
          <span className="text-amber-400 text-xs font-mono uppercase tracking-widest bg-amber-950/50 border border-amber-900/30 px-3 py-1.5 rounded-full">
            Arquitectura & Construcción de Excelencia
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-none">
          Construimos<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">Tu Visión</span>
        </h1>
        <p className="text-base md:text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Diseño arquitectónico, construcción y remodelación de proyectos residenciales y comerciales. Calidad, precisión y cumplimiento en cada obra.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://wa.me/573167336479?text=Hola! Quiero una cotización para mi proyecto." 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all shadow-lg shadow-amber-500/20"
          >
            Solicitar Cotización
          </a>
          <a 
            href="#proyectos"
            className="inline-block bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all"
          >
            Ver Proyectos
          </a>
        </div>
      </motion.div>

      <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
              <span className="text-white font-black text-sm">AC</span>
            </div>
            <span className="text-lg font-black uppercase tracking-wider">AC Arquitectura</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#inicio" 
              className="text-xs font-mono uppercase tracking-widest hover:text-amber-500 transition-colors"
            >
              Inicio
            </a>
            <a 
              href="#servicios" 
              className="text-xs font-mono uppercase tracking-widest hover:text-amber-500 transition-colors"
            >
              Servicios
            </a>
            <a 
              href="#proyectos" 
              className="text-xs font-mono uppercase tracking-widest hover:text-amber-500 transition-colors"
            >
              Proyectos
            </a>
            <a 
              href="#nosotros" 
              className="text-xs font-mono uppercase tracking-widest hover:text-amber-500 transition-colors"
            >
              Nosotros
            </a>
            <a 
              href="#contacto" 
              className="text-xs font-mono uppercase tracking-widest hover:text-amber-500 transition-colors"
            >
              Contacto
            </a>
          </div>
          <a 
            href="https://wa.me/573167336479?text=Hola! Me interesa conocer más sobre AC Arquitectura." 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-amber-600 hover:bg-amber-500 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-amber-500/20 transition-all"
          >
            Cotizar
          </a>
        </div>
      </nav>

      <section id="servicios" className="py-20 bg-[#040406] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">Lo que hacemos</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic mt-2">Nuestros <span className="text-amber-400">Servicios</span></h2>
            <p className="text-slate-500 text-sm mt-4">Soluciones integrales en arquitectura, diseño y construcción para proyectos de cualquier escala.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Ruler className="text-amber-400" size={22} />, 
                title: "Diseño Arquitectónico", 
                desc: "Planos, renders 3D y documentos técnicos para su proyecto residencial o comercial." 
              },
              { 
                icon: <HardHat className="text-amber-400" size={22} />, 
                title: "Construcción & Obra", 
                desc: "Ejecución de obra civil con materiales premium y personal especializado en campo." 
              },
              { 
                icon: <Home className="text-amber-400" size={22} />, 
                title: "Remodelaciones", 
                desc: "Transformamos y renovamos espacios con diseños modernos que aumentan el valor de su inmueble." 
              },
              { 
                icon: <ShieldCheck className="text-amber-400" size={22} />, 
                title: "Interventoría", 
                desc: "Supervisión técnica y administrativa de sus proyectos para garantizar calidad y presupuesto." 
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-amber-500/20 transition-all duration-300"
              >
                <div className="p-3 bg-amber-500/10 w-fit rounded-lg mb-4 border border-amber-500/20">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white uppercase text-sm tracking-wider mb-2">{item.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="proyectos" className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">Portafolio</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic mt-2">Proyectos <span className="text-amber-400">Destacados</span></h2>
          <p className="text-slate-500 text-sm mt-4">Cada proyecto refleja nuestra dedicación al detalle y la excelencia constructiva.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              title: "Residencia Contemporánea", 
              type: "Residencial", 
              tag: "Entregado", 
              img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80" 
            },
            { 
              title: "Centro Comercial Norte", 
              type: "Comercial", 
              tag: "En Obra", 
              img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=600&q=80" 
            },
            { 
              title: "Torre Empresarial", 
              type: "Corporativo", 
              tag: "Diseño", 
              img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80" 
            }
          ].map((proj, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] group cursor-pointer border border-white/5"
            >
              <img 
                src={proj.img} 
                alt={proj.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute top-4 right-4">
                <span className="text-[9px] font-mono font-bold uppercase tracking-wider bg-amber-600 text-white px-2 py-1 rounded">{proj.tag}</span>
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-widest">{proj.type}</span>
                <h4 className="text-sm font-bold text-white uppercase mt-1">{proj.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="nosotros" className="py-20 bg-[#040406] border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">Quiénes somos</span>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic mt-2 mb-6">
              Pasión por <span className="text-amber-400">Construir</span> el Futuro
            </h2>
            <p className="text-slate-500 leading-relaxed mb-6">
              En AC Arquitectura combinamos creatividad, ingeniería y experiencia para transformar ideas en estructuras reales. Desde el primer boceto hasta la entrega final, somos tus aliados en cada etapa del proyecto.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { 
                  icon: <Award size={16} className="text-amber-400" />, 
                  text: "Empresa certificada y con licencia vigente" 
                },
                { 
                  icon: <Layers size={16} className="text-amber-400" />, 
                  text: "Proyectos llave en mano desde el diseño" 
                },
                { 
                  icon: <Building2 size={16} className="text-amber-400" />, 
                  text: "Cobertura en proyectos residenciales y comerciales" 
                },
                { 
                  icon: <Hammer size={16} className="text-amber-400" />, 
                  text: "Materiales de primera calidad garantizados" 
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-white/5 border border-white/5 rounded-xl">
                  {item.icon}
                  <span className="text-xs text-slate-400 leading-snug">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10"
          >
            <img 
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80" 
              alt="Equipo AC Arquitectura" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </div>
      </section>

      <section id="contacto" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="bg-[#070911]/80 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 md:p-16 shadow-2xl shadow-amber-500/5"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-amber-400">¿Listo para construir?</span>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic mt-3 mb-4">Hablemos de <span className="text-amber-400">Tu Proyecto</span></h2>
          <p className="text-slate-500 text-sm mb-8 max-w-xl mx-auto">Cuéntanos tu idea. Nuestro equipo te contactará para ofrecerte una asesoría inicial completamente gratuita.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a 
              href="https://wa.me/573167336479?text=Hola! Quiero cotizar un proyecto con AC Arquitectura." 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all shadow-lg shadow-amber-500/20"
            >
              <Phone size={14} /> WhatsApp Directo
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-slate-500 text-xs font-mono">
            <span className="flex items-center gap-2"><Phone size={12} /> +57 316 7336479</span>
            <span className="flex items-center gap-2"><Mail size={12} /> contacto@arquitecturaac.com</span>
            <span className="flex items-center gap-2"><MapPin size={12} /> Colombia</span>
          </div>
        </motion.div>
      </section>

      <footer className="py-12 border-t border-white/10 bg-[#020203] text-slate-400">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="font-black text-white tracking-widest uppercase">AC ARQUITECTURA</span>
            <p className="text-[10px] text-slate-600 mt-1">&copy; 2026 Todos los derechos reservados.</p>
          </div>
          <div className="text-[10px] text-slate-500 font-mono text-center md:text-right">
            Powered by <a 
              href="https://neural-nexus-inky.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-amber-400 hover:underline"
            >
              PNN Portal Neural Nexus
            </a> | <a 
              href="https://neural-nexus-inky.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-purple-400 hover:underline"
            >
              Nexus Hive Federation
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;