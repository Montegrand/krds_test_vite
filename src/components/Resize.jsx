import React from "react";

function Resize() {
  return (
    <>

<div className="krds-drop-wrap krds-resize" data-adjust="scale">
<button className="krds-btn small text drop-btn" type="button">화면크기 <i className="svg-icon ico-toggle"></i></button>
<div className="drop-menu">
<div className="drop-in">
<ul className="drop-list">
<li><button className="item-link sm" data-adjust-scale="sm" type="button">작게</button></li>
<li><button className="item-link md active" data-adjust-scale="md" type="button">보통</button></li>
<li><button className="item-link lg" data-adjust-scale="lg" type="button">조금 크게</button></li>
<li><button className="item-link xlg" data-adjust-scale="xlg" type="button">크게</button></li>
<li><button className="item-link xxlg" data-adjust-scale="xxlg" type="button">가장크게</button></li>
</ul>
<div className="drop-bottom">
<button className="krds-btn medium text" data-adjust-scale="md" type="button"><i className="svg-icon ico-reset"></i> 초기화</button>
</div>
</div>
</div>
</div>

    </>
  );
}

export default Resize;
