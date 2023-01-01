import { useState } from "react";

export default function AddInput() {
  const [value, setValue] = useState("");

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
        className="disabled:(cursor-not-allowed opacity-40) px-4 py-2 bg-pastel-peach hover:(bg-pastel-peach/60) border border-black"
      >
        Add

      </button>
    </div>
  );
}
