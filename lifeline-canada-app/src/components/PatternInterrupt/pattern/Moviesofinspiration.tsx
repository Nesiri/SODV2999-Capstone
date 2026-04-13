import { Link } from "react-router-dom";

type Movie = {
  title: string;
  year: number;
  description: string;
  imdbId: string;
  image: string;
};

const movies: Movie[] = [
  {
    title: "The Theory of Everything",
    year: 2014,
    imdbId: "tt2980516",
    image: "/images/pattern/movies-of-inspiration/the-theory-of-everything.jpg",
    description:
      "Based on the life of Stephen Hawking, the Theory Of Everything is a story about Stephen Hawking and his wife Jane Wilde. At 21, Stephen realizes that he has motor neuron disease which is not curable, but he doesn't give up.",
  },
  {
    title: "42",
    year: 2013,
    imdbId: "tt0453562",
    image: "/images/pattern/movies-of-inspiration/42.jpg",
    description:
      "When talent silences all critics. Branch Rickey hires Jackie Robinson against all odds. Criticism follows, but talent proves everything.",
  },
  {
    title: "Lincoln",
    year: 2012,
    imdbId: "tt0443272",
    image: "/images/pattern/movies-of-inspiration/lincoln.jpg",
    description:
      "The story of Abraham Lincoln's fight to abolish slavery during the American Civil War using political and moral leadership.",
  },
  {
    title: "Intouchables",
    year: 2011,
    imdbId: "tt1675434",
    image: "/images/pattern/movies-of-inspiration/intouchables.jpg",
    description:
      "A wealthy quadriplegic man forms an unlikely friendship with his caretaker from a completely different background.",
  },
  {
    title: "Moneyball",
    year: 2011,
    imdbId: "tt1210166",
    image: "/images/pattern/movies-of-inspiration/moneyball.jpg",
    description:
      "A baseball coach challenges traditional methods and rebuilds his team using data-driven strategies.",
  },
  {
    title: "Invictus",
    year: 2009,
    imdbId: "tt1057500",
    image: "/images/pattern/movies-of-inspiration/invictus.jpg",
    description:
      "Nelson Mandela uses rugby to unite a divided South Africa after apartheid.",
  },
  {
    title: "The Blind Side",
    year: 2009,
    imdbId: "tt0878804",
    image: "/images/pattern/movies-of-inspiration/the-blind-side.jpg",
    description:
      "A homeless teenager is taken in by a caring family and discovers his potential.",
  },
  {
    title: "Into the Wild",
    year: 2007,
    imdbId: "tt0758758",
    image: "/images/pattern/movies-of-inspiration/into-the-wild.jpg",
    description:
      "A young man abandons his conventional life to explore nature and discover himself.",
  },
  {
    title: "Freedom Writers",
    year: 2007,
    imdbId: "tt0463998",
    image: "/images/pattern/movies-of-inspiration/freedom-writers.jpg",
    description:
      "A teacher inspires her students to express themselves and pursue education.",
  },
  {
    title: "October Sky",
    year: 1999,
    imdbId: "tt0132477",
    image: "/images/pattern/movies-of-inspiration/october-sky.jpg",
    description:
      "A boy dreams of building rockets despite his father's opposition.",
  },
  {
    title: "Patch Adams",
    year: 1998,
    imdbId: "tt0129290",
    image: "/images/pattern/movies-of-inspiration/patch-adams.jpg",
    description:
      "A doctor believes in treating patients with humor and compassion.",
  },
  {
    title: "Glory Road",
    year: 2006,
    imdbId: "tt0425591",
    image: "/images/pattern/movies-of-inspiration/glory-road.jpg",
    description:
      "A basketball coach breaks racial barriers by focusing on talent.",
  },
  {
    title: "The Pursuit of Happyness",
    year: 2006,
    imdbId: "tt0454921",
    image: "/images/pattern/movies-of-inspiration/the-pursuit-of-happyness.jpg",
    description:
      "A struggling father works hard to build a better life for his son.",
  },
  {
    title: "Rescue Dawn",
    year: 2006,
    imdbId: "tt0462504",
    image: "/images/pattern/movies-of-inspiration/rescue-dawn.jpg",
    description:
      "A war prisoner fights to survive and escape captivity.",
  },
  {
    title: "The World's Fastest Indian",
    year: 2005,
    imdbId: "tt0412080",
    image: "/images/pattern/movies-of-inspiration/the-worlds-fastest-indian.jpg",
    description:
      "A man pursues his dream of breaking a world speed record.",
  },
  {
    title: "Coach Carter",
    year: 2005,
    imdbId: "tt0393162",
    image: "/images/pattern/movies-of-inspiration/coach-carter.jpg",
    description:
      "A coach prioritizes education alongside sports success.",
  },
  {
    title: "The Aviator",
    year: 2004,
    imdbId: "tt0338751",
    image: "/images/pattern/movies-of-inspiration/the-aviator.jpg",
    description:
      "The rise and struggles of aviation pioneer Howard Hughes.",
  },
  {
    title: "Hotel Rwanda",
    year: 2004,
    imdbId: "tt0395169",
    image: "/images/pattern/movies-of-inspiration/hotel-rwanda.jpg",
    description:
      "A hotel manager saves lives during the Rwanda genocide.",
  },
  {
    title: "Catch Me If You Can",
    year: 2002,
    imdbId: "tt0264464",
    image: "/images/pattern/movies-of-inspiration/catch-me-if-you-can.jpg",
    description:
      "A master con artist stays ahead of the FBI.",
  },
  {
    title: "A Beautiful Mind",
    year: 2001,
    imdbId: "tt0268978",
    image: "/images/pattern/movies-of-inspiration/a-beautiful-mind.jpg",
    description:
      "The journey of mathematician John Nash through brilliance and struggle.",
  },
];

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="flex flex-col">
      <a
        href={`https://www.imdb.com/title/${movie.imdbId}/`}
        target="_blank"
        rel="noreferrer"
        className="block overflow-hidden rounded-sm shadow-[0_4px_14px_rgba(0,0,0,0.22)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300"
      >
        <img
          src={movie.image}
          alt={`${movie.title} poster`}
          className="w-full aspect-[2/3] object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
      </a>

     <a
        href={`https://www.imdb.com/title/${movie.imdbId}/`}
        target="_blank"
        rel="noreferrer"
        className="mt-3 text-center text-[14px] font-semibold hover:underline px-1"
        style={{ color: "#89009B", textDecorationColor: "#89009B" }}
        >
        {movie.title} ({movie.year})
      </a>

      <p className="mt-2 text-[13px] leading-6 text-[#333] px-1">
        {movie.description}
      </p>
    </div>
  );
}

