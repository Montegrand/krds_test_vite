import React from "react";

function SelectSorting() {
  return (
    <>

<select className="krds-form-select-sort" id="select_sorting" title="선택">
<option value="">항목1</option>
<option value="">항목2</option>
<option value="">항목3</option>
<option value="">항목4</option>
</select>
<select className="krds-form-select-sort large" id="select_sorting_large" title="선택">
<option selected="" value="">항목1</option>
<option value="">항목2</option>
<option value="">항목3</option>
</select>
<select className="krds-form-select-sort medium" id="select_sorting_medium" title="선택">
<option value="">항목1</option>
<option selected="" value="">항목2</option>
<option value="">항목3</option>
</select>
<select className="krds-form-select-sort small" id="select_sorting_small" title="선택">
<option value="">항목1</option>
<option value="">항목2</option>
<option selected="" value="">항목3</option>
</select>

    </>
  );
}

export default SelectSorting;
