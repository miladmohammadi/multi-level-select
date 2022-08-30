/* eslint-disable */
import React, { useState } from "react";

interface IOption {
  value: string | number;
  key: string | number;
  image?: string;
  children?: IOption[];
}

interface IMultiLevelSelect {
  SearchItem?: React.ReactNode;
  OptionItem?: React.ReactNode;
  options: IOption[];
}

interface IOptionData {
  option: IOption;
  setSelectedOption?: React.Dispatch<React.SetStateAction<IOption | undefined>>;
}

type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

function Arrow() {
  return (
    <span className="mr-auto">
      <svg
        className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </span>
  );
}

const OptionContent: React.FC<IOptionData> = React.memo(({ option }) => {
  return (
    <span key={option.key} className="pr-1 flex-1">
      <a className="flex items-center px-4 py-3 -mx-2 transition-colors duration-300 transform border-b border-gray-100  dark:hover:bg-gray-700 dark:border-gray-700">
        <img
          className="flex-shrink-0 object-cover w-8 h-8 mx-1 rounded-full"
          src={option.image}
          alt="avatar"
        />
        <p className="mx-2 text-sm text-gray-600 dark:text-white">
          <span className="font-bold">{option?.value}</span>
        </p>
      </a>
    </span>
  );
});

const SelectOptionItem: React.FC<IOptionData> = React.memo(
  ({ option, setSelectedOption }) => {
    return (
      <li
        className="rounded-sm relative px-3 py-1 hover:bg-gray-100"
        onClick={(e) => {
          e.stopPropagation();
          setSelectedOption && setSelectedOption(option);
        }}
      >
        <button className="w-full text-left flex items-center outline-none focus:outline-none">
          <OptionContent option={option} />
          {option["children"] && <Arrow />}
        </button>
        {option["children"] && (
          <ul
            className="bg-white border rounded-sm absolute top-0 right-0
  transition duration-150 ease-in-out origin-top-left
  min-w-80  w-80
  "
          >
            {option["children"].map((child) => (
              <SelectOptionItem
                option={child}
                setSelectedOption={setSelectedOption}
              />
            ))}
          </ul>
        )}
      </li>
    );
  }
);

function SelectSearchItem() {
  return (
    <li className="rounded-sm px-3 py-1">
      <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
        <div className="flex flex-auto flex-wrap"></div>
        <div className="text-gray-300 w-8 py-1 pl-2 pr-1  flex items-center border-gray-200">
          <button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-chevron-up w-4 h-4"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>
        <input
          placeholder="Search by position"
          className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
        />
      </div>
    </li>
  );
}

const BaseComponent: React.FC<IOptionData | { option: undefined }> = React.memo(
  ({ option }) => {
    return (
      <div>
        <button className="w-full w-80 flex flex-auto flex-wrap my-1 p-2 bg-white min-w-80  flex border border-gray-200 rounded outline-none focus:outline-none border px-3 bg-white rounded-sm flex items-center min-w-80">
          <span className="pr-1 font-semibold flex-1">
            {option ? option.value : "Select"}
          </span>
          <span>
            <svg
              className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </span>
        </button>
      </div>
    );
  }
);

const MultiLevelSelect: React.FC<IMultiLevelSelect> = React.memo(
  ({ SearchItem, OptionItem, options }) => {
    const [selectedOption, setSelectedOption] =
      useState<ArrayElement<typeof options>>();
    return (
      <div className="group relative inline-block">
        <BaseComponent option={selectedOption} />
        <ul
          className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute
  transition duration-150 ease-in-out min-w-80 z-20 w-80 mt-1 bg-white rounded-md shadow-lg dark:bg-gray-800 py-3"
        >
          {SearchItem ? SearchItem : <SelectSearchItem />}
          {OptionItem ? (
            OptionItem
          ) : (
            <>
              {options.map((o) => (
                <SelectOptionItem
                  option={o}
                  setSelectedOption={setSelectedOption}
                />
              ))}
            </>
          )}
        </ul>
      </div>
    );
  }
);

export { MultiLevelSelect };

// const styles: CSSProperties = {};
