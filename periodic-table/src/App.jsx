import { useState } from "react";
import { elements, categoryColors } from "./data/elements";
import Element from "./components/Element";
import "./App.css";

function App() {
  const [selected, setSelected] = useState(null);

  const getElementStyle = (element) => {
    let row = element.period;
    let col = element.group;

    if (element.category === "lanthanide") {
      row = 9;
      col = element.number - 54;
    } else if (element.category === "actinide") {
      row = 10;
      col = element.number - 86;
    }

    return {
      left: `${(col - 1) * 56}px`,
      top: `${(row - 1) * 56}px`,
    };
  };

  return (
    <div className="app">
      <h1>Interactive Periodic Table</h1>
      <div className="legend">
        {Object.entries(categoryColors).map(([category, color]) => (
          <div key={category} className="legend-item">
            <div className="legend-color" style={{ backgroundColor: color }} />
            <span>{category.replace(/-/g, " ")}</span>
          </div>
        ))}
      </div>
      <div className="periodic-table">
        {elements.map((el) => (
          <div key={el.number} className="element-wrapper" style={getElementStyle(el)}>
            <Element element={el} onClick={setSelected} />
          </div>
        ))}
      </div>
      {selected && (
        <div className="details-panel">
          <h2>{selected.name}</h2>
          <p><strong>Atomic Number:</strong> {selected.number}</p>
          <p><strong>Symbol:</strong> {selected.symbol}</p>
          <p><strong>Atomic Mass:</strong> {selected.mass}</p>
          <p><strong>Category:</strong> {selected.category.replace(/-/g, " ")}</p>
          <p><strong>Group:</strong> {selected.group}</p>
          <p><strong>Period:</strong> {selected.period}</p>
        </div>
      )}
    </div>
  );
}

export default App;