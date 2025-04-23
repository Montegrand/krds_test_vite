import React from "react";

function CriticalAlerts() {
  return (
    <>

<div className="main-urgent-wrap">
<ul className="krds-critical-alerts">
<li>
<div className="critical-ban">
<span className="critical-badge danger">긴급</span>
<p className="critical-txt">긴급 공지 내용 표시</p>
<a className="krds-btn medium link basic" href="#">
<span className="m-hide">자세히 보기</span>
<i className="svg-icon ico-angle right"></i>
</a>
</div>
</li>
<li>
<div className="critical-ban">
<span className="critical-badge ok">안전</span>
<p className="critical-txt">긴급 공지 내용 표시</p>
<a className="krds-btn medium link basic" href="#">
<span className="m-hide">자세히 보기</span>
<i className="svg-icon ico-angle right"></i>
</a>
</div>
</li>
<li>
<div className="critical-ban">
<span className="critical-badge info">안내</span>
<p className="critical-txt">긴급 공지 내용 표시</p>
<a className="krds-btn medium link basic" href="#">
<span className="m-hide">자세히 보기</span>
<i className="svg-icon ico-angle right"></i>
</a>
</div>
</li>
</ul>
</div>

    </>
  );
}

export default CriticalAlerts;
