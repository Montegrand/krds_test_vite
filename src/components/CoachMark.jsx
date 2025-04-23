import React from "react";

function CoachMark() {
  return (
    <>

<div className="txt-box bg-white bg-white krds-coach-mark">

<div className="coach-balloon">
<h5 className="sr-only">따라하기 가이드</h5>
<h6 className="coach-tit">1단계 : 코치 마크</h6>
<p className="desc">1단계 코치 마크 내용입니다.</p>
<div className="coach-controls">
<div className="num">
<span className="sr-only">현재 단계</span>
<strong>1</strong>
<span className="sr-only">총 단계</span>
<span>4</span>
</div>
<div className="btn-wrap">
<button className="krds-btn small text" type="button">그만보기</button>
<button className="krds-btn small tertiary" type="button">다음으로</button>
</div>
</div>
</div>
<!--// 따라하기 말풍선 -->

<div>
<h3>코치 마크 내용</h3>
</div>

</div>

    </>
  );
}

export default CoachMark;
