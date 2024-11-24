import { LogOut } from "lucide-react";
import { signOut } from "@/auth.js";
import { Button } from "@/components/ui/button.jsx";

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit" aria-label="go to sign-out page" size="sm">
        Sign Out <LogOut className="ml-2 text-xl" />
      </Button>
    </form>
  );
}
