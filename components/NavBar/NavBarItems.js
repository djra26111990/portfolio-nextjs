import { MenuIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { Popover } from "@headlessui/react";

export default function NavBarItems() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <span className="sr-only">Daniel Rivas</span>
            <div>
              <Link href="/">
                <a className="inline-block w-fit font-black text-2xl text-white bg-gray-800 hover:bg-black transition easy-in-out duration-200 p-2 rounded">
                  DJRA DEV
                </a>
              </Link>
            </div>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex items-center justify-end lg:w-0">
            <Link href="/">
              <span className="px-2 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Home
              </span>
            </Link>
            <Link href="/aboutme">
              <span className="px-2 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                About me
              </span>
            </Link>
            <Link href="/projects">
              <span className="px-2 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Projects
              </span>
            </Link>
            <Link href="/contactme">
              <span className="px-2 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                Contact me
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
