import React from "react";

function TextListOrdered() {
  return (
    <>


<ol className="krds-info-list ordered">
<li><span className="num">1. </span>텍스트 목록 레벨1</li>
<li>
<span className="num">2. </span>텍스트 목록 레벨1
    <ol className="krds-info-list ordered">
<li><span className="num">a. </span>텍스트 목록 레벨2</li>
<li>
<span className="num">b. </span>텍스트 목록 레벨2
        <ol className="krds-info-list ordered">
<li><span className="num">①</span>텍스트 목록 레벨3</li>
<li><span className="num">②</span>텍스트 목록 레벨3</li>
</ol>
</li>
<li><span className="num">c. </span>텍스트 목록 레벨2</li>
</ol>
</li>
<li><span className="num">3. </span>텍스트 목록 레벨1</li>
</ol>
<br/>
<br/>
<ol className="krds-info-list ordered">
<li>
<span className="num">1. </span>텍스트 목록 레벨1
    <ul className="krds-info-list dash">
<li>
        텍스트 목록 레벨2
        <ol className="krds-info-list ordered">
<li><span className="num">①</span>텍스트 목록 레벨3</li>
<li><span className="num">②</span>텍스트 목록 레벨3</li>
</ol>
</li>
</ul>
</li>
<li>
<span className="num">2. </span>텍스트 목록 레벨1
    <ol className="krds-info-list ordered">
<li>
<span className="num">a. </span>텍스트 목록 레벨2
				<ul className="krds-info-list hollow">
<li>텍스트 목록 레벨3</li>
<li>텍스트 목록 레벨3</li>
</ul>
</li>
</ol>
</li>
</ol>


    </>
  );
}

export default TextListOrdered;
