import Search from "./components/Search";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4dfcf] p-2">
      <div className="flex min-h-96 w-full flex-col items-center rounded-2xl bg-mauve-100 p-2 lg:w-200 lg:p-5">
        <h1 className="mb-5 text-3xl font-bold text-teal-800">Movie Search</h1>
        <Search />
      </div>
    </main>
  );
}

export default App;
