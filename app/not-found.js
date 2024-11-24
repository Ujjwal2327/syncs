import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Link from "next/link";

export function generateMetadata({ params }) {
  return {
    title: `Page Not Found | Syncs`,
    description: `The page you're looking for does not exist. Please check the URL or return to the homepage.`,
  };
}

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen -m-14">
      <h1 className="text-5xl font-bold text-red-900">404</h1>
      <h2 className="text-3xl font-semibold mb-4 text-red-700 text-center">
        Page Not Found
      </h2>

      <p className="text-lg text-center text-wrap-balance">
        The page you&apos;re looking for does not exist.
      </p>
      <p className="text-lg mb-4 text-center text-wrap-balance">
        Please check the URL or return to the homepage.
      </p>

      <Link href={"/"} className="flex gap-x-5">
        <Button>
          Take me home
          <Send size={20} />
        </Button>
      </Link>
    </div>
  );
}
