import { DropdownItem } from './DropdownItem';
import { ArrowDownIcon } from '../Icons';

export const Dropdown = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative inline-block">
        <button className="relative z-10 block p-2 text-gray-700 bg-white border border-transparent rounded-md dark:text-white focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:bg-gray-800 focus:outline-none">
          <ArrowDownIcon />
        </button>

        <div className="absolute right-0 z-20 w-48 py-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800">
          <DropdownItem />
          <DropdownItem />
          <DropdownItem />
          <DropdownItem />
        </div>
      </div>
    </div>
  );
};
