import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function NavBarMobile() {
  return (
    <>
      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-50"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <div>
                    <a className="inline-block w-fit font-black text-2xl text-white bg-gray-800 hover:bg-black transition easy-in-out duration-200 p-2 rounded">
                      DJRA DEV
                    </a>
                  </div>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Popover.Button>
                    <Link href="/">
                      <span className="px-2 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                        Home
                      </span>
                    </Link>
                  </Popover.Button>
                  <Popover.Button>
                    <Link href="/aboutme">
                      <span className="px-2 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                        About me
                      </span>
                    </Link>
                  </Popover.Button>
                  <Popover.Button>
                    <Link href="/projects">
                      <span className="px-2 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                        Projects
                      </span>
                    </Link>
                  </Popover.Button>
                  <Popover.Button>
                    <Link href="/contactme">
                      <span className="px-2 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                        Contact me
                      </span>
                    </Link>
                  </Popover.Button>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8"></div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </>
  );
}
