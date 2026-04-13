import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { patternData } from './patternData';

type Page = {
  title: string;
  description: string;
  longDescription?: string;
  category: string;
  icon?: string;
  color?: string;
  heroImage?: string;
  resourceLayout?: 'grid' | 'list';
  resourceColumns?: 2 | 3 | 4;
  sections?: { heading: string; items: string[] }[];
  resources?: {
    heading: string;
    subheading?: string;
    items: {
      title: string;
      description?: string;
      href?: string;
      tags?: string[];
      icon?: string;
      meta?: string;
      image?: string;
      moreText?: string;
      kind?: 'book' | 'video' | 'link';
    }[];
  };
};

function splitGradient(grad?: string) {
  const g = (grad || 'from-violet-500 to-fuchsia-500')
    .replace('bg-gradient-to-r', '')
    .trim();
  const from = (g.match(/from-[\w-]+/)?.[0] || 'from-violet-500').replace(
    'from-',
    ''
  );
  const to = (g.match(/to-[\w-]+/)?.[0] || 'to-fuchsia-500').replace('to-', '');
  return { from, to };
}

function cx(...s: Array<string | false | undefined | null>) {
  return s.filter(Boolean).join(' ');
}

function getYouTubeId(url?: string) {
  if (!url) return null;
  const v = url.match(/[?&]v=([^&]+)/)?.[1];
  if (v) return v;
  const s = url.match(/youtu\.be\/([^?&]+)/)?.[1];
  if (s) return s;
  const sh = url.match(/youtube\.com\/shorts\/([^?&/]+)/)?.[1];
  if (sh) return sh;
  const e = url.match(/youtube\.com\/embed\/([^?&/]+)/)?.[1];
  if (e) return e;
  return null;
}

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        'rounded-2xl border border-slate-200/70 bg-white/80 shadow-[0_10px_30px_-15px_rgba(2,6,23,0.25)] backdrop-blur',
        className
      )}
    >
      {children}
    </div>
  );
}

function Pill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700',
        className
      )}
    >
      {children}
    </span>
  );
}

function IconBadge({
  children,
  from,
  to,
}: {
  children: React.ReactNode;
  from: string;
  to: string;
}) {
  return (
    <div
      className={cx(
        'grid h-10 w-10 place-items-center rounded-2xl text-white shadow-sm',
        'bg-gradient-to-br',
        `from-${from}`,
        `to-${to}`
      )}
    >
      {children}
    </div>
  );
}

