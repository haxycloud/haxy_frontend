import React from 'react'

const Tags = ({ tag }) => {
    return (
        <div>
            <span className="mb-2  inline-block rounded-full bg-[#7692FF] px-3 py-1 text-[10px] font-semibold text-gray-900">
                #{tag}
            </span>

        </div>
    )
}

export default Tags