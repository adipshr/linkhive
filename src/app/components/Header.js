import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/route";
import LogoutButton from "./buttons/LogoutButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default async function Header() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <header className="bg-white border-b  py-4">
      <div className="max-w-4xl flex items-center justify-between mx-auto">
        <div className="flex items-center gap-4 px-8">
          <Link
            href={"/"}
            className="flex  font-bold items-center gap-2 text-2xl text-blue-600"
          >
            <FontAwesomeIcon icon={faLink} className="text-blue-600 h-5" />
            <span>LinkHive</span>
          </Link>
          <nav className="flex items-center gap-4 text-slate-500">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Price</Link>
            <Link href={"/contact"}>About</Link>
          </nav>
        </div>
        <nav className="flex gap-4 text-sm items-center">
          {!!session && (
            <>
              <Link href={"/account"}>Hello, {session?.user?.name}</Link>
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
              <Link href={"/login"}>SignIn</Link>
              <Link href={"/login"}>Create Account</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
