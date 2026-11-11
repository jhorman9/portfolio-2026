import Image from "next/image";
import { brands } from "@/data";

function BrandList({ decorative = false }) {
  return (
    <div className="brand-set" aria-hidden={decorative}>
      {brands.map((brand) => (
        <a
          className="brand-item"
          href={brand.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={decorative ? undefined : `Visitar ${brand.name} (abre en una nueva pestaña)`}
          tabIndex={decorative ? -1 : undefined}
          key={brand.name}
        >
          <Image
            src={brand.logo}
            alt=""
            width={300}
            height={300}
            sizes="72px"
          />
        </a>
      ))}
    </div>
  );
}

export default function BrandMarquee() {
  return (
    <section
      className="brand-band"
      aria-label="Marcas con las que he trabajado"
    >
      <div className="site-container">
        <h2 className="brand-heading">Marcas con las que he trabajado</h2>
      </div>
      <div className="brand-window">
        <div className="brand-track">
          <BrandList />
          <BrandList decorative />
          <BrandList decorative />
          <BrandList decorative />
        </div>
      </div>
    </section>
  );
}
