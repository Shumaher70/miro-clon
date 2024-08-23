"use client";

import { useCallback, useState } from "react";

import { Camera, CanvasMode, CanvasState } from "@/types/canvas";
import {
  useHistory,
  useCanUndo,
  useCanRedo,
  useMutation,
} from "@liveblocks/react/suspense";

import Info from "./info";
import Toolbar from "./toolbar";
import Participants from "./participants";
import CursorsPresence from "./cursors-presence";
import { pinterEventToCanvasPoint } from "@/lib/utils";

interface CanvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  const onWheel = useCallback((e: React.WheelEvent) => {
    setCamera((camera) => ({
      x: camera.x - e.deltaX,
      y: camera.y - e.deltaY,
    }));
  }, []);

  const onPointerMove = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      e.preventDefault();

      const current = pinterEventToCanvasPoint(camera, e);

      setMyPresence({ cursor: current });
    },
    [],
  );

  const onPointerLeave = useMutation(({ setMyPresence }) => {
    setMyPresence({ cursor: null });
  }, []);

  return (
    <main className="relative h-full w-full touch-none bg-neutral-100">
      <Info boardId={boardId} />
      <Participants />
      <Toolbar
        canRedo={canUndo}
        canUndo={canRedo}
        undo={history.undo}
        redo={history.redo}
        canvasState={canvasState}
        setCanvasState={setCanvasState}
      />
      <svg
        onWheel={onWheel}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        className="h-[100vh] w-[100vw]"
      >
        <g>
          <CursorsPresence />
        </g>
      </svg>
    </main>
  );
};

export default Canvas;