function Hero({
  page,
  onBack,
  from,
  to,
}: {
  page: Page;
  onBack: () => void;
  from: string;
  to: string;
}) {
  const [ok, setOk] = React.useState(true);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_60px_-40px_rgba(2,6,23,0.55)]">
      <div className="absolute inset-0">
        <div
          className={cx(
            'absolute -top-32 -left-32 h-72 w-72 rounded-full blur-3xl opacity-40',
            'bg-gradient-to-br',
            `from-${from}`,
            `to-${to}`
          )}
        />
        <div className="absolute -bottom-44 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-sky-400 to-emerald-400 blur-3xl opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.8),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.6),transparent_55%)]" />
      </div>

      <div className="relative grid gap-8 p-8 md:grid-cols-12 md:p-10">
        <div className="md:col-span-7">
          <div className="flex flex-wrap items-center gap-2">
            <Pill>
              <span className="opacity-80">{page.category}</span>
            </Pill>
            <Pill className="gap-2">
              <span className="text-base">{page.icon || '✨'}</span>
              <span className="opacity-80">Pattern Interrupt</span>
            </Pill>
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            {page.title}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            {page.description}
          </p>

          {page.longDescription ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              {page.longDescription}
            </p>
          ) : null}

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={onBack}
              className={cx(
                'inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-95',
                'bg-gradient-to-r',
                `from-${from}`,
                `to-${to}`
              )}
            >
              ← Back
            </button>

            <a
              href="#start"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              Start here ↓
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative h-64 overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm md:h-full">
            {page.heroImage && ok ? (
              <img
                src={page.heroImage}
                alt={page.title}
                className="h-full w-full object-cover"
                loading="lazy"
                onError={() => setOk(false)}
              />
            ) : (
              <div className="grid h-full w-full place-items-center bg-gradient-to-br from-slate-50 to-slate-100 p-8">
                <div className="text-center">
                  <div
                    className={cx(
                      'mx-auto grid h-14 w-14 place-items-center rounded-2xl text-2xl text-white shadow-sm',
                      'bg-gradient-to-br',
                      `from-${from}`,
                      `to-${to}`
                    )}
                  >
                    {page.icon || '✨'}
                  </div>
                  <p className="mt-4 text-sm text-slate-600">
                    Add a hero image to make this page feel more alive.
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Set <code className="rounded bg-white px-1">heroImage</code>{' '}
                    in patternData.
                  </p>
                </div>
              </div>
            )}

            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  index,
  heading,
  items,
  from,
  to,
}: {
  index: number;
  heading: string;
  items: string[];
  from: string;
  to: string;
}) {
  const isLong = items.length >= 12;

  return (
    <div className="scroll-mt-24" id={index === 0 ? 'start' : undefined}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <IconBadge from={from} to={to}>
            {index + 1}
          </IconBadge>
          <div>
            <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
              {heading}
            </h2>
            <div
              className={cx(
                'mt-2 h-1 w-28 rounded-full bg-gradient-to-r',
                `from-${from}`,
                `to-${to}`
              )}
            />
          </div>
        </div>
      </div>

      <Card className="mt-5 overflow-hidden">
        {isLong ? (
          <div className="p-6 md:p-7">
            <ol className="list-decimal space-y-3 pl-5 md:columns-2 md:gap-12">
              {items.map((t, i) => (
                <li
                  key={i}
                  className="break-inside-avoid text-[15px] leading-relaxed text-slate-700"
                >
                  {t}
                </li>
              ))}
            </ol>
          </div>
        ) : (
          <div className="p-5 md:p-6">
            <div className="grid gap-3">
              {items.map((t, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-[15px] leading-relaxed text-slate-700 shadow-sm"
                >
                  {t}
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}

function BookList({
  heading,
  subheading,
  items,
}: {
  heading: string;
  subheading?: string;
  items: NonNullable<Page['resources']>['items'];
}) {
  if (!items.length) return null;

  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
            {heading}
          </h2>
          {subheading ? (
            <p className="mt-2 text-sm text-slate-600">{subheading}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-8 rounded-3xl bg-white/70 p-6 shadow-sm ring-1 ring-slate-200 backdrop-blur md:p-8">
        <div className="space-y-10">
          {items.map((r, idx) => (
            <div key={r.title}>
              <div className="grid gap-6 md:grid-cols-[240px_1fr] md:items-start">
                <div className="flex flex-col items-center">
                  <div className="w-[120px] rounded-xl bg-white shadow-md ring-1 ring-slate-200 md:w-[130px]">
                    <div className="p-2">
                      <img
                        src={
                          r.image || '/images/resources/book-placeholder.jpg'
                        }
                        alt={r.title}
                        className="h-[180px] w-full rounded-lg object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {r.href ? (
                    <a
                      href={r.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 max-w-[220px] text-center text-base font-semibold text-purple-700 hover:underline"
                    >
                      {r.title}
                    </a>
                  ) : (
                    <p className="mt-4 max-w-[220px] text-center text-base font-semibold text-purple-700">
                      {r.title}
                    </p>
                  )}
                </div>

                <div className="md:pt-2">
                  <p className="leading-7 text-slate-900/90">{r.description}</p>
                  {r.moreText ? (
                    <p className="mt-4 leading-7 text-slate-900/90">
                      {r.moreText}
                    </p>
                  ) : null}
                </div>
              </div>

              {idx !== items.length - 1 ? (
                <div className="mt-10 flex justify-center">
                  <div className="h-[2px] w-[78%] rounded-full bg-purple-300" />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResourceGrid({
  heading,
  subheading,
  items,
  from,
  to,
  columns = 3,
}: {
  heading: string;
  subheading?: string;
  items: NonNullable<Page['resources']>['items'];
  from: string;
  to: string;
  columns?: 2 | 3 | 4;
}) {
  if (!items || items.length === 0) return null;

  const gridCols =
    columns === 4
      ? 'md:grid-cols-4'
      : columns === 2
        ? 'md:grid-cols-2'
        : 'md:grid-cols-3';

  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
            {heading}
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            {subheading || 'Pick one item. Use it with intention.'}
          </p>
        </div>

        <Pill className="hidden md:inline-flex">Professional layout ✨</Pill>
      </div>

      <div className={cx('mt-6 grid gap-6', gridCols)}>
        {items.map((r, idx) => {
          const ytId = getYouTubeId(r.href);
          const isYouTube = Boolean(ytId);
          const isLink = Boolean(r.href) && !isYouTube;
          const Wrapper: any = isLink ? 'a' : 'div';

          return (
            <Wrapper
              key={idx}
              href={isLink ? r.href : undefined}
              target={isLink ? '_blank' : undefined}
              rel={isLink ? 'noreferrer' : undefined}
              className={cx(
                'group block rounded-3xl transition',
                isLink && 'cursor-pointer'
              )}
            >
              <Card className="overflow-hidden transition group-hover:shadow-[0_25px_60px_-40px_rgba(2,6,23,0.65)]">
                <div className="relative w-full overflow-hidden bg-slate-100">
                  {isYouTube ? (
                    <div className="aspect-video w-full">
                      <iframe
                        className="h-full w-full"
                        src={`https://www.youtube.com/embed/${ytId}?rel=0&modestbranding=1`}
                        title={r.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  ) : r.image ? (
                    <div className="h-36 w-full">
                      <img
                        src={r.image}
                        alt={r.title}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="grid h-36 w-full place-items-center">
                      <div
                        className={cx(
                          'grid h-12 w-12 place-items-center rounded-2xl text-white shadow-sm',
                          'bg-gradient-to-br',
                          `from-${from}`,
                          `to-${to}`
                        )}
                      >
                        {r.icon || '✨'}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-base font-semibold text-slate-900">
                      {r.icon ? `${r.icon} ` : ''}
                      {r.title}
                    </h3>

                    {r.meta ? (
                      <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
                        {r.meta}
                      </span>
                    ) : null}
                  </div>

                  {r.description ? (
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {r.description}
                    </p>
                  ) : null}

                  {r.tags && r.tags.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {r.tags.map((t, i) => (
                        <span
                          key={i}
                          className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                      {isYouTube
                        ? 'Plays here'
                        : isLink
                          ? 'Opens in new tab'
                          : 'Tip'}
                    </span>
                    <span
                      className={cx(
                        'bg-clip-text text-sm font-semibold text-transparent',
                        'bg-gradient-to-r',
                        `from-${from}`,
                        `to-${to}`
                      )}
                    >
                      {isYouTube ? 'Play →' : isLink ? 'Open →' : 'Try it →'}
                    </span>
                  </div>
                </div>
              </Card>
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
}

export default function PatternTemplate() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const page = slug ? ((patternData as any)[slug] as Page) : undefined;

  if (!page) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-bold">Not Found</h1>
        <p className="mt-4 text-slate-600">
          No content available for this page.
        </p>
        <button
          onClick={() => navigate('/pattern')}
          className="mt-6 rounded-lg bg-slate-900 px-4 py-2 text-white"
        >
          Back to Pattern Interrupts
        </button>
      </div>
    );
  }

  const { from, to } = splitGradient(page.color);
  const exploreMore = Object.entries(patternData as any)
    .filter(([key]) => key !== slug)
    .slice(0, 6);

  const isComedy = slug === 'comedy';
  const isBooks = slug === 'books';
  const gridColumns = page.resourceColumns || 3;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_20%_0%,rgba(168,85,247,0.12),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.10),transparent_45%),radial-gradient(circle_at_55%_100%,rgba(16,185,129,0.08),transparent_45%)]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div className="text-sm text-slate-500">
            <Link to="/pattern" className="text-blue-600 hover:underline">
              Pattern Interrupts
            </Link>{' '}
            <span className="text-slate-400">/</span>{' '}
            <span className="text-slate-700">{page.title}</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#extras"
              className="rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              Helpful extras
            </a>
            <a
              href="#more"
              className="rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-white"
            >
              Explore more
            </a>
          </div>
        </div>

        <Hero page={page} onBack={() => navigate(-1)} from={from} to={to} />

        <div className="mt-10 grid gap-10">
          {page.sections?.map((s, i) => (
            <Section
              key={`${s.heading}-${i}`}
              index={i}
              heading={s.heading}
              items={s.items}
              from={from}
              to={to}
            />
          ))}

          {page.resources ? (
            <div id="extras" className="scroll-mt-24">
              {isBooks || page.resourceLayout === 'list' ? (
                <BookList
                  heading={page.resources.heading}
                  subheading={page.resources.subheading}
                  items={page.resources.items}
                />
              ) : (
                <ResourceGrid
                  heading={page.resources.heading}
                  subheading={page.resources.subheading}
                  items={page.resources.items}
                  from={from}
                  to={to}
                  columns={gridColumns}
                />
              )}
            </div>
          ) : null}

          {isComedy ? (
            <div className="mt-16 mx-auto max-w-5xl space-y-10">
              <Card className="p-6 md:p-10">
                <div className="space-y-14">
                  <section className="grid items-start gap-10 md:grid-cols-2">
                    <div>
                      <h2 className="mb-3 text-3xl font-semibold text-slate-900">
                        Humor and Mental Health
                      </h2>
                      <div
                        className={cx(
                          'mb-6 h-1 w-24 rounded-full bg-gradient-to-r',
                          `from-${from}`,
                          `to-${to}`
                        )}
                      />
                      <p className="mb-4 text-[15.5px] leading-7 text-slate-700">
                        Having a good sense of humor can provide both short-term
                        and long-term benefits for mental health. Laughter
                        triggers the release of endorphins — natural chemicals
                        in the brain that promote feelings of happiness and
                        relaxation. These positive responses can help reduce
                        stress, lower tension, and improve overall mood.
                      </p>
                      <p className="text-[15.5px] leading-7 text-slate-700">
                        Over time, humor can also strengthen social
                        relationships and improve emotional resilience. Sharing
                        laughter with others builds connection and creates a
                        sense of belonging. In difficult moments, humor can help
                        people reframe challenges, making stressful situations
                        feel more manageable and less overwhelming.
                      </p>
                    </div>

                    <img
                      src="/images/resources/friends-laughing.webp"
                      alt="People laughing together"
                      className="h-[280px] w-full rounded-2xl border border-slate-200 object-cover shadow-md"
                      loading="lazy"
                    />
                  </section>

                  <section className="grid items-start gap-10 md:grid-cols-2">
                    <div>
                      <h2 className="mb-3 text-3xl font-semibold text-slate-900">
                        Tips to Improve Your Sense of Humor
                      </h2>
                      <div
                        className={cx(
                          'mb-6 h-1 w-24 rounded-full bg-gradient-to-r',
                          `from-${from}`,
                          `to-${to}`
                        )}
                      />
                      <p className="mb-4 text-[15.5px] leading-7 text-slate-700">
                        Developing a healthy sense of humor does not mean
                        forcing jokes or constantly trying to be funny. It often
                        starts with noticing the lighter moments in everyday
                        life and allowing yourself to enjoy them. Humor can help
                        shift perspective and make difficult days feel a little
                        easier.
                      </p>
                      <ul className="list-disc space-y-2 pl-5 text-[15.5px] leading-7 text-slate-700">
                        <li>
                          Watch short comedy clips or stand-up shows that make
                          you laugh.
                        </li>
                        <li>
                          Spend time with people who enjoy humor and positivity.
                        </li>
                        <li>
                          Take breaks from stress by doing something
                          lighthearted.
                        </li>
                        <li>
                          Share funny moments or stories with friends and
                          family.
                        </li>
                      </ul>
                    </div>

                    <img
                      src="/images/resources/laughter-therapy.jpg.jpeg"
                      alt="Laughter and connection"
                      className="h-[280px] w-full rounded-2xl border border-slate-200 object-cover shadow-md"
                      loading="lazy"
                    />
                  </section>
                </div>
              </Card>
            </div>
          ) : null}

          <div id="more" className="scroll-mt-24">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-slate-900 md:text-2xl">
                Explore more
              </h3>
              <Link
                to="/pattern"
                className="text-sm text-blue-600 hover:underline"
              >
                View all
              </Link>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {exploreMore.map(([key, value]: any) => (
                <Link key={key} to={`/pattern/${key}`} className="group block">
                  <Card className="p-6 transition group-hover:shadow-[0_25px_60px_-40px_rgba(2,6,23,0.65)]">
                    <div className="flex items-start justify-between gap-4">
                      <div className="text-2xl">{value.icon}</div>
                      <span
                        className={cx(
                          'rounded-full px-3 py-1 text-xs font-semibold text-white',
                          'bg-gradient-to-r',
                          `from-${from}`,
                          `to-${to}`
                        )}
                      >
                        Open
                      </span>
                    </div>
                    <h4 className="mt-4 text-base font-semibold text-slate-900">
                      {value.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {value.description}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-2">
            <Card className="p-6 md:p-7">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="text-base font-semibold text-slate-900">
                    Quick reminder
                  </h4>
                  <p className="mt-1 text-sm text-slate-600">
                    Don’t try all of them. Pick 1–2, do them once, and repeat
                    what works.
                  </p>
                </div>

                <a
                  href="#start"
                  className={cx(
                    'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-95',
                    'bg-gradient-to-r',
                    `from-${from}`,
                    `to-${to}`
                  )}
                >
                  Back to top ↑
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
