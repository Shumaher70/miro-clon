"use client";

import { memo } from "react";
import { Trash2 } from "lucide-react";

import { Camera, Color } from "@/types/canvas";
import { Button } from "@/components/ui/button";
import { useDeleteLayers } from "@/hooks/use-delete-layers";
import { useMutation, useSelf } from "@liveblocks/react/suspense";
import { useSelectionBounds } from "@/hooks/use-selection-bounds";

import Hint from "@/components/hint";
import ColorPicker from "./color-picker";

interface SelectionToolsProps {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
}

const SelectionTools = memo(
  ({ camera, setLastUsedColor }: SelectionToolsProps) => {
    const selection = useSelf((me) => me.presence.selection);

    const setFill = useMutation(
      ({ storage }, fill: Color) => {
        const liveLayers = storage.get("layers");
        setLastUsedColor(fill);

        selection.forEach((id) => {
          liveLayers.get(id)?.set("fill", fill);
        });
      },
      [selection, setLastUsedColor],
    );

    const deleteLayers = useDeleteLayers();

    const selectionBounds = useSelectionBounds();

    if (!selectionBounds) {
      return null;
    }

    const x = selectionBounds.width / 2 + selectionBounds.x + camera.x;
    const y = selectionBounds.y + camera.y;

    return (
      <div
        className="absolute flex select-none rounded-xl border bg-white p-3 shadow-sm"
        style={{
          transform: `translate(
            calc(${x}px - 50%),
            calc(${y - 16}px - 100%)
         )`,
        }}
      >
        <ColorPicker onChange={setFill} />
        <div className="ml-2 flex items-center border-l border-neutral-200 pl-2">
          <Hint label="Delete">
            <Button size="icon" variant="board" onClick={deleteLayers}>
              <Trash2 />
            </Button>
          </Hint>
        </div>
      </div>
    );
  },
);

export default SelectionTools;

SelectionTools.displayName = "SelectionTools";
