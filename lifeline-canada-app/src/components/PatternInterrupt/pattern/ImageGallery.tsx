

type GalleryItem = {
  image: string;
  alt: string;
  title: string;
  height?: string;
};

const galleryItems: GalleryItem[] = [
  {
    image: '/images/pattern/image-gallery/you-are-amazing.jpg',
    alt: 'You are amazing quote',
    title: 'You are amazing',
    height: 'h-[280px]',
  },
  {
    image: '/images/pattern/image-gallery/so-many-reasons.jpg',
    alt: 'There are so many reasons to be happy',
    title: 'So many reasons',
    height: 'h-[280px]',
  },
  {
    image: '/images/pattern/image-gallery/illness-doesnt-define-you.jpg',
    alt: "Your illness doesn't define you",
    title: 'Strength and courage',
    height: 'h-[340px]',
  },
  {
    image: '/images/pattern/image-gallery/being-sensitive.jpg',
    alt: 'Being sensitive does not make you weak',
    title: 'Sensitivity is not weakness',
    height: 'h-[180px]',
  },
  {
    image:
      '/images/pattern/image-gallery/its-okay-not-to-control-everything.jpg',
    alt: "It's okay not to be in control of everything",
    title: 'Let go a little',
    height: 'h-[150px]',
  },
  {
    image: '/images/pattern/image-gallery/depression-is-not-a-weakness.jpg',
    alt: 'Depression is not a weakness',
    title: 'Mental illness is real',
    height: 'h-[220px]',
  },
  {
    image: '/images/pattern/image-gallery/open-minds.jpg',
    alt: 'Open minds',
    title: 'Open minds',
    height: 'h-[190px]',
  },
  {
    image: '/images/pattern/image-gallery/positive-life-negative-mind.jpg',
    alt: "You can't live a positive life with a negative mind",
    title: 'Choose your mindset',
    height: 'h-[140px]',
  },
  {
    image: '/images/pattern/image-gallery/music-friends-talk.jpg',
    alt: 'Music friends talk support',
    title: 'Simple supports',
    height: 'h-[170px]',
  },
  {
    image: '/images/pattern/image-gallery/mental-health-commandments.jpg',
    alt: '10 commandments of mental health',
    title: 'Mental health reminders',
    height: 'h-[210px]',
  },
  {
    image: '/images/pattern/image-gallery/its-ok-to-ask-for-help.jpg',
    alt: "It's okay to ask for help",
    title: 'Asking for help',
    height: 'h-[260px]',
  },
  {
    image: '/images/pattern/image-gallery/never-give-up.jpg',
    alt: 'Like life, never give up',
    title: 'Keep going',
    height: 'h-[210px]',
  },
  {
    image: '/images/pattern/image-gallery/silent-battles.jpg',
    alt: "The most important of life's battles are fought silently",
    title: 'Silent battles',
    height: 'h-[170px]',
  },
  {
    image: '/images/pattern/image-gallery/be-soft.jpg',
    alt: 'Be soft, do not let the world make you hard',
    title: 'Stay soft',
    height: 'h-[290px]',
  },
  {
    image: '/images/pattern/image-gallery/okay-not-perfect.jpg',
    alt: "Remind yourself it's okay not to be perfect",
    title: 'Not perfection',
    height: 'h-[190px]',
  },
  {
    image: '/images/pattern/image-gallery/if-you-feel-like-crying.jpg',
    alt: 'If you feel like crying try positive thinking',
    title: 'Pause and breathe',
    height: 'h-[180px]',
  },
  {
    image: '/images/pattern/image-gallery/breathe-deeply-live-simply.jpg',
    alt: 'Breathe deeply live simply',
    title: 'Live simply',
    height: 'h-[170px]',
  },
  {
    image: '/images/pattern/image-gallery/think-positively.jpg',
    alt: 'Think positively speak kindly',
    title: 'Positive words',
    height: 'h-[160px]',
  },
  {
    image: '/images/pattern/image-gallery/hope-reminds-us-we-are-strong.jpg',
    alt: 'Hope reminds us we are strong',
    title: 'Hope reminds',
    height: 'h-[230px]',
  },
  {
    image: '/images/pattern/image-gallery/embracing-vulnerability.jpg',
    alt: 'Embracing vulnerability',
    title: 'Vulnerability and support',
    height: 'h-[150px]',
  },
  {
    image: '/images/pattern/image-gallery/three-cs-life.jpg',
    alt: "The three C's of life",
    title: 'Choices chances changes',
    height: 'h-[140px]',
  },
  {
    image: '/images/pattern/image-gallery/self-forgiveness.jpg',
    alt: 'Self-forgiveness is essential for self-healing',
    title: 'Self-forgiveness',
    height: 'h-[260px]',
  },
  {
    image: '/images/pattern/image-gallery/today-i-will-do-my-best.jpg',
    alt: 'Today I will do my best',
    title: 'Do your best',
    height: 'h-[120px]',
  },
  {
    image: '/images/pattern/image-gallery/you-never-know-how-strong.jpg',
    alt: 'You never know how strong you are',
    title: 'Hidden strength',
    height: 'h-[150px]',
  },
  {
    image: '/images/pattern/image-gallery/sometimes-you-need-bad-days.jpg',
    alt: 'Sometimes you need bad days',
    title: 'Good days and bad days',
    height: 'h-[240px]',
  },
  {
    image: '/images/pattern/image-gallery/love-yourself.jpg',
    alt: 'Love yourself trust yourself forgive yourself',
    title: 'Love yourself',
    height: 'h-[160px]',
  },
];

