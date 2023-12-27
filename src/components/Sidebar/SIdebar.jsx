import React from 'react'
import { Home, BarChart, Copy, Bookmark, Users, Settings, Box, Database, PaintBucket, Cylinder, Monitor } from 'lucide-react'
import { Tooltip } from 'antd'
export default function Sidebar() {
  return (
    <aside className="flex h-auto min-h-screen w-[5rem]  lg:w-16 flex-col items-center overflow-y-auto  bg-[#012a4a] py-8">
          {/* <aside className="flex h-[93vh] lg:h-[88.5vh] w-[5rem]  lg:w-16 flex-col items-center overflow-y-auto  bg-[#012a4a] py-8"> */}

      <nav className="flex flex-1 flex-col items-center space-y-6">
        <Tooltip placement="right" title={"Occurences"}>
          <a
            href="#"
            className="rounded-lg p-1.5 text-white hover:text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
          >
            <Box size={24} />
          </a>
        </Tooltip>
        <Tooltip placement="right" title={"Database"}>

          <a
            href="#"
            className="rounded-lg p-1.5 text-white hover:text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
          >
            <Database size={24} />
          </a>
        </Tooltip>
        <Tooltip placement="right" title={"Storage"}>

          <a
            href="#"
            className="rounded-lg p-1.5 text-white hover:text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
          >
            <Cylinder size={24} />
          </a>
        </Tooltip>
        <Tooltip placement="right" title={"Virtual Machines"}>

          <a
            href="#"
            className="rounded-lg p-1.5 text-white hover:text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
          >
            <Monitor size={24} />
          </a>
        </Tooltip>
        <Tooltip placement="right" title={"Users"}>


          <a
            href="#"
            className="rounded-lg p-1.5 text-white hover:text-gray-700 transition-colors duration-200 hover:bg-gray-100 focus:outline-none"
          >
            <Users size={24} />
          </a>
        </Tooltip>
      </nav>

      <div className="flex flex-col items-center space-y-6">
        <a
          href="#"
          className="rounded-lg bg-gray-100 p-1.5 text-gray-700 transition-colors duration-200 focus:outline-none"
        >
          <Settings size={24} />
        </a>


      </div>
    </aside>
  )
}
