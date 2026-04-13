import { Link } from 'react-router-dom';

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
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_10px_25px_rgba(15,23,42,0.08)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_18px_40px_rgba(15,23,42,0.14)]">
        <img
          src={item.image}
          alt={item.alt}
          className={`w-full object-cover ${item.height || 'h-[220px]'} transition duration-300 group-hover:scale-[1.02]`}
        />
      </div>
    </a>
  );
}

export default function ImageGallery() {
  return (
    <div className="min-h-screen bg-[#f5f3f8]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 text-sm text-slate-500">
          <Link to="/pattern" className="text-blue-600 hover:underline">
            Pattern Interrupts
          </Link>{' '}
          <span className="text-slate-400">/</span>{' '}
          <span className="text-slate-700">Image Gallery</span>
        </div>

        <section className="rounded-[32px] bg-gradient-to-r from-[#efe7f7] to-[#e9eef9] px-10 py-16">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                Image Gallery
              </h1>

              <p className="mt-5 text-[17px] leading-8 text-slate-800">
                Interrupting negative patterns with calming, hopeful, and
                supportive visuals can be powerful. Sometimes an image can say
                something your mind needs to hear more quickly than a paragraph
                can.
              </p>

              <p className="mt-5 text-[17px] leading-8 text-slate-800">
                This gallery is designed as a visual reset. Browse slowly. Save
                the images that speak to you. Use them as wallpapers, reminders,
                journal inspiration, or something encouraging to share with
                someone who needs a little light.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/80 px-5 py-4 shadow-sm">
                  <p className="text-base font-semibold text-slate-900">
                    Pause and notice
                  </p>
                  <p className="mt-2 text-[15px] leading-7 text-slate-700">
                    Pick one image and stay with it for 20–30 seconds.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/80 px-5 py-4 shadow-sm">
                  <p className="text-base font-semibold text-slate-900">
                    Save what helps
                  </p>
                  <p className="mt-2 text-[15px] leading-7 text-slate-700">
                    Keep a few reminders close for hard days.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <img
                src="/images/pattern/image-gallery/hero.jpg"
                alt="Image gallery inspiration"
                className="w-full rounded-[28px] object-cover shadow-[0_14px_30px_rgba(0,0,0,0.14)]"
              />
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[32px] bg-white p-8 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
          <div className="mx-auto max-w-5xl">
            <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-3xl font-semibold text-slate-900">
                  Inspiration Wall
                </h2>
                <p className="mt-3 max-w-2xl text-[17px] leading-8 text-slate-700">
                  A visual collection of affirmations, reminders, encouragement,
                  self-compassion, and hope. Click any image to open it larger.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                {galleryItems.length} images
              </div>
            </div>

            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
              {galleryItems.map((item, index) => (
                <GalleryCard key={index} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-[32px] bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-10 text-white shadow-[0_12px_30px_rgba(109,40,217,0.22)]">
          <h2 className="text-3xl font-semibold">Ways to Use This Gallery</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl bg-white/10 px-5 py-4">
              <p className="text-lg font-medium">Phone wallpaper</p>
              <p className="mt-2 text-[15px] leading-7 text-violet-50">
                Keep a steady reminder with you every day.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 px-5 py-4">
              <p className="text-lg font-medium">Journal prompt</p>
              <p className="mt-2 text-[15px] leading-7 text-violet-50">
                Write about why one image stood out to you.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 px-5 py-4">
              <p className="text-lg font-medium">Encourage a friend</p>
              <p className="mt-2 text-[15px] leading-7 text-violet-50">
                Share one supportive image with someone you trust.
              </p>
            </div>

            <div className="rounded-2xl bg-white/10 px-5 py-4">
              <p className="text-lg font-medium">Mindful pause</p>
              <p className="mt-2 text-[15px] leading-7 text-violet-50">
                Use one image as a visual breathing anchor.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
