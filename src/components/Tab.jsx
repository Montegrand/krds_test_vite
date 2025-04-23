import React from "react";

function Tab() {
  return (
    <>

<div className="krds-tab-area layer">

<div className="tab line full">
<ul role="tablist">
<li aria-controls="panel_login_01" aria-selected="true" className="active" id="tab_login_01" role="tab">
<button className="btn-tab" type="button">타이틀 1 <i className="sr-only created"> 선택됨</i></button>
</li>
<li aria-controls="panel_login_02" aria-selected="false" id="tab_login_02" role="tab">
<button className="btn-tab" type="button">타이틀 2</button>
</li>
</ul>
</div>


<div className="tab-conts-wrap">
<section aria-labelledby="tab_login_01" className="tab-conts active" data-quick-nav="false" id="panel_login_01">
<h3 className="sr-only">탭 영역 타이틀</h3>
			탭 1 영역
		</section>
<section aria-labelledby="tab_login_02" className="tab-conts" data-quick-nav="false" id="panel_login_02">
<h3 className="sr-only">탭 영역 타이틀</h3>
			탭 2 영역
		</section>
</div>

</div>

    </>
  );
}

export default Tab;