export default function MoviesOfInspiration() {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">

      <div className="mx-auto max-w-[1200px] px-6 py-6">
        <div className="text-[12px] text-[#666]">
          <Link to="/pattern" className="text-[#4c7bd9] hover:underline">
            Pattern Interrupts
          </Link>{" "}
          / <span className="text-[#333]">Movies of Inspiration</span>
        </div>
      </div>

      <section className="w-full bg-[linear-gradient(to_right,#e7e3f3_0%,#e7e3f3_50%,#e8edf7_50%,#e8edf7_100%)]">
        <div className="mx-auto grid max-w-[980px] items-center gap-10 px-6 py-14 md:grid-cols-2">
          <div>
            <h1 className="font-serif text-[34px] md:text-[46px] text-[#89009B]">
              Movies of Inspiration
            </h1>

            <div className="mt-4 space-y-4 text-[15px]">
              <p>
                Our soul needs inspiration just like the body needs food. Good inspirational
                movies uplift our soul and fill it with hope.
              </p>
              <p>
                These stories teach lessons, build courage, and help us move forward in life.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/images/pattern/movies-of-inspiration/hero.jpg"
              alt="Movies"
              className="w-full max-w-[420px] object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[980px] px-6 py-14">
        <h2 className="text-[28px] md:text-[34px]">
          Inspirational Movies based on True Stories & Events
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbId} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
}