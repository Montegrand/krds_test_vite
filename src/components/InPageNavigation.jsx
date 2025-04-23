import React from "react";

function InPageNavigation() {
  return (
    <>

<div className="krds-in-page-navigation-type">

<div className="krds-in-page-navigation-area">
<div className="in-page-navigation-header">
<p className="quick-caption">이 페이지의 구성</p>
<p className="quick-title">장애아동수당</p>
</div>
<nav className="in-page-navigation-list">
<ul>
<li><a className="active" href="#section_01">서비스 개요</a></li>
<li><a href="#section_02">서비스 상세</a></li>
<li><a href="#section_03">신청 방법 및 절차</a></li>
<li><a href="#section_04">제출 서류</a></li>
<li><a href="#section_05">함께 신청할 수 있는 서비스</a></li>
<li><a href="#section_06">부가정보</a></li>
<li><a href="#section_07">정보 변경 내역</a></li>
</ul>
</nav>
<div className="in-page-navigation-action">
<button className="krds-btn medium" type="button">온라인 신청하기</button>
<p className="quick-info">장애아동수당 외 <strong>1건</strong></p>
</div>
</div>

</div>

    </>
  );
}

export default InPageNavigation;
