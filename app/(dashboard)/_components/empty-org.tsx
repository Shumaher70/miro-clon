import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const EmptyOrg = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <Image src="/elements.svg" alt="" height={200} width={200} />
      <h2 className="text-2xl font-semibold">Welcome to Board</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Create an organization to get started
      </p>

      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">Create organization</Button>
          </DialogTrigger>
          <DialogContent className="max-w-[432px] border-none bg-transparent p-0">
            <CreateOrganization routing="hash" />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EmptyOrg;
