import { auth } from "@/auth";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { extractFirstLetters, resolveUrl } from "@/utils";
import { default_user_pic } from "@/constants";
import SignOut from "./auth/SignOut";
import SignIn from "./auth/SignIn";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default async function Navbar() {
  const session = await auth();
  return (
    <div className="fixed top-0 pt-2 pr-4 z-50 flex justify-end items-center gap-x-4 w-full backdrop-blur bg-background/80">
      {session ? (
        <div className="flex items-center gap-x-2">
          <SignOut />
          <Avatar className="size-7 text-foreground rounded-sm">
            <AvatarImage
              src={resolveUrl(session.user?.image, default_user_pic)}
            />
            <AvatarFallback>
              {extractFirstLetters(session.user?.name)}
            </AvatarFallback>
          </Avatar>
        </div>
      ) : (
        <SignIn />
      )}
      <Link href="https://github.com/Ujjwal2327/Syncs" target="_blank">
        <FaGithub size={20} />
      </Link>
    </div>
  );
}
