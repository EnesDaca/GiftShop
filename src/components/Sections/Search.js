import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Search = ({setSearchSection}) => {
  const navigate = useNavigate();
  const searchRef = useRef();

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchSection(false);
    navigate(`/products?q=${searchRef.current.value}`);
  }

  return (
    <div className="mx-auto max-w-screen-xl p-2 my-5">
        <form onSubmit={handleSearch} className="flex justify-end">   
            <div className="relative w-80">
                <span className="bi bi-search flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none dark:text-cyan-500"></span>
                <input ref={searchRef} name="search" type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 dark:bg-stone-600 dark:border-cyan-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-cyan-500 dark:focus:border-cyan-500" placeholder="Search" autoComplete="off" required="" />
            </div>
            <button type="submit" className="bi bi-search py-2.5 px-3 ml-2 text-sm font-medium text-white tirkiz rounded-lg border border-cyan-700 focus:ring-4 focus:outline-none">
            </button>
        </form>
    </div>
  )
}