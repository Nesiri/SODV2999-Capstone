import { Link } from "react-router-dom";

type VideoRow = {
  title: string;
  videoId?: string;
  thumbnail?: string;
  alt: string;
  text: string;
  href?: string;
};

const videoRows: VideoRow[] = [
  {
    title: "It Gets Better",
    videoId: "7IcVyvg2Qlo",
    thumbnail: "/images/pattern/emotional-support-videos/it-gets-better.png",
    alt: "It Gets Better",
    text:
      "Video campaign against LGTBQ bullying and suicide, with people creating and sharing stories of hope that life improves after high school. Many LGBT youth can't picture what their lives might be like as openly gay adults. They can't imagine a future for themselves. So let's show them what our lives are like, let's show them what the future may hold in store for them.",
    href: "https://itgetsbetter.org/",
  },
  {
    title: "Suicidal? It's ok. You can get through it. Please Talk",
    videoId: "VOjY2BM6JGA",
    thumbnail: "/images/pattern/emotional-support-videos/please-talk.png",
    alt: "Please talk video",
    text:
      "Jonny was diagnosed with a combination of schizophrenia and depression. Since then he has had various relapses which he documented on this channel. He has produced and presented documentaries on BBC Three and Channel 4 on the subject of mental health.",
    href: "https://www.youtube.com/watch?v=VOjY2BM6JGA",
  },
  {
    title: "Suicide and a Safety Plan",
    videoId: "tfDruc0QDCc",
    thumbnail: "/images/pattern/emotional-support-videos/safe-plan.png",
    alt: "Suicide and a safety plan",
    text:
      "The great thing about a safety plan is that we can create them with our therapist (if we are seeing one) or on our own. They need to be unique to us and realistic.",
    href: "https://www.youtube.com/watch?v=tfDruc0QDCc&feature=youtu.be",
  },
  {
    title: "Suicidal? Take Some Pause For Thought",
    videoId: "_IW4pyba3DE",
    thumbnail: "/images/pattern/emotional-support-videos/pause-thought.webp",
    alt: "Pause for thought",
    text:
      "Existential therapist Emmy van Deurzen speaks about suicide.",
    href: "https://www.youtube.com/watch?v=_IW4pyba3DE",
  },
  {
    title: "IDrankTheSeaWater",
    videoId: "UCWJw_8LsWMk", // Channel ID - using a placeholder, replace with actual video ID if available
    thumbnail: "/images/pattern/emotional-support-videos/sea-water.webp",
    alt: "IDrankTheSeaWater",
    text: "I am a mental health and Tourette syndrome YouTuber. I raise awareness for Self-harm, Eating disorders, Suicide, OCD, PTSD, Maladaptive Daydreaming, Dissociative Identity Disorder...etc.",
    href: "https://www.youtube.com/@IDrankTheSeaWater/about",
  },
  {
    title: "The Laughing Heart written by Charles Bukowski",
    videoId: "nEbIuDuW7l8",
    thumbnail: "/images/pattern/emotional-support-videos/laughing-heart.png",
    alt: "The Laughing Heart",
    text:
      "The animation is based on 'The Laughing Heart' written by Charles Bukowski and spoken by Tom Waits. I've interpreted Bukowski's words through a story of an aged man reflecting on his life.",
    href: "https://www.youtube.com/watch?v=nEbIuDuW7l8",
  },
  {
    title: "Contemplate Suicide",
    videoId: "UCWJw_8LsWMk", // Channel ID - using a placeholder, replace with actual video ID if available
    thumbnail: "/images/pattern/emotional-support-videos/contemplate-suicide.png",
    alt: "Contemplate Suicide",
    text:
      "I am a mental health and Tourette syndrome YouTuber. I raise awareness for Self-harm, Eating disorders, Suicide, OCD, PTSD, Maladaptive Daydreaming, Dissociative Identity Disorder...etc.",
    href: "https://www.youtube.com/@IDrankTheSeaWater/about",
  },
];

function VideoItem({ row }: { row: VideoRow }) {
  const getYouTubeEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}`;
  };

  const titleContent = row.href ? (
    <a
      href={row.href}
      target="_blank"
      rel="noreferrer"
      className="text-[15px] text-[#8a1bb3] hover:underline"
    >
      {row.title}
    </a>
  ) : (
    <span className="text-[15px] text-[#8a1bb3]">{row.title}</span>
  );

  return (
    <div className="border-t border-[#b9a9c4] py-6">
      <div className="grid gap-6 md:grid-cols-[200px_1fr] md:items-start">
        <div>
          {row.videoId ? (
            <div className="relative w-[200px]">
              <iframe
                src={getYouTubeEmbedUrl(row.videoId)}
                title={row.title}
                className="h-[113px] w-full object-cover shadow-[0_4px_8px_rgba(0,0,0,0.18)]"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ) : row.thumbnail ? (
            <img
              src={row.thumbnail}
              alt={row.alt}
              className="w-[200px] object-cover shadow-[0_4px_8px_rgba(0,0,0,0.18)]"
            />
          ) : null}
        </div>

        <div>
          <div>{titleContent}</div>
          <p className="mt-3 max-w-[760px] text-[14px] leading-[1.35] text-black">
            {row.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function EmotionalSupportVideos() {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <div className="mx-auto max-w-[1200px] px-6 py-4">
        <div className="text-[12px] text-[#666]">
          <Link to="/pattern" className="text-[#4c7bd9] hover:underline">
            Pattern Interrupts
          </Link>{" "}
          / <span className="text-[#333]">Emotional Support Videos</span>
        </div>
      </div>

      <section
        className="w-full"
        style={{
          background:
            "linear-gradient(to right, #e8e4f2 0%, #e8e4f2 50%, #e8edf7 50%, #e8edf7 100%)",
        }}
      >
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="mx-auto max-w-[420px] text-center md:mx-0 md:max-w-[460px]">
              <h1
                className="text-[42px] leading-[0.95] text-black md:text-[58px]"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                Emotional Support
                <br />
                Videos
              </h1>

              <div className="mt-5 space-y-5 text-left text-[15px] leading-[1.28] text-black">
                <p>
                  Sometimes, being taken out of your own environment for a
                  moment and seeing how others deal with crisis, allows one to
                  gain important outside perspective on their own problems.
                  YouTube makes that easy and that makes for a great Pattern
                  Interrupt.
                </p>

                <p>
                  The purpose of these videos is to give those of us who live
                  with mental illness an opportunity to tell their stories, to
                  know that we are not alone and to reduce the shame or stigma
                  surrounding mental illness.
                </p>
              </div>
            </div>

            <div className="flex justify-center md:justify-start">
              <img
                src="/images/pattern/emotional-support-videos/hope-reminds-us-we-are-strong.jpg"
                alt="Emotional support"
                className="w-full max-w-[420px] object-cover shadow-[0_10px_16px_rgba(0,0,0,0.18)]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#ddd3e4]">
        <div className="mx-auto max-w-[1200px] px-6 py-10">
          <div className="mx-auto max-w-[980px]">
            {videoRows.map((row, index) => (
              <VideoItem key={index} row={row} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}