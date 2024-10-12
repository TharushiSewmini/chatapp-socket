import React from "react";

const GenderCheckBox = () => {
  return (
    <div className="flex ">
      <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text mr-2 text-gray-500">Male</span>
    <input type="checkbox" defaultChecked className="checkbox" />
  </label>
</div>
<div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text mr-2 text-gray-500">Female</span>
    <input type="checkbox" defaultChecked className="checkbox" />
  </label>
</div>
    </div>
  );
};

export default GenderCheckBox;
