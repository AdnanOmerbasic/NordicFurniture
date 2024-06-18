"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Input,
} from "@nextui-org/react";
import Link from "next/link";

import { HiMagnifyingGlass, HiShoppingBag, HiUser } from "react-icons/hi2";
import Search from "./search";
import { Suspense } from "react";

export default function NavbarHeader() {
  return (
    <Navbar position="static" maxWidth={"2xl"}>
      <NavbarBrand>
        <h1 className="text-2xl font-bold p-4">
          <Link href="/">NordicFurniture</Link>
        </h1>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem className="p-4 font-bold">
          <Link href="/">Home</Link>
        </NavbarItem>
        <Dropdown>
          <DropdownTrigger>
            <NavbarItem className="p-4 font-bold">Categories </NavbarItem>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem>
              <Link href="/furniture/living-room">Living Room</Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/furniture/bathroom">Bathroom</Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/furniture/outdoor">Outdoor</Link>
            </DropdownItem>
            <DropdownItem>
              <Link href="/furniture/bedroom">Bedroom</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem className="p-4 font-bold">
          <Link href="/dashboard">Dashboard</Link>
        </NavbarItem>
        <Suspense>
          <Search />
        </Suspense>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <Button radius="full" className="p-4 bg-black rounded-full text-white">
          <HiShoppingBag size="22" />
          Bag
        </Button> */}

        <Button radius="full" className="p-4 bg-black text-white">
          <HiUser size="22" />
          Log in
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
