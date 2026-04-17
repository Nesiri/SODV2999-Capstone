

type Movie = {
  title: string;
  year: number;
  description: string;
  imdbId: string;
  image: string;
};

const movies: Movie[] = [
  {
    title: 'The Theory of Everything',
    year: 2014,
    imdbId: 'tt2980516',
    image: '/images/pattern/movies-of-inspiration/the-theory-of-everything.jpg',
    description:
      "Based on the life of Stephen Hawking, the Theory Of Everything is a story about Stephen Hawking and his wife Jane Wilde. At 21, Stephen realizes that he has motor neuron disease which is not curable, but he doesn't give up.",
  },
  {
    title: '42',
    year: 2013,
    imdbId: 'tt0453562',
    image: '/images/pattern/movies-of-inspiration/42.jpg',
    description:
      'When talent silences all critics. Branch Rickey hires Jackie Robinson against all odds. Criticism follows, but talent proves everything.',
  },
  {
    title: 'Lincoln',
    year: 2012,
    imdbId: 'tt0443272',
    image: '/images/pattern/movies-of-inspiration/lincoln.jpg',
    description:
      "The story of Abraham Lincoln's fight to abolish slavery during the American Civil War using political and moral leadership.",
  },
  {
    title: 'Intouchables',
    year: 2011,
    imdbId: 'tt1675434',
    image: '/images/pattern/movies-of-inspiration/intouchables.jpg',
    description:
      'A wealthy quadriplegic man forms an unlikely friendship with his caretaker from a completely different background.',
  },
  {
    title: 'Moneyball',
    year: 2011,
    imdbId: 'tt1210166',
    image: '/images/pattern/movies-of-inspiration/moneyball.jpg',
    description:
      'A baseball coach challenges traditional methods and rebuilds his team using data-driven strategies.',
  },
  {
    title: 'Invictus',
    year: 2009,
    imdbId: 'tt1057500',
    image: '/images/pattern/movies-of-inspiration/invictus.jpg',
    description:
      'Nelson Mandela uses rugby to unite a divided South Africa after apartheid.',
  },
  {
    title: 'The Blind Side',
    year: 2009,
    imdbId: 'tt0878804',
    image: '/images/pattern/movies-of-inspiration/the-blind-side.jpg',
    description:
      'A homeless teenager is taken in by a caring family and discovers his potential.',
  },
  {
    title: 'Into the Wild',
    year: 2007,
    imdbId: 'tt0758758',
    image: '/images/pattern/movies-of-inspiration/into-the-wild.jpg',
    description:
      'A young man abandons his conventional life to explore nature and discover himself.',
  },
  {
    title: 'Freedom Writers',
    year: 2007,
    imdbId: 'tt0463998',
    image: '/images/pattern/movies-of-inspiration/freedom-writers.jpg',
    description:
      'A teacher inspires her students to express themselves and pursue education.',
  },
  {
    title: 'October Sky',
    year: 1999,
    imdbId: 'tt0132477',
    image: '/images/pattern/movies-of-inspiration/october-sky.jpg',
    description:
      "A boy dreams of building rockets despite his father's opposition.",
  },
  {
    title: 'Patch Adams',
    year: 1998,
    imdbId: 'tt0129290',
    image: '/images/pattern/movies-of-inspiration/patch-adams.jpg',
    description:
      'A doctor believes in treating patients with humor and compassion.',
  },
  {
    title: 'Glory Road',
    year: 2006,
    imdbId: 'tt0425591',
    image: '/images/pattern/movies-of-inspiration/glory-road.jpg',
    description:
      'A basketball coach breaks racial barriers by focusing on talent.',
  },
  {
    title: 'The Pursuit of Happyness',
    year: 2006,
    imdbId: 'tt0454921',
    image: '/images/pattern/movies-of-inspiration/the-pursuit-of-happyness.jpg',
    description:
      'A struggling father works hard to build a better life for his son.',
  },
  {
    title: 'Rescue Dawn',
    year: 2006,
    imdbId: 'tt0462504',
    image: '/images/pattern/movies-of-inspiration/rescue-dawn.jpg',
    description: 'A war prisoner fights to survive and escape captivity.',
  },
  {
    title: "The World's Fastest Indian",
    year: 2005,
    imdbId: 'tt0412080',
    image:
      '/images/pattern/movies-of-inspiration/the-worlds-fastest-indian.jpg',
    description: 'A man pursues his dream of breaking a world speed record.',
  },
  {
    title: 'Coach Carter',
    year: 2005,
    imdbId: 'tt0393162',
    image: '/images/pattern/movies-of-inspiration/coach-carter.jpg',
    description: 'A coach prioritizes education alongside sports success.',
  },
  {
    title: 'The Aviator',
    year: 2004,
    imdbId: 'tt0338751',
    image: '/images/pattern/movies-of-inspiration/the-aviator.jpg',
    description: 'The rise and struggles of aviation pioneer Howard Hughes.',
  },
  {
    title: 'Hotel Rwanda',
    year: 2004,
    imdbId: 'tt0395169',
    image: '/images/pattern/movies-of-inspiration/hotel-rwanda.jpg',
    description: 'A hotel manager saves lives during the Rwanda genocide.',
  },
  {
    title: 'Catch Me If You Can',
    year: 2002,
    imdbId: 'tt0264464',
    image: '/images/pattern/movies-of-inspiration/catch-me-if-you-can.jpg',
    description: 'A master con artist stays ahead of the FBI.',
  },
  {
    title: 'A Beautiful Mind',
    year: 2001,
    imdbId: 'tt0268978',
    image: '/images/pattern/movies-of-inspiration/a-beautiful-mind.jpg',
    description:
      'The journey of mathematician John Nash through brilliance and struggle.',
  },
];

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="rounded-xl border border-gray-100 !bg-white shadow-sm overflow-hidden flex flex-col">
      <a
        href={`https://www.imdb.com/title/${movie.imdbId}/`}
        target="_blank"
        rel="noreferrer"
        className="block overflow-hidden !text-[#5f2d85] hover:!text-[#5f2d85]"
      >
        <img
          src={movie.image}
          alt={`${movie.title} poster`}
          className="w-full aspect-[2/3] object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
        />
      </a>

      <div className="p-3 flex flex-col flex-1">
        <a
          href={`https://www.imdb.com/title/${movie.imdbId}/`}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-normal !text-[#5f2d85] hover:!text-[#5f2d85] underline underline-offset-2 leading-snug"
        >
          {movie.title} ({movie.year})
        </a>
        <p className="mt-2 text-xs leading-relaxed text-gray-600">
          {movie.description}
        </p>
      </div>
    </div>
  );
}

