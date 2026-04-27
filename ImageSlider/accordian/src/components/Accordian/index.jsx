import "./styles.css";
import data from "./data";
import { useState } from "react";

export default function Accordian() {
  const [selected, setSelected] = useState(null);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item" key={item.id ?? item.question}>
              
              {/* Title */}
              <div
                className="title"
                onClick={() => handleSingleSelection(item.id)}
              >
                <h3>{item.question}</h3>
                <span>{selected === item.id ? "-" : "+"}</span>
              </div>

             
              {selected === item.id && (
                <div className="content">{item.answer}</div>
              )}

            </div>
          ))
        ) : (
          "No data found"
        )}
      </div>
    </div>
  );
}