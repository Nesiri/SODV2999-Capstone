import React, { useState } from "react";
import { Link } from "react-router-dom";

type MusicVideo = {
  title: string;
  artist: string;
  description: string;
  youtubeUrl: string;
};

const videos: MusicVideo[] = [
  {
    title: "What a Wonderful World",
    artist: "Louis Armstrong",
    description:
      "Life is not in black and white, there is so much color out there to keep motivated for life.",
    youtubeUrl: "https://www.youtube.com/watch?v=VqhCQZaH4Vs",
  },
  {
    title: "Stand By Me",
    artist: "Ben E. King",
    description:
      "We have to overcome our fears and comfort zones to progress.",
    youtubeUrl: "https://www.youtube.com/watch?v=hwZNL7QVJjE",
  },
  {
    title: "Take On Me",
    artist: "Ah Ha",
    description:
      "Amazing rendition of the classic 80’s hit.",
    youtubeUrl: "https://www.youtube.com/watch?v=djV11Xbc914",
  },
  {
    title: "Don’t Worry Be Happy",
    artist: "Bobby McFerrin",
    description:
      "Everyone is worried about something, take time to be happy.",
    youtubeUrl: "https://www.youtube.com/watch?v=d-diB65scQU",
  },
  {
    title: "Lovely Day",
    artist: "Bill Withers",
    description:
      "There is always a way, you just haven’t thought of it yet.",
    youtubeUrl: "https://www.youtube.com/watch?v=bEeaS6fuUoA",
  },
  {
    title: "Beautiful Day",
    artist: "U2",
    description:
      "Celebrate your victories, no matter how small.",
    youtubeUrl: "https://www.youtube.com/watch?v=co6WMzDOh1o",
  },
  {
    title: "Imagine",
    artist: "John Lennon",
    description:
      "Figure out what your dream is and strive for it.",
    youtubeUrl: "https://www.youtube.com/watch?v=YkgkThdzX-8",
  },
  {
    title: "We Are The Champions",
    artist: "Queen",
    description:
      "Think about how far you’ve come and what you’ve learned.",
    youtubeUrl: "https://www.youtube.com/watch?v=04854XqcfCY",
  },
  {
    title: "Not Afraid",
    artist: "Eminem",
    description:
      "You don’t have to do everything alone.",
    youtubeUrl: "https://www.youtube.com/watch?v=j5-yKhDd64s",
  },
  {
    title: "Walking on Sunshine",
    artist: "Katrina and the Waves",
    description:
      "A great feel-good song.",
    youtubeUrl: "https://www.youtube.com/watch?v=iPUmE-tne5U",
  },
  {
    title: "Don’t Stop Believing",
    artist: "Journey",
    description:
      "Remember what motivated you to start.",
    youtubeUrl: "https://www.youtube.com/watch?v=1k8craCGpgs",
  },
  {
    title: "Stronger",
    artist: "Kelly Clarkson",
    description:
      "Learn from setbacks and come back stronger.",
    youtubeUrl: "https://www.youtube.com/watch?v=Xn676-fLq7I",
  },
];

function getYoutubeId(url: string) {
  const regExp =
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?\n]+)/;
  const match = url.match(regExp);
  return match ? match[1] : "";
}

export default function UpliftingMusicVideosPage() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1200px] px-6 py-4 text-[12px] text-gray-600">
        <Link to="/pattern" className="text-blue-600 hover:underline">
          Pattern Interrupts
        </Link>{" "}
        / <span>Uplifting Music Videos</span>
      </div>

      {/* HERO */}
<section
  className="w-full"
  style={{
    background:
      "linear-gradient(90deg, #e9e3f4 0%, #e6ecf7 60%, #eadff3 100%)",
  }}
>
  <div className="mx-auto max-w-[1180px] px-6 py-20">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

      {/* LEFT TEXT */}
      <div className="max-w-[560px]">
        <h1
          className="text-[54px] mb-4"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Uplifting Music Videos
        </h1>

        <p className="text-[20px] leading-[1.3] mb-4">
          There is something about a great uplifting song that can transport your emotions and feelings and mood to a much higher, happier level. Music is amazing that way and thank goodness we have great songwriters out there that can capture feelings of joy, empowerment and happiness and put those feelings to music.
        </p>

        <p className="text-[20px] leading-[1.3]">
          Take a moment when you need to be inspired and uplifted to have a listen to these fantastic uplifting music videos. Click the little box in the bottom right corner of the video for full-screen enjoyment.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-end">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Uplifting"
          className="w-full max-w-[360px] shadow-md"
        />
      </div>
    </div>
  </div>
</section>

      {/* VIDEOS */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          {videos.map((video, index) => {
            const youtubeId = getYoutubeId(video.youtubeUrl);
            const thumbnail = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

            return (
              <div key={index}>
                <div className="relative mb-2 aspect-video">
                  {playingIndex === index ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  ) : (
                    <button
                      onClick={() => setPlayingIndex(index)}
                      className="relative w-full h-full"
                    >
                      <img
                        src={thumbnail}
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="bg-black px-4 py-2 text-white rounded">
                          ▶
                        </div>
                      </div>
                    </button>
                  )}
                </div>

                <p className="text-sm">
                  <strong>{video.title}</strong>
                  <br />
                  {video.artist}
                </p>

                <p className="text-xs mt-2">
                  {video.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}