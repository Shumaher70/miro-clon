"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useOrganization } from "@clerk/nextjs";

import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useApiMutation } from "@/hooks/use-api-mutaion";

const EmptyBoards = () => {
  const router = useRouter();
  const { organization } = useOrganization();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    mutate({
      title: "Untitled",
      orgId: organization.id,
    })
      .then((id) => {
        toast.success("Board created");
        router.push(`/boards/${id}`);
      })
      .catch(() => toast.error("Failed to create board!"));
  };

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src="/note.svg" alt="Empty" height={110} width={110} />
      <h2 className="mt-6 text-2xl font-semibold">Create your first board!</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button disabled={pending} onClick={onClick} size="lg">
          Create Board
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoards;
