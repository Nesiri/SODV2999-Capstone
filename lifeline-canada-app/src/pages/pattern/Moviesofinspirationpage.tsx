import { Link } from "react-router-dom";

type Movie = {
  title: string;
  year: number;
  description: string;
  imdbId: string;
};

const movies: Movie[] = [
  {
    title: "The Theory of Everything",
    year: 2014,
    imdbId: "tt2980516",
    description:
      "Based on the life of Stephen Hawking, the Theory Of Everything is a story about Stephen Hawking and his wife Jane Wilde. At 21, Stephen realizes that he has motor neuron disease which is not curable, but he doesn't give up. Along with his wife, they both defy odds and make groundbreaking discoveries in the field of medicine and science.",
  },
  {
    title: "42",
    year: 2013,
    imdbId: "tt0453562",
    description:
      "When talent silences all critics. Branch Rickey, a football team manager hires Jackie Robinson who is black, by going against everyone. The heroic act is met with criticism from press and the general public, but both of them prefer to respond only through Jackie's talent.",
  },
  {
    title: "Lincoln",
    year: 2012,
    imdbId: "tt0443272",
    description:
      "The most famous president in American history, who took a stand for the abolition of slavery during the time when America was torn into Civil War. He uses his humanity and political skills to push the people and government to aim towards a greater good for all mankind by abolishing slavery.",
  },
  {
    title: "Intouchables",
    year: 2011,
    imdbId: "tt1675434",
    description:
      "In a world which judges people on the basis of race and color, a wealthy philanthropist suffering from quadriplegia hires a recently released from prison man to work for him full time as his caretaker. An employment opportunity which turns into a beautiful and unlikely bond of friendship.",
  },
  {
    title: "Moneyball",
    year: 2011,
    imdbId: "tt1210166",
    description:
      "How to convert weak into strong is what Moneyball is about. The coach of Oakland's A, a baseball team, feels that all the baseball wisdom is faulty. Faced with a tight budget, he plans to reinvent the team by hiring Peter Brand. They both set out to challenge old school probabilities which restrict players from becoming their best, even after having the required talent.",
  },
  {
    title: "Invictus",
    year: 2009,
    imdbId: "tt1057500",
    description:
      "Based on a true incident from Nelson Mandela's life, recently elected President Nelson Mandela has a task to improve racially and economically divided South Africa. Believing in the power of sports, Mandela teams up with Francois Pienaar, the captain of a football team, to unite South Africans to play in the 1995 Football World Cup.",
  },
  {
    title: "The Blind Side",
    year: 2009,
    imdbId: "tt0878804",
    description:
      "An Academy Award winning movie. Michael Oher is a black homeless teen who is taken in by a white family, the Tuohys. They become Michael's legal guardians, providing him everything from education to a home. With the help of his new found family, Michael realizes his potential to be a great footballer, breaking all racial bias chains.",
  },
  {
    title: "Into the Wild",
    year: 2007,
    imdbId: "tt0758758",
    description:
      "Christopher McCandless, son of wealthy parents, gives up his college degree and credentials of being a top student and athlete to live close to himself. He gives away all his savings to charity and sets out into the Alaskan wilderness, to be close to nature and not just survive, but to live.",
  },
  {
    title: "Freedom Writers",
    year: 2007,
    imdbId: "tt0463998",
    description:
      "Starring Hilary Swank, Freedom Writers is the story about a teacher in a racially divided Los Angeles school who inspires her students to prioritize their education by including material related to their lives and encouraging them to keep journals to know more about themselves.",
  },
  {
    title: "October Sky",
    year: 1999,
    imdbId: "tt0132477",
    description:
      "A simple coal miner from West Virginia, John Hickam wants his sons to follow his footsteps, but unexpectedly his son Homer becomes interested in rocket science after seeing Sputnik 1. John disapproves, but Homer starts building rockets with his friends and a teacher who can provide him with a better life.",
  },
  {
    title: "Patch Adams",
    year: 1998,
    imdbId: "tt0129290",
    description:
      "Hunter Adams suffers from depression at a mental hospital. After a long struggle, he decides he wants to open his own medical clinic. He gets admission into Virginia Medical University but doesn't agree with the patient care methods. Along with a wealthy friend, he opens his own clinic for those without medical insurance. But a tragic accident makes him realize the path is not easy.",
  },
  {
    title: "Glory Road",
    year: 2006,
    imdbId: "tt0425591",
    description:
      "The year 1966, when racism was still prevailing in many areas of the USA. Texas Miners, a basketball team gets a new coach, Don Haskins, who believes in pure talent over race. The town is in uproar, but their mouths shut when they see the team doing great on the field.",
  },
  {
    title: "The Pursuit of Happyness",
    year: 2006,
    imdbId: "tt0454921",
    description:
      "One of the most emotional films of all time. Chris Gardner, recently divorced and a single father without a job, has to take care of his kid. Thrown out of their apartment, they seek residence in shelters. Even after landing an internship in a prestigious brokerage firm, they hardly have enough money. But Chris never bows to despair and keeps working hard for his son. Grab some tissues when you sit down to watch this one!",
  },
  {
    title: "Rescue Dawn",
    year: 2006,
    imdbId: "tt0462504",
    description:
      "A true story based on the Vietnam War. Dieter Dengler is injured and captured by enemy soldiers in Laos. Based in a POW camp, Dengler and his mates go through hunger, torture and sickness while they await their chance to be rescued or escape.",
  },
  {
    title: "The World's Fastest Indian",
    year: 2005,
    imdbId: "tt0412080",
    description:
      "Based on the true story of Burt Munro from New Zealand, who perfects his motorcycle to set a world record for fastest speed on salt flats. Astonishingly, the world record set by Munro in 1967 has still not been broken by anyone!",
  },
  {
    title: "Coach Carter",
    year: 2005,
    imdbId: "tt0393162",
    description:
      "Coach Carter is the story about Ken Carter, who returns to his old high school in Richmond to coach the basketball team. He succeeds, but then players' academic grades start to fall. He shuts himself up and withdraws participation from the championship, determined that players should excel in the classroom as well as on the court.",
  },
  {
    title: "The Aviator",
    year: 2004,
    imdbId: "tt0338751",
    description:
      "Billionaire Howard Hughes has everything — big budget Hollywood films, leading ladies as his lover, and he is an aviation pioneer too. But behind the success he is a person tormented by phobias and depression. The more successful he gets, the more he is plunging into darkness.",
  },
  {
    title: "Hotel Rwanda",
    year: 2004,
    imdbId: "tt0395169",
    description:
      "A true story based on the Rwanda Genocide. Paul Rusesabagina manages a hotel and lives a regular life with his wife and three children. Life takes a turn when Hutu military forces begin cleansing the Tutsi minority. Paul allows refugees to camp in his hotel, saving as many as he can.",
  },
  {
    title: "Catch Me If You Can",
    year: 2002,
    imdbId: "tt0264464",
    description:
      "Frank Abagnale was a master forger — he became a surgeon, a pilot, and the most successful bank robber in the history of the U.S., all before his 18th birthday. FBI Agent Carl Hanratty makes the capture of Frank his life mission. But the only problem is, Frank is always one step ahead.",
  },
  {
    title: "A Beautiful Mind",
    year: 2001,
    imdbId: "tt0268978",
    description:
      "A Beautiful Mind is the real life story of John Forbes Nash Jr. From heights of success to the dungeons of failure, John faced it all. He made an amazing discovery early in his life and was about to be internationally recognized — but suddenly he gets on a painful and scary self-discovery journey.",
  },
];

