import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    const initKRDS = () => {
      try {
        // eslint-disable-next-line no-undef
        if (krds_accordion?.init) krds_accordion.init();
        // eslint-disable-next-line no-undef
        if (krds_adjustContentScale?.init) krds_adjustContentScale.init();
        // eslint-disable-next-line no-undef
        if (krds_calendar?.init) krds_calendar.init();
        // eslint-disable-next-line no-undef
        if (krds_chkBox?.init) krds_chkBox.init();
        // eslint-disable-next-line no-undef
        if (krds_contextualHelp?.init) krds_contextualHelp.init();
        // eslint-disable-next-line no-undef
        if (krds_disclosure?.init) krds_disclosure.init();
        // eslint-disable-next-line no-undef
        if (krds_dropEvent?.init) krds_dropEvent.init();
        // eslint-disable-next-line no-undef
        if (krds_fileUpload?.init) krds_fileUpload.init();
        // eslint-disable-next-line no-undef
        if (krds_helpPanel?.init) krds_helpPanel.init();
        // eslint-disable-next-line no-undef
        if (krds_inPageNavigation?.init) krds_inPageNavigation.init();
        // eslint-disable-next-line no-undef
        if (krds_infoList?.init) krds_infoList.init();
        // eslint-disable-next-line no-undef
        if (krds_mainMenuMobile?.init) krds_mainMenuMobile.init();
        // eslint-disable-next-line no-undef
        if (krds_mainMenuPC?.init) krds_mainMenuPC.init();
        // eslint-disable-next-line no-undef
        if (krds_modal?.init) krds_modal.init();
        // eslint-disable-next-line no-undef
        if (krds_sideNavigation?.init) krds_sideNavigation.init();
        // eslint-disable-next-line no-undef
        if (krds_tab?.init) krds_tab.init();
        // eslint-disable-next-line no-undef
        if (krds_toggleSwitch?.init) krds_toggleSwitch.init();
        // eslint-disable-next-line no-undef
        if (krds_tooltip?.init) krds_tooltip.init();
      } catch (e) {
        console.warn("KRDS init error:", e);
      }
    };

    initKRDS();

    const observerTarget = document.getElementById("root");
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.addedNodes.length > 0) {
          observer.disconnect();
          initKRDS();
          observer.observe(observerTarget, { childList: true, subtree: true });
          break;
        }
      }
    });

    observer.observe(observerTarget, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="wrapper">
      <Header />
      <div id="container">
        <div className="inner">
            <p className="txt" style={{fontSize:'5rem',fontWeight:'700'}}>
                상단 헤더 로고 클릭시 메인페이지 이동
            </p>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
