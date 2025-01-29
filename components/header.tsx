import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link
            className="flex title-font font-bold items-center text-gray-900 mb-4 md:mb-0 "
            href="/"
          >
            <span className="ml-3 text-xl">Kyle Lee</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link className="mr-5 hover:text-gray-900" href="/">
              Home
            </Link>
            <Link className="mr-5 hover:text-gray-900" href="/projects">
              Projects
            </Link>
            <Link className="mr-5 hover:text-gray-900" href="/contact">
              Contact
            </Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Button
          </button>
        </div>
      </header>
    </>
  );
}
