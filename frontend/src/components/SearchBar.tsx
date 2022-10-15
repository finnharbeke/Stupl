import React, { useState } from "react";
import lectureData from "../data/lectures";
import AddSubjectModal from "./AddSubjectModal";

type Props = {};

const lectureNames = lectureData.map((l) => l.name);

const getLectureNamesStartingWith = (prefix: string) =>
  lectureNames.filter((n) => n.toLowerCase().startsWith(prefix));

const SearchBar = (props: Props) => {
  const [searchText, setSearchText] = useState<string>();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="w-full">
      <button
        className="btn btn-primary"
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        click
      </button>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {searchText != null && searchText.length != 0 && (
          <ul
            tabIndex={0}
            className="absolute dropdown-content menu p-2 shadow-md bg-base-200 rounded-box w-full"
          >
            {getLectureNamesStartingWith(searchText!).length > 0 ? (
              getLectureNamesStartingWith(searchText!).map((name) => (
                <li>
                  <a>{name}</a>
                </li>
              ))
            ) : (
              <li>
                <div className="flex justify-between">
                  <p>🍔 Nothing here...</p>
                  <p>Click to create Custom Subject</p>
                </div>
              </li>
            )}
          </ul>
        )}
      </div>
      <AddSubjectModal isOpen={modalIsOpen}></AddSubjectModal>
    </div>
  );
};

export default SearchBar;
