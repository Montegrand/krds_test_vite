import React from "react";

function Header() {
  return (
    <>
      <header id="krds-header">
        <div className="header-in">
          <div className="header-container">
            <div className="inner">
              <div className="header-utility">
                <ul className="utility-list">
                  <li>
                    <a
                      className="krds-btn small text"
                      href="#"
                      target="_blank"
                      title="새 창 열기"
                    >
                      메뉴명 <i className="svg-icon ico-go"></i>
                    </a>
                  </li>
                  <li>
                    <div className="krds-drop-wrap">
                      <button
                        className="krds-btn small text drop-btn"
                        type="button"
                      >
                        메뉴명 <i className="svg-icon ico-toggle"></i>
                      </button>
                      <div className="drop-menu">
                        <div className="drop-in">
                          <ul className="drop-list">
                            <li>
                              <a className="item-link" href="#">
                                메뉴명
                              </a>
                            </li>
                            <li>
                              <a className="item-link" href="#">
                                메뉴명
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="krds-drop-wrap krds-resize">
                      <button
                        className="krds-btn small text drop-btn"
                        type="button"
                      >
                        메뉴명 <i className="svg-icon ico-toggle"></i>
                      </button>
                      <div className="drop-menu">
                        <div className="drop-in">
                          <ul className="drop-list">
                            <li>
                              <button className="item-link sm" type="button">
                                메뉴명
                              </button>
                            </li>
                            <li>
                              <button
                                className="item-link md active"
                                type="button"
                              >
                                메뉴명
                              </button>
                            </li>
                            <li>
                              <button className="item-link lg" type="button">
                                메뉴명
                              </button>
                            </li>
                            <li>
                              <button className="item-link xlg" type="button">
                                메뉴명
                              </button>
                            </li>
                            <li>
                              <button className="item-link xxlg" type="button">
                                메뉴명
                              </button>
                            </li>
                          </ul>
                          <div className="drop-bottom">
                            <button
                              className="krds-btn medium text"
                              type="button"
                            >
                              <i className="svg-icon ico-reset"></i> 초기화
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="krds-drop-wrap">
                      <button
                        className="krds-btn small text drop-btn"
                        type="button"
                      >
                        메뉴명 <i className="svg-icon ico-toggle"></i>
                      </button>
                      <div className="drop-menu">
                        <div className="drop-in">
                          <ul className="drop-list">
                            <li>
                              <a
                                className="item-link ico-go"
                                href="#"
                                target="_blank"
                                title="새 창 열림"
                              >
                                메뉴명
                              </a>
                            </li>
                            <li>
                              <a
                                className="item-link ico-go"
                                href="#"
                                target="_blank"
                                title="새 창 열림"
                              >
                                메뉴명
                              </a>
                            </li>
                            <li>
                              <a
                                className="item-link ico-go"
                                href="#"
                                target="_blank"
                                title="새 창 열림"
                              >
                                메뉴명
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="header-branding">
                <h2 className="logo">
                  <a href="/">
                    <span className="sr-only">KRDS - Korea Design System</span>
                  </a>
                </h2>
                <div className="header-actions">
                  <button
                    className="btn-navi sch"
                    title="통합검색 레이어"
                    type="button"
                  >
                    통합검색
                  </button>
                  <a className="btn-navi login" href="#">
                    로그인
                  </a>
                  <button className="btn-navi join" type="button">
                    회원가입
                  </button>
                  <div className="krds-drop-wrap my-drop">
                    <button className="btn-navi my drop-btn" type="button">
                      나의 GOV
                    </button>
                    <div className="drop-menu">
                      <div className="drop-in">
                        <div className="drop-top">
                          <p className="my-name">홍길동님</p>
                          <dl className="my-time">
                            <dt>로그아웃까지 남은 시간</dt>
                            <dd>
                              <span className="time">12:00</span>
                              <button
                                className="krds-btn medium text"
                                type="button"
                              >
                                시간 연장
                              </button>
                            </dd>
                          </dl>
                        </div>
                        <ul className="drop-list">
                          <li>
                            <a className="item-link" href="#">
                              나의 GOV 홈
                            </a>
                          </li>
                          <li>
                            <a className="item-link" href="#">
                              나의 신청내역
                            </a>
                          </li>
                          <li>
                            <a className="item-link" href="#">
                              나의 생활정보
                            </a>
                          </li>
                          <li>
                            <a className="item-link" href="#">
                              나의 정보관리
                            </a>
                          </li>
                        </ul>
                        <div className="drop-bottom">
                          <button
                            className="krds-btn medium text"
                            type="button"
                          >
                            <i className="svg-icon ico-logout"></i> 로그아웃
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    aria-controls="mobile-nav"
                    className="btn-navi all"
                    type="button"
                  >
                    전체메뉴
                  </button>
                </div>
              </div>
            </div>
          </div>

          <nav className="krds-main-menu">
            <div className="inner">
              <ul className="gnb-menu">
                <li>
                  <button
                    className="gnb-main-trigger"
                    data-trigger="gnb"
                    type="button"
                  >
                    1Depth
                  </button>

                  <div className="gnb-toggle-wrap">
                    <div className="gnb-main-list" data-has-submenu="true">
                      <ul>
                        <li>
                          <button
                            className="gnb-sub-trigger"
                            data-trigger="gnb"
                            type="button"
                          >
                            2Depth
                          </button>

                          <div className="gnb-sub-list">
                            <div className="gnb-sub-content">
                              <h2 className="sub-title">
                                2Depth title
                                <a
                                  className="krds-btn link basic small"
                                  href="#"
                                >
                                  <span className="underline">바로가기</span>
                                  <i className="svg-icon ico-angle right"></i>
                                </a>
                              </h2>
                              <ul>
                                <li>
                                  <a href="#">Last depth</a>
                                </li>
                                <li>
                                  <button type="button">Last depth</button>
                                </li>
                              </ul>
                            </div>
                            <div className="gnb-sub-banner">
                              <span className="krds-badge bg-secondary">
                                신규 서비스
                              </span>
                              <button
                                className="krds-btn medium text"
                                type="button"
                              >
                                메뉴명{" "}
                                <i className="svg-icon ico-angle right"></i>
                              </button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <button
                            className="gnb-sub-trigger"
                            data-trigger="gnb"
                            type="button"
                          >
                            2Depth
                          </button>

                          <div className="gnb-sub-list between">
                            <div className="gnb-sub-content">
                              <h2 className="sub-title">
                                2Depth title
                                <a
                                  className="krds-btn link basic small"
                                  href="#"
                                >
                                  <span className="underline">바로가기</span>
                                  <i className="svg-icon ico-angle right"></i>
                                </a>
                              </h2>
                              <ul>
                                <li>
                                  <a href="#">Last depth</a>
                                </li>
                                <li>
                                  <button type="button">Last depth</button>
                                </li>
                                <li>
                                  <button type="button">Last depth</button>
                                </li>
                              </ul>
                            </div>
                            <div className="gnb-sub-banner">
                              <span className="krds-badge bg-secondary">
                                신규 서비스
                              </span>
                              <button
                                className="krds-btn medium text"
                                type="button"
                              >
                                메뉴명{" "}
                                <i className="svg-icon ico-angle right"></i>
                              </button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a
                            className="gnb-sub-trigger is-link"
                            data-trigger="gnb"
                            href="#"
                          >
                            2Depth
                          </a>
                        </li>
                        <li>
                          <a
                            className="gnb-sub-trigger is-link external-link"
                            data-trigger="gnb"
                            href="#"
                            target="_blank"
                            title="새 창 열림"
                          >
                            2Depth
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <button
                    className="gnb-main-trigger"
                    data-trigger="gnb"
                    type="button"
                  >
                    1Depth
                  </button>

                  <div className="gnb-toggle-wrap">
                    <div className="gnb-main-list" data-has-submenu="true">
                      <ul>
                        <li>
                          <button
                            className="gnb-sub-trigger"
                            data-trigger="gnb"
                            type="button"
                          >
                            2Depth
                          </button>

                          <div className="gnb-sub-list">
                            <div className="gnb-sub-content">
                              <h2 className="sub-title">
                                <span>2Depth title</span>
                              </h2>
                              <ul className="type-description">
                                <li>
                                  <h3 className="tit">
                                    <a
                                      href="#"
                                      target="_blank"
                                      title="새 창 열림"
                                    >
                                      3Depth title{" "}
                                      <i className="svg-icon ico-go"></i>
                                    </a>
                                  </h3>
                                  <p className="txt">
                                    메뉴명과 메뉴에 관한 간략한 설명이 표시되는
                                    스타일입니다.
                                  </p>
                                </li>
                              </ul>
                            </div>
                            <div className="gnb-sub-banner">
                              <span className="krds-badge bg-secondary">
                                신규 서비스
                              </span>
                              <button
                                className="krds-btn medium text"
                                type="button"
                              >
                                메뉴명{" "}
                                <i className="svg-icon ico-angle right"></i>
                              </button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <button
                            className="gnb-sub-trigger"
                            data-trigger="gnb"
                            type="button"
                          >
                            2Depth
                          </button>

                          <div className="gnb-sub-list between">
                            <div className="gnb-sub-content">
                              <h2 className="sub-title">
                                <span>2Depth title</span>
                              </h2>
                              <ul className="type-description">
                                <li>
                                  <h3 className="tit">
                                    <a
                                      href="#"
                                      target="_blank"
                                      title="새 창 열림"
                                    >
                                      3Depth title{" "}
                                      <i className="svg-icon ico-go"></i>
                                    </a>
                                  </h3>
                                  <p className="txt">
                                    메뉴명과 메뉴에 관한 간략한 설명이 표시되는
                                    스타일입니다.
                                  </p>
                                </li>
                              </ul>
                            </div>
                            <div className="gnb-sub-banner">
                              <span className="krds-badge bg-secondary">
                                신규 서비스
                              </span>
                              <button
                                className="krds-btn medium text"
                                type="button"
                              >
                                메뉴명{" "}
                                <i className="svg-icon ico-angle right"></i>
                              </button>
                            </div>
                          </div>
                        </li>
                        <li>
                          <a
                            className="gnb-sub-trigger is-link"
                            data-trigger="gnb"
                            href="#"
                          >
                            2Depth
                          </a>
                        </li>
                        <li>
                          <a
                            className="gnb-sub-trigger is-link external-link"
                            data-trigger="gnb"
                            href="#"
                            target="_blank"
                            title="새 창 열림"
                          >
                            2Depth
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <button
                    className="gnb-main-trigger"
                    data-trigger="gnb"
                    type="button"
                  >
                    1Depth
                  </button>

                  <div className="gnb-toggle-wrap">
                    <div className="gnb-main-list">
                      <div className="gnb-sub-list single-list between">
                        <div className="gnb-sub-content">
                          <h2 className="sub-title">
                            <span>2Depth title</span>
                          </h2>
                          <ul>
                            <li>
                              <a href="#">Last depth</a>
                            </li>
                            <li>
                              <a href="#">Last depth</a>
                            </li>
                            <li>
                              <a href="#">Last depth</a>
                            </li>
                            <li>
                              <a href="#">Last depth</a>
                            </li>
                            <li>
                              <a href="#">Last depth</a>
                            </li>
                            <li>
                              <a href="#">Last depth</a>
                            </li>
                            <li>
                              <a href="#">Last depth</a>
                            </li>
                            <li>
                              <a href="#">Last depth</a>
                            </li>
                            <li>
                              <a href="#">Last depth</a>
                            </li>
                          </ul>
                        </div>
                        <div className="gnb-sub-banner">
                          <span className="krds-badge bg-secondary">
                            신규 서비스
                          </span>
                          <button
                            className="krds-btn medium text"
                            type="button"
                          >
                            메뉴명 <i className="svg-icon ico-angle right"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a
                    className="gnb-main-trigger is-link"
                    data-trigger="gnb"
                    href="#"
                  >
                    링크(anchor)
                  </a>
                </li>
                <li>
                  <button
                    className="gnb-main-trigger is-link"
                    data-trigger="gnb"
                    type="button"
                  >
                    링크(anchor)
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="krds-main-menu-mobile" id="mobile-nav">
          <div className="gnb-wrap">
            <div className="gnb-header">
              <div className="gnb-utils">
                <ul className="utility-list">
                  <li>
                    <button className="krds-btn xsmall text" type="button">
                      메뉴명
                    </button>
                  </li>
                  <li>
                    <button className="krds-btn xsmall text" type="button">
                      메뉴명
                    </button>
                  </li>
                </ul>
              </div>

              <div className="gnb-login">
                {/*<span class="user">홍길동님</span>
					<button type="button" class="krds-btn large text"><i class="svg-icon ico-logout"></i> 로그아웃</button>*/}
                <button className="krds-btn large text" type="button">
                  <i className="svg-icon ico-log"></i> 로그인을 해주세요
                </button>
              </div>

              <div className="gnb-service-menu">
                <a className="link" href="#">
                  메뉴명
                </a>
                <a className="link" href="#">
                  메뉴명
                </a>
                <a className="link" href="#">
                  메뉴명
                </a>
                <a className="link" href="#">
                  메뉴명
                </a>
              </div>

              <div className="sch-input">
                <input
                  className="krds-input"
                  placeholder="찾고자 하는 메뉴명을 입력해 주세요"
                  title="찾고자 하는 메뉴명 입력"
                  type="text"
                />
                <button
                  className="krds-btn medium icon ico-search"
                  type="button"
                >
                  <span className="sr-only">검색</span>
                  <i className="svg-icon ico-sch"></i>
                </button>
              </div>
            </div>

            <div className="gnb-body">
              <div className="gnb-menu">
                <div className="menu-wrap">
                  <ul>
                    <li>
                      <a className="gnb-main-trigger" href="#mGnb-anchor1">
                        1Depth
                      </a>
                    </li>
                    <li>
                      <a className="gnb-main-trigger" href="#mGnb-anchor2">
                        1Depth
                      </a>
                    </li>
                    <li>
                      <a className="gnb-main-trigger" href="#mGnb-anchor3">
                        1Depth
                      </a>
                    </li>
                    <li>
                      <a className="gnb-main-trigger" href="#mGnb-anchor4">
                        1Depth
                      </a>
                    </li>
                    <li>
                      <a className="gnb-main-trigger" href="#mGnb-anchor5">
                        1Depth
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="submenu-wrap">
                  <div className="gnb-sub-list" id="mGnb-anchor1">
                    <h2 className="sub-title">1Depth</h2>
                    <ul>
                      <li>
                        <a className="gnb-sub-trigger" href="#">
                          2Depth
                        </a>
                      </li>
                      <li>
                        <a className="gnb-sub-trigger" href="#">
                          2Depth
                        </a>
                      </li>
                      <li>
                        <a className="gnb-sub-trigger" href="#">
                          2Depth
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="gnb-sub-list" id="mGnb-anchor2">
                    <h2 className="sub-title">1Depth</h2>
                    <ul>
                      <li>
                        <a className="gnb-sub-trigger" href="#">
                          2Depth
                        </a>
                      </li>
                      <li>
                        <a className="gnb-sub-trigger" href="#">
                          2Depth
                        </a>
                      </li>
                      <li>
                        <a className="gnb-sub-trigger" href="#">
                          2Depth
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="gnb-sub-list" id="mGnb-anchor3">
                    <h2 className="sub-title">1Depth</h2>
                    <ul>
                      <li>
                        <a className="gnb-sub-trigger" href="#">
                          2Depth
                        </a>
                      </li>
                      <li>
                        <a className="gnb-sub-trigger" href="#">
                          2Depth
                        </a>
                      </li>
                      <li>
                        <a className="gnb-sub-trigger" href="#">
                          2Depth
                        </a>
                      </li>
                      <li>
                        <a className="gnb-sub-trigger has-depth3" href="#">
                          2Depth
                        </a>
                        <div className="depth3-wrap">
                          <ul>
                            <li>
                              <a className="depth3-trigger has-depth4" href="#">
                                3Depth
                              </a>
                              <div className="depth4-wrap">
                                <div className="depth4-head">
                                  <button
                                    className="krds-btn icon trigger-prev"
                                    type="button"
                                  >
                                    <span className="sr-only">이전화면</span>
                                    <i className="svg-icon ico-angle left"></i>
                                  </button>
                                  <button
                                    className="krds-btn icon trigger-close"
                                    type="button"
                                  >
                                    <span className="sr-only">
                                      전체메뉴 닫기
                                    </span>
                                    <i className="svg-icon ico-popup-close"></i>
                                  </button>
                                </div>
                                <ul className="depth4-body">
                                  <h4 className="sub-title">4Depth title</h4>
                                  <ul className="depth4-ul">
                                    <li>
                                      <a href="#">depth title</a>
                                    </li>
                                    <li>
                                      <a href="#">depth title</a>
                                    </li>
                                    <li>
                                      <a href="#">depth title</a>
                                    </li>
                                    <li>
                                      <a href="#">depth title</a>
                                    </li>
                                  </ul>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <a className="depth3-trigger" href="#">
                                3Depth
                              </a>
                            </li>
                            <li>
                              <a className="depth3-trigger" href="#">
                                3Depth
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="gnb-sub-list" id="mGnb-anchor4">
                    <h2 className="sub-title">1Depth</h2>
                    <ul>
                      <li>
                        <a className="gnb-sub-trigger" href="#">
                          2Depth
                        </a>
                      </li>
                      <li>
                        <a className="gnb-sub-trigger" href="#">
                          2Depth
                        </a>
                      </li>
                      <li>
                        <a className="gnb-sub-trigger" href="#">
                          2Depth
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="gnb-sub-list" id="mGnb-anchor5">
                    <h2 className="sub-title">1Depth</h2>
                    <ul>
                      <li>
                        <a className="gnb-sub-trigger" href="#">
                          2Depth
                        </a>
                      </li>
                      <li>
                        <a className="gnb-sub-trigger" href="#">
                          2Depth
                        </a>
                      </li>
                      <li>
                        <a className="gnb-sub-trigger" href="#">
                          2Depth
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="gnb-bottom">
                <a className="krds-btn medium text" href="#">
                  메뉴명 <i className="svg-icon ico-angle right"></i>
                </a>
                <a
                  className="krds-btn medium text"
                  href="#"
                  target="_blank"
                  title="새 창 열기"
                >
                  {" "}
                  메뉴명 <i className="svg-icon ico-go"></i>
                </a>
              </div>
            </div>

            <button
              className="krds-btn medium icon"
              id="close-nav"
              type="button"
            >
              <span className="sr-only">전체메뉴 닫기</span>
              <i className="svg-icon ico-popup-close"></i>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
