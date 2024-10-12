interface GenderCheckBoxProps {
  handleGenderChange: (e: any) => void;
  selectGender: string;
}
const GenderCheckBox = ({
  handleGenderChange,
  selectGender,
}: GenderCheckBoxProps) => {
  return (
    <div className="flex ">
      <div className="form-control">
        <label className={`label cursor-pointer`}>
          <span className="label-text mr-2 text-gray-500">Male</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox"
            checked={selectGender === "male"}
            onChange={() => handleGenderChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label cursor-pointer `}>
          <span className="label-text mr-2 text-gray-500">Female</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox"
            checked={selectGender === "female"}
            onChange={() => handleGenderChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckBox;
