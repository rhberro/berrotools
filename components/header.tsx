import Image from "next/image";
import Link from "next/link";

import { Button } from "./button";

export function Header() {
  return (
    <header className="flex p-6 justify-between">
      <Link
        className="flex items-center rounded gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-blue-600"
        href="/"
      >
        <Image src="/logo.svg" alt="Berrotools Logo" width={32} height={32} />
        <span className="text-xl text-stone-700 font-semibold">berrotools</span>
      </Link>
      <nav>
        <ul className="flex gap-2">
          <li>
            <Button variant="outline" slotted>
              <Link href="/signin">Log In</Link>
            </Button>
          </li>
          <li>
            <Button slotted>
              <Link href="/signup">Sign Up</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
