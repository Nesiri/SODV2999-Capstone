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
      "Amazing rendition of the classic 80's hit.",
    youtubeUrl: "https://www.youtube.com/watch?v=djV11Xbc914",
  },
  {
    title: "Don't Worry Be Happy",
    artist: "Bobby McFerrin",
    description:
      "Everyone is worried about something, take time to be happy.",
    youtubeUrl: "https://www.youtube.com/watch?v=d-diB65scQU",
  },
  {
    title: "Lovely Day",
    artist: "Bill Withers",
    description:
      "There is always a way, you just haven't thought of it yet.",
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
      "Think about how far you've come and what you've learned.",
    youtubeUrl: "https://www.youtube.com/watch?v=04854XqcfCY",
  },
  {
    title: "Not Afraid",
    artist: "Eminem",
    description:
      "You don't have to do everything alone.",
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
    title: "Don't Stop Believing",
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

export default function UpliftingMusicVideos() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f8f5ff] via-white to-purple-50 py-12 overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>

      <div className="w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="w-full lg:w-4/5 mx-auto">

          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4">
            <Link to="/pattern" className="text-purple-700 hover:text-purple-800 hover:underline">
              Pattern Interrupts
            </Link>{" "}
            / <span className="text-gray-700">Uplifting Music Videos</span>
          </div>

          {/* Page Title */}
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 bg-clip-text text-transparent">
              Uplifting Music Videos
            </span>
          </h1>

          <div className="flex items-center gap-4 mt-3 mb-1">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          {/* Intro Card */}
          <main className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700 flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-1">
              <p className="leading-relaxed">
                There is something about a great uplifting song that can transport your emotions and feelings and mood to a much higher, happier level. Music is amazing that way and thank goodness we have great songwriters out there that can capture feelings of joy, empowerment and happiness and put those feelings to music.
              </p>
              <p className="mt-4 leading-relaxed">
                Take a moment when you need to be inspired and uplifted to have a listen to these fantastic uplifting music videos. Click the little box in the bottom right corner of the video for full-screen enjoyment.
              </p>
            </div>
            <div className="sm:w-[30vw] sm:max-w-[18rem] sm:flex-shrink-0 w-full">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
                alt="Uplifting"
                className="w-full h-full object-cover object-top rounded-lg shadow-md"
              />
            </div>
          </main>

          {/* Videos Grid */}
          <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {videos.map((video, index) => {
                const youtubeId = getYoutubeId(video.youtubeUrl);
                const thumbnail = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

                return (
                  <div
                    key={index}
                    className="rounded-xl border border-gray-100 bg-white shadow-sm overflow-hidden flex flex-col"
                  >
                    {/* Video / Thumbnail */}
                    <div className="relative aspect-video">
                      {playingIndex === index ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                          className="w-full h-full"
                          allowFullScreen
                        />
                      ) : (
                        <button
                          onClick={() => setPlayingIndex(index)}
                          className="relative w-full h-full group"
                        >
                          <img
                            src={thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-purple-700 flex items-center justify-center shadow-lg group-hover:bg-purple-800 transition-colors">
                              <svg
                                className="w-5 h-5 text-white ml-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </button>
                      )}
                    </div>

                    {/* Caption */}
                    <div className="p-3 flex-1">
                      <p className="font-semibold text-purple-700 text-sm leading-snug">
                        {video.title}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">{video.artist}</p>
                      <p className="text-sm text-gray-700 leading-relaxed mt-2">
                        {video.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}