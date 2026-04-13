import { Link } from 'react-router-dom';

type Resource = {
  title: string;
  description: string;
  url: string;
  image: string;
};

const resources: Resource[] = [
  {
    title: 'Suicide...Read This First',
    description:
      'The original web page written by Martha Ainsworth. A suicide prevention classic, this simple essay has been saving lives on the internet since 1995. As powerful today as when it was first created.',
    url: 'http://metanoia.org/suicide/',
    image: '/images/pattern/self-management/read-this-first.jpg',
  },
  {
    title: 'Coping & Self-Care',
    description:
      'There are many things you can do to help reduce your feelings of stress and emotional pain. This section on coping strategies and dealing with stress will be helpful to you.',
    url: 'https://crisiscentre.bc.ca/resources/',
    image: '/images/pattern/self-management/crisis-centre.jpg',
  },
  {
    title: 'Coping With Suicidal Thoughts',
    description:
      'Coping with Suicidal Thoughts is intended for individuals who are currently experiencing suicidal ideation and/or have had a plan or made an attempt to hurt themselves.',
    url: 'https://www.suicideinfo.ca/',
    image: '/images/pattern/self-management/copingsuicidal.jpg',
  },
  {
    title: 'Get Self-Help – Coping with Suicidal Thoughts',
    description:
      'This website provides CBT self help and therapy resources, including worksheets and information sheets and self help mp3s.',
    url: 'https://www.getselfhelp.co.uk/',
    image: '/images/pattern/self-management/getselfhelp.jpg',
  },
  {
    title: 'NowMattersNow',
    description:
      'Here we offer strategies to survive and build more manageable and meaningful lives.',
    url: 'https://nowmattersnow.org/',
    image: '/images/pattern/self-management/nowmattersnow.jpg',
  },
  {
    title: 'Reasons to go on Living',
    description:
      'Canadian research project archiving suicide attempt stories along with why the survivor is now glad to be alive.',
    url: 'https://www.suicideinfo.ca/',
    image: '/images/pattern/self-management/reasons-living.jpg',
  },
  {
    title: 'Reasons for Staying Alive',
    description:
      'Grassroots reasons for staying alive when you are considering suicide.',
    url: 'https://grassrootshelp.org/',
    image: '/images/pattern/self-management/stayingalive.jpg',
  },
  {
    title: 'Wellness Workshop',
    description:
      'The Wellness Workshop online is a resource to help you on your personal journey to Mental health Wellness. The workshop is for everyone and is designed to give you tools to both improve your mental wellness and to maintain your wellness.',
    url: 'https://www.suicideinfo.ca/',
    image: '/images/pattern/self-management/wellness.jpg',
  },
  {
    title: 'Self-help Resources',
    description: 'Mental Health Info in 11 Languages',
    url: 'https://www.heretohelp.bc.ca/',
    image: '/images/pattern/self-management/heretohelp.jpg',
  },
];

function ResourceRow({ resource }: { resource: Resource }) {
  return (
    <a href={resource.url} target="_blank" rel="noreferrer" className="block">
      <div className="flex flex-col gap-4 py-8 md:flex-row md:items-start">
        <div className="shrink-0">
          <img
            src={resource.image}
            alt={resource.title}
            className="h-[100px] w-[180px] border border-[#d9d9d9] object-cover shadow-sm"
          />
        </div>

        <div className="max-w-[760px]">
          <h3 className="text-[22px] text-[#9a00b5] hover:underline">
            {resource.title}
          </h3>

          <p className="mt-3 text-[15px] leading-7 text-black">
            {resource.description}
          </p>
        </div>
      </div>

      <div className="h-px bg-[#d8b4f0]" />
    </a>
  );
}

export default function SelfManagement() {
  return (
    <div className="w-full bg-[#f3f1f5]">
      <div className="mx-auto max-w-[1200px] px-10 py-6">
        <div className="mb-6 text-[12px] text-[#666]">
          <Link to="/pattern" className="text-[#4c7bd9] hover:underline">
            Pattern Interrupts
          </Link>{' '}
          / <span className="text-[#333]">Self Management</span>
        </div>
      </div>

      <section className="w-full bg-[#dcd6e6]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-12 px-10 py-16">
          <div className="max-w-[520px]">
            <h1 className="font-serif text-[52px] text-black">
              Self Management
            </h1>

            <p className="mt-4 text-[16px] leading-7 text-black">
              Self-management is intended to empower individuals in their
              recovery by providing the skills and confidence they need to take
              active steps in recognizing and managing their own health
              problems.
            </p>

            <p className="mt-4 text-[16px] leading-7 text-black">
              When it comes to your mental health, self-care can help you manage
              stress, lower your risk of illness, and increase your energy. Even
              small acts of self-care in your daily life can have a big impact.
            </p>

            <p className="mt-4 text-[16px] leading-7 text-black">
              Below are some strategies, research, information and resources for
              self managing stress, emotional pain, depression, anxiety and
              suicidal thoughts.
            </p>
          </div>

          <div className="flex justify-end">
            <img
              src="/images/pattern/self-management/hero.jpg"
              alt="Self management"
              className="w-[420px] shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-10 py-14">
        <h2 className="mb-6 text-[40px] text-black">
          Some Great Self Management Links
        </h2>

        {resources.map((resource, index) => (
          <ResourceRow key={index} resource={resource} />
        ))}
      </section>
    </div>
  );
}
