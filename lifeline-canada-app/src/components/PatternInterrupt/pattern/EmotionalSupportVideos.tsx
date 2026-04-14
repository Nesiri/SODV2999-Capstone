import { Link } from "react-router-dom";

type VideoRow = {
  title: string;
  image: string;
  alt: string;
  text: string;
  href?: string;
};

const videoRows: VideoRow[] = [
  {
    title: "It Gets Better",
    image: "/images/pattern/emotional-support-videos/it-gets-better.jpg",
    alt: "It Gets Better",
    text:
      "Video campaign against LGTBQ bullying and suicide, with people creating and sharing stories of hope that life improves after high school. Many LGBT youth can't picture what their lives might be like as openly gay adults. They can't imagine a future for themselves. So let's show them what our lives are like, let's show them what the future may hold in store for them.",
    href: "https://itgetsbetter.org/",
  },
  {
    title: "Suicidal? It's ok. You can get through it. Please Talk",
    image: "/images/pattern/emotional-support-videos/please-talk.jpg",
    alt: "Please talk video",
    text:
      "Jonny was diagnosed with a combination of schizophrenia and depression. Since then he has had various relapses which he documented on this channel. He has produced and presented documentaries on BBC Three and Channel 4 on the subject of mental health.",
    href: "https://youtu.be/VOjY2BM6JGA?si=Jho4MU0gW4oK0VWD",
  },
  {
    title: "Suicide and a Safety Plan",
    image: "/images/pattern/emotional-support-videos/safety-plan.jpg",
    alt: "Suicide and a safety plan",
    text:
      "The great thing about a safety plan is that we can create them with our therapist (if we are seeing one) or on our own. They need to be unique to us and realistic.",
    href: "https://youtu.be/tfDruc0QDCc?si=Gti7_5e11fYtG9T5",
  },
  {
    title: "Suicidal? Take Some Pause For Thought",
    image: "/images/pattern/emotional-support-videos/pause-for-thought.jpg",
    alt: "Pause for thought",
    text:
      "Existential therapist Emmy van Deurzen speaks about suicide.",
    href: "https://youtu.be/_IW4pyba3DE?si=6Lbr6VZ6_QpQXIBj",
  },
  {
    title: "The Laughing Heart written by Charles Bukowski",
    image: "/images/pattern/emotional-support-videos/laughing-heart.jpg",
    alt: "The Laughing Heart",
    text:
      "The animation is based on 'The Laughing Heart' written by Charles Bukowski and spoken by Tom Waits. I've interpreted Bukowski's words through a story of an aged man reflecting on his life.",
    href: "https://youtu.be/nEbIuDuW7l8?si=LwEt4CoJvRxRr1HO",
  },
  {
    title: "IDrankTheSeaWater",
    image: "/images/pattern/emotional-support-videos/idranktheseawater.jpg",
    alt: "IDrankTheSeaWater",
    text:
      "I am a mental health and Tourette syndrome YouTuber. I raise awareness for Self-harm, Eating disorders, Suicide, OCD, PTSD, Maladaptive Daydreaming, Dissociative Identity Disorder...etc.",
    href: "https://www.youtube.com/@IDrankTheSeaWater/about",
  },
];

function VideoItem({ row }: { row: VideoRow }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row gap-5 items-start">
      <div className="!text-purple-700 sm:w-[18vw] sm:max-w-[14rem] sm:flex-shrink-0 w-full">
        {row.href ? (
          <a href={row.href} target="_blank" rel="noreferrer">
            <img
              src={row.image}
              alt={row.alt}
              className="w-full h-auto object-cover object-top rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
          </a>
        ) : (
          <img
            src={row.image}
            alt={row.alt}
            className="w-full h-auto object-cover object-top rounded-lg shadow-md"
          />
        )}
      </div>

      <div className="flex-1">
        {row.href ? (
          <a
            href={row.href}
            target="_blank"
            rel="noreferrer"
            className="text-xl font-semibold !text-purple-700 hover:text-purple-800 underline underline-offset-4"
          >
            {row.title}
          </a>
        ) : (
          <span className="text-xl font-semibold text-purple-700">{row.title}</span>
        )}
        <p className="mt-3 leading-relaxed text-gray-700">{row.text}</p>
      </div>
    </div>
  );
}

export default function EmotionalSupportVideos() {
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
              Emotional Support Videos
            </span>
          </h1>

          <div className="flex items-center gap-4 mt-3 mb-1">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          {/* Intro Card */}
          <main className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700 flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-1">
              <p className="leading-relaxed">
                Sometimes, being taken out of your own environment for a moment
                and seeing how others deal with crisis, allows one to gain
                important outside perspective on their own problems. YouTube
                makes that easy and that makes for a great Pattern Interrupt.
              </p>
              <p className="mt-4 leading-relaxed">
                The purpose of these videos is to give those of us who live
                with mental illness an opportunity to tell their stories, to
                know that we are not alone and to reduce the shame or stigma
                surrounding mental illness.
              </p>
            </div>
            <div className="sm:w-[30vw] sm:max-w-[18rem] sm:flex-shrink-0 w-full">
              <img
                src="/images/pattern/emotional-support-videos/hero.jpg"
                alt="Emotional support"
                className="w-full h-full object-cover object-top rounded-lg shadow-md"
              />
            </div>
          </main>

          {/* Video List */}
          <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8">
            <div className="space-y-4 sm:space-y-5">
              {videoRows.map((row, index) => (
                <VideoItem key={index} row={row} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}