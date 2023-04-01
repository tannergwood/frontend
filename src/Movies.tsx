import data from './MovieDataSample.json';
import { useState } from 'react';

const MDS = data.MovieDataSample;

function MovieList() {
  const [listOfMovies, setListOfMovies] = useState(MDS);

  const addMovie = () => {
    setListOfMovies([
      ...MDS,
      {
        MovieId: 6,
        Category: 'Action/Adventure',
        Title: 'Die Hard',
        Year: 1988,
        Director: 'John McTiernan',
        Rating: 'R',
      },
    ]);
  };

  return (
    <>
      <div>
        <h1>Joel Hilton's Movie Collection</h1>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Director</th>
              <th>Rating</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {listOfMovies.map((m) => (
              <tr key={m.MovieId}>
                <td>{m.Title}</td>
                <td>{m.Year}</td>
                <td>{m.Director}</td>
                <td>{m.Rating}</td>
                <td>{m.Category}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <button className="btn btn-primary" onClick={addMovie}>
          Add Movie
        </button>
      </div>
    </>
  );
}

export default MovieList;
