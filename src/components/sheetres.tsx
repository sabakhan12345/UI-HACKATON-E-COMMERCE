"use client"

import { Button } from "@/components/ui/button"
import { IoMdMenu } from "react-icons/io";
import Link from "next/link";
import { NavigationMenuDemo } from '@/components/NavigationMenu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIDES = [ "left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid  gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="md:hidden">
            <Button >
            <  IoMdMenu />
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>
              <div className='w-[126px]  font-bold text-[25px] items-center pl-3 '> SHOP.CO</div>
              
              
              </SheetTitle>
              
            </SheetHeader>
         {/* NAVBAR */}
    <ul className="grid grid-cols-1 gap-y-4  ">
      <Link href={"/"} className='flex  items-center text-xl '>   < NavigationMenuDemo /> </Link> 
      <Link href={"/ProductDetails"} className="ml-3 text-xl">On Sale </Link>
      <Link href={"/NewArrivals"} className="ml-3 text-xl">New Arrivals </Link>
      <Link href={"/Category"} className="ml-3 text-xl">Brands </Link>
    </ul>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
