"use client"
import * as React from "react"
import { Toaster } from "@/components/ui/sonner"
import { useIsMobile } from "@/hook/use-mobile"

import { Button } from "@/components/ui/button"


import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
const deliveryTimes = [
  {
    value: "asap",
    id: "delivery-asap",
    label: "Standard delivery",
    description: "25–35 min · Driver assigned now",
    badge: "Fastest",
  },
  {
    value: "5-00",
    id: "delivery-5-00",
    label: "5:00 PM – 5:15 PM",
    description: "Prep starts at 4:45 PM",
  },
  {
    value: "5-30",
    id: "delivery-5-30",
    label: "5:30 PM – 5:45 PM",
    description: "Good if you're heading home",
  },
  {
    value: "6-00",
    id: "delivery-6-00",
    label: "6:00 PM – 6:15 PM",
    description: "Most popular · High demand",
  },
  {
    value: "6-30",
    id: "delivery-6-30",
    label: "6:30 PM – 6:45 PM",
    description: "Last slot before kitchen closes",
  },
]

export function StudentInfo() {
  const [open, setOpen] = React.useState(false)
  const [deliveryTime,] = React.useState("asap")
  const isMobile = useIsMobile()
  function handleConfirm() {
    const selected = deliveryTimes.find((time) => time.value === deliveryTime)
    if (!selected) {
      return
    }
    setOpen(false)
    Toaster("Delivery time confirmed",
      { description: `You have selected ${selected.label}` })
  }
  return (
    // Use Drawer component to display student information

    <Drawer
      open={open}
      onOpenChange={setOpen}
      showSwipeHandle={isMobile}
      swipeDirection={isMobile ? "down" : "right"}
    >
      <DrawerTrigger asChild>
        <button className="border border-gray-300 rounded-md px-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
          Pakornpat Khamton
        </button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Student Information</DrawerTitle>
          <DrawerDescription>
            Here is the information about the student.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p><strong>Name:</strong> Pakornpat Khamton</p>
          <p><strong>Student ID:</strong> 680610690</p>
          <p><strong>Email:</strong> pakornpat.khamton@cmu.ac.th</p>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <button className="border border-gray-300 rounded-md px-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              Close
            </button>
            <Button onClick={handleConfirm} className="h-[34px]">
              Confirm Delivery Time
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>

  );
}
