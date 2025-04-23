import React from "react";

function LanguageSwitcher() {
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
<ul className="drop-list">
<li><a className="item-link active" href="#" lang="ko">한국어</a></li>
<li><a className="item-link" href="#" lang="en">English (영어)</a></li>
<li><a className="item-link" href="#" lang="zh">中文 (중국어)</a></li>
<li><a className="item-link" href="#" lang="ja">日本語 (일본어)</a></li>
<li><a className="item-link" href="#" lang="fr">français (프랑스어)</a></li>
</ul>
</div>
</div>
</div>

    </>
  );
}

export default LanguageSwitcher;
