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
    title: "Suicidal? It’s ok. You can get through it. Please Talk",
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
  const titleContent = row.href ? (
  <a
  href={row.href}
  target="_blank"
  rel="noreferrer"
  className="text-[15px] hover:underline"
  style={{ color: "#89009B", textDecorationColor: "#89009B" }}
>
  {row.title}
</a>
  ) : (
    <span className="text-[15px] text-[#8a1bb3]">{row.title}</span>
  );

  return (
    <div className="border-t border-[#b9a9c4] py-6">
      <div className="grid gap-6 md:grid-cols-[190px_1fr] md:items-start">
        <div>
          {row.href ? (
            <a href={row.href} target="_blank" rel="noreferrer">
              <img
                src={row.image}
                alt={row.alt}
                className="w-[170px] object-cover shadow-[0_4px_8px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:scale-105"
              />
            </a>
          ) : (
            <img
              src={row.image}
              alt={row.alt}
              className="w-[170px] object-cover shadow-[0_4px_8px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:scale-105"
            />
          )}
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
                className="text-[42px] leading-[0.95] text-[#89009B] md:text-[58px]"
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
                src="/images/pattern/emotional-support-videos/hero.jpg"
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