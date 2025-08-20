import { RHFTextInput } from "../ui/RHFTextInpt/RHFTextInput";
import RTHSelectOption from "../ui/SelectOpt";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";

const FilterSection = () => {
  const value = [
    { value: false, label: "Completed" },
    { value: true, label: "Incompleted" },
  ];
  const { register, handleSubmit } = useForm();

  return (
    <div className="flex flex-col gap-3">
      <RHFTextInput
        name="search"
        placeholder="Search ..."
        type="text"
        id="search"
      />
      <RTHSelectOption
        name="status"
        options={value}
        id="status"
        register={register}
      />
      <Button>Search</Button>
    </div>
  );
};

export default FilterSection;
