import React from "react";

function ButtonWithIcon() {
  return (
    <>

<button className="krds-btn xsmall" type="button">
	x-small 버튼
	<i className="svg-icon ico-sch"></i>
</button>
<button className="krds-btn small" type="button">
	small 버튼
	<i className="svg-icon ico-sch"></i>
</button>
<button className="krds-btn medium" type="button">
	medium 버튼
	<i className="svg-icon ico-sch"></i>
</button>
<button className="krds-btn large" type="button">
	large 버튼
	<i className="svg-icon ico-sch"></i>
</button>
<button className="krds-btn xlarge" type="button">
<i className="svg-icon ico-sch"></i>
	x-large 버튼
</button>

    </>
  );
}

export default ButtonWithIcon;
