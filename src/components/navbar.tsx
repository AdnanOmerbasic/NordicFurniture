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

import { HiMagnifyingGlass, HiShoppingBag, HiUser } from "react-icons/hi2";

export default function NavbarHeader() {
  return (
    <Navbar position="static" maxWidth={"2xl"}>
      <NavbarBrand>
        <h1 className="text-2xl font-bold p-4">NordicFurniture</h1>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem className="p-4">Home</NavbarItem>
        <Dropdown>
          <DropdownTrigger>
            <NavbarItem className="p-4">Categories</NavbarItem>
          </DropdownTrigger>
          <DropdownMenu>
            <DropdownItem>Living Room</DropdownItem>
            <DropdownItem>Bathroom</DropdownItem>
            <DropdownItem>Outdoor</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem className="p-4">Dashboard</NavbarItem>
        <Input
          className="w-56"
          placeholder="Search for a product"
          labelPlacement="outside"
          radius="full"
          startContent={
            <span className="text-default-900 text-lg">
              <HiMagnifyingGlass size="22" />
            </span>
          }
        />
      </NavbarContent>
      <NavbarContent justify="end">
        <Button className="p-4 bg-black rounded-full text-white">
          <HiShoppingBag size="22" />
          Bag
        </Button>

        <Button className="p-4 bg-black text-white rounded-full w-32">
          <HiUser size="22" />
          Log in
        </Button>
      </NavbarContent>
    </Navbar>
  );
}
