import React from "react";

function TextList() {
  return (
    <>


<ul className="krds-info-list decimal">
<li>텍스트 목록 레벨1</li>
<li>
		텍스트 목록 레벨1
		<ul className="krds-info-list dash">
<li>텍스트 목록 레벨2</li>
<li>
				텍스트 목록 레벨2
				<ul className="krds-info-list hollow">
<li>텍스트 목록 레벨3</li>
<li>텍스트 목록 레벨3</li>
</ul>
</li>
<li>텍스트 목록 레벨2</li>
</ul>
</li>
<li>텍스트 목록 레벨1</li>
</ul>
<br/>
<br/>
<ul className="krds-info-list decimal">
<li>
		텍스트 목록 레벨1
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
		텍스트 목록 레벨1
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
</ul>


    </>
  );
}

export default TextList;
