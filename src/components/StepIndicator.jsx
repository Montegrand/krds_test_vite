import React from "react";

function StepIndicator() {
  return (
    <>


<ol className="krds-step-wrap">
<li className="done">
<span>
<i className="step">1단계</i>
<span className="step-tit">단계 레이블</span>
</span>
</li>
<li className="done">
<span>
<i className="step">2단계</i>
<span className="step-tit">단계 레이블</span>
</span>
</li>
<li className="done">
<span>
<i className="step">3단계</i>
<span className="step-tit">단계 레이블</span>
</span>
</li>
<li className="active">
<span>
<em className="sr-only">현재단계</em>
<i className="step">4단계</i>
<span className="step-tit">단계 레이블</span>
</span>
</li>
<li>
<span>
<i className="step">5단계</i>
<span className="step-tit">단계 레이블</span>
</span>
</li>
</ol>

<br/>
<br/>

<div className="page-title-wrap between">
<h2 className="h-tit">타이틀</h2>

<ol className="krds-step-wrap">
<li className="done">
<span>
<i className="step">1단계</i>
<span className="step-tit">유의 사항 확인</span>
</span>
</li>
<li className="done">
<span>
<i className="step">2단계</i>
<span className="step-tit">신청인 정보</span>
</span>
</li>
<li className="active">
<span>
<em className="sr-only">현재단계</em>
<i className="step">3단계</i>
<span className="step-tit">이사 전 살던 곳</span>
</span>
</li>
<li>
<span>
<i className="step">4단계</i>
<span className="step-tit">이사 온 곳</span>
</span>
</li>
</ol>

</div>


    </>
  );
}

export default StepIndicator;
