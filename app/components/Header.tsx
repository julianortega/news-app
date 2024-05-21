import { Bars3Icon } from "@heroicons/react/24/solid"
import Link from "next/link"
import NavLinks from "./NavLinks"
import SearchBox from "./SearchBox"
import DarkModeButton from "./DarkModeButton"

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <Bars3Icon className="h-8 w-8 cursor-pointer" />
        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-4xl text-center">
            The <span className="underline decoration-6 decoration-cyan-500">BRUTAL</span> News
          </h1>
        </Link>

        <div className="flex items-center justify-end space-x-2">

          <DarkModeButton />

          <button className="hidden md:inline bg-cyan-500 text-white px-4 lg:px-8 py-2 lg:py-4 rounded-full hover:bg-cyan-600 duration-200">
            Subscribe Now
          </button>
        </div>

      </div>

      <NavLinks />

      <SearchBox />
    </header>
  )
}

export default Header