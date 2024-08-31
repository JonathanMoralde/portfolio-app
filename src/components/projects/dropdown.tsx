"use client";

import Link from "next/link";
import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

interface DropdownProps {
  label: string;
  options: string[];
  isProjects: boolean;
  currentTech?: string;
  currentProjects?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  isProjects,
  currentProjects,
  currentTech,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex items-center gap-1 justify-center w-full border-none bg-transparent text-lg font-light  focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption ? selectedOption : label}
          <LuChevronDown />
        </button>
      </div>

      {isOpen && (
        <div
          className="z-50 origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
        >
          <div className="py-1 px-1 max-h-80 rounded-md overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent hover:scrollbar-thumb-gray-700">
            {options.map((option, index) => (
              <Link
                key={index}
                href={`/projects/${
                  isProjects ? option.toLocaleLowerCase() : currentProjects
                }/${!isProjects ? option.toLocaleLowerCase() : currentTech}`}
                className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition-colors ${
                  isProjects
                    ? option.toLocaleLowerCase() == currentProjects
                      ? "bg-gray-200"
                      : ""
                    : option.toLocaleLowerCase() == currentTech
                    ? "bg-gray-200"
                    : ""
                }`}
                role="menuitem"
              >
                {option}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
