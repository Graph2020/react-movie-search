function Search() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-2">
      <p className="text-[16px] font-medium tracking-wider text-teal-600 uppercase md:text-lg">
        movie name
      </p>
      <input
        className="w-40 rounded-lg border-[0.5px] border-gray-300 px-2 text-sm outline-none sm:w-80 md:w-96 md:py-1 lg:w-lg"
        type="text"
      />
      <button className="cursor-pointer rounded-lg bg-teal-500 px-5 py-2 text-black sm:py-0 md:py-1">
        Search
      </button>
    </div>
  );
}

export default Search;
