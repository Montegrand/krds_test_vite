import React from "react";

function LanguageSwitcherPage() {
  return (
    <>

<div className="krds-drop-wrap krds-language">
<button className="krds-btn small text drop-btn" type="button">
<i className="svg-icon ico-global"></i>
    언어 변경
    <i className="svg-icon ico-toggle"></i>
</button>
<div className="drop-menu">
<div className="drop-in">
<div className="drop-top">
<p className="current-laguage">
<span>현재 언어</span>
<strong>한국어</strong>
</p>
</div>
<ul className="drop-list">
<li><a className="item-link" href="#" lang="en" target="_blank" title="새 창 열림">English (영어)<i className="svg-icon ico-go"></i></a></li>
<li><a className="item-link" href="#" lang="zh" target="_blank" title="새 창 열림">中文 (중국어)<i className="svg-icon ico-go"></i></a></li>
<li><a className="item-link" href="#" lang="ja" target="_blank" title="새 창 열림">日本語 (일본어)<i className="svg-icon ico-go"></i></a></li>
<li><a className="item-link" href="#" lang="fr" target="_blank" title="새 창 열림">français (프랑스어)<i className="svg-icon ico-go"></i></a></li>
</ul>
</div>
</div>
</div>

    </>
  );
}

export default LanguageSwitcherPage;
