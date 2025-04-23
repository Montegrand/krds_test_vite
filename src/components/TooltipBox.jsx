import React from "react";

function TooltipBox() {
  return (
    <>

<button className="krds-btn small text krds-tooltip tooltip-box" data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다." type="button">
  tooltip-box
  <i className="svg-icon ico-angle right"></i>
</button>
<button className="krds-btn icon krds-tooltip tooltip-box" data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다." type="button">
<span className="sr-only">도움말</span>
<i className="svg-icon ico-help"></i>
</button>
<button className="krds-btn krds-tooltip tooltip-box" data-tooltip="tooltip-box 툴팁은 150자 내외의 텍스트만 제공되어야 합니다. 내부에 닫기 버튼을 포함한 대화형 요소를 사용하지 않습니다. 본문을 가리지 않도록 주의합니다." type="button">도움말</button>

    </>
  );
}

export default TooltipBox;
