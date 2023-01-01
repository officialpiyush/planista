import { useState } from "react";

interface CheckBoxProps {
  checked: boolean;
  task: string
}

export default function CheckBox({ checked: defaultCheckedValue, task }: CheckBoxProps) {
  const [checked, setChecked] = useState(defaultCheckedValue);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
    <div onClick={handleChange} className=" transition-colors duration-300 hover:(bg-pink-700 text-white) px-2 py-2 cursor-pointer flex items-start gap-1.5 text-lg">
      <input checked={checked} onChange={handleChange} className="block mt-1.6 focus:(ring-0 ring-offset-0)" type="checkbox" />
      <span className="">{task}</span>
    </div>
  );
}
