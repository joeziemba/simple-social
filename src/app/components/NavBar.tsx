import Link from "next/link";

export const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-zinc-900 flex items-center px-4 sm:px-12 py-5 justify-between">
      <div className="w-full text-3xl font-thin text-center">
        <Link href="/">Simple Social</Link>
      </div>
    </nav>
  );
};
