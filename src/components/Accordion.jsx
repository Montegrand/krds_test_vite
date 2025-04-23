import React from "react";

function Accordion({ items = [] }) {
  return (
    <div className="krds-accordion">
      {items.map((item, idx) => {
        const thisIdx = ('0'+(idx+1)).slice(-2);
        return (
        <div className="accordion-item" key={`accordion-${thisIdx}`}>
          <h5 className="accordion-header">
            <button
              aria-controls={`accordionCollapseSample${thisIdx}`}
              className="btn-accordion"
              id={`accordionHeaderSample${thisIdx}`}
              type="button"
            >
              {item.title}
            </button>
          </h5>
          <div
            aria-labelledby={`accordionHeaderSample${thisIdx}`}
            className="accordion-collapse collapse"
            id={`accordionCollapseSample${thisIdx}`}
          >
            <div className="accordion-body">{item.content}</div>
          </div>
        </div>
      )})}
    </div>
  );
}

export default Accordion;
