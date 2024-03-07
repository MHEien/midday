"use client";

import { createEndUserAgreementAction } from "@/actions/banks/create-end-user-agreement-action";
import { Button } from "@midday/ui/button";
import { Icons } from "@midday/ui/icons";
import { isDesktopApp } from "@todesktop/client-core/platform/todesktop";
import { useAction } from "next-safe-action/hooks";

export function ReconnectButton({ id, institutionId }) {
  const redirect = `${
    location.origin
  }/api/gocardless?id=${id}&desktop=${isDesktopApp()}`;

  const createEndUserAgreement = useAction(createEndUserAgreementAction);

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() =>
        createEndUserAgreement.execute({
          institutionId,
          redirect,
        })
      }
    >
      <Icons.Refresh size={16} />
    </Button>
  );
}
