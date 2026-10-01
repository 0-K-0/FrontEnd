import useFetch from "../useFetch";
const Movie = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/movies");
  return (
    <div>
      <h1>List of the movies</h1>
      <ul>
        {data?.map((movie) => (
          <li>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Movie;
