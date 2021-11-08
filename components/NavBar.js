/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function Example() {
  return (
    <Popover className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <span className="sr-only">Workflow</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
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
            <div className="px-2 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Projects
            </div>
            <div className="px-2 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
              Contact me
            </div>
          </div>
        </div>
      </div>

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
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                    alt="Workflow"
                  />
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
                  <div className="px-2 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                    Projects
                  </div>
                  <div className="px-2 whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                    Contact me
                  </div>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8"></div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
