import React from "react";

function Link() {
  return (
    <>

<a className="krds-btn small link" href="https://www.site_name.com/" target="_blank" title="새 창 열림">
<span className="underline">기본 링크</span>
<i className="svg-icon ico-go"></i>
</a>
<a className="krds-btn medium link pure" href="#!">
<span className="underline">가상클래스 상태 시 컬러 유지</span>
</a>
<a className="krds-btn large link basic" href="#!" target="_blank" title="새 창 열림">
<span className="underline">본문 텍스트 컬러 링크</span>
<i className="svg-icon ico-go"></i>
</a>
<a className="krds-btn large link basic" href="#!">
<span className="underline hidden-underline">가상클래스 상태 시 밑줄</span>
</a>
<a className="krds-btn large link basic" href="#!">
<span>밑줄 없음</span>
</a>

    </>
  );
}

export default Link;
