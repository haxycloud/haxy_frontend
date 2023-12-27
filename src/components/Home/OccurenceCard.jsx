import React, { useState, useEffect } from 'react';
import './Home.css';
import { Skeleton } from 'antd';
import OccurenceHeader from './OccurenceHeader';
import Tabs from './Tabs';

export default function OccurrenceCard(props) {
  const [instance, setInstance] = useState({});

  // Simulate setting the value of `instance` after 10 seconds
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setInstance({
        title: "React App 1",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?",
        tags: ["React", "Frontend", "React", "Frontend", "React", "Frontend"],
        type: "react",
        version: 10,
        primaryDomain:"keerthi.haxy.cloud",
        domain: ["test.haxy.space", "keerti.org.in", "test.haxy.space", "keerti.org.in", "test.haxy.space", "keerti.org.in"],
      });
    }, 100);

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className='w-full'>
      {Object.keys(instance).length === 0 ? (
        <>
          <Skeleton active />
          <Skeleton active className='mt-4' />
          <Skeleton active className='mt-4' />



        </>
      ) : (
        <div className='h-full overflow-y-scroll Instance-grid'>
        <OccurenceHeader
        {...instance}

         />
         <Tabs/>


        {/* <div className='w-full h-auto rounded-xl p-4 py-8 text-white'>
          <div className='occurrence_header text-3xl font-bold'>{instance?.title || ""}</div>
          <div className='occurrence_header text-sm font-normal mt-10'>{instance?.description || ""}</div>

          <div className="mt-4">
            {
              Array.isArray(instance?.tags) && instance?.tags?.length > 0 && instance?.tags?.map((tag) => {
                return (
                  <span className="mb-2 mr-2 inline-block rounded-full bg-[#7692FF] px-3 py-1 text-[10px] font-semibold text-gray-900">
                    #{tag}
                  </span>
                )
              })
            }




          </div>
          <div className='mt-2 '>

           <span className='pr-2'>Primary Domain :</span> 
            {
            instance?.primaryDomain !== null && (
              <span className="mb-2 mr-2 inline-block rounded-full bg-[#b3de45] px-3 py-1 text-[10px] font-semibold text-gray-900">
                {instance?.primaryDomain}
              </span>
            )
          }
          </div>
          <div className="mt-4 flex gap-4 w-full items-center">
           <span className='mb-2'>Domains:</span> 
            {
              Array.isArray(instance?.domain) && instance?.domain?.length > 0 && instance?.domain?.map((tag) => {
                return (
                  <span className="mb-2 mr-2 inline-block rounded-full bg-[#7692FF] px-3 py-1 text-[10px] font-semibold text-gray-900">
                    {tag}
                  </span>
                )
              })
            }




          </div>
          <div className='flex justify-end gap-4'>
          <button
        type="button"
        className="rounded-md bg-[#415a77] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#415a77] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Restart
      </button>

      <button
        type="button"
        className="rounded-md bg-[#c1121f] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#c1121f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Stop
      </button>

            </div>

        </div> */}

        </div>
      )}
    </div>
  );
}
