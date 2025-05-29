// 'use client';

import { api_key, img_url, img_url_original } from "@/app/lib";
import { FaImdb } from "react-icons/fa";

import NotFound from "@/app/components/not-found";
import { IGenre } from "@/app/components/genre-button";

import CompaniesBlock from "@/app/components/companies-block";
import CastBlock from "@/app/components/cast-block";
import { IMovie } from "@/app/components/movie-item";
import { IActor } from "@/app/components/actor-card";
import { IVideo } from "@/app/components/video-card";
import VideosBlock from "@/app/components/videos-block";

interface Props {
  params: { movieId: string };
}

export default async function MoviePage({ params }: Props) {
  // const [movie, setMovie] = useState<IMovie | null>(null);
  // const [actors, setActors] = useState<IActor[] | null>(null);

  // useEffect(() => {
  //   fetch(`https://api.themoviedb.org/3/movie/${movieId}?${api_key}`)
  //     .then((res) => {
  //       if (!res.ok) throw new Error("Movie not found");
  //       return res.json();
  //     })
  //     .then((res) => setMovie(res))
  //     .catch((err) => {
  //       console.log(err);
  //       setMovie(null);
  //     });
  // }, [movieId]);

  const [movieRes, actorsRes, videosRes] = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieId}?${api_key}`,
      {
        cache: "no-store",
      }
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieId}/credits?${api_key}`,
      {
        cache: "no-store",
      }
    ),
    fetch(
      `https://api.themoviedb.org/3/movie/${params.movieId}/videos?${api_key}`,
      {
        cache: "no-store",
      }
    ),
  ]);

  const movie: IMovie = await movieRes.json();
  const actorsData = await actorsRes.json();
  const videosData = await videosRes.json();
  const actors:IActor[] = actorsData.cast;
  const videos:IVideo[] = videosData.results;

  if (movie === null) {
    return <NotFound />;
  }

  return (
    <div className="w-full flex flex-col gap-10">
      <div
        className="w-full flex flex-col justify-center gap-3 p-3 relative bg-cover xl:p-10 xl:gap-10 lg:flex-row"
        style={{
          backgroundImage: `url(${img_url_original + movie.backdrop_path})`,
        }}
      >
        <div className="bg-black opacity-30 w-full h-full absolute top-0 left-0"></div>
        <div className="p-2 backdrop-blur-lg rounded-2xl md:p-5">
          <img
            src={img_url + movie.poster_path}
            alt={movie.title}
            className="w-full object-contain rounded-2xl lg:w-[400px]"
          />
        </div>

        <div className="flex flex-col gap-6 p-5 backdrop-blur-lg rounded-2xl lg:gap-3">
          <h4 className="text-3xl">{movie.title}</h4>

          <div className="flex flex-col justify-evenly gap-2 md:flex-row">
            <span className="flex gap-1 items-center">
              <FaImdb color="yellow" />
              <p className="flex gap-1 items-center text-gray-300">
                {movie.vote_average}.
              </p>
            </span>

            <span className="flex items-center">
              <p className="flex gap-1 items-center text-gray-300">
                Original title - {movie.original_title}.
              </p>
            </span>

            <span className="flex items-center">
              <p className="flex gap-1 items-center text-gray-300">
                Runtime - 
                {movie.runtime ? Number(movie.runtime / 60).toFixed(1) : "N/A"}{" "}
                hours.
              </p>
            </span>

            <span className="flex items-center">
              <p className="flex gap-1 items-center text-gray-300">
                Votes - {movie.vote_count}.
              </p>
            </span>

            <span className="flex items-center">
              <p className="text-gray-300">Date - {movie.release_date}.</p>
            </span>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-xl">Genres</h4>

            <ul className="flex flex-wrap gap-4">
              {movie.genres.map((genre: IGenre) => {
                return (
                  <li key={genre.id} className="text-gray-400">
                    {genre.name}
                  </li>
                );
              })}
            </ul>
          </div>

          <span className="text-gray-300 text-sm">{movie.overview}</span>
        </div>
      </div>

      <CompaniesBlock companies={movie.production_companies} />

      <CastBlock actors={actors} />

      <VideosBlock videos={videos} />
    </div>
  );
}