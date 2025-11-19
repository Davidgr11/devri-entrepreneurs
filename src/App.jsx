import React, { useState } from 'react';
import { Check, Code, Zap, TrendingUp, ShoppingCart, Users, Calendar, MessageSquare, Award, ArrowRight, Sparkles, Rocket, Target, Send, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const LaSalleLanding = () => {
  const [activeCase, setActiveCase] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    business: '',
    message: ''
  });

  // Colores mezclados - algunos claros, otros oscuros para variedad
  const colors = {
    primary: '#7fed4cf8',
    primaryDark: '#27c008f8',
    secondary: '#be7dff',
    secondaryDark: '#951cff',
    tertiary: '#f7e9b8',
    tertiaryAux: '#ceb318',
    pastel1: '#b1ff9df8',
    pastel2: '#e8bdfff8',
    bgDark: '#0a0a0a',
    bgLight: '#ffffff',
    bgMedium: '#f8f9fa',
    cardDark: '#1f1f1f',
    cardLight: '#ffffff',
    textDark: '#000000',
    textLight: '#ffffff',
    border: '#333',
    borderLight: '#e0e0e0',
  };

  const useCases = [
    {
      icon: Code,
      title: "Sitio Web Profesional",
      subtitle: "Presenta y valida tu idea de negocio",
      problem: "¿Tienes un negocio pero no una presencia digital profesional?",
      solution: "Página web moderna que muestra tus servicios, genera confianza y captura clientes potenciales.",
      features: ["Diseño profesional", "Formulario de contacto", "Optimizado para Google", "Adaptado a celulares, tablets y computadoras", "Certificado SSL para seguridad", "Hosting y dominio"],
      time: "5-7 días",
      realExample: "Perfecto para validar tu idea, mostrar tu portafolio o presentar tus servicios.",
      ideal: "Consultorías, servicios profesionales, portafolios, negocios nuevos"
    },
    {
      icon: ShoppingCart,
      title: "Tienda en Línea",
      subtitle: "Vende tus productos 24/7",
      problem: "¿Vendes por redes sociales pero no tienes tienda online?",
      solution: "Tienda en línea completa donde tus clientes pueden comprar en cualquier momento con pagos seguros.",
      features: ["Catálogo de productos", "Carrito de compras", "Pagos en línea seguros", "Gestión de pedidos", "Panel de administración", "Certificado SSL", "Hosting y dominio"],
      time: "7-14 días",
      realExample: "Imagina procesar ventas automáticamente mientras te enfocas en hacer crecer tu negocio.",
      ideal: "Productos físicos, tiendas retail, marcas de ropa, productos artesanales"
    },
    {
      icon: Calendar,
      title: "Sistema de Citas",
      subtitle: "Agenda automática para tu negocio",
      problem: "¿Pierdes tiempo coordinando citas por WhatsApp o llamadas?",
      solution: "Sistema donde tus clientes agendan sus propias citas, eliminando mensajes y llamadas.",
      features: ["Calendario inteligente", "Recordatorios automáticos", "Gestión de horarios", "Confirmaciones por email"],
      time: "5-10 días",
      realExample: "Tus clientes reservan en segundos, tú te liberas de coordinar horarios.",
      ideal: "Consultorios, spas, salones de belleza, estudios, coaches, nutriólogos"
    },
    {
      icon: Users,
      title: "Portal para Clientes",
      subtitle: "Autoservicio para tus clientes",
      problem: "¿Tus clientes te preguntan constantemente por sus pedidos o servicios?",
      solution: "Plataforma donde tus clientes consultan todo: pedidos, historial, documentos y más.",
      features: ["Acceso personalizado", "Historial completo", "Descarga de documentos", "Mensajería interna"],
      time: "7-14 días",
      realExample: "Reduce 80% las consultas repetitivas y mejora la experiencia de tus clientes.",
      ideal: "Servicios recurrentes, membresías, escuelas, distribuidoras"
    },
    {
      icon: MessageSquare,
      title: "Sistema de Gestión",
      subtitle: "Organiza tu negocio en una plataforma",
      problem: "¿Manejas todo por WhatsApp, Excel y papelitos?",
      solution: "Sistema personalizado que centraliza clientes, ventas, inventario y equipo en un solo lugar.",
      features: ["Base de datos organizada", "Gestión de equipo", "Reportes automáticos", "Acceso desde cualquier lugar"],
      time: "7-14 días",
      realExample: "Deja de perder información importante y controla todo tu negocio desde una sola plataforma.",
      ideal: "PYMEs en crecimiento, empresas con equipo, negocios con inventario"
    },
    {
      icon: TrendingUp,
      title: "Aplicación Personalizada",
      subtitle: "Solución única para tu negocio",
      problem: "¿Tu negocio necesita algo específico que no existe?",
      solution: "Desarrollamos la aplicación web exacta que necesitas, adaptada a tu proceso de negocio.",
      features: ["Diseño a la medida", "Procesos automatizados", "Integraciones específicas", "Escalable"],
      time: "Según complejidad",
      realExample: "Si puedes imaginarlo, podemos construirlo.",
      ideal: "Negocios con procesos únicos, industrias especializadas, startups innovadoras"
    }
  ];

  const benefits = [
    { icon: Zap, title: "Entrega Rápida", desc: "Proyectos listos en días, no meses. Velocidad sin sacrificar calidad." },
    { icon: Target, title: "A Tu Medida", desc: "Cada proyecto adaptado específicamente a tu negocio y necesidades." },
    { icon: Rocket, title: "Tecnología Moderna", desc: "Usamos las herramientas más actuales para resultados profesionales." },
    { icon: Award, title: "Calidad Comprobada", desc: "30+ proyectos exitosos en educación, retail, salud y más." },
    { icon: Sparkles, title: "Consultoría Incluida", desc: "Primera consulta gratuita para analizar tu proyecto." }
  ];

  const testimonialData = [
    { name: "Cafetería 1939", quote: "En una semana teníamos nuestro sitio web, aumentando nuestra presencia digital y la confianza de nuestros clientes.", sector: "Restaurante" },
    { name: "Raabta", quote: "Con nuestra plataforma de cursos ahora podemos vender en línea 24/7 y brindar mejor servicio a nuestros alumnos.", sector: "Plataforma Educativa" },
    { name: "Omnifood", quote: "Validamos nuestra idea rápidamente con una landing page que capturaba el interés de clientes potenciales.", sector: "Startup" },
    { name: "English Book", quote: "Podemos generar códigos de barras personalizados para nuestro negocio en segundos.", sector: "Comercializadora de Libros" },
    { name: "Lavat", quote: "El sistema de gestión nos ayudó a organizar nuestro inventario y coordinar mejor a nuestro equipo.", sector: "Lavandería" },
    { name: "Cristina R.", quote: "Mis clientes ahora pueden agendar sus citas en línea, ahorrando tiempo y mejorando su experiencia.", sector: "Nutrióloga" },

  ];

  const stats = [
    { number: "30+", label: "Proyectos Entregados" },
    { number: "Días", label: "No Meses" },
    { number: "5+", label: "Sectores Atendidos" },
    { number: "100%", label: "Clientes Satisfechos" }
  ];

  const processSteps = [
    { num: "01", title: "Consultoría Inicial", desc: "Llamada gratuita de 30 min para entender tu visión", time: "Gratis" },
    { num: "02", title: "Propuesta", desc: "Te enviamos alcance, cronograma y cotización personalizada", time: "1-2 días" },
    { num: "03", title: "Diseño", desc: "Creamos el diseño y estructura de tu proyecto", time: "2-3 días" },
    { num: "04", title: "Desarrollo", desc: "Construimos tu solución con tecnología moderna", time: "3-10 días" },
    { num: "05", title: "Pruebas", desc: "Verificamos que todo funcione perfecto en todos los dispositivos", time: "1-2 días" },
    { num: "06", title: "Lanzamiento", desc: "Publicamos tu proyecto y te asistimos para usarlo", time: "1 día" },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    // No evitamos el comportamiento por defecto: dejamos que el formulario
    // se envíe de forma nativa (Netlify Forms) usando el atributo
    // `action` y `data-netlify="true"` en el formulario.
    // Conservamos el log para depuración.
    console.log('Formulario (intentando enviar):', formData);
  };

  return (
    <div style={{
      fontFamily: "'Nunito', sans-serif",
      color: colors.textDark,
      minHeight: '100vh',
    }}>
      {/* Header - Fondo oscuro */}
      <header style={{
        position: 'sticky',
        top: 0,
        backgroundColor: colors.bgDark,
        padding: '1rem 5%',
        borderBottom: `1px solid ${colors.border}`,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src="/devri-logo-dark.svg" alt="Devri logo" style={{ width: 28, height: 28, objectFit: 'contain' }} />
          <h1 style={{ 
            fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', 
            fontWeight: 800, 
            margin: 0,
            color: colors.textLight 
          }}>
            Devri Solutions {/*<span style={{ color: colors.secondary }}>× La Salle</span>*/}
          </h1>
        </div>
        {/*<a 
          href="#contacto"
          style={{
            background: colors.secondary,
            border: 'none',
            borderRadius: '50px',
            padding: '0.5rem 1.5rem',
            color: 'white',
            fontWeight: 700,
            cursor: 'pointer',
            fontSize: '0.9rem',
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          Solicitar Cotización
        </a>*/}
      </header>

      {/* Hero Section - Fondo claro con gradiente */}
      <section style={{
        padding: '4rem 5%',
        textAlign: 'center',
        background: `linear-gradient(135deg, ${colors.pastel1} 0%, ${colors.pastel2} 100%)`,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              backgroundColor: colors.secondary,
              color: 'white',
              display: 'inline-block',
              padding: '0.5rem 1.5rem',
              borderRadius: '50px',
              fontWeight: 700,
              marginBottom: '1.5rem',
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)'
            }}
          >
            🎓 Descuentos exclusivos para lasallistas y miembros de la Incubadora La Salle
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              fontWeight: 800,
              marginBottom: '1.5rem',
              lineHeight: 1.2,
              color: colors.bgDark
            }}
          >
            Acelera tu Emprendimiento con<br />
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                background: `linear-gradient(135deg, ${colors.primaryDark}, ${colors.secondaryDark})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Tecnología Profesional
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: 'clamp(1rem, 3vw, 1.3rem)',
              marginBottom: '2rem',
              maxWidth: '800px',
              margin: '0 auto 2rem',
              color: colors.bgDark,
              opacity: 0.9,
              lineHeight: 1.6,
              padding: '0 1rem'
            }}
          >
            Creamos tu <strong>sitio web, tienda en línea o aplicación web</strong> en días, no meses.
            Con tecnología moderna y precios diseñados para emprendedores.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              padding: '0 1rem'
            }}
          >
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: `linear-gradient(135deg, ${colors.primaryDark}, ${colors.secondaryDark})`,
                border: 'none',
                borderRadius: '50px',
                padding: '1rem 2rem',
                color: 'white',
                fontWeight: 800,
                cursor: 'pointer',
                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                textDecoration: 'none'
              }}
            >
              Cotizar Mi Proyecto <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#casos-de-uso"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              style={{
                background: 'transparent',
                border: `2px solid ${colors.bgDark}`,
                borderRadius: '50px',
                padding: '1rem 2rem',
                color: colors.bgDark,
                fontWeight: 700,
                cursor: 'pointer',
                fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              Ver Casos de Uso
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: 'clamp(1rem, 3vw, 2rem)',
              marginTop: '4rem',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              backgroundColor: 'rgba(0,0,0,0.3)',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)'
            }}
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + idx * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                style={{ textAlign: 'center' }}
              >
                <div style={{
                  fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                  fontWeight: 800,
                  color: colors.textLight
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                  color: colors.textLight,
                  opacity: 0.9
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section - Fondo oscuro */}
      <section id="casos-de-uso" style={{ padding: '5rem 5%', backgroundColor: colors.bgDark }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: '1rem',
            color: colors.textLight
          }}>
            ¿Qué Podemos Construir para <span style={{ color: colors.secondary }}>Tu Negocio</span>?
          </h2>
          <p style={{ 
            textAlign: 'center', 
            fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
            marginBottom: '3rem', 
            opacity: 0.8,
            color: colors.textLight,
            padding: '0 1rem'
          }}>
            Soluciones reales para problemas reales de emprendedores
          </p>

          {/* Use Case Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'flex',
              gap: '0.75rem',
              marginBottom: '2rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
              padding: '0 1rem'
            }}
          >
            {useCases.map((useCase, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveCase(idx)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                style={{
                  background: activeCase === idx ? colors.primary : colors.cardDark,
                  color: activeCase === idx ? colors.bgDark : colors.textLight,
                  border: `2px solid ${activeCase === idx ? colors.primary : colors.border}`,
                  borderRadius: '50px',
                  padding: 'clamp(0.6rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                {React.createElement(useCase.icon, { size: 18 })}
                <span style={{ display: window.innerWidth < 640 ? 'none' : 'inline' }}>
                  {useCase.title}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Active Use Case Card */}
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundColor: colors.cardDark,
              borderRadius: '20px',
              padding: 'clamp(1.5rem, 4vw, 3rem)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
              border: `3px solid ${colors.primary}`
            }}
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'flex-start', 
              gap: '1.5rem', 
              marginBottom: '2rem',
              flexDirection: window.innerWidth < 640 ? 'column' : 'row'
            }}>
              <div style={{
                backgroundColor: colors.primary,
                padding: 'clamp(0.75rem, 2vw, 1rem)',
                borderRadius: '15px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {React.createElement(useCases[activeCase].icon, { size: 32, color: colors.bgDark })}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ 
                  fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
                  fontWeight: 800, 
                  marginBottom: '0.5rem',
                  color: colors.textLight
                }}>
                  {useCases[activeCase].title}
                </h3>
                <p style={{
                  fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                  opacity: 0.8,
                  marginBottom: '0.75rem',
                  color: colors.textLight
                }}>
                  {useCases[activeCase].subtitle}
                </p>
                <div style={{
                  backgroundColor: colors.secondary,
                  color: 'white',
                  display: 'inline-block',
                  padding: '0.25rem 1rem',
                  borderRadius: '50px',
                  fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
                  fontWeight: 700
                }}>
                  ⚡ Listo en {useCases[activeCase].time}
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: '#2a0a0a',
              padding: 'clamp(1rem, 3vw, 1.5rem)',
              borderRadius: '15px',
              marginBottom: '2rem',
              borderLeft: `4px solid ${colors.secondary}`
            }}>
              <div style={{ 
                fontWeight: 700, 
                marginBottom: '0.5rem', 
                color: colors.secondary,
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
              }}>
                ❌ El Problema:
              </div>
              <div style={{ 
                fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                color: colors.textLight,
                lineHeight: 1.6
              }}>
                {useCases[activeCase].problem}
              </div>
            </div>

            <div style={{
              backgroundColor: '#0a2a0a',
              padding: 'clamp(1rem, 3vw, 1.5rem)',
              borderRadius: '15px',
              marginBottom: '2rem',
              borderLeft: `4px solid ${colors.primary}`
            }}>
              <div style={{ 
                fontWeight: 700, 
                marginBottom: '0.5rem', 
                color: colors.primary,
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
              }}>
                ✅ La Solución:
              </div>
              <div style={{ 
                fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', 
                marginBottom: '1rem',
                color: colors.textLight,
                lineHeight: 1.6
              }}>
                {useCases[activeCase].solution}
              </div>
              <div style={{ 
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)', 
                fontStyle: 'italic', 
                opacity: 0.9,
                color: colors.textLight
              }}>
                💡 {useCases[activeCase].realExample}
              </div>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <div style={{ 
                fontWeight: 700, 
                marginBottom: '1rem', 
                fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                color: colors.textLight
              }}>
                🚀 Funcionalidades incluidas:
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem'
              }}>
                {useCases[activeCase].features.map((feature, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: 'clamp(0.6rem, 2vw, 0.75rem)',
                    backgroundColor: colors.bgDark,
                    borderRadius: '10px'
                  }}>
                    <Check size={20} color={colors.primary} strokeWidth={3} />
                    <span style={{ 
                      color: colors.textLight,
                      fontSize: 'clamp(0.85rem, 2vw, 0.95rem)'
                    }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{
              backgroundColor: colors.bgDark,
              padding: 'clamp(1rem, 3vw, 1.5rem)',
              borderRadius: '15px',
              borderLeft: `4px solid ${colors.tertiary}`
            }}>
              <div style={{ 
                fontWeight: 700, 
                marginBottom: '0.5rem', 
                color: colors.tertiary,
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
              }}>
                🎯 Ideal para:
              </div>
              <div style={{ 
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                color: colors.textLight,
                lineHeight: 1.6
              }}>
                {useCases[activeCase].ideal}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section - Fondo claro */}
      <section style={{ padding: '5rem 5%', background: `linear-gradient(135deg, ${colors.pastel2} 0%, ${colors.pastel1} 100%)`,
 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: '1rem'
          }}>
            ¿Por Qué Elegir <span style={{ color: colors.secondary }}>Devri Solutions</span>?
          </h2>
          <p style={{ 
            textAlign: 'center', 
            fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
            marginBottom: '3rem', 
            opacity: 0.8,
            padding: '0 1rem'
          }}>
            No solo desarrollamos código, impulsamos negocios
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)'
          }}>
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                style={{
                  backgroundColor: colors.cardLight,
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  borderRadius: '20px',
                  border: `2px solid ${colors.borderLight}`,
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{
                  backgroundColor: colors.primary,
                  width: 'clamp(50px, 10vw, 60px)',
                  height: 'clamp(50px, 10vw, 60px)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  {React.createElement(benefit.icon, { size: 28, color: colors.bgDark })}
                </div>
                <h3 style={{ 
                  fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', 
                  fontWeight: 800, 
                  marginBottom: '0.5rem' 
                }}>
                  {benefit.title}
                </h3>
                <p style={{ 
                  opacity: 0.8, 
                  lineHeight: 1.6,
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
                }}>
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Fondo oscuro */}
      <section style={{ padding: '5rem 5%', backgroundColor: colors.bgDark }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: '1rem',
            color: colors.textLight
          }}>
            Nuestro <span style={{ color: colors.secondary }}>Proceso Ágil</span>
          </h2>
          <p style={{ 
            textAlign: 'center', 
            fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
            marginBottom: '3rem', 
            opacity: 0.8,
            color: colors.textLight,
            padding: '0 1rem'
          }}>
            De la idea al lanzamiento en tiempo récord
          </p>

          <div style={{ display: 'grid', gap: 'clamp(1rem, 2vw, 1.5rem)' }}>
            {processSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth < 768 ? '1fr' : 'auto 1fr auto',
                  gap: 'clamp(1rem, 2vw, 1.5rem)',
                  alignItems: 'center',
                  backgroundColor: colors.cardDark,
                  padding: 'clamp(1rem, 3vw, 1.5rem)',
                  borderRadius: '15px',
                  border: `2px solid ${colors.border}`
                }}
              >
                <div style={{
                  backgroundColor: colors.primary,
                  width: 'clamp(50px, 10vw, 60px)',
                  height: 'clamp(50px, 10vw, 60px)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
                  fontWeight: 800,
                  color: colors.bgDark,
                  justifySelf: window.innerWidth < 768 ? 'center' : 'start'
                }}>
                  {step.num}
                </div>
                <div style={{ textAlign: window.innerWidth < 768 ? 'center' : 'left' }}>
                  <h3 style={{ 
                    fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', 
                    fontWeight: 800, 
                    marginBottom: '0.25rem',
                    color: colors.textLight
                  }}>
                    {step.title}
                  </h3>
                  <p style={{ 
                    opacity: 0.8, 
                    margin: 0,
                    color: colors.textLight,
                    fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                    lineHeight: 1.5
                  }}>
                    {step.desc}
                  </p>
                </div>
                <div style={{
                  backgroundColor: colors.secondary,
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '50px',
                  fontSize: 'clamp(0.75rem, 2vw, 0.85rem)',
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  justifySelf: window.innerWidth < 768 ? 'center' : 'end'
                }}>
                  {step.time}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Fondo claro */}
      <section style={{ padding: '5rem 5%', background: `linear-gradient(135deg, ${colors.pastel1} 0%, ${colors.pastel2} 100%)`,
 }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            fontWeight: 800,
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Emprendedores que ya <span style={{ color: colors.secondary }}>Confiaron</span> en Nosotros
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(1.5rem, 3vw, 2rem)'
          }}>
            {testimonialData.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5, scale: 1.03 }}
                style={{
                  backgroundColor: colors.cardLight,
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  borderRadius: '20px',
                  border: `2px solid ${colors.borderLight}`,
                  position: 'relative',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{
                  fontSize: 'clamp(2rem, 5vw, 3rem)',
                  color: colors.primary,
                  opacity: 0.2,
                  position: 'absolute',
                  top: '10px',
                  left: '20px'
                }}>
                  "
                </div>
                <p style={{
                  fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem',
                  fontStyle: 'italic',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {testimonial.quote}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <div style={{ 
                      fontWeight: 800,
                      fontSize: 'clamp(0.95rem, 2.5vw, 1rem)'
                    }}>
                      {testimonial.name}
                    </div>
                    <div style={{ 
                      fontSize: 'clamp(0.8rem, 2vw, 0.85rem)', 
                      opacity: 0.7 
                    }}>
                      {testimonial.sector}
                    </div>
                  </div>
                  <div style={{
                    backgroundColor: colors.primary,
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1.2rem'
                  }}>
                    ⭐
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/Contact CTA - Fondo oscuro */}
      <section style={{ padding: '5rem 5%', backgroundColor: colors.bgDark }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            fontWeight: 800,
            marginBottom: '1rem',
            color: colors.textLight
          }}>
            Inversión <span style={{ color: colors.secondary }}>Personalizada</span>
          </h2>
          <p style={{ 
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', 
            marginBottom: '2rem',
            color: colors.textLight,
            opacity: 0.9,
            lineHeight: 1.6,
            padding: '0 1rem'
          }}>
            Cada proyecto es único. El precio depende de las funcionalidades y complejidad específicas de tu negocio.
          </p>

          <div style={{
            backgroundColor: colors.secondary,
            color: 'white',
            display: 'inline-block',
            padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
            borderRadius: '50px',
            fontWeight: 700,
            marginBottom: '3rem',
            fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)'
          }}>
            🎓 10% de descuento para la comunidad lasallista de emprendedores
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem',
            textAlign: 'left'
          }}>
            {[
              { icon: Check, text: "Análisis de requerimientos sin costo" },
              { icon: Check, text: "Cotización personalizada en 24-48 horas" },
              { icon: Check, text: "Consultoría inicial gratuita" },
              { icon: Check, text: "Precios diseñados para emprendedores" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, x: 5 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: 'clamp(1rem, 2vw, 1.25rem)',
                  backgroundColor: colors.cardDark,
                  borderRadius: '15px',
                  border: `2px solid ${colors.border}`
                }}
              >
                {React.createElement(item.icon, { size: 24, color: colors.primary, strokeWidth: 3 })}
                <span style={{
                  color: colors.textLight,
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                  lineHeight: 1.5
                }}>
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>

          <p style={{
            fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
            marginBottom: '2rem',
            color: colors.textLight,
            opacity: 0.8,
            lineHeight: 1.6,
            padding: '0 1rem'
          }}>
            💡 Para darte un precio justo necesito conocer los detalles de tu proyecto: funcionalidades requeridas, integraciones necesarias y complejidad del diseño.
          </p>

          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
              border: 'none',
              borderRadius: '50px',
              padding: 'clamp(1rem, 2.5vw, 1.25rem) clamp(2rem, 4vw, 3rem)',
              color: 'white',
              fontWeight: 800,
              cursor: 'pointer',
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none'
            }}
          >
            Solicitar Cotización Personalizada <ArrowRight size={24} />
          </motion.a>
        </div>
      </section>

      {/* Contact Form - Fondo claro */}
      <section id="contacto" style={{ padding: '5rem 5%', background: `linear-gradient(135deg, ${colors.pastel2} 0%, ${colors.pastel1} 100%)`}}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Rocket size={60} color={colors.secondary} style={{ marginBottom: '1rem' }} />
            </motion.div>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 5vw, 3rem)',
              fontWeight: 800,
              marginBottom: '1rem'
            }}>
              ¿Listo para <span style={{ color: colors.secondary }}>Empezar</span>?
            </h2>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              opacity: 0.8,
              lineHeight: 1.6,
              padding: '0 1rem'
            }}>
              Cuéntanos sobre tu proyecto y te contactaremos muy pronto
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }} 
            name="contact-lasalle" 
            method="POST"
            action="success.html" 
            data-netlify="true"
            onSubmit={handleSubmit}
            style={{
              backgroundColor: colors.cardLight,
              padding: 'clamp(2rem, 4vw, 3rem)',
              borderRadius: '20px',
              border: `2px solid ${colors.borderLight}`,
              boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
            }}
          >
            <input type="hidden" name="form-name" value="contact-lasalle" />
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: 700,
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
              }}>
                Nombre completo *
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: 'clamp(0.75rem, 2vw, 1rem)',
                  borderRadius: '10px',
                  border: `2px solid ${colors.borderLight}`,
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                  fontFamily: "'Nunito', sans-serif"
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: 700,
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
              }}>
                Correo *
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: 'clamp(0.75rem, 2vw, 1rem)',
                  borderRadius: '10px',
                  border: `2px solid ${colors.borderLight}`,
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                  fontFamily: "'Nunito', sans-serif"
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: 700,
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
              }}>
                WhatsApp *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="5512345678"
                style={{
                  width: '100%',
                  padding: 'clamp(0.75rem, 2vw, 1rem)',
                  borderRadius: '10px',
                  border: `2px solid ${colors.borderLight}`,
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                  fontFamily: "'Nunito', sans-serif"
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: 700,
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
              }}>
                ¿Qué tipo de proyecto necesitas? *
              </label>
              <select
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: 'clamp(0.75rem, 2vw, 1rem)',
                  borderRadius: '10px',
                  border: `2px solid ${colors.borderLight}`,
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                  fontFamily: "'Nunito', sans-serif",
                  backgroundColor: 'white'
                }}
              >
                <option value="">Selecciona una opción</option>
                <option value="Sitio Web Profesional">Sitio Web Profesional</option>
                <option value="Pagina de Aterrizaje">Página de Aterrizaje</option>
                <option value="Tienda en Línea">Tienda en Línea (E-commerce)</option>
                <option value="Sistema de Citas">Sistema de Citas/Reservaciones</option>
                <option value="Portal para Clientes">Portal para Clientes</option>
                <option value="Sistema de Gestión">Sistema de Gestión</option>
                <option value="Aplicación Personalizada">Aplicación Personalizada</option>
                <option value="No estoy seguro">No estoy seguro, necesito asesoría</option>
              </select>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: 700,
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
              }}>
                Nombre del emprendimiento/negocio *
              </label>
              <input
                type="text"
                name="business"
                required
                value={formData.business}
                onChange={handleInputChange}
                style={{
                  width: '100%',
                  padding: 'clamp(0.75rem, 2vw, 1rem)',
                  borderRadius: '10px',
                  border: `2px solid ${colors.borderLight}`,
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                  fontFamily: "'Nunito', sans-serif"
                }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: 700,
                fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
              }}>
                Cuéntanos sobre tu proyecto *
              </label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                placeholder="Describe tu negocio, qué problema quieres resolver, funcionalidades que necesitas, etc."
                style={{
                  width: '100%',
                  padding: 'clamp(0.75rem, 2vw, 1rem)',
                  borderRadius: '10px',
                  border: `2px solid ${colors.borderLight}`,
                  fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
                  fontFamily: "'Nunito', sans-serif",
                  resize: 'vertical'
                }}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: '100%',
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                border: 'none',
                borderRadius: '50px',
                padding: 'clamp(1rem, 2.5vw, 1.25rem)',
                color: 'white',
                fontWeight: 800,
                cursor: 'pointer',
                fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                fontFamily: "'Nunito', sans-serif"
              }}
            >
              <Send size={20} />
              Enviar Solicitud
            </motion.button>

            <p style={{
              marginTop: '1.5rem',
              fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
              opacity: 0.7,
              textAlign: 'center',
              lineHeight: 1.5
            }}>
              📧 También puedes escribirnos directamente a <a href='mailto:info@devri.com.mx'><b>info@devri.com.mx</b></a>
              <br />
              📱 O por WhatsApp para una respuesta más rápida <a href='https://wa.me/525540619810' target='_blank'><b>AQUÍ</b></a>
            </p>
          </motion.form>
        </div>
      </section>

      {/* Footer - Fondo oscuro */}
      <footer style={{
        backgroundColor: colors.bgDark,
        padding: 'clamp(2rem, 4vw, 3rem) 5%',
        borderTop: `2px solid ${colors.border}`,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '0.5rem', 
            marginBottom: '1rem',
            flexWrap: 'wrap'
          }}>
          <img src="/devri-logo-dark.svg" alt="Devri logo" style={{ width: 28, height: 28, objectFit: 'contain' }} />
            <h3 style={{ 
              fontSize: 'clamp(1.3rem, 3vw, 1.5rem)', 
              fontWeight: 800, 
              margin: 0,
              color: colors.textLight
            }}>
              Devri Solutions
            </h3>
          </div>
          <p style={{ 
            marginBottom: '1.5rem', 
            opacity: 0.8,
            color: colors.textLight,
            fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
            padding: '0 1rem'
          }}>
            Acelerando el éxito de emprendedores con tecnología
          </p>
          <div style={{
            display: 'flex',
            gap: 'clamp(1rem, 3vw, 2rem)',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '1.5rem',
            fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
            padding: '0 1rem'
          }}>
            <a href="https://devri.com.mx" target="_blank" rel="noopener noreferrer" style={{ 
              color: colors.primary, 
              textDecoration: 'none', 
              fontWeight: 700 
            }}>
              Sitio Web Principal
            </a>
          </div>
          <div style={{ 
            fontSize: 'clamp(0.8rem, 2vw, 0.85rem)', 
            opacity: 0.6,
            color: colors.textLight
          }}>
            © 2025 DEVRI DESARROLLO VANGUARDISTA, RADICAL E INNOVADOR S.A.P.I DE C.V. Hecho con ❤️ para emprendedores.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LaSalleLanding;