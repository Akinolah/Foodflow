"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

function MenubarMenu(props) {
  return <MenubarPrimitive.Menu {...props} />
}

function MenubarGroup(props) {
  return <MenubarPrimitive.Group {...props} />
}

function MenubarPortal(props) {
  return <MenubarPrimitive.Portal {...props} />
}

function MenubarRadioGroup(props) {
  return <MenubarPrimitive.RadioGroup {...props} />
}

function MenubarSub(props) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

const Menubar = React.forwardRef(function Menubar(
  { className, ...props }, ref
) {
  return (
    <MenubarPrimitive.Root
      ref={ref}
      className={cn(
        "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
        className
      )}
      {...props}
    />
  )
})
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef(function MenubarTrigger(
  { className, ...props }, ref
) {
  return (
    <MenubarPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
})
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef(function MenubarSubTrigger(
  { className, inset, children, ...props }, ref
) {
  return (
    <MenubarPrimitive.SubTrigger
      ref={ref}
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
  )
})
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef(function MenubarSubContent(
  { className, ...props }, ref
) {
  return (
    <MenubarPrimitive.SubContent
      ref={ref}
      className={cn(
       // filepath: c:\Users\Bigsam\documents\webs\Foodflow\src\components\ui\menubar.jsx
"use client"

import * as React from "react"
import * as MenubarPrimitive from "@radix-ui/react-menubar"
import { Check, ChevronRight, Circle } from "lucide-react"

import { cn } from "@/lib/utils"

function MenubarMenu(props) {
  return <MenubarPrimitive.Menu {...props} />
}

function MenubarGroup(props) {
  return <MenubarPrimitive.Group {...props} />
}

function MenubarPortal(props) {
  return <MenubarPrimitive.Portal {...props} />
}

function MenubarRadioGroup(props) {
  return <MenubarPrimitive.RadioGroup {...props} />
}

function MenubarSub(props) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

const Menubar = React.forwardRef(function Menubar(
  { className, ...props }, ref
) {
  return (
    <MenubarPrimitive.Root
      ref={ref}
      className={cn(
        "flex h-10 items-center space-x-1 rounded-md border bg-background p-1",
        className
      )}
      {...props}
    />
  )
})
Menubar.displayName = MenubarPrimitive.Root.displayName

const MenubarTrigger = React.forwardRef(function MenubarTrigger(
  { className, ...props }, ref
) {
  return (
    <MenubarPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
})
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName

const MenubarSubTrigger = React.forwardRef(function MenubarSubTrigger(
  { className, inset, children, ...props }, ref
) {
  return (
    <MenubarPrimitive.SubTrigger
      ref={ref}
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
      <ChevronRight className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
  )
})
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName

const MenubarSubContent = React.forwardRef(function MenubarSubContent(
  { className, ...props }, ref
) {
  return (
    <MenubarPrimitive.SubContent
      ref={ref}
      className={cn(
       