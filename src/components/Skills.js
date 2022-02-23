import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";

export default function Skills() {
    return (
        <section id="skills">
            <div className="container px-5 py-10 mx-auto">
                <div className="text-center mb-20">
                    <ChipIcon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-base leading-relaxed">
                        <h1 className="sm:text-2xl text-1xl text-white mb-4">
                            <BadgeCheckIcon className="w-7 inline-block mb-3" />
                            HTML, CSS, JavaScript <br />
                            Data Structures and Algorithms(C++)<br />
                            Framworks - Tailwind CSS, ReactJs, NodeJs.
                        </h1>
                    </p>
                </div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">

                </div>
            </div>
        </section>
    )
}
