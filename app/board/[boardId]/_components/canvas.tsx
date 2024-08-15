"use client";

import Info from "./info";
import Toolbar from "./toolbar";
import Participants from "./participants";

interface CanvasProps {
  boardId: string;
}

const Canvas = ({ boardId }: CanvasProps) => {
  return (
    <main className="relative h-full w-full touch-none bg-neutral-100">
      <Info />
      <Participants />
      <Toolbar />
    </main>
  );
};

export default Canvas;