function GalleryCard({ item }: { item: GalleryItem }) {
  return (
    <a
      href={item.image}
      target="_blank"
      rel="noreferrer"
      className="group mb-5 block break-inside-avoid"
      title={item.title}
    >
      <div className="overflow-hidden rounded-2xl border border-purple-100 !bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-md">
        <img
          src={item.image}
          alt={item.alt}
          className={`w-full object-cover ${item.height || 'h-[220px]'} transition-transform duration-300 group-hover:scale-105`}
        />
      </div>
    </a>
  );
}

export default function ImageGallery() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f8f5ff] via-white to-purple-50 py-12">
      <div className="relative z-10">
        <div className="mx-auto max-w-[1200px] px-6"></div>

        <main className="mx-auto max-w-[1200px] px-6">
          <div className="grid items-center gap-10 rounded-2xl border border-white/50 !bg-white/70 p-6 shadow-lg backdrop-blur-sm md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h1 className="text-3xl sm:!text-4xl lg:text-5xl font-black tracking-tight">
                <span className="!text-[#5f2d85]">Image Gallery</span>
              </h1>

              <p className="mt-4 max-w-[520px] text-[16px] leading-7 text-slate-700">
                Interrupting negative patterns with calming, hopeful, and
                supportive visuals can be powerful. Sometimes an image can say
                something your mind needs to hear more quickly than a paragraph
                can.
              </p>

              <p className="mt-4 max-w-[520px] text-[16px] leading-7 text-slate-700">
                This gallery is designed as a visual reset. Browse slowly. Save
                the images that speak to you. Use them as wallpapers, reminders,
                journal inspiration, or something encouraging to share with
                someone who needs a little light.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <img
                src="/images/pattern/image-gallery/hero.jpg"
                alt="Image gallery inspiration"
                className="w-full max-w-[460px] rounded-xl object-cover shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
              />
            </div>
          </div>
        </main>

        <section className="mx-auto mt-10 max-w-[1200px] px-6">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
                Inspiration Wall
              </h2>
              <p className="mt-3 max-w-2xl text-[16px] leading-7 text-slate-700">
                A visual collection of affirmations, reminders, encouragement,
                self-compassion, and hope. Click any image to open it larger.
              </p>
            </div>

            <div className="rounded-md border border-purple-100 !bg-white px-4 py-3 text-[14px] text-slate-600 shadow-sm">
              {galleryItems.length} images
            </div>
          </div>

          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {galleryItems.map((item, index) => (
              <GalleryCard key={index} item={item} />
            ))}
          </div>
        </section>

        <section className="mx-auto mt-10 max-w-[1200px] rounded-2xl border border-purple-100 !bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-8">
          <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
            Ways to Use This Gallery
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div className="rounded-xl border border-purple-100 bg-purple-50/50 px-5 py-4">
              <p className="text-[18px] font-normal !text-[#5f2d85]">
                Phone wallpaper
              </p>
              <p className="mt-2 text-[16px] leading-7 text-slate-700">
                Keep a steady reminder with you every day.
              </p>
            </div>

            <div className="rounded-xl border border-purple-100 bg-purple-50/50 px-5 py-4">
              <p className="text-[18px] font-normal !text-[#5f2d85]">
                Journal prompt
              </p>
              <p className="mt-2 text-[16px] leading-7 text-slate-700">
                Write about why one image stood out to you.
              </p>
            </div>

            <div className="rounded-xl border border-purple-100 bg-purple-50/50 px-5 py-4">
              <p className="text-[18px] font-normal !text-[#5f2d85]">
                Encourage a friend
              </p>
              <p className="mt-2 text-[16px] leading-7 text-slate-700">
                Share one supportive image with someone you trust.
              </p>
            </div>

            <div className="rounded-xl border border-purple-100 bg-purple-50/50 px-5 py-4">
              <p className="text-[18px] font-normal !text-[#5f2d85]">
                Mindful pause
              </p>
              <p className="mt-2 text-[16px] leading-7 text-slate-700">
                Use one image as a visual breathing anchor.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
