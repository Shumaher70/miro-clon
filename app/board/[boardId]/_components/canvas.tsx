"use client";

import { useState } from "react";

import { CanvasMode, CanvasState } from "@/types/canvas";
import { useHistory, useCanUndo, useCanRedo } from "@liveblocks/react/suspense";

import Info from "./info";
import Toolbar from "./toolbar";
import Participants from "./participants";

interface CanvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None,
  });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

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
    </main>
  );
};

export default Canvas;
