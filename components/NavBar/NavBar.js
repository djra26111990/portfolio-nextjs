import { Popover } from "@headlessui/react";
import NavBarItems from "./NavBarItems";
import NavBarMobile from "./NavBarMobile";

export default function NavBar() {
  return (
    <Popover className="relative bg-white">
      <NavBarItems />
      <NavBarMobile />
    </Popover>
  );
}
