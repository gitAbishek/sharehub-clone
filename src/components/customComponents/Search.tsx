import { useState } from "react";
import PropTypes from "prop-types";
import { IoIosSearch } from "react-icons/io";
import { useFormContext } from "react-hook-form";

const Search = ({ setSearch }: any) => {
  const [searchValue, setSearchValue] = useState("");
  const { register } = useFormContext();

  const handleChange = (event: any) => {
    const { value } = event.target;
    setSearchValue(value);
    setSearch(value);
  };

  return (
    <div className="w-full rounded-md flex  border border-gray-300  justify-start items-center  px-4 bg-[#093132]">
      <IoIosSearch className="font-bold text-gray-400 hover:cursor-pointer" />
      <input
        className="w-full outline-none text-gray-400 text-sm  pl-5 py-4 no-clear-button bg-[#093132]"
        placeholder="Company Name / Symbol"
        {...register("search")}
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
};

Search.propTypes = {
  setSearch: PropTypes.func.isRequired,
};

export default Search;
