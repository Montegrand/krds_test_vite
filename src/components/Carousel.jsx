import React from "react";

function Carousel() {
  return (
    <>

<!--
 	해당 컴포넌트 사용 시 페이지에
 	/resources/css/plugin/swiper-bundle.min.css
 	/resources/js/plugin/swiper-bundle.min.js
 	를 추가 필요
 -->

<div className="main-vban-wrap bg">
<div className="inner">
<div className="vb-swiper">
<div className="swiper">
<ul className="swiper-wrapper">
<li className="swiper-slide">
<div className="in">
<div className="text">
<p className="tit">타이틀 영역 <br className="w-hide"/>타이틀 영역</p>
<p className="txt">컨텐츠 영역 컨텐츠 영역 <br className="w-hide"/>컨텐츠 영역 컨텐츠 영역</p>
<a className="krds-btn primary" href="#">버튼 영역</a>
</div>
<div className="im">
<svg aria-label="예시" fill="none" height="178" viewbox="0 0 243 178" width="243" xmlns="http://www.w3.org/2000/svg">
<rect fill="#E6E8EA" height="178" width="243"></rect>
</svg>
</div>
</div>
</li>
<li className="swiper-slide">
<div className="in">
<div className="text">
<p className="tit">타이틀 영역 <br className="w-hide"/>타이틀 영역</p>
<p className="txt">컨텐츠 영역 컨텐츠 영역 <br className="w-hide"/>컨텐츠 영역 컨텐츠 영역</p>
<a className="krds-btn primary" href="#">버튼 영역</a>
</div>
<div className="im">
<svg aria-label="예시" fill="none" height="178" viewbox="0 0 243 178" width="243" xmlns="http://www.w3.org/2000/svg">
<rect fill="#E6E8EA" height="178" width="243"></rect>
</svg>
</div>
</div>
</li>
<li className="swiper-slide">
<div className="in">
<div className="text">
<p className="tit">타이틀 영역 <br className="w-hide"/>타이틀 영역</p>
<p className="txt">컨텐츠 영역 컨텐츠 영역 <br className="w-hide"/>컨텐츠 영역 컨텐츠 영역</p>
<a className="krds-btn primary" href="#">버튼 영역</a>
</div>
<div className="im">
<svg aria-label="예시" fill="none" height="178" viewbox="0 0 243 178" width="243" xmlns="http://www.w3.org/2000/svg">
<rect fill="#E6E8EA" height="178" width="243"></rect>
</svg>
</div>
</div>
</li>
<li className="swiper-slide">
<div className="in">
<div className="text">
<p className="tit">타이틀 영역 <br className="w-hide"/>타이틀 영역</p>
<p className="txt">컨텐츠 영역 컨텐츠 영역 <br className="w-hide"/>컨텐츠 영역 컨텐츠 영역</p>
<a className="krds-btn primary" href="#">버튼 영역</a>
</div>
<div className="im">
<svg aria-label="예시" fill="none" height="178" viewbox="0 0 243 178" width="243" xmlns="http://www.w3.org/2000/svg">
<rect fill="#E6E8EA" height="178" width="243"></rect>
</svg>
</div>
</div>
</li>
</ul>
</div>
<button className="swiper-button-prev" type="button">
<span className="sr-only">이전</span>
</button>
<button className="swiper-button-next" type="button">
<span className="sr-only">다음</span>
</button>
<div className="swiper-indicator text-center">
<div className="swiper-pagination"></div>
<a className="swiper-button-more" href="#">
<span className="sr-only">더 보기</span>
</a>
</div>
</div>
</div>
</div>

<script>
	//비주얼 배너
	const vbSwiper = new Swiper('.vb-swiper .swiper', {
		slidesPerView: 1,
		spaceBetween: 0,
		speed: 400,
		loop: true,
		navigation: {
			nextEl: '.vb-swiper .swiper-button-next',
			prevEl: '.vb-swiper .swiper-button-prev',
		},
		pagination: {
			el: ".vb-swiper .swiper-pagination",
			clickable: true,
		},
	});
</script>

    </>
  );
}

export default Carousel;
