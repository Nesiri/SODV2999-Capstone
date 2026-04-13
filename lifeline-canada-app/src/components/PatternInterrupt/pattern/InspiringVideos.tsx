import React, { useState } from 'react';

type VideoItem = {
  title: string;
  description: string;
  youtubeUrl: string;
};

const videos: VideoItem[] = [
  {
    title: 'Be Phenomenal',
    description:
      'This video is literally my battery pack. It recharges me when I’m tired. It brings me up when I’m down. It gives me inspiration and hope when I’m in doubt.',
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
      'Paul Potts sings his heart out at Britain’s Got Talent Competition. He lacked belief in himself but later achieved great success.',
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
    <main className="w-full bg-white">
      {/* HERO */}
      <section
        className="w-full"
        style={{
          background:
            'linear-gradient(90deg, #e9e3f4 0%, #e6ecf7 60%, #eadff3 100%)',
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
                Inspiring Videos
              </h1>

              <p className="text-[20px] leading-[1.3] mb-4">
                There is so much positive mental health content to chose from on
                YouTube. An “Inspirational Videos” or “Inspiring Videos” search
                there will give you tons of great positive video suggestions.
              </p>

              <p className="text-[20px] leading-[1.3]">
                Here are a few below to get you started. Remember there are
                usually suggestions for ‘more like this’ after the video which
                can bring you to wonderful new discoveries. Come back here if
                you get lost, there are some fantastic videos below.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-end">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Inspiring"
                className="w-full max-w-[560px] shadow-md"
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
                  <strong>{video.title}</strong> – {video.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
