import React from "react";
import DropDown from "../reusable/dropDown";
import FormControl from "../reusable/formControl";

const MenuFilters = (props) => {
  const {
    dropDownList,
    dropDownTitle,
    onDropDownSelect,
    formControlList,
    onFormSelectChange,
  } = props;
  return (
    <div
      className="d-flex justify-content-center mt-n2 "
      style={{ zIndex: "1", position: "relative" }}
    >
      <DropDown
        list={dropDownList}
        title={dropDownTitle}
        onSelect={onDropDownSelect}
      />
      <FormControl list={formControlList} onChange={onFormSelectChange} />
    </div>
  );
};

export default MenuFilters;
