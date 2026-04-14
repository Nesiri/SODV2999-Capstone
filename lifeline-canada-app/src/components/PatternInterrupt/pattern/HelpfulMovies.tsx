import { Link } from "react-router-dom";

type MoviePoster = {
  image: string;
  alt: string;
  href?: string;
};

const moviePosters: MoviePoster[] = [
  { image: "/images/pattern/helpful-movies/poster-01.jpg", alt: "Helpful Movie 1", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-02.jpg", alt: "Helpful Movie 2", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-03.jpg", alt: "Helpful Movie 3", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-04.jpg", alt: "Helpful Movie 4", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-05.jpg", alt: "Helpful Movie 5", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-06.jpg", alt: "Helpful Movie 6", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-07.jpg", alt: "Helpful Movie 7", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-08.jpg", alt: "Helpful Movie 8", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-09.jpg", alt: "Helpful Movie 9", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-10.jpg", alt: "Helpful Movie 10", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-11.jpg", alt: "Helpful Movie 11", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-12.jpg", alt: "Helpful Movie 12", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-13.jpg", alt: "Helpful Movie 13", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-14.jpg", alt: "Helpful Movie 14", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-15.jpg", alt: "Helpful Movie 15", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-16.jpg", alt: "Helpful Movie 16", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-17.jpg", alt: "Helpful Movie 17", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-18.jpg", alt: "Helpful Movie 18", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-19.jpg", alt: "Helpful Movie 19", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-20.jpg", alt: "Helpful Movie 20", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-21.jpg", alt: "Helpful Movie 21", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-22.jpg", alt: "Helpful Movie 22", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-23.jpg", alt: "Helpful Movie 23", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-24.jpg", alt: "Helpful Movie 24", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-25.jpg", alt: "Helpful Movie 25", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-26.jpg", alt: "Helpful Movie 26", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-27.jpg", alt: "Helpful Movie 27", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-28.jpg", alt: "Helpful Movie 28", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-29.jpg", alt: "Helpful Movie 29", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-30.jpg", alt: "Helpful Movie 30", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-31.jpg", alt: "Helpful Movie 31", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-32.jpg", alt: "Helpful Movie 32", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-33.jpg", alt: "Helpful Movie 33", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-34.jpg", alt: "Helpful Movie 34", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-35.jpg", alt: "Helpful Movie 35", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-36.jpg", alt: "Helpful Movie 36", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-37.jpg", alt: "Helpful Movie 37", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-38.jpg", alt: "Helpful Movie 38", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-39.jpg", alt: "Helpful Movie 39", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-40.jpg", alt: "Helpful Movie 40", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-41.jpg", alt: "Helpful Movie 41", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-42.jpg", alt: "Helpful Movie 42", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-43.jpg", alt: "Helpful Movie 43", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-44.jpg", alt: "Helpful Movie 44", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-45.jpg", alt: "Helpful Movie 45", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-46.jpg", alt: "Helpful Movie 46", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-47.jpg", alt: "Helpful Movie 47", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-48.jpg", alt: "Helpful Movie 48", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-49.jpg", alt: "Helpful Movie 49", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-50.jpg", alt: "Helpful Movie 50", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-51.jpg", alt: "Helpful Movie 51", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-52.jpg", alt: "Helpful Movie 52", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-53.jpg", alt: "Helpful Movie 53", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-54.jpg", alt: "Helpful Movie 54", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-55.jpg", alt: "Helpful Movie 55", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-56.jpg", alt: "Helpful Movie 56", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-57.jpg", alt: "Helpful Movie 57", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-58.jpg", alt: "Helpful Movie 58", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-59.jpg", alt: "Helpful Movie 59", href: "#" },
  { image: "/images/pattern/helpful-movies/poster-60.jpg", alt: "Helpful Movie 60", href: "#" },
];

function PosterItem({ item }: { item: MoviePoster }) {
  const image = (
    <div className="overflow-hidden rounded-lg shadow-md">
      <img
        src={item.image}
        alt={item.alt}
        className="w-full object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
  );

  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer">
        {image}
      </a>
    );
  }

  return image;
}

export default function HelpfulMovies() {
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
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 bg-clip-text text-transparent">
              Helpful Movies
            </span>
          </h1>

          <div className="flex items-center gap-4 mt-3 mb-1">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          {/* Intro Card */}
          <main className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700 flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-1">
              <p className="leading-relaxed">
                Finding a non-triggering, positive or inspiring movie to watch
                is a great pattern interrupt. Alternatively sometimes you just
                need a pick-me-up, and the right film at the right time can do
                wonders to improve your mood. That's the power of storytelling,
                especially on a feature-length scale, and there are plenty of
                helpful movies like that.
              </p>
              <p className="mt-4 leading-relaxed">
                Below, we've assembled a curated list of some appropriate
                pattern interrupt movies to watch, from comedies to
                blockbusters to little-seen indies. Of course, depending on
                what your triggers are, not every choice is right for every
                person.
              </p>
            </div>
            <div className="sm:w-[30vw] sm:max-w-[18rem] sm:flex-shrink-0 w-full">
              <img
                src="/images/pattern/helpful-movies/hero.jpg"
                alt="Helpful movies"
                className="w-full h-full object-cover object-top rounded-lg shadow-md"
              />
            </div>
          </main>

          {/* Poster Grid */}
          <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-purple-700 mb-6 text-center">
              Helpful Movies
            </h2>

            <div className="grid grid-cols-5 gap-3 sm:grid-cols-6 lg:grid-cols-8">
              {moviePosters.map((item, index) => (
                <PosterItem key={index} item={item} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}