"use client";

import { Color } from "@/types/canvas";
import { colorToCss } from "@/lib/utils";

interface ColorPickerProps {
  onChange: (color: Color) => void;
}

const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return (
    <div className="mr-2 flex max-w-[164px] flex-wrap items-center gap-2 border-r border-r-neutral-200 pr-2">
      <ColorButton color={{ r: 0, g: 191, b: 255 }} onClick={onChange} />{" "}
      <ColorButton color={{ r: 0, g: 255, b: 0 }} onClick={onChange} />{" "}
      <ColorButton color={{ r: 255, g: 99, b: 71 }} onClick={onChange} />{" "}
      <ColorButton color={{ r: 255, g: 255, b: 128 }} onClick={onChange} />{" "}
      <ColorButton color={{ r: 255, g: 165, b: 0 }} onClick={onChange} />{" "}
      <ColorButton color={{ r: 148, g: 0, b: 211 }} onClick={onChange} />{" "}
      <ColorButton color={{ r: 255, g: 255, b: 255 }} onClick={onChange} />
      <ColorButton color={{ r: 0, g: 0, b: 0 }} onClick={onChange} />
    </div>
  );
};

export default ColorPicker;

interface ColorButtonProps {
  onClick: (color: Color) => void;
  color: Color;
}

const ColorButton = ({ onClick, color }: ColorButtonProps) => {
  return (
    <button
      onClick={() => onClick(color)}
      className="flex h-8 w-8 items-center justify-center transition hover:opacity-75"
    >
      <div
        className="h-8 w-8 rounded-md border border-neutral-300"
        style={{ background: colorToCss(color) }}
      />
    </button>
  );
};
