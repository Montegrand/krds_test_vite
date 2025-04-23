import React from "react";

function Breadcrumb() {
  return (
    <>

<nav aria-label="현재 경로" className="krds-breadcrumb-wrap" id="breadcrumb">
<ol className="breadcrumb">
<li className="home"><a className="txt" href="#">홈</a></li>
<li><a className="txt" href="#">서비스 신청</a></li>
<li><a className="txt" href="#">서비스 신청2</a></li>
</ol>
</nav>

    </>
  );
}

export default Breadcrumb;
