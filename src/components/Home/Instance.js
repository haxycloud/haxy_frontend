import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function InstanceCard(props) {

    const {
        title = null,
        description = null,
        tags = [],
        type = null,
        version = null,
        domain = [],
        primaryDomain = null,
    } = props || {}
    const navigate = useNavigate()
    return (
        <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row bg-[#f9f6ee]">

            <div>
                <div className="p-4">
                    {
                        title !== null && (
                            <h1 className="inline-flex items-center text-lg font-semibold">
                                {title}
                            </h1>
                        )
                    }
                    {
                        description !== null && (
                            <p className="mt-3 text-sm text-gray-600">
                                {description}
                            </p>
                        )
                    }
                    {
                        primaryDomain !== null && (
                            <span className="mb-2 mr-2 inline-block rounded-full bg-[#b3de45] px-3 py-1 text-[10px] font-semibold text-gray-900">
                                {primaryDomain}
                            </span>
                        )
                    }

                    <div className="mt-4">
                        {
                            Array.isArray(tags) && tags?.length > 0 && tags?.map((tag) => {
                                return (
                                    <span className="mb-2 mr-2 inline-block rounded-full bg-[#7692FF] px-3 py-1 text-[10px] font-semibold text-gray-900">
                                        #{tag}
                                    </span>
                                )
                            })
                        }


                    </div>
                    <div className="mt-3 flex items-center space-x-2">
                        <span className="flex justify-between w-full items-center">
                            <span className="text-[10px] font-bold text-gray-900">Framwork {type}</span>
                            {/* <span className="text-[8px] font-medium text-gray-500">@dan_abromov</span> */}
                            <button
                                type="button"
                                onClick={() => navigate(`/Occurences/${title}`)}
                                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                                Manage
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
