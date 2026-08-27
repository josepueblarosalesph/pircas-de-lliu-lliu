"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    title: <>Parcelas<br />Planas</>,
    description: <>Parcelas planas de 5.000 m² en Limache desde las 2.250 UF.<br />Naturaleza, comodidad y conectividad a solo 30 min de Viña y 90 de Santiago.</>,
    image: "/images/pircas/DJI_0164-scaled.jpeg",
    alt: "Parcelas planas en Limache",
  },
  {
    title: <>Rol<br />Propio</>,
    description: <>Todas las parcelas tienen rol propio, agua y luz.<br />Acceso controlado y caminos interiores asfaltados.</>,
    image: "/images/pircas/pircasdellliulliudia3-7.jpeg",
    alt: "Camino interior de Pircas de Lliu Lliu",
  },
  {
    title: <>Naturaleza<br />Nativa</>,
    description: <>Despierta con el canto de los pájaros, rodeado de espinos, boldos y quillayes.<br />Naturaleza y ciudad en un mismo lugar.</>,
    image: "/images/pircas/DSC_0290.jpg",
    alt: "Naturaleza nativa de Lliu Lliu",
  },
];

export default function PillarsCarousel() {
  const [active, setActive] = useState(0);
  const change = (direction: number) => setActive((current) => (current + direction + slides.length) % slides.length);
  const slide = slides[active];

  return <section className="pillars" id="parcelas">
    <div className="pillars-copy">
      <div className="carousel-top">
        <p className="counter">0{active + 1} / 03</p>
        <div className="carousel-arrows">
          <button onClick={() => change(-1)} aria-label="Ver elemento anterior">←</button>
          <button onClick={() => change(1)} aria-label="Ver elemento siguiente">→</button>
        </div>
      </div>
      <div className="carousel-content" key={`copy-${active}`}>
        <h2>{slide.title}</h2>
        <p>{slide.description}</p>
        <a className="button" href="#contacto">Reserva tu parcela <span>↗</span></a>
      </div>
      <div className="minor-list">
        {slides.map((item, index) => <button className={index === active ? "active" : ""} key={index} onClick={() => setActive(index)}>{index === 0 ? "Parcelas planas" : index === 1 ? "Rol propio" : "Naturaleza nativa"}</button>)}
      </div>
    </div>
    <div className="pillars-image" key={`image-${active}`}><Image src={slide.image} alt={slide.alt} fill priority={active === 0} sizes="(max-width: 800px) 100vw, 55vw" /></div>
  </section>;
}