export default function MoviesOfInspiration() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f8f5ff] via-white to-purple-50 py-12 overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>

      <div className="w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="w-full lg:w-4/5 mx-auto">
          {/* Page Title */}
          <h1 className="mt-2 text-3xl sm:!text-4xl lg:text-5xl font-black tracking-tight">
            <span className="!text-[#5f2d85]">Movies of Inspiration</span>
          </h1>

          <div className="flex items-center gap-4 mt-3 mb-1">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          {/* Intro Card */}
          <main className="mt-6 !bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700 flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-1">
              <p className="leading-relaxed">
                Our soul needs inspiration just like the body needs food. Good
                inspirational movies uplift our soul and fill it with hope.
              </p>
              <p className="mt-4 leading-relaxed">
                These stories teach lessons, build courage, and help us move
                forward in life.
              </p>
            </div>
            <div className="sm:w-[30vw] sm:max-w-[18rem] sm:flex-shrink-0 w-full">
              <img
                src="/images/pattern/movies-of-inspiration/hero.jpg"
                alt="Movies"
                className="w-full h-full object-cover object-top rounded-lg shadow-md"
              />
            </div>
          </main>

          {/* Movies Grid */}
          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8">
            <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
              Inspirational Movies based on True Stories &amp; Events
            </h2>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
              {movies.map((movie) => (
                <MovieCard key={movie.imdbId} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
