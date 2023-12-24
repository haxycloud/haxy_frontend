import React from 'react'
import { Home, ChevronRight, Box } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
export default function BreadcrumbTwo() {
    const navigate = useNavigate()
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
            <Box color="#ffffff" className=" h-4 w-4" />
          <Link
            to="/"
            className="ml-1 inline-flex text-sm font-medium text-white hover:underline md:ml-2"
          >
            Home
          </Link>
        </li>
        <li>
          <div className="flex items-center">
            <ChevronRight  color="#ffffff" className="h-4 w-4" />
            <Link to="/Occurences" className="ml-1 text-sm font-medium text-white hover:underline md:ml-2">
            Occurences
            </Link>
          </div>
        </li>
        
      </ol>
    </nav>
  )
}
