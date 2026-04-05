import Movie from "./components/Movie";
import Search from "./components/Search";
import useControl from "./hooks/useControl";

function App() {
  const [currentText, handleChange] = useControl();
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4dfcf] p-2">
      <div className="container flex min-h-96 flex-col items-center gap-5 rounded-2xl bg-mauve-100 p-2 lg:w-200 lg:p-5">
        <h1 className="mb-3 text-3xl font-bold text-teal-800">Movie Search</h1>
        <Search intText={currentText} handleInputText={handleChange} />
        <Movie textSearch={currentText} />
      </div>
    </main>
  );
}

export default App;
