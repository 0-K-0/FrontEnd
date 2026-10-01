import Movie from "./components/movies";
import MovieByTitle from "./components/movieBytitle";
const App = () => {
  return (
    <main>
      <Movie />
      <MovieByTitle title={"Gully Boy"} />
    </main>
  );
};
export default App;