// Hardcoded TMDB poster paths — no API key needed
const POSTERS: Record<string, string> = {
  tt2980516: "/qIXPSjHRMB6naU2z2KbhzBJmVSK.jpg",
  tt0453562: "/jjBmyGBSe8TVYsGMXfYcD3tEWxi.jpg",
  tt0443272: "/cHV2vqIj2sD6RFDO89iC6jE4TXf.jpg",
  tt1675434: "/5qMchxHMFcEEqQ6EhX62JQ9XDJR.jpg",
  tt1210166: "/3oAa8mJJ97CH9AeO0Y7KkDURYiy.jpg",
  tt1057500: "/vMRBNpFWcWPIU7V85GKwakGk8JN.jpg",
  tt0878804: "/7E1y7M1dGAiD18YvGPASY53RjLW.jpg",
  tt0758758: "/AJPZ5GZKmKneMX8U0yOZLJGSAL.jpg",
  tt0463998: "/4SFqHDZ1NWkRNmU9rGlHUqnTTgf.jpg",
  tt0132477: "/xIX1kxn3i8p0m6hIqJuDGfwNWDi.jpg",
  tt0129290: "/Aajq7JiWwz0gHFWM8aSPZoBEgPh.jpg",
  tt0425591: "/k4gKkGEPZoSAoEm8MYzB6jtRDGs.jpg",
  tt0454921: "/5BzSep18GDsrGOWnpiBrPa7FGRI.jpg",
  tt0462504: "/jTCXMIi4DXBH4GOOHQsrFwfELYk.jpg",
  tt0412080: "/pPHiHTpIYMbCiJsXLFzPh9oLCzk.jpg",
  tt0393162: "/dWI9RcxiW3SXBYHzaLLXUJrsnMp.jpg",
  tt0338751: "/fLKkpLmY3A9nzWRSmNhKZ2QnBJV.jpg",
  tt0395169: "/k7gdPkKxpFsKCbERf5RPHMkZQDt.jpg",
  tt0264464: "/vLayL2pCLRnP2KTEIAzTRfgqSIh.jpg",
  tt0268978: "/zwzWCmH72OSC9NA0ipoqynmsvza.jpg",
};

