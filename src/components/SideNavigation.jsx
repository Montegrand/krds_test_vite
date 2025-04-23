import React from "react";

function SideNavigation() {
  return (
    <>

<nav className="krds-side-navigation">
<h2 className="lnb-tit">1Depth-title</h2>

<ul className="lnb-list" role="menubar">
<li className="lnb-item active" role="none">
<button aria-controls="lnbmenu-1" aria-expanded="true" className="lnb-btn lnb-toggle active" role="menuitem" type="button">2Depth-menu</button>

<div className="lnb-submenu">
<ul id="lnbmenu-1" role="menu">
<li className="lnb-subitem" role="none">
<button aria-controls="lnbmenu-2" aria-expanded="false" aria-haspopup="true" className="lnb-btn lnb-toggle-popup" role="menuitem" type="button">3Depth-menu</button>

<div className="lnb-submenu-lv2" id="lnbmenu-2" role="menu">
<button className="lnb-btn-tit" type="button">3Depth-title</button>
<ul>
<li role="none"><a className="lnb-btn" href="#" role="menuitem">4Depth</a></li>
<li role="none"><a className="lnb-btn" href="#" role="menuitem">4Depth</a></li>
<li role="none"><a className="lnb-btn" href="#" role="menuitem">4Depth</a></li>
</ul>
</div>

</li>
<li className="lnb-subitem" role="none"><a className="lnb-btn lnb-link" href="#" role="menuitem">3Depth-link</a></li>
<li className="lnb-subitem active" role="none"><a aria-current="page" className="lnb-btn lnb-link" href="#" role="menuitem">3Depth-link</a></li>
</ul>
</div>

</li>
<li className="lnb-item" role="none">
<button aria-controls="lnbmenu-4" aria-expanded="false" className="lnb-btn lnb-toggle" role="menuitem" type="button">2Depth-menu</button>

<div className="lnb-submenu">
<ul id="lnbmenu-4" role="menu">
<li className="lnb-subitem" role="none">
<button aria-controls="lnbmenu-5" aria-expanded="false" aria-haspopup="true" className="lnb-btn lnb-toggle-popup" role="menuitem" type="button">3Depth-menu</button>

<div className="lnb-submenu-lv2" id="lnbmenu-5" role="menu">
<button className="lnb-btn-tit" type="button">3Depth-title</button>
<ul>
<li role="none"><a className="lnb-btn" href="#" role="menuitem">4Depth</a></li>
<li role="none"><a className="lnb-btn" href="#" role="menuitem">4Depth</a></li>
<li role="none"><a className="lnb-btn" href="#" role="menuitem">4Depth</a></li>
</ul>
</div>

</li>
<li className="lnb-subitem" role="none"><a className="lnb-btn lnb-link" href="#" role="menuitem">3Depth-link</a></li>
<li className="lnb-subitem" role="none"><a className="lnb-btn lnb-link" href="#" role="menuitem">3Depth-link</a></li>
</ul>
</div>

</li>
<li className="lnb-item" role="none">
<button aria-controls="lnbmenu-6" aria-expanded="false" className="lnb-btn lnb-toggle" role="menuitem" type="button">2Depth-menu</button>

<div className="lnb-submenu">
<ul id="lnbmenu-6" role="menu">
<li className="lnb-subitem" role="none">
<button aria-controls="lnbmenu-7" aria-expanded="false" aria-haspopup="true" className="lnb-btn lnb-toggle-popup" role="menuitem" type="button">3Depth-menu</button>

<div className="lnb-submenu-lv2" id="lnbmenu-7" role="menu">
<button className="lnb-btn-tit" type="button">3Depth-title</button>
<ul>
<li role="none"><a className="lnb-btn" href="#" role="menuitem">4Depth</a></li>
<li role="none"><a className="lnb-btn" href="#" role="menuitem">4Depth</a></li>
<li role="none"><a className="lnb-btn" href="#" role="menuitem">4Depth</a></li>
</ul>
</div>

</li>
<li className="lnb-subitem" role="none"><a className="lnb-btn lnb-link" href="#" role="menuitem">3Depth-link</a></li>
<li className="lnb-subitem" role="none"><a className="lnb-btn lnb-link" href="#" role="menuitem">3Depth-link</a></li>
</ul>
</div>

</li>
</ul>

</nav>

    </>
  );
}

export default SideNavigation;
