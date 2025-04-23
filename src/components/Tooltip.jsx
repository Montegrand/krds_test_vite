import React from "react";

function Tooltip() {
  return (
    <>

<button className="krds-btn small text krds-tooltip" data-tooltip="툴팁의 기본 설정입니다" type="button">
	tooltip-horizontal <i className="svg-icon ico-angle right"></i>
</button>
<button className="krds-btn icon krds-tooltip" data-tooltip="아이콘 버튼에 제공되는 툴팁" type="button">
<span className="sr-only">도움말</span>
<i className="svg-icon ico-help"></i>
</button>
<button className="krds-btn krds-tooltip" data-tooltip="버튼에 제공되는 툴팁" type="button">도움말</button>

    </>
  );
}

export default Tooltip;
