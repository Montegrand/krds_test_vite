import React from "react";

function AccordionLine() {
  return (
    <>

<div className="krds-accordion type-line">
<div className="accordion-item">
<h5 className="accordion-header"><button aria-controls="accordionCollapseSample01" className="btn-accordion" id="accordionHeaderSample01" type="button">아코디언 타이틀 영역</button></h5>
<div aria-labelledby="accordionHeaderSample01" className="accordion-collapse collapse" id="accordionCollapseSample01">
<div className="accordion-body">

				아코디언 내용 영역

</div>
</div>
</div>
<div className="accordion-item">
<h5 className="accordion-header"><button aria-controls="accordionCollapseSample02" className="btn-accordion" id="accordionHeaderSample02" type="button">아코디언 타이틀 영역</button></h5>
<div aria-labelledby="accordionHeaderSample02" className="accordion-collapse collapse" id="accordionCollapseSample02">
<div className="accordion-body">

				아코디언 내용 영역

</div>
</div>
</div>
</div>

    </>
  );
}

export default AccordionLine;
