"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type GalleryPhoto = {
  file: string;
  alt: string;
};

export default function GalleryLightbox({ photos }: { photos: GalleryPhoto[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activePhoto = activeIndex === null ? null : photos[activeIndex];

  const close = () => setActiveIndex(null);
  const previous = () => setActiveIndex((current) => current === null ? null : (current - 1 + photos.length) % photos.length);
  const next = () => setActiveIndex((current) => current === null ? null : (current + 1) % photos.length);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex]);

  return <>
    <div className="gallery-grid">
      {photos.map((photo, index) => <button key={photo.file} type="button" className={`gallery-item gallery-item-${index + 1}`} onClick={() => setActiveIndex(index)} aria-label={`Ampliar fotografía: ${photo.alt}`}>
        <Image src={`/images/pircas/octubre-2026/pircas-${photo.file}.jpg`} alt={photo.alt} fill sizes="(max-width: 850px) 50vw, 33vw" />
        <span>Ver foto ↗</span>
      </button>)}
    </div>

    {activePhoto && activeIndex !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Fotografía ${activeIndex + 1} de ${photos.length}: ${activePhoto.alt}`} onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}>
      <button className="lightbox-close" type="button" onClick={close} aria-label="Cerrar galería">Cerrar ×</button>
      <button className="lightbox-arrow lightbox-previous" type="button" onClick={previous} aria-label="Fotografía anterior">←</button>
      <figure>
        <div className="lightbox-image"><Image src={`/images/pircas/octubre-2026/pircas-${activePhoto.file}.jpg`} alt={activePhoto.alt} fill priority sizes="95vw" /></div>
        <figcaption><span>{String(activeIndex + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}</span>{activePhoto.alt}</figcaption>
      </figure>
      <button className="lightbox-arrow lightbox-next" type="button" onClick={next} aria-label="Fotografía siguiente">→</button>
    </div>}
  </>;
}
