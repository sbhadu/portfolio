import React from 'react'
import { InboxIcon } from "@heroicons/react/solid";

export default function Contact() {
    return (
        <section id="contact" className="relative">
            <div className="text-center mb-20">
                <InboxIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                    Contact Me
                </h1>
            </div>
            <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                        ADDRESS
                    </h2>
                    <p className="mt-1">
                        Sri Ganganagar<br />
                        Rajasthan, IN 335002
                    </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                        EMAIL
                    </h2>
                    <a className="text-indigo-400 leading-relaxed">
                        sahilbhadu2002@email.com
                    </a>
                </div>
            </div>
        </section>
    )
}
