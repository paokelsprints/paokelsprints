import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const services = [
  'Cotizaciones',
  'Fichas RUC',
  'Certijoven',
  'Certiadulto',
  'Certificado Único Laboral (CUL)',
  'Curriculum Vitae (CV)',
  'Antecedentes',
  'Y mucho más'
];

const cards = [
  {
    title: 'Diseño profesional',
    text: 'Diseñamos documentos, fichas y material gráfico con acabado empresarial.'
  },
  {
    title: 'Entrega a domicilio',
    text: 'Coordinamos recojo y entrega para que tu trámite sea rápido y cómodo.'
  },
  {
    title: 'Atención por WhatsApp',
    text: 'Cotiza en minutos y recibe seguimiento de tu pedido en tiempo real.'
  }
];

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <motion.h1 initial={{ opacity: 0, y: -25 }} animate={{ opacity: 1, y: 0 }}>
          PaokelSprinters
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Diseños e impresiones a domicilio para trámites, documentos y material personalizado.
        </motion.p>
        <a className="cta" href="https://wa.me/51935443526" target="_blank" rel="noreferrer">
          Solicitar cotización
        </a>
      </header>

      <section className="carousel-section">
        <h2>Servicios más solicitados</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          loop
          autoplay={{ delay: 2200 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service}>
              <motion.div whileHover={{ scale: 1.05 }} className="service-card">
                ✓ {service}
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="cards-grid">
        {cards.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.article>
        ))}
      </section>

      <footer>
        <p>WhatsApp: +51 935 443 526 · Paokelsprinters.github.io</p>
      </footer>
    </div>
  );
}
