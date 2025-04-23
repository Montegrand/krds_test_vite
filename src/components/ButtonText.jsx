import React from "react";

function ButtonText() {
  return (
    <>

<button className="krds-btn small text" type="button">텍스트 버튼</button>
<button className="krds-btn xsmall text" type="button">찜하기 <i className="svg-icon ico-like"></i></button>
<button className="krds-btn small text" type="button">주민등록표초본 <i className="svg-icon ico-angle right"></i></button>
<button className="krds-btn medium text" type="button">검색 <i className="svg-icon ico-sch"></i></button>
<button className="krds-btn xlarge text" type="button">자세히 보기 <i className="svg-icon ico-more"></i></button>
<button className="krds-btn text" type="button">파일다운로드 <i className="svg-icon ico-down"></i></button>
<button className="krds-btn text" disabled="" type="button">필터 <i className="svg-icon ico-filter"></i></button>

    </>
  );
}

export default ButtonText;
