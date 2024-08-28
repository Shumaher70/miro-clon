"use client";
import { memo } from "react";

import { LayerType, Side, XYWH } from "@/types/canvas";
import { useSelf, useStorage } from "@liveblocks/react/suspense";
import { useSelectionBounds } from "@/hooks/use-selection-bounds";

interface SelectionBoxProps {
  onResizeHandlePointerDown: (corner: Side, initialBounds: XYWH) => void;
}

const HANDLE_WIDTH = 8;

const SelectionBox = memo(
  ({ onResizeHandlePointerDown }: SelectionBoxProps) => {
    const soleLayerId = useSelf((me) =>
      me.presence.selection.length === 1 ? me.presence.selection[0] : null,
    );

    const isShowingHandles = useStorage(
      (root) =>
        soleLayerId && root.layers.get(soleLayerId)?.type !== LayerType.Path,
    );

    const bounds = useSelectionBounds();

    if (!bounds) {
      return null;
    }

    return (
      <>
        <rect
          x={0}
          y={0}
          width={bounds.width}
          height={bounds.height}
          style={{ transform: `translate(${bounds.x}px, ${bounds.y}px)` }}
          className="pointer-events-none fill-transparent stroke-blue-500 stroke-1"
        />
        {isShowingHandles && (
          <>
            <rect
              className="fill-white stroke-blue-500 stroke-1"
              y={0}
              x={0}
              style={{
                cursor: "nwse-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `
                   translate(
                      ${bounds.x - HANDLE_WIDTH / 2}px, 
                      ${bounds.y - HANDLE_WIDTH / 2}px
                )`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
            />

            <rect
              className="fill-white stroke-blue-500 stroke-1"
              y={0}
              x={0}
              style={{
                cursor: "ns-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `
                  translate(
                      ${bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2}px,
                      ${bounds.y - HANDLE_WIDTH / 2}px
                 )`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
            />

            <rect
              className="fill-white stroke-blue-500 stroke-1"
              y={0}
              x={0}
              style={{
                cursor: "nesw-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `
                  translate(
                      ${bounds.x - HANDLE_WIDTH / 2 + bounds.width}px,
                      ${bounds.y - HANDLE_WIDTH / 2}px
                )`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
            />

            <rect
              className="fill-white stroke-blue-500 stroke-1"
              y={0}
              x={0}
              style={{
                cursor: "ew-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `
                  translate(
                     ${bounds.x - HANDLE_WIDTH / 2 + bounds.width}px, 
                     ${bounds.y + bounds.height / 2 - HANDLE_WIDTH / 2}px
               )`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
            />

            <rect
              className="fill-white stroke-blue-500 stroke-1"
              y={0}
              x={0}
              style={{
                cursor: "nwse-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `
                   translate(
                      ${bounds.x - HANDLE_WIDTH / 2 + bounds.width}px,
                      ${bounds.y - HANDLE_WIDTH / 2 + bounds.height}px
                 )`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
            />

            <rect
              className="fill-white stroke-blue-500 stroke-1"
              y={0}
              x={0}
              style={{
                cursor: "ns-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `
                   translate(
                       ${bounds.x + bounds.width / 2 - HANDLE_WIDTH / 2}px,
                       ${bounds.y - HANDLE_WIDTH / 2 + bounds.height}px
                 )`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
            />

            <rect
              className="fill-white stroke-blue-500 stroke-1"
              y={0}
              x={0}
              style={{
                cursor: "nesw-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `
                 translate(
                      ${bounds.x - HANDLE_WIDTH / 2}px,
                      ${bounds.y - HANDLE_WIDTH / 2 + bounds.height}px
                 )`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
            />

            <rect
              className="fill-white stroke-blue-500 stroke-1"
              y={0}
              x={0}
              style={{
                cursor: "ew-resize",
                width: `${HANDLE_WIDTH}px`,
                height: `${HANDLE_WIDTH}px`,
                transform: `
                      translate(
                       ${bounds.x - HANDLE_WIDTH / 2}px,
                       ${bounds.y - HANDLE_WIDTH / 2 + bounds.height / 2}px
                 )`,
              }}
              onPointerDown={(e) => {
                e.stopPropagation();
              }}
            />
          </>
        )}
      </>
    );
  },
);

export default SelectionBox;

SelectionBox.displayName = "SelectionBox";
