import React from 'react'
import { Star, ChevronDown } from 'lucide-react'
import Tags from './Tags'

export default function OccurenceHeader(props) {
    const {
        title = null,
        description = null,
        tags = [],
        type = null,
        version = null,
        domain = [],
        primaryDomain = null,


    } = props || {}
    return (
        <section className="overflow-hidden text-white">
            <div className="mx-auto max-w-5xl px-5 py-24">
                <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
                    {/* <iframe
                        alt="Nike Air Max 21A"
                        className="w-[300px] h-[300px] overflow-hidden"
                        src="https://haxy.cloud"
                        scrolling='no'
                        seamless="seamless" 
                    /> */}
                    <div className="mt-6 w-full lg:mt-0 lg:w-full lg:pl-10">
                        <h2 className="text-sm font-semibold tracking-widest capitalize text-white">App Type: {type || ''}</h2>
                        <h1 className="my-4 text-3xl font-semibold capitalize text-white">{title || ""}</h1>
                        <div className="my-4 flex items-center">
                            <span className=" place-content-center  gap-1 grid grid-cols-5">
                                {tags.map((tag, i) => (
                                    // <Star key={i} size={16} className="text-yellow-500" />
                                    <Tags key={i} tag={tag} />
                                ))}
                                {/* <span className="ml-3 inline-block text-xs font-semibold">4 Reviews</span> */}
                            </span>
                        </div>
                        <p className="leading-relaxed">
                            {description || ''}
                        </p>
                        <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
                            <div className="flex items-center">
                                <span className="mr-3 text-sm font-semibold">Primary Domain</span>
                                <p className=" font-bold  "> {primaryDomain || ""}</p>
                            </div>
                            <div className="ml-auto flex items-center">
                                <span className="mr-3 text-sm font-semibold">Actions</span>
                                <div className="relative">
                                    <select className="appearance-none rounded border text-black border-gray-300 py-2 pl-3 pr-10 text-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black">
                                        <option>Stop</option>
                                        <option>Delete</option>
                                    </select>
                                    <span className="pointer-events-none absolute right-0 top-0 flex h-full w-10 items-center justify-center text-center text-gray-600">
                                        <ChevronDown size={16} />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="title-font text-xl font-bold text-white">Server IP : 1.1.1.1</span>
                            <button
                                type="button"
                                className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Reboot
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
