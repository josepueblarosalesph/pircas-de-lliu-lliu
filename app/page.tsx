import Image from "next/image";
import PillarsCarousel from "./PillarsCarousel";
import GalleryLightbox from "./GalleryLightbox";

const features = [
  { title: "Parcelas Planas", text: "5.000 m² planos, con una ubicación privilegiada, a minutos de la ciudad.", image: "/images/pircas/DJI_0164-scaled.jpeg" },
  { title: "Vegetación Nativa", text: "Rodeado de espinos, boldos y quillayes propios de la zona.", image: "/images/pircas/DSC_0210.jpg" },
  { title: "Servicios", text: "Parcelas con agua, luz, pavimentación y portón de acceso.", image: "/images/pircas/DSC_0340.jpg" },
  { title: "Rol Propio", text: "Proyecto aprobado y registrado en el SAG.", image: "/images/pircas/DSC_0275.jpg" },
];

const galleryPhotos = [
  { file: "1", alt: "Camino interior entre flores y cactus en Pircas de Lliu Lliu" },
  { file: "3", alt: "Paisaje interior del proyecto con vista a los cerros" },
  { file: "4", alt: "Vegetación nativa y montañas de Lliu Lliu" },
  { file: "5", alt: "Camino rodeado de flores y cactus nativos" },
  { file: "8", alt: "Parcela entre cactus y vegetación en flor" },
  { file: "10", alt: "Entorno natural de una parcela en Pircas de Lliu Lliu" },
  { file: "11", alt: "Camino interior con vista hacia Limache" },
  { file: "12", alt: "Cactus y cierres de parcelas del proyecto" },
  { file: "15", alt: "Parcela y vegetación nativa durante la primavera" },
  { file: "17", alt: "Camino interior y parcelas en Pircas de Lliu Lliu" },
  { file: "18", alt: "Camino entre cactus con vista a la cordillera de la Costa" },
  { file: "19", alt: "Detalle de señalización y cierre de parcelas" },
  { file: "20", alt: "Vista a los cerros desde el proyecto" },
  { file: "21", alt: "Entorno del acceso a Pircas de Lliu Lliu" },
  { file: "22", alt: "Portón eléctrico de acceso al proyecto" },
  { file: "23", alt: "Cámaras de seguridad instaladas en el acceso" },
];

