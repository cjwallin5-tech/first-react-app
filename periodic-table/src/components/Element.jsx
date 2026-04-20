import { categoryColors } from "../data/elements";
import "./Element.css";

export default function Element({ element, onClick }) {
  const color = categoryColors[element.category] || categoryColors.unknown;

  return (
    <div
      className="element"
      style={{ backgroundColor: color }}
      onClick={() => onClick(element)}
    >
      <span className="element-number">{element.number}</span>
      <span className="element-symbol">{element.symbol}</span>
      <span className="element-mass">{element.mass}</span>
    </div>
  );
}