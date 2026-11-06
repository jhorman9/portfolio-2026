import Image from "next/image";
import { brands } from "@/data";

function BrandList({ decorative = false }) {
  return <div className="brand-set" aria-hidden={decorative}>{brands.map((brand) => <div className="brand-item" key={brand.name}><Image src={brand.logo} alt={decorative ? "" : `Logo de ${brand.name}`} width={300} height={300} sizes="72px" /></div>)}</div>;
}

export default function BrandMarquee() {
  return <section className="brand-band" aria-label="Marcas con las que he trabajado"><div className="site-container"><h2 className="brand-heading">Marcas con las que he trabajado</h2></div><div className="brand-window"><div className="brand-track"><BrandList /><BrandList decorative /><BrandList decorative /><BrandList decorative /></div></div></section>;
}
