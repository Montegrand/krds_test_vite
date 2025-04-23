import React from "react";

function MainMenuMobile() {
  return (
    <>


<div className="krds-main-menu-mobile sample" id="mobile-nav" style="display: block position: static visibility: visible">
<div className="gnb-wrap">

<div className="gnb-header">

<div className="gnb-utils">
<ul className="utility-list">
<li><button className="krds-btn xsmall text" type="button">메뉴명</button></li>
<li><button className="krds-btn xsmall text" type="button">메뉴명</button></li>
</ul>
</div>


<div className="gnb-login">


<button className="krds-btn large text" type="button"><i className="svg-icon ico-log"></i> 로그인을 해주세요</button>
</div>


<div className="gnb-service-menu">
<a className="link" href="#">메뉴명</a>
<a className="link" href="#">메뉴명</a>
<a className="link" href="#">메뉴명</a>
<a className="link" href="#">메뉴명</a>
</div>


<div className="sch-input">
<input className="krds-input" placeholder="찾고자 하는 메뉴명을 입력해 주세요" title="찾고자 하는 메뉴명 입력" type="text"/>
<button className="krds-btn medium icon ico-search" type="button">
<span className="sr-only">검색</span>
<i className="svg-icon ico-sch"></i>
</button>
</div>

</div>


<div className="gnb-body">

<div className="gnb-menu">
<div className="menu-wrap">
<ul>
<li>
<a className="gnb-main-trigger" href="#mGnb-anchor1">1Depth</a>
</li>
<li>
<a className="gnb-main-trigger" href="#mGnb-anchor2">1Depth</a>
</li>
<li>
<a className="gnb-main-trigger" href="#mGnb-anchor3">1Depth</a>
</li>
<li>
<a className="gnb-main-trigger" href="#mGnb-anchor4">1Depth</a>
</li>
<li>
<a className="gnb-main-trigger" href="#mGnb-anchor5">1Depth</a>
</li>
</ul>
</div>
<div className="submenu-wrap">
<div className="gnb-sub-list" id="mGnb-anchor1">
<h2 className="sub-title">1Depth</h2>
<ul>
<li><a className="gnb-sub-trigger" href="#">2Depth</a></li>
<li><a className="gnb-sub-trigger" href="#">2Depth</a></li>
<li><a className="gnb-sub-trigger" href="#">2Depth</a></li>
</ul>
</div>
<div className="gnb-sub-list" id="mGnb-anchor2">
<h2 className="sub-title">1Depth</h2>
<ul>
<li><a className="gnb-sub-trigger" href="#">2Depth</a></li>
<li><a className="gnb-sub-trigger" href="#">2Depth</a></li>
<li><a className="gnb-sub-trigger" href="#">2Depth</a></li>
</ul>
</div>
<div className="gnb-sub-list" id="mGnb-anchor3">
<h2 className="sub-title">1Depth</h2>
<ul>
<li><a className="gnb-sub-trigger" href="#">2Depth</a></li>
<li><a className="gnb-sub-trigger" href="#">2Depth</a></li>
<li><a className="gnb-sub-trigger" href="#">2Depth</a></li>
<li>
<a className="gnb-sub-trigger has-depth3" href="#">2Depth</a>
<div className="depth3-wrap">
<ul>
<li>
<a className="depth3-trigger has-depth4" href="#">3Depth</a>
<div className="depth4-wrap">
<div className="depth4-head">
<button className="krds-btn icon trigger-prev" type="button">
<span className="sr-only">이전화면</span>
<i className="svg-icon ico-angle left"></i>
</button>
<button className="krds-btn icon trigger-close" type="button">
<span className="sr-only">전체메뉴 닫기</span>
<i className="svg-icon ico-popup-close"></i>
</button>
</div>
<ul className="depth4-body">
<h4 className="sub-title">4Depth title</h4>
<ul className="depth4-ul">
<li><a href="#">depth title</a></li>
<li><a href="#">depth title</a></li>
<li><a href="#">depth title</a></li>
<li><a href="#">depth title</a></li>
</ul>
</ul>
</div>
</li>
<li><a className="depth3-trigger" href="#">3Depth</a></li>
<li><a className="depth3-trigger" href="#">3Depth</a></li>
</ul>
</div>
</li>
</ul>
</div>
<div className="gnb-sub-list" id="mGnb-anchor4">
<h2 className="sub-title">1Depth</h2>
<ul>
<li><a className="gnb-sub-trigger" href="#">2Depth</a></li>
<li><a className="gnb-sub-trigger" href="#">2Depth</a></li>
<li><a className="gnb-sub-trigger" href="#">2Depth</a></li>
</ul>
</div>
<div className="gnb-sub-list" id="mGnb-anchor5">
<h2 className="sub-title">1Depth</h2>
<ul>
<li><a className="gnb-sub-trigger" href="#">2Depth</a></li>
<li><a className="gnb-sub-trigger" href="#">2Depth</a></li>
<li><a className="gnb-sub-trigger" href="#">2Depth</a></li>
</ul>
</div>
</div>
</div>


<div className="gnb-bottom">
<a className="krds-btn small text" href="#">메뉴명 <i className="svg-icon ico-angle right"></i></a>
<a className="krds-btn small text" href="#" target="_blank" title="새 창 열기"> 메뉴명 <i className="svg-icon ico-go"></i></a>
</div>

</div>


<button className="krds-btn medium icon" id="close-nav" type="button">
<span className="sr-only">전체메뉴 닫기</span>
<i className="svg-icon ico-popup-close"></i>
</button>

</div>
</div>

    </>
  );
}

export default MainMenuMobile;
