import React from "react";

function CarouselBanner() {
  return (
    <>

<!--
 	해당 컴포넌트 사용 시 페이지에
 	/resources/css/plugin/swiper-bundle.min.css
 	/resources/js/plugin/swiper-bundle.min.js
 	를 추가 필요
 -->
<div className="main-sect">
<div className="inner">
<div className="main-box-responsive type-wrap">
<div className="d-fix">
<div className="main-tit-wrap">
<h2 className="tit">배너영역 타이틀</h2>
</div>
<div className="in">
<div className="main-d-ban-swiper">
<div className="swiper">
<ul className="swiper-wrapper">
<li className="swiper-slide">
<div className="text">
<p className="cate">서브타이틀</p>
<p className="tit">타이틀</p>
</div>
<div className="im">
<svg aria-label="예시" fill="none" height="178" viewbox="0 0 243 178" width="243" xmlns="http://www.w3.org/2000/svg">
<rect fill="#E6E8EA" height="178" width="243"></rect>
</svg>
</div>
</li>
<li className="swiper-slide">
<div className="text">
<p className="cate">서브타이틀</p>
<p className="tit">타이틀</p>
</div>
<div className="im">
<svg aria-label="예시" fill="none" height="178" viewbox="0 0 243 178" width="243" xmlns="http://www.w3.org/2000/svg">
<rect fill="#E6E8EA" height="178" width="243"></rect>
</svg>
</div>
</li>
</ul>
</div>
<div className="swiper-indicator">
<div className="swiper-pagination"></div>
<div className="swiper-controller">
<button className="swiper-button-play" type="button">
<span className="sr-only">슬라이드 재생</span>
</button>
<button className="swiper-button-stop" type="button">
<span className="sr-only">슬라이드 멈춤</span>
</button>
</div>
<div className="swiper-navigation">
<button className="swiper-button-prev" type="button">
<span className="sr-only">이전</span>
</button>
<button className="swiper-button-next" type="button">
<span className="sr-only">다음</span>
</button>
<a className="swiper-button-more" href="#">
<span className="sr-only">더 보기</span>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<script>
    const eleBanSwiper = new Swiper(".main-d-ban-swiper .swiper", {
        slidesPerView: 1,
        spaceBetween: 16,
        speed: 400,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: {
            nextEl: ".main-d-ban-swiper .swiper-button-next",
            prevEl: ".main-d-ban-swiper .swiper-button-prev",
        },
        pagination: {
            el: ".main-d-ban-swiper .swiper-pagination",
            type: "fraction",
        },
    });
    const $eleBanSwiperPlay = document.querySelector(".main-d-ban-swiper .swiper-button-play");
    const $eleBanSwiperStop = document.querySelector(".main-d-ban-swiper .swiper-button-stop");

    $eleBanSwiperPlay.style.display = "none";

    $eleBanSwiperPlay.addEventListener("click", () => {
        eleBanSwiper.autoplay.start();
        $eleBanSwiperStop.style.display = "";
        $eleBanSwiperPlay.style.display = "none";
    });

    $eleBanSwiperStop.addEventListener("click", () => {
        eleBanSwiper.autoplay.stop();
        $eleBanSwiperStop.style.display = "none";
        $eleBanSwiperPlay.style.display = "";
    });
</script>
    </>
  );
}

export default CarouselBanner;
