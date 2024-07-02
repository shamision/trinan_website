"use client"

import React from "react"
import { Form } from "./Form"
import { Introduction } from "./Introduction"

export const Contact = () => {
  return (
    <section>
      <div className="h-screen w-full bg-[#E7ECFF] flex items-center  justify-between px-[90px]">
        <Introduction />
        <Form />
      </div>
    </section>
  )
}
