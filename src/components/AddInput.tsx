import { useState } from "react";

interface AddInputProps {
  onAdd: (value: string) => void;
}

export default function AddInput({ onAdd }: AddInputProps) {
  const [value, setValue] = useState("");

  const onAddClicked = () => {
    if (!value) return;

    onAdd(value);
    setValue("");
  };

  return (
    <div className="flex gap-4">
      <input
        className="w-full focus:(ring-0 ring-offset-0)"
        value={value}
        onChange={(e) => { setValue(e.target.value); }}
        type="text"
      />
      <button
        disabled={!value}
        type="button"
        onClick={onAddClicked}
        className="disabled:(cursor-not-allowed opacity-40) px-4 py-2 bg-pastel-peach hover:(bg-pastel-peach/60) border border-black"
      >
        Add

      </button>
    </div>
  );
}
