import React, { useState } from "react";
import DisplayData from "./displayData.component";

const modulesData = [
  {
    id: 1,
    title: "Module 1",
    text: "This is the content of module 1",
    link: "https://example.com/module1",
  },
  {
    id: 2,
    title: "Module 2",
    text: "This is the content of module 2",
    link: "https://example.com/module2",
  },
  {
    id: 3,
    title: "Module 3",
    text: "This is the content of module 3",
    link: "https://example.com/module3",
  },
  {
    id: 4,
    title: "Module 4",
    text: "This is the content of module 4",
    link: "https://example.com/module4",
  },
  {
    id: 5,
    title: "Module 5",
    text: "This is the content of module 5",
    link: "https://example.com/module5",
  },
  {
    id: 6,
    title: "Module 6",
    text: "This is the content of module 6",
    link: "https://example.com/module6",
  },
  {
    id: 7,
    title: "Module 7",
    text: "This is the content of module 7",
    link: "https://example.com/module7",
  },
  // Add more module objects as needed
  //has to be feteched from backend
];

const courseName = "BMAT205L Probability and Statistics";

const ModuleBar = () => {
  const [selectedModuleId, setSelectedModuleId] = useState(1);
  const handleModuleClick = (moduleId) => {
    setSelectedModuleId(moduleId);
  };

  const handleModuleClickPrev = (moduleId) => {
    moduleId = moduleId - 1;
    if (moduleId >= 1) {
      setSelectedModuleId(moduleId);
    }
  };
  
  const handleModuleClickNext = (moduleId) => {
    const totalModules = modulesData.length;
    const nextModuleId = moduleId + 1;
  
    if (nextModuleId <= totalModules) {
      setSelectedModuleId(nextModuleId);
    }
  };  

  return (
    <>
      <div className="sm:pt-20 pt-32">
        <div className="fixed top-20 left-0 right-0">
          <button
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
        </div>
        <aside
          id="logo-sidebar"
          class="fixed sm:top-20 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
            <ul className="space-y-2 font-medium">
              <li>
                <div className="flex items-center font-bold text-2xl p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                  <span className="ml-3">{courseName}</span>
                </div>
              </li>
              {modulesData.map((module) => (
                <li>
                  <div
                    key={module.id}
                    onClick={() => handleModuleClick(module.id)}
                    className="cursor-pointer flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      {module.title}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Displaying Module Data here */}
        <div class="p-4 sm:ml-64">
          <div class="dark:bg-gray-900 p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 ">
            <DisplayData
              moduleId={selectedModuleId}
              modulesData={modulesData}
            />

<div className="flex justify-center">
  <div className="inline-flex rounded-md shadow-sm" role="group">
    <button
      onClick={() => handleModuleClickPrev(selectedModuleId)}
      type="button"
      disabled={selectedModuleId === 1}
      className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
    >
      Previous
    </button>

    <button
      onClick={() => handleModuleClickNext(selectedModuleId)}
      type="button"
      disabled={selectedModuleId === modulesData.length}
      className="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
    >
      Next
    </button>
  </div>
</div>

          </div>
        </div>
      </div>
    </>
  );
};
export default ModuleBar;
