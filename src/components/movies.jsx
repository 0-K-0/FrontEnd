import useFetch from "../useFetch";
const Movie = () => {
  const { data, loading, error } = useFetch(
    "https://be1-1-cw-be.onrender.com/movies",
  );
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