const FALLBACK =
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=400&q=80";

function posterSrc(imdbId: string) {
  const path = POSTERS[imdbId];
  return path ? `https://image.tmdb.org/t/p/w342${path}` : FALLBACK;
}

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="flex flex-col">
      <a
        href={`https://www.imdb.com/title/${movie.imdbId}/`}
        target="_blank"
        rel="noreferrer"
        className="block overflow-hidden rounded-sm shadow-[0_4px_14px_rgba(0,0,0,0.22)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-shadow duration-200"
      >
        <img
          src={posterSrc(movie.imdbId)}
          alt={`${movie.title} poster`}
          className="w-full aspect-[2/3] object-cover"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src = FALLBACK;
          }}
        />
      </a>

      <a
        href={`https://www.imdb.com/title/${movie.imdbId}/`}
        target="_blank"
        rel="noreferrer"
        className="mt-3 text-center text-[14px] font-semibold text-[#4c7bd9] hover:underline leading-snug px-1"
      >
        {movie.title} ({movie.year})
      </a>

      <p className="mt-2 text-[13px] leading-6 text-[#333] px-1">
        {movie.description}
      </p>
    </div>
  );
}

export default function MoviesOfInspirationPage() {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">

      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1200px] px-6 py-6">
        <div className="text-[12px] text-[#666]">
          <Link to="/pattern" className="text-[#4c7bd9] hover:underline">
            Pattern Interrupts
          </Link>{" "}
          / <span className="text-[#333]">Movies of Inspiration</span>
        </div>
      </div>

      {/* Hero — exact same split gradient as Words of Wisdom and Books pages */}
      <section className="w-full bg-[linear-gradient(to_right,#e7e3f3_0%,#e7e3f3_50%,#e8edf7_50%,#e8edf7_100%)]">
        <div className="mx-auto grid max-w-[980px] items-center gap-10 px-6 py-14 md:grid-cols-2">
          <div>
            <h1 className="font-serif text-[34px] leading-tight text-black md:text-[46px]">
              Movies of Inspiration
            </h1>
            <div className="mt-4 space-y-4 text-[15px] leading-7 text-black">
              <p>
                Our soul needs inspiration just like the body needs food. Good inspirational
                movies are a great way to uplift our soul, fill it with hope and optimism.
                Stories are a powerful tool to touch our heart. A good inspirational story
                motivates us to keep fighting for our heart's desires and dreams.
              </p>
              <p>
                Inspiring movies trigger an emotional pulse point in our hearts and minds
                when we are in a distressing situation. They can help us to see the light at
                the end of the tunnel and give us the burst of hope and courage to persevere.
                The stories teach us lessons, fill our hearts with hope and make us feel better.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/images/resources/movies-collage.jpg"
              alt="Movies of inspiration"
              className="w-full max-w-[420px] object-cover shadow-[0_8px_16px_rgba(0,0,0,0.18)]"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=840&q=80";
              }}
            />
          </div>
        </div>
      </section>

      {/* Movies grid */}
      <section className="mx-auto max-w-[980px] px-6 py-14">
        <h2 className="text-[28px] text-black md:text-[34px]">
          Inspirational Movies based on True Stories &amp; Events
        </h2>
        <p className="mt-3 text-[15px] text-[#555]">
          Links to their respective IMDb Movie page for further information, rating, run time etc.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbId} movie={movie} />
          ))}
        </div>
      </section>

    </div>
  );
}