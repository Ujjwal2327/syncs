import { signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button type="submit" aria-label="go to sign-in page" size="sm">
        Sign In
        <FaGoogle />
      </Button>
    </form>
  );
}
