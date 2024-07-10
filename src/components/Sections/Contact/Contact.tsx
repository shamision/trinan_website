"use client"

import React from "react"
import { Form } from "./Form"
import { Introduction } from "./Introduction"

export const Contact = () => {
  return (
    <section>
      <div className="md:h-screen h-full w-full bg-[#E7ECFF] flex flex-wrap items-center gap-x-40 justify-center md:px-[90px] px-6">
        <Introduction />
        <Form />
      </div>
    </section>
  )
}