export default function Home() {
  return <main>
    <header className="header">
      <a href="#inicio" className="brand" aria-label="Pircas de Lliu Lliu, inicio"><Image src="/images/pircas/LOGO-PIRCAS-DE-LLIU-LLIU.png" width={260} height={74} alt="Pircas de Lliu Lliu" priority /></a>
      <nav aria-label="Navegación principal"><a href="#proyecto">Proyecto</a><a href="#parcelas">Parcelas</a><a href="#galeria">Galería</a><a href="#ubicacion">Ubicación</a><a href="#contacto">Contacto</a></nav>
      <a className="nav-cta" href="https://wa.me/56948544996" target="_blank" rel="noreferrer">Reserva tu parcela <span>↗</span></a>
      <details className="mobile-menu"><summary aria-label="Abrir menú"><i /><i /></summary><div><a href="#proyecto">Proyecto</a><a href="#parcelas">Parcelas</a><a href="#galeria">Galería</a><a href="#ubicacion">Ubicación</a><a href="#contacto">Contacto</a></div></details>
    </header>

    <section className="hero" id="inicio">
      <div className="hero-title"><h1><span>PIRCAS DE</span><span>LLIU LLIU</span></h1></div>
      <div className="hero-media">
        <iframe src="https://www.youtube-nocookie.com/embed/EYgH7Y2P_XA?autoplay=1&mute=1&loop=1&playlist=EYgH7Y2P_XA&controls=0&rel=0&playsinline=1&modestbranding=1&disablekb=1&fs=0&iv_load_policy=3" title="Video de Pircas de Lliu Lliu" allow="autoplay; encrypted-media; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" />
        <a className="play" href="https://youtu.be/EYgH7Y2P_XA" target="_blank" rel="noreferrer" aria-label="Ver video con sonido">▶ <small>Ver con sonido</small></a>
      </div>
    </section>

    <section className="statement" id="proyecto"><h2>Vive entre la <span className="inline-img"><Image src="/images/pircas/DSC_0310.jpg" fill alt="Naturaleza de Lliu Lliu" sizes="160px" /></span> naturaleza y la ciudad <span className="inline-img"><Image src="/images/pircas/DJI_0180-scaled.jpeg" fill alt="Paisaje de Limache" sizes="160px" /></span> en la parcela de tus sueños</h2></section>

    <PillarsCarousel />

    <section className="marquee" aria-label="Parcelas planas, rol propio, agua y luz, naturaleza nativa">
      <div className="marquee-track">
        <span>PARCELAS PLANAS · ROL PROPIO · AGUA Y LUZ · NATURALEZA NATIVA ·&nbsp;</span>
        <span aria-hidden="true">PARCELAS PLANAS · ROL PROPIO · AGUA Y LUZ · NATURALEZA NATIVA ·&nbsp;</span>
      </div>
    </section>
    <section className="location-intro"><p>PIRCAS DE LLIU LLIU · LIMACHE</p><h2>Parcelas Planas con acceso rápido al centro de Limache y Olmué.<br />A sólo 30 min de Viña del Mar</h2></section>
    <section className="photo-band"><Image src="/images/pircas/pircasdellliulliudia3-7.jpeg" alt="Camino interior y naturaleza de Pircas de Lliu Lliu" fill sizes="100vw" /></section>

    <section className="details-section"><div className="details-image"><Image src="/images/pircas/DSC_0290.jpg" alt="Paisaje del proyecto" fill sizes="(max-width: 800px) 100vw, 48vw" /></div><div className="details-copy"><p>UN LUGAR PARA PROYECTARTE</p><h2>Parcelas totalmente planas desde 2.250 UF</h2><p>En Pircas de Lliu Lliu todas las parcelas cuentan con luz y agua canalizadas bajo tierra y totalmente operativas. Además, los caminos interiores han sido trabajados por capas para resistir mejor durante todo el año.</p><a href="#contacto">Quiero conocer el proyecto <span>↗</span></a></div></section>

    <section className="security-section" id="seguridad" aria-labelledby="seguridad-title">
      <div className="security-copy">
        <p>ACCESO Y SEGURIDAD</p>
        <h2 id="seguridad-title">Más tranquilidad para disfrutar tu parcela.</h2>
        <p>El acceso al proyecto cuenta con portón eléctrico y cámaras de seguridad, elementos que acompañan el carácter privado y ordenado de Pircas de Lliu Lliu.</p>
        <div className="security-points"><span>01 · Cámaras de seguridad</span><span>02 · Portón eléctrico</span></div>
      </div>
      <div className="security-images">
        <figure className="security-camera"><Image src="/images/pircas/octubre-2026/pircas-23.jpg" alt="Cámaras de seguridad instaladas en el acceso de Pircas de Lliu Lliu" fill sizes="(max-width: 850px) 100vw, 36vw" /><figcaption>Cámaras de seguridad</figcaption></figure>
        <figure className="security-gate"><Image src="/images/pircas/octubre-2026/pircas-22.jpg" alt="Portón eléctrico de acceso a Pircas de Lliu Lliu" fill sizes="(max-width: 850px) 72vw, 24vw" /><figcaption>Portón eléctrico</figcaption></figure>
      </div>
    </section>

    <section className="features"><p>¿POR QUÉ ELEGIR PIRCAS DE LLIU LLIU?</p><h2>Estos son los puntos más importantes para elegir vivir aquí</h2><div className="feature-grid">{features.map((feature, index) => <article key={feature.title}><Image src={feature.image} alt={feature.title} fill sizes="(max-width: 700px) 86vw, 25vw" /><div><span>0{index + 1}</span><h3>{feature.title}</h3><p>{feature.text}</p></div></article>)}</div></section>

    <section className="gallery" id="galeria" aria-labelledby="gallery-title">
      <div className="gallery-heading"><p>OCTUBRE 2026 · PIRCAS DE LLIU LLIU</p><h2 id="gallery-title">El proyecto,<br /><em>tal como se vive.</em></h2><p>Recorre sus caminos, paisajes y rincones a través de una nueva selección de fotografías.</p></div>
      <GalleryLightbox photos={galleryPhotos} />
    </section>

    <section className="availability" id="ubicacion">
      <div className="map-wrap">
        <a className="map-image" href="/images/pircas/2-Plano-Parcelas.png" target="_blank" rel="noreferrer" aria-label="Abrir plano actualizado de parcelas a tamaño completo">
          <Image src="/images/pircas/2-Plano-Parcelas.png" alt="Plano actualizado de disponibilidad de parcelas de Pircas de Lliu Lliu" fill sizes="(max-width: 800px) 100vw, 56vw" />
          <span>Abrir plano completo ↗</span>
        </a>
        <p>Plano actualizado · La disponibilidad puede cambiar sin previo aviso</p>
      </div>
      <div className="availability-copy"><p>PLANO ACTUALIZADO</p><h2>Parcelas <em>Disponibles</em></h2><p>Consulta la distribución y el estado actual de cada parcela. Para confirmar disponibilidad, valores y reservar una visita, contáctanos directamente.</p><a className="button dark" href="https://maps.app.goo.gl/BNiV3YVLTCPZhUaV8" target="_blank" rel="noreferrer">Ubicación en mapa <span>↗</span></a></div>
    </section>

    <section className="contact" id="contacto"><p>PIRCAS DE LLIU LLIU · LIMACHE</p><h2>¿Listo para sembrar<br />tu futuro?</h2><p>Contáctanos para conocer nuestras parcelas y descubre el potencial de invertir en tierra.</p><div className="contact-links"><a href="https://wa.me/56948544996" target="_blank" rel="noreferrer">Whatsapp ↗</a><a href="mailto:info@itagra.cl">info@itagra.cl ↗</a></div></section>
    <footer>
      <Image src="/images/pircas/LOGO-PIRCAS-DE-LLIU-LLIU.png" alt="Pircas de Lliu Lliu" width={250} height={72} />
      <p>Parcelas planas de 5.000 m² con la mejor plusvalía y acceso en Limache.</p>
      <a className="itagra-link" href="https://itagra.cl" target="_blank" rel="noreferrer" aria-label="Visitar Itagra">
        <span>Un proyecto de</span><Image src="/images/itagra-logo.png" alt="Itagra Parcelas de Agrado" width={194} height={80} />
      </a>
      <div>
        <span>© 2026 Pircas de Lliu Lliu</span>
        <a href="https://www.instagram.com/pircas.de.lliulliu" target="_blank" rel="noreferrer" aria-label="Instagram de Pircas de Lliu Lliu">Instagram ↗</a>
        <a href="#inicio">Volver arriba ↑</a>
      </div>
    </footer>
  </main>;
}
