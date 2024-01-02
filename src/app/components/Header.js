import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b  py-4">
      <div className="max-w-4xl flex justify-between mx-auto">
        <div className="flex gap-4 px-8">
          <Link href={"/"}>LinkHive</Link>
          <nav className="flex items-center gap-4 text-slate-500">
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Price</Link>
            <Link href={"/contact"}>About</Link>
          </nav>
        </div>
        <nav className="flex gap-4 text-sm ">
          <Link href={"/login"}>SignIn</Link>
          <Link href={"/register"}>Create Account</Link>
        </nav>
      </div>
    </header>
  );
}
