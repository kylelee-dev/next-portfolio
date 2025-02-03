import Link from "next/link";
import DarkModeToggleBtn from "./dark-mode-toggle-button";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            className="flex title-font font-bold items-center  mb-4 md:mb-0 "
            href="/"
          >
            <span className="md:ml-3 text-xl dark:">Kyle Lee</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap gap-5 items-center text-base justify-center">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link className="md:mr-5" href="/contact">Contact</Link>
          </nav>
          <DarkModeToggleBtn />
        </div>
      </header>
    </>
  );
}
