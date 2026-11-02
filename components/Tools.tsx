import { toolGroups } from "@/data";

export default function Tools() {
  return <section className="site-section tools-section" aria-labelledby="tools-title"><div className="site-container"><div className="section-intro"><p className="section-kicker">05 / HERRAMIENTAS</p><h2 id="tools-title">Las herramientas detrás de cada idea.</h2></div><div className="tool-groups">{toolGroups.map((group) => <div className="tool-group" key={group.title}><h3>{group.title}</h3><ul>{group.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul></div>)}</div></div></section>;
}
