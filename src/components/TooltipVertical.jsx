import React from "react";

function TooltipVertical() {
  return (
    <>

<button className="krds-btn small text krds-tooltip tooltip-vertical" data-tooltip="tooltip-vertical 옵션입니다" type="button">
  tooltip-vertical <i className="svg-icon ico-angle right"></i>
</button>
<button className="krds-btn icon krds-tooltip tooltip-vertical" data-tooltip="아이콘 버튼에 제공되는 툴팁" type="button">
<span className="sr-only">도움말</span>
<i className="svg-icon ico-help"></i>
</button>
<button className="krds-btn krds-tooltip tooltip-vertical" data-tooltip="버튼에 제공되는 툴팁" type="button">도움말</button>

    </>
  );
}

export default TooltipVertical;
