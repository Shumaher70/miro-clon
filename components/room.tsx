"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

interface RoomProps {
  children: ReactNode;
  roomId: string;
  fallback: NonNullable<ReactNode> | null;
}

export function Room({ children, roomId, fallback }: RoomProps) {
  return (
    <LiveblocksProvider
      publicApiKey={
        "pk_dev_QLsfY5sSrV_R_s2tu3SBthNTqu6OUKrVzMpJUCp-dHgJuGF77defNCai5YS9Q5jy"
      }
    >
      <RoomProvider id={roomId} initialPresence={{}}>
        <ClientSideSuspense fallback={fallback}>{children}</ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
