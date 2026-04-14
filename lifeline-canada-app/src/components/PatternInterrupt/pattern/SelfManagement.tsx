import { Link } from "react-router-dom";

type Resource = {
  title: string;
  description: string;
  url: string;
  image: string;
};

const resources: Resource[] = [
  {
    title: "Suicide...Read This First",
    description:
      "The original web page written by Martha Ainsworth. A suicide prevention classic, this simple essay has been saving lives on the internet since 1995. As powerful today as when it was first created.",
    url: "http://metanoia.org/suicide/",
    image: "/images/pattern/self-management/read-this-first.jpg",
  },
  {
    title: "Coping & Self-Care",
    description:
      "There are many things you can do to help reduce your feelings of stress and emotional pain. This section on coping strategies and dealing with stress will be helpful to you.",
    url: "https://crisiscentre.bc.ca/resources/",
    image: "/images/pattern/self-management/crisis-centre.jpg",
  },
  {
    title: "Coping With Suicidal Thoughts",
    description:
      "Coping with Suicidal Thoughts is intended for individuals who are currently experiencing suicidal ideation and/or have had a plan or made an attempt to hurt themselves.",
    url: "https://www.suicideinfo.ca/",
    image: "/images/pattern/self-management/copingsuicidal.jpg",
  },
  {
    title: "Get Self-Help – Coping with Suicidal Thoughts",
    description:
      "This website provides CBT self help and therapy resources, including worksheets and information sheets and self help mp3s.",
    url: "https://www.getselfhelp.co.uk/",
    image: "/images/pattern/self-management/getselfhelp.jpg",
  },
  {
    title: "NowMattersNow",
    description:
      "Here we offer strategies to survive and build more manageable and meaningful lives.",
    url: "https://nowmattersnow.org/",
    image: "/images/pattern/self-management/nowmattersnow.jpg",
  },
  {
    title: "Reasons to go on Living",
    description:
      "Canadian research project archiving suicide attempt stories along with why the survivor is now glad to be alive.",
    url: "https://www.suicideinfo.ca/",
    image: "/images/pattern/self-management/reasons-living.jpg",
  },
  {
    title: "Reasons for Staying Alive",
    description:
      "Grassroots reasons for staying alive when you are considering suicide.",
    url: "https://grassrootshelp.org/",
    image: "/images/pattern/self-management/stayingalive.jpg",
  },
  {
    title: "Wellness Workshop",
    description:
      "The Wellness Workshop online is a resource to help you on your personal journey to Mental health Wellness. The workshop is for everyone and is designed to give you tools to both improve your mental wellness and to maintain your wellness.",
    url: "https://www.suicideinfo.ca/",
    image: "/images/pattern/self-management/wellness.jpg",
  },
  {
    title: "Self-help Resources",
    description: "Mental Health Info in 11 Languages",
    url: "https://www.heretohelp.bc.ca/",
    image: "/images/pattern/self-management/heretohelp.jpg",
  },
];

function ResourceRow({ resource }: { resource: Resource }) {
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noreferrer"
      className="block rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row gap-5 items-start hover:shadow-md transition-shadow duration-200"
    >
      <div className="sm:w-[18vw] sm:max-w-[14rem] sm:flex-shrink-0 w-full">
        <img
          src={resource.image}
          alt={resource.title}
          className="w-full h-auto object-cover object-top rounded-lg shadow-md"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
          {resource.title}
        </h3>
        <p className="mt-3 leading-relaxed text-gray-700">
          {resource.description}
        </p>
      </div>
    </a>
  );
}

export default function SelfManagement() {
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
            / <span className="text-gray-700">Self Management</span>
          </div>

          {/* Page Title */}
          <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 bg-clip-text text-transparent">
              Self Management
            </span>
          </h1>

          <div className="flex items-center gap-4 mt-3 mb-1">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          {/* Intro Card */}
          <main className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700 flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-1">
              <p className="leading-relaxed">
                Self-management is intended to empower individuals in their
                recovery by providing the skills and confidence they need to
                take active steps in recognizing and managing their own health
                problems.
              </p>
              <p className="mt-4 leading-relaxed">
                When it comes to your mental health, self-care can help you
                manage stress, lower your risk of illness, and increase your
                energy. Even small acts of self-care in your daily life can
                have a big impact.
              </p>
              <p className="mt-4 leading-relaxed">
                Below are some strategies, research, information and resources
                for self managing stress, emotional pain, depression, anxiety
                and suicidal thoughts.
              </p>
            </div>
            <div className="sm:w-[30vw] sm:max-w-[18rem] sm:flex-shrink-0 w-full">
              <img
                src="/images/pattern/self-management/hero.jpg"
                alt="Self management"
                className="w-full h-full object-cover object-top rounded-lg shadow-md"
              />
            </div>
          </main>

          {/* Resources */}
          <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Some Great Self Management Links
            </h2>

            <div className="mt-6 space-y-4 sm:space-y-5">
              {resources.map((resource, index) => (
                <ResourceRow key={index} resource={resource} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}