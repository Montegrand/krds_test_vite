import React from "react";

function ButtonIcon() {
  return (
    <>

<button className="krds-btn icon" type="button">
<span className="sr-only">검색</span>
<i className="svg-icon ico-sch"></i>
</button>
<button className="krds-btn icon medium" type="button">
<span className="sr-only">입력한 비밀번호 보기</span>
<i className="svg-icon ico-pw-visible"></i>
</button>
<button className="krds-btn icon medium btn-help-exec">
<span className="sr-only">도움말</span>
<i className="svg-icon ico-help"></i>
</button>
<button className="krds-btn large icon border" type="button">
<span className="sr-only">새로고침</span>
<i className="svg-icon ico-refresh"></i>
</button>
<button className="krds-btn large icon border" disabled="" type="button">
<span className="sr-only">열기</span>
<i className="svg-icon ico-angle down"></i>
</button>

    </>
  );
}

export default ButtonIcon;
