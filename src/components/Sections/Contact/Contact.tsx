"use client"

import Image from "next/image"
import React from "react"
import { Introduction } from "./Introduction"
import { Form } from "./Form"

export const Contact = () =>{
    return(
        <section>
            <div className="h-screen w-full bg-[#E7ECFF] flex container gap-[100px]">
                <Introduction />
                <Form />
            </div>
        </section>
    )
}