// import React, { useEffect, useState } from "react";
import {Link} from "react-router";
// import img from "../../assets/background-detail.png";
// import iconDelete from "../../assets/delete-icon.svg";
// import iconEdit from "../../assets/edit-icon.svg";
// import iconView from "../../assets/view-icon.svg";

function ListMoviePage() {
  return (
    <>
      <section className="relative top-12 bg-white rounded-lg mx-10 p-10">
        <div className="flex flex-wrap justify-between mb-12">
          <h1 className="text-2xl font-bold">List Movie</h1>
          <div className="flex flex-wrap gap-5">
            <input
              className="bg-[#A0A3BD33] focus:outline-none px-5 rounded-lg"
              type="date"
              name="filterDate"
              id="filterDate"
            />
            <Link
              to={"../../admin/add"}
              className="w-36 bg-primary text-white font-bold px-6 py-3 rounded-lg active:scale-95 transition-all"
            >
              Add Movies
            </Link>
          </div>
        </div>
        <section className="overflow-x-auto">
          <table className="bg-white pt-10 min-w-full divide-y-2 divide-gray-200">
            <thead>
              <tr>
                <th className="px-3 py-2 whitespace-nowrap">No</th>
                <th className="px-3 py-2 whitespace-nowrap">Thumbnail</th>
                <th className="px-3 py-2 whitespace-nowrap">Movie Name</th>
                <th className="px-3 py-2 whitespace-nowrap">Category</th>
                <th className="px-3 py-2 whitespace-nowrap">Release Date</th>
                <th className="px-3 py-2 whitespace-nowrap">Duration</th>
                <th className="px-3 py-2 whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-3 py-2 whitespace-nowrap">1</td>
                <td className="px-3 py-2 whitespace-nowrap">
                  {/* <img className="mx-auto w-12 h-12 rounded-lg" src={img} alt="thumbnail" /> */}
                  {/* <div
                    className="mx-auto bg-cover w-12 h-12  bg-top rounded"
                    style={{backgroundImage: `url(${img})`}}
                  ></div> */}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  Spiderman HomeComing
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  Action, Adventure, Comedy, Horror, Comedy, Horror
                </td>
                <td className="px-3 py-2 whitespace-nowrap">07/05/2023</td>
                <td className="px-3 py-2 whitespace-nowrap">
                  2 Hours 15 Minutes
                </td>
                <td className=" flex gap-1 justify-center">
                  <button
                    className="bg-primary rounded p-1 my-2 active:scale-95"
                    type="button"
                  >
                    {/* <img src={iconView} alt="view" width={31} height={31} /> */}
                  </button>
                  <button
                    className="bg-[#5D5FEF] rounded p-1 my-2 active:scale-95"
                    type="button"
                  >
                    {/* <img src={iconEdit} alt="edit" width={31} height={31} /> */}
                  </button>
                  <button
                    className="bg-[#E82C2C] rounded p-1 my-2 active:scale-95"
                    type="button"
                  >
                    {/* <img src={iconDelete} alt="delete" width={31} height={31} /> */}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        <PaginationTable />
      </section>
    </>
  );
}

function PaginationTable() {
  return (
    <ul className="flex justify-center gap-1 text-gray-900 mt-10">
      <li>
        <a
          href="#"
          className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
          aria-label="Previous page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50"
        >
          1
        </a>
      </li>

      <li className="block size-8 rounded border border-primary bg-primary text-center text-sm/8 font-medium text-white">
        2
      </li>

      <li>
        <a
          href="#"
          className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50"
        >
          3
        </a>
      </li>

      <li>
        <a
          href="#"
          className="block size-8 rounded border border-gray-200 text-center text-sm/8 font-medium transition-colors hover:bg-gray-50"
        >
          4
        </a>
      </li>

      <li>
        <a
          href="#"
          className="grid size-8 place-content-center rounded border border-gray-200 transition-colors hover:bg-gray-50 rtl:rotate-180"
          aria-label="Next page"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </li>
    </ul>
  );
}

export default ListMoviePage;
