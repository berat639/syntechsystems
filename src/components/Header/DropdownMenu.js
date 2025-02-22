import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const DropdownMenu = ({
  label,
  items = [],
  className = '',
  buttonClassName = '',
  itemsClassName = '',
}) => {
  const router = useRouter();

  const handleClick = async (href, close) => {
    close();
    await router.push(href);
  };

  return (
    <Menu as="div" className={`relative inline-block text-left ${className}`}>
      <div>
        <Menu.Button
          className={`
            inline-flex w-full items-center justify-center gap-x-1.5 rounded-md
            bg-white/10 px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100
            hover:bg-gray-100 dark:hover:bg-gray-800
            focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
            transition-colors duration-200 ${buttonClassName}
          `}
        >
          {label}
          <ChevronDown className="-mr-1 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`
            absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md
            bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5
            focus:outline-none divide-y divide-gray-100 dark:divide-gray-700
            ${itemsClassName}
          `}
        >
          {items.map((section, sectionIdx) => (
            <div key={sectionIdx} className="py-1">
              {section.map((item, itemIdx) => (
                <Menu.Item key={itemIdx}>
                  {({ active, close }) => (
                    <a
                      href={item.href}
                      className={`
                        ${active
                          ? 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                          : 'text-gray-700 dark:text-gray-200'}
                        group flex items-center px-4 py-2 text-sm no-underline hover:underline
                      `}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClick(item.href, close);
                      }}
                    >
                      {item.icon && (
                        <item.icon
                          className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      )}
                      {item.label}
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

DropdownMenu.displayName = 'DropdownMenu';