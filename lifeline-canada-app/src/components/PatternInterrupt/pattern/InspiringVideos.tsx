import { useState } from 'react';

type VideoItem = {
  title: string;
  description: string;
  youtubeUrl: string;
};

const videos: VideoItem[] = [
  {
    title: 'Be Phenomenal',
    description:
      "This video is literally my battery pack. It recharges me when I'm tired. It brings me up when I'm down. It gives me inspiration and hope when I'm in doubt.",
    youtubeUrl: 'https://www.youtube.com/watch?v=e2Tq2gvGt80',
  },
  {
    title: 'Never Give Up',
    description:
      'Fight for yourself using every drop of blood from your body. Muster every effort within you and fight: sure you will win.',
    youtubeUrl: 'https://youtu.be/bx796zSg5gs',
  },
  {
    title: 'Everyone Has Obstacles',
    description:
      'Very powerful and motivational! A true testament that without struggle there is no progress.',
    youtubeUrl: 'https://youtu.be/hzBCI13rJmA',
  },
  {
    title: 'Increasing Your Confidence',
    description:
      "Paul Potts sings his heart out at Britain's Got Talent Competition. He lacked belief in himself but later achieved great success.",
    youtubeUrl: 'https://www.youtube.com/watch?v=ikAb-NYkseI',
  },
  {
    title: 'Neil Gaiman Speech',
    description:
      'Inspirational Commencement Speech at the University of the Arts 2012.',
    youtubeUrl: 'https://www.youtube.com/watch?v=__Gs02ZmUmE',
  },
  {
    title: 'Christian the Lion',
    description:
      "From the documentary 'The Lion Who Thought He Was People (1971)'.",
    youtubeUrl: 'https://youtu.be/btuxO-C2IzE',
  },
  {
    title: 'The Last Lecture',
    description:
      'Professor Randy Pausch talks about achieving childhood dreams.',
    youtubeUrl: 'https://youtu.be/ji5_MqicxSo',
  },
  {
    title: 'Free Hugs',
    description:
      'A real-life story of spreading kindness and smiles through hugs.',
    youtubeUrl: 'https://youtu.be/vr3x_RRJdd4',
  },
  {
    title: 'Passion to Success',
    description: 'Great achievers explain how passion leads to success.',
    youtubeUrl: 'https://youtu.be/JTE5O9GxiIc',
  },
  {
    title: 'Look Up',
    description:
      'A spoken word film about social media and real human connection.',
    youtubeUrl: 'https://youtu.be/Z7dLU6fk9QY',
  },
  {
    title: 'Never Give Up Race',
    description:
      'A runner wins hearts by finishing the race with determination.',
    youtubeUrl: 'https://www.youtube.com/watch?v=kZlXWp6vFdE',
  },
  {
    title: 'Nick Vujicic',
    description: 'Choose better, forget bitter. Inspirational life story.',
    youtubeUrl: 'https://youtu.be/Hd05kpKaYr8',
  },
  {
    title: 'Gift',
    description:
      'A powerful story about understanding and appreciating parents.',
    youtubeUrl: 'https://youtu.be/1DUYlHZsZfc',
  },
  {
    title: 'Unbroken',
    description: 'One of the best motivational videos on the internet.',
    youtubeUrl: 'https://www.youtube.com/watch?v=26U_seo0a1g',
  },
  {
    title: 'Never Quit',
    description: 'Raw and honest motivation to keep going.',
    youtubeUrl: 'https://www.youtube.com/watch?v=IzbCLooj-M8',
  },
  {
    title: 'I AM FIRST',
    description: 'Never give up on your dreams and goals.',
    youtubeUrl: 'https://youtu.be/akwKRNt7fnM',
  },
  {
    title: 'Rocky Speech',
    description: 'Legendary motivational speech from Rocky Balboa.',
    youtubeUrl: 'https://www.youtube.com/watch?v=1cgJte9iK1w',
  },
  {
    title: 'How Bad Do You Want It',
    description: 'Success comes when you want it as badly as breathing.',
    youtubeUrl: 'https://youtu.be/lsSC2vx7zFQ',
  },
  {
    title: 'If I Should Have a Daughter',
    description: 'Sarah Kay shares a powerful spoken word performance.',
    youtubeUrl: 'https://www.youtube.com/watch?v=0snNB1yS3IE',
  },
  {
    title: 'Transformation',
    description: 'A powerful story of fitness and perseverance.',
    youtubeUrl: 'https://www.youtube.com/watch?v=j2laIPeiMtE',
  },
  {
    title: 'Sean Stephenson',
    description: 'A joyful reminder that happiness is possible for everyone.',
    youtubeUrl: 'https://www.youtube.com/watch?v=TAibh3SqRUo',
  },
];

function getYoutubeId(url: string) {
  const regExp =
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?\n]+)/;
  const match = url.match(regExp);
  return match ? match[1] : '';
}

export default function InspiringVideos() {
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
          {/* Page Title */}
          <h1 className="!text-[#5f2d85] mt-4 !text-3xl sm:!text-4xl lg:text-5xl font-black tracking-tight">
            <span className="!text-[#5f2d85]">Inspiring Videos</span>
          </h1>

          <div className="flex items-center gap-4 mt-3 mb-1">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          {/* Intro Card */}
          <main className="mt-6 !bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700 flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-1">
              <p className="leading-relaxed">
                There is so much positive mental health content to chose from on
                YouTube. An "Inspirational Videos" or "Inspiring Videos" search
                there will give you tons of great positive video suggestions.
              </p>
              <p className="mt-4 leading-relaxed">
                Here are a few below to get you started. Remember there are
                usually suggestions for 'more like this' after the video which
                can bring you to wonderful new discoveries. Come back here if
                you get lost, there are some fantastic videos below.
              </p>
            </div>
            <div className="sm:w-[30vw] sm:max-w-[18rem] sm:flex-shrink-0 w-full">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Inspiring"
                className="w-full h-full object-cover object-top rounded-lg shadow-md"
              />
            </div>
          </main>

          {/* Videos Grid */}
          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {videos.map((video, index) => {
                const youtubeId = getYoutubeId(video.youtubeUrl);
                const thumbnail = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

                return (
                  <div
                    key={index}
                    className="rounded-xl border border-gray-100 !bg-white shadow-sm overflow-hidden flex flex-col"
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
                            <div className="w-12 h-12 rounded-full bg-[#5f2d85] flex items-center justify-center shadow-lg group-hover:bg-[#5f2d85] transition-colors">
                              <svg
                                className="w-5 h-5 text-white ml-1"
                                fill="#f5f1f7"
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
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <span className="font-semibold !text-[#5f2d85]">
                          {video.title}
                        </span>
                        {' – '}
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
