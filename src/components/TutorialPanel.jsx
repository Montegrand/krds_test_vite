import React from "react";

function TutorialPanel() {
  return (
    <>

<div id="container">
<div className="inner help-panel-flexible">



<button className="krds-btn small tertiary btn-help-panel expand btn-help-exec" type="button"><i className="svg-icon ico-fold"></i> 도움말</button>


<div className="krds-help-panel">

<div className="help-panel-wrap">
<div className="help-conts-area">
<!-- 탭	-->
<div className="krds-tab-area layer">

<div className="tab line">
<ul role="tablist">
<li aria-controls="helperTabpanel01" aria-selected="false" id="helperTab01" role="tab">
<button className="btn-tab" type="button">도움</button>
</li>
<li aria-controls="helperTabpanel02" aria-selected="true" className="active" id="helperTab02" role="tab">
<button className="btn-tab" type="button">따라하기 <i className="sr-only created"> 선택됨</i></button>
</li>
</ul>
</div>


<div className="tab-conts-wrap">
<section aria-labelledby="helperTab01" className="tab-conts" id="helperTabpanel01" role="tabpanel">
<h3 className="sr-only">도움</h3>
<div className="help-conts-area-inner">

<div className="conts-area help-conts">
<div className="conts-wrap">
<h4 className="help-title">
                        전자문서지갑
                        <span className="krds-btn medium icon">
<span className="sr-only">도움말</span>
<i className="svg-icon ico-help"></i>
</span>
</h4>
<div className="conts-desc">
<p>
                          전자문서지갑에서는 전자증명서 출력기능을 제공하지 않으며, 스마트폰 화면을 캡쳐하여 사용할 수 없습니다. 다만, 발급받은 전자증명서를
                          열람용으로 다운로드할 수는 있습니다.
                        </p>
</div>
<ul className="link-list">
<li>
<a className="krds-btn xsmall link basic" href="#" target="_blank" title="새 창 열림">
                            안드로이드 애플리케이션 다운로드
                            <i className="svg-icon ico-go"></i>
</a>
</li>
<li>
<a className="krds-btn xsmall link basic" href="#" target="_blank" title="새 창 열림">
                            iOS애플리케이션 다운로드
                            <i className="svg-icon ico-go"></i>
</a>
</li>
</ul>
</div>
</div>


<div className="conts-area related-service">
<div className="conts-wrap">
<h4 className="help-title">관련서비스/민원</h4>
<ul className="link-list">
<li>
<a className="krds-btn xsmall link basic" href="#">
                            영문 주민등록표등본
                            <i className="svg-icon ico-angle right"></i>
</a>
</li>
<li>
<a className="krds-btn xsmall link basic" href="#">
                            영문 주민등록표초본
                            <i className="svg-icon ico-angle right"></i>
</a>
</li>
<li>
<a className="krds-btn xsmall link basic" href="#">
                            주민등록표등본
                            <i className="svg-icon ico-angle right"></i>
</a>
</li>
</ul>
</div>
<div className="conts-wrap">
<h4 className="help-title">기타 문의/도움말</h4>
<ul className="link-list">
<li>
<a className="krds-btn xsmall link basic" href="#">
<i className="svg-icon ico-call"></i>
                            민원신청 관련 문의 전화 번호 찾기
                          </a>
</li>
<li>
<a className="krds-btn xsmall link basic" href="#">
<i className="svg-icon ico-faq"></i>
                            자주 묻는 질문 확인하기
                          </a>
</li>
</ul>
</div>
</div>

</div>
</section>
<section aria-labelledby="helperTab02" className="tab-conts active" id="helperTabpanel02" role="tabpanel">
<h3 className="sr-only">따라하기</h3>
<div className="help-conts-area-inner">
<div className="conts-area">
<h4 className="help-title">
<a href="#;" title="이전으로 돌아가기">
                        이사 전 살던 곳 정보 입력하기
                      </a>
</h4>
<ul className="coach-help-process">
<li>
<h4 className="tit current">Task 1: 이사 전에 살던 곳 주소 확인</h4>

<div className="krds-disclosure conts-expand-area">
<button className="btn-conts-expand" type="button">전체 2단계</button>
<div className="expand-wrap">
<div className="expand-in">
<ul className="krds-info-list decimal">
<li>단계1 : 주소조회</li>
<li>단계2 : 조회 결과 확인</li>
</ul>
</div>
</div>
</div>

</li>
<li>
<h4 className="tit">Task 2: 이사 갈 가족 구성원 선택하기</h4>

<div className="krds-disclosure conts-expand-area">
<button className="btn-conts-expand" type="button">전체 1단계</button>
<div className="expand-wrap">
<div className="expand-in">
<ul className="krds-info-list decimal">
<li>단계1 : 주소조회</li>
</ul>
</div>
</div>
</div>

</li>
</ul>
</div>

<div className="help-panel-action">
<button className="krds-btn medium secondary coach-btn-stop" type="button">그만 따라하기</button>
</div>

</div>
</section>
</div>

</div>


<button className="krds-btn small tertiary btn-help-panel fold" type="button">
<span className="sr-only">도움말</span> 접어두기 <i className="svg-icon ico-angle right"></i>
</button>

</div>
</div>

</div>



</div>
</div>

    </>
  );
}

export default TutorialPanel;
