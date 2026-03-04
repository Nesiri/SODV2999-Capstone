import { Link, useNavigate, useParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { patternData } from "../pattern/patternData";

type ViewMode = "modern" | "classic";

export default function LifeLineTemplate() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const page = slug ? patternData[slug] : undefined;

  const [search, setSearch] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [featuredSeed, setFeaturedSeed] = useState(0);

  const [viewMode, setViewMode] = useState<ViewMode>(() =>
    (page?.title ?? "").toLowerCase().includes("movie") ? "classic" : "modern"
  );

  const isAllowed = page?.category === "Mood & Inspiration";

  if (!page || !isAllowed) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-3xl font-bold">Not Found</h1>
        <p className="mt-4 text-slate-600">No content available for this page.</p>
        <button
          onClick={() => navigate("/lifeline-app")}
          className="mt-6 rounded-lg bg-slate-900 px-4 py-2 text-white"
        >
          Back to LifeLine App
        </button>
      </div>
    );
  }

  const exploreMore = Object.entries(patternData)
    .filter(([key, value]) => key !== slug && value.category === "Mood & Inspiration")
    .slice(0, 6);

  const items = page.resources?.items ?? [];

  const allTags = useMemo<string[]>(() => {
    const tags = items.flatMap((x) => x.tags ?? []);
    return Array.from(new Set(tags)).sort((a, b) => a.localeCompare(b));
  }, [items]);

  const filteredResources = useMemo(() => {
    const q = search.trim().toLowerCase();
    return items.filter((r) => {
      const matchSearch =
        q === "" ||
        (r.title ?? "").toLowerCase().includes(q) ||
        (r.description ?? "").toLowerCase().includes(q) ||
        (r.meta ?? "").toLowerCase().includes(q);

      const matchTags =
        activeTags.length === 0 || activeTags.every((t) => (r.tags ?? []).includes(t));

      return matchSearch && matchTags;
    });
  }, [items, search, activeTags]);

  const featuredPool = filteredResources.filter((x) => Boolean(x.href));
  const featured =
    featuredPool.length > 0 ? featuredPool[featuredSeed % featuredPool.length] : null;

  const posterPicks = useMemo(() => {
    const withImage = items.filter((x) => Boolean(x.image));
    if (withImage.length === 0) return [];
    const take = Math.min(8, withImage.length);
    const start = featuredSeed % withImage.length;
    const out = [];
    for (let i = 0; i < take; i++) out.push(withImage[(start + i) % withImage.length]);
    return out;
  }, [items, featuredSeed]);

  const placeholderByTitle = useMemo(() => {
    const t = (page.title ?? "").toLowerCase();
    if (t.includes("movie")) return "Search movies...";
    if (t.includes("video")) return "Search videos...";
    if (t.includes("book")) return "Search books...";
    return "Search...";
  }, [page.title]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-6 text-sm text-slate-500">
        <Link to="/lifeline-app" className="text-blue-600 hover:underline">
          LifeLine App
        </Link>{" "}
        / {page.title}
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid lg:grid-cols-2">
          <div className="p-8 sm:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white shadow-sm">
                {page.icon ?? "✨"}
              </span>
              <span>LifeLine Canada • {page.category}</span>
            </div>

            <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-slate-900">
              {page.title}
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600">{page.description}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => navigate(-1)}
                className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200"
              >
                Back
              </button>

              {page.heroImage && (
                <button
                  onClick={() => window.open(page.heroImage!, "_blank")}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Open banner image
                </button>
              )}
            </div>

            {page.sections?.[0] && (
              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                    🎞️
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-slate-900">
                      {page.sections[0].heading}
                    </div>
                    <div className="mt-1 text-xs text-slate-500">
                      Small steps that support you right now.
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-3">
                  {page.sections[0].items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
                    >
                      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-indigo-500" />
                      <div className="text-sm leading-6 text-slate-700">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="relative min-h-[380px] bg-slate-950">
            {page.heroImage && (
              <img
                src={page.heroImage}
                alt={page.title}
                className="absolute inset-0 h-full w-full object-cover opacity-40"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-950/60 to-indigo-950/40" />

            <div className="relative p-8 sm:p-10 text-white">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-200">
                  Featured posters
                </div>
                <div className="text-xs text-slate-300">{posterPicks.length} picks</div>
              </div>

              <div className="mt-6 grid grid-cols-4 gap-3">
                {posterPicks.map((p, idx) => (
                  <button
                    key={idx}
                    onClick={() => p.href && window.open(p.href, "_blank")}
                    className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
                    title={p.title}
                  >
                    {p.image ? (
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-24 w-full object-cover transition group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="h-24 w-full bg-gradient-to-br from-white/10 via-white/5 to-transparent" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-1 left-1 right-1 text-left text-[10px] font-semibold leading-tight text-white/95">
                      {p.title}
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-200">
                <span className="font-semibold">Tip:</span> Click any poster above or any{" "}
                <span className="font-semibold">“Open”</span> card below to see IMDb info.
              </div>
            </div>
          </div>
        </div>
      </div>

      {page.sections && page.sections.length > 0 && (
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-slate-900">How to use this page</h2>

          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {page.sections.map((section, index) => (
              <div key={index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-lg">
                    {page.icon ?? "✨"}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-slate-900">{section.heading}</h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Small steps that support you right now.
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {section.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 rounded-xl bg-slate-50 p-4 text-slate-800"
                    >
                      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-indigo-400" />
                      <div className="text-sm leading-6">{item}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {page.resources && (
        <div className="mt-12">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">{page.resources.heading}</h2>
              <p className="mt-1 text-sm text-slate-500">Links open IMDb pages for more information.</p>
              <p className="mt-1 text-sm text-slate-500">
                {filteredResources.length} result{filteredResources.length === 1 ? "" : "s"}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setViewMode((v) => (v === "classic" ? "modern" : "classic"))}
                className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                View: {viewMode === "classic" ? "Classic grid" : "Modern cards"}
              </button>

              <button
                onClick={() => setFeaturedSeed((v) => v + 1)}
                className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50"
              >
                New featured
              </button>

              <button
                onClick={() => featured?.href && window.open(featured.href, "_blank")}
                disabled={!featured?.href}
                className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white disabled:opacity-40"
              >
                Open featured
              </button>

              <button
                onClick={() => {
                  if (filteredResources.length === 0) return;
                  const pick = filteredResources[Math.floor(Math.random() * filteredResources.length)];
                  if (pick?.href) window.open(pick.href, "_blank");
                }}
                disabled={filteredResources.length === 0}
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:opacity-95 disabled:opacity-40"
              >
                Random pick
              </button>
            </div>
          </div>

          {featured && (
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="grid gap-0 md:grid-cols-[260px_1fr]">
                <div className="relative h-44 md:h-full">
                  {featured.image ? (
                    <img
                      src={featured.image}
                      alt={featured.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-slate-200 to-purple-500/20" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
                    {featured.icon || "⭐"} Featured pick
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900">{featured.title}</h3>
                  {featured.meta && <p className="mt-1 text-sm text-slate-500">{featured.meta}</p>}
                  {featured.description && (
                    <p className="mt-3 text-sm leading-6 text-slate-700">{featured.description}</p>
                  )}

                  {featured.tags && featured.tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {featured.tags.map((t) => (
                        <button
                          key={t}
                          onClick={() => setActiveTags((prev) => (prev.includes(t) ? prev : [...prev, t]))}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 hover:bg-slate-200"
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          <input
            type="text"
            placeholder={placeholderByTitle}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mt-5 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {allTags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {allTags.map((t) => {
                const on = activeTags.includes(t);
                return (
                  <button
                    key={t}
                    onClick={() =>
                      setActiveTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]))
                    }
                    className={
                      on
                        ? "rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white"
                        : "rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 hover:bg-slate-200"
                    }
                  >
                    {t}
                  </button>
                );
              })}

              {activeTags.length > 0 && (
                <button
                  onClick={() => setActiveTags([])}
                  className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white"
                >
                  Clear
                </button>
              )}
            </div>
          )}

          <div className="mt-6">
            {filteredResources.length === 0 ? (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-700">
                No results found.
              </div>
            ) : viewMode === "classic" ? (
              <div className="mt-2">
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                  {filteredResources.map((r, i) => (
                    <div key={i} className="text-center">
                      <a
                        href={r.href || "#"}
                        target="_blank"
                        rel="noreferrer"
                        className="group mx-auto block w-full max-w-[260px]"
                      >
                        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition group-hover:shadow-md">
                          <div className="absolute left-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900/90 text-sm font-bold text-white">
                            +
                          </div>

                          {r.image ? (
                            <img
                              src={r.image}
                              alt={r.title}
                              className="h-[320px] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                            />
                          ) : (
                            <div className="h-[320px] w-full bg-gradient-to-b from-slate-100 via-white to-slate-200" />
                          )}
                        </div>

                        <div className="mt-4">
                          <div className="text-lg font-semibold text-fuchsia-700 group-hover:underline">
                            {r.title}
                          </div>
                          {r.meta && (
                            <div className="mt-1 text-xs font-semibold text-fuchsia-700">{r.meta}</div>
                          )}
                        </div>
                      </a>

                      {r.description && (
                        <p className="mx-auto mt-3 max-w-[260px] text-sm leading-6 text-slate-700">
                          {r.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {filteredResources.map((r, i) => (
                  <a
                    key={i}
                    href={r.href || "#"}
                    target="_blank"
                    rel="noreferrer"
                    className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
                  >
                    <div className="grid md:grid-cols-[140px_1fr]">
                      <div className="relative h-28 md:h-full">
                        {r.image ? (
                          <img
                            src={r.image}
                            alt={r.title}
                            className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-[1.03]"
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-white to-indigo-200" />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
                        <div className="absolute bottom-2 left-2 rounded-xl bg-white/90 px-2 py-1 text-sm">
                          {r.icon || "🎬"}
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <h3 className="truncate font-semibold text-slate-900">{r.title}</h3>
                            {r.meta && <p className="mt-1 text-xs text-slate-500">{r.meta}</p>}
                          </div>
                          {r.href && <span className="shrink-0 text-sm font-medium text-blue-600">Open</span>}
                        </div>

                        {r.description && (
                          <p className="mt-2 text-sm leading-6 text-slate-600">{r.description}</p>
                        )}

                        {r.tags && r.tags.length > 0 && (
                          <div className="mt-3 flex flex-wrap gap-2">
                            {r.tags.map((t) => (
                              <span key={t} className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mt-16">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">Explore More</h3>
          <Link to="/lifeline-app" className="text-sm text-blue-600 hover:underline">
            View all
          </Link>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {exploreMore.map(([key, value]) => (
            <Link
              key={key}
              to={`/lifeline-app/${key}`}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md"
            >
              <div className="text-2xl">{value.icon}</div>
              <h4 className="mt-3 font-semibold text-slate-900 group-hover:text-indigo-600">
                {value.title}
              </h4>
              <p className="mt-1 text-sm text-slate-500">{value.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}