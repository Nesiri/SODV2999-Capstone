import React from "react";
import { Sparkles } from "lucide-react";

type ProvinceResource = {
  title: string;
  content: string;
};

const websitePattern = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;

const normalizeWebsiteUrl = (url: string): string => {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  return `https://${url}`;
};

const renderLineWithWebsiteLinks = (line: string): React.ReactNode[] => {
  return line.split(websitePattern).map((segment, segmentIndex) => {
    const isWebsite = /^(https?:\/\/[^\s]+|www\.[^\s]+)$/.test(segment);

    if (!isWebsite) {
      return <React.Fragment key={`text-${segmentIndex}`}>{segment}</React.Fragment>;
    }

    return (
      <a
        key={`link-${segmentIndex}`}
        href={normalizeWebsiteUrl(segment)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-purple-700 hover:text-purple-800 underline underline-offset-2 break-all"
      >
        {segment}
      </a>
    );
  });
};

const provinceResources: ProvinceResource[] = [
  {
    title: "Alberta",
    content: `CMHA Suicide Services Bereavement Program
Edmonton, Alberta
Website:https://edmonton.cmha.ca/brochure/suicide-bereavement-support-services/

Catholic Family Services – Men’s Support Group
(for men experiencing any type of loss)
9902-101 Street (lower level)
Grande Prairie, AB T8V 2P5
Contact: Erna
Phone: (780) 532-9381
email: moone@gpcsd28.ab.ca

Sharing Our Loss – Lethbridge Family Services
1107 – 2nd Avenue North
Lethbridge, AB T1H 0E6
Contact: Mary Shillington
Phone: (403) 327-5724
email: mshillington@lethbridge-family-severices.com

Hope & Healing Through Grief Suicide Survivors Bereavement Support Group
10015 – 98 Street
Peace River, AB T8S 1T4
Contact: Coordinator, Mental Health Services
Phone: (780) 624-6151
email: careen.griffin@pchr.ca
website: https://www.albertahealthservices.ca

Living with Loss Support Group
The Last Monday of the Month
Time: 6:30pm to 8:30pm
Where: Stan Woloshyn Building
205 Diamond Ave.
Spruce Grove, Alberta Y7X 3A8
Facilitator: Meryl Murray R.S.W.
Work phone: 780 342 1354`,
  },
  {
    title: "British Columbia",
    content: `Suicide Bereavement Support Group
16 – 1708 Bowen Road
Nanaimo, BC
Contact: Lyndsay Wells
Phone: (250) 753-2495
email: lyndsay@cvics.ca

S.A.F.E.R. Counselling Services (Suicide Attempt Follow-Up, Education and Research)
310 – 1669 East Broadway
Vancouver, BC V5N 1V9
Phone: (604) 675-3985
email: dammy.albach@vch.ca
Intake Worker – 8:30am – 4:30pm Monday to Friday

Heartbeat: A Suicide Survivor Support Group CMHA
1152 3rd Avenue
Prince George, BC
Phone: (250) 964-8644

Abacore Suicide Support Group
14660 – 72nd Avenue
Surrey, BC
Contact: Marlyn Ferguson
Phone: (604) 596-8866

Healing after Suicide Support Group
P.O. Box 400, 421 16th Ave. S.
Creston, BC
Contact: Creston RCMP Victim Services
Phone: (250) 428-9313

SOLOS: Surviving Our Loved One’s Suicide
(Surrey Central Mental Health)
7525 King George Hwy, #110
Surrey, BC V3W 5A8
Contact: Dave Kealy
Phone: (604) 592-4945

Grief Support Group
(Surrey Memorial Hospital)
13750 – 96th Avenue
Surrey, BC V3V 1Z2
Phone: (604) 581-2211 x2940

After Suicide Support Group
(Chimo Crisis Services )
120-7000 Minoru Blvd
Richmond, BC V6Y 3Z5
The Caring Place
Contact: Sylvia Cust
Phone: (604) 279-7077

Support for Suicide Loss
300-818 Douglas Street
Victoria, BC
Contact: Melanie Winter
Phone: (250) 386-6328
email: admin@need2.ca`,
  },
  {
    title: "Manitoba",
    content: `Healing From Suicide’s Grief
St. John’s United Church
52 Caribou Road
Thompson, MB R8N 0L1
Contact: Leslie King
Phone: (204) 677-4495
email: stjohn@mts.net

After Suicide Bereavement Support Group
(Klinic Community Health Centre)
870 Portage Avenue
Winnipeg, MB R3G 0P1
Contact: Elly Vander Zande
Phone: (204) 784-4064
email: klinic@klinic.mb.ca

Speak: Suicide Prevention Education Awareness Knowledge
Klinic Community Health Centre (Survivors of Suicide Self Help Group)
870 Portage Avenue
Winnipeg, MB R3G 0Z3
Phone: (204) 784-4064
email: speak@klinic.mb.ca`,
  },
  {
    title: "New Brunswick",
    content: `Capital Region Mental Health and Addictions Association
292-65 Brunswick Street
Fredericton, NB E3B 1G5
Phone: (506) 458-1803

Grief Recovery Outreach Program
349 Big Cove Rd
Elsipogtog, NB E4W 2S3
Phone: 506-523-8222
email: crisis@ehwc.ca

CMHA: Survivors of Suicide Self-Help Group
Suite 1500, 15 Market Square
Saint John, NB E2L 1E8
Contact: Executive Director
Phone: (506) 633-1705
Fax: (506) 633-2892
email: cmha@nb.aibn.ca`,
  },
  {
    title: "Newfoundland and Labrador",
    content: `Survivors of Suicide Loss Support Group – St. Johns
99 Dorans Lane
St. Johns, NFLD
Contact: Tina Davies
Phone: (709) 726-4223
email: tgdavies99@gmail.com

Survivors of Suicide Loss Support – Corner Brook
Summit Place, 112 Premier Drive
Corner Brook, NL
Contact: Community Mental Health Initiative
Phone: (709)634-4322
Email: cmhi.iac@gmail.com`,
  },
  {
    title: "Nova Scotia",
    content: `Survivors of Suicide
St. Andrew’s United Church Hall, 6036 Coburg Rd (at Robie Street)
Halifax, NS B3H 1Z1
Contact: George Tomie
Phone: (902) 445-0860
email: george.tomie@gmail.com
website: www.SOSnovascotia.com`,
  },
  {
    title: "Northwest Territories",
    content: `Whitehorse, Yukon
CMHA Yukon
415 Baxter St.
Whitehorse, Yukon
867-668-6429

Kamatsiaqtut Help Line
Iqaluit, NU
Phone: (800) 265-3333
website: www.nunavuthelpline.ca/index.html`,
  },
  {
    title: "Ontario",
    content: `Toronto Distress Centre
Phone: (416) 595-1716
Website: www.torontodistresscentre.com/survivor-support

Canadian Mental Health, Brantford
Lill Petrella
Email: lill@cmhabhn.ca

Friends in Grief, Hamilton
Bay Gardens Funeral Home, 947 Rymal Road East
Phone: (905) 318-0059
Email: fig@mountaincable.net

Bereaved Families of Ontario-Ottawa Region
Phone: (613) 567-4278
Website: www.bfo-ottawa.org
Email: office@bfo-ottawa.org

CMHA Thames Valley Addiction and Mental Health Services
Website: https://cmhatv.ca
Email: grief@cmhatv.ca

Victim Services Bruce Grey Perth
Phone: (888) 577-3111
Email: sgsg@victim-services.com
Website: www.victim-services.com

Orillia
Contact: Bernadette/Dianne
Phone: (705) 326-9941/ (705) 327-5970

Barrie
Contact: Bernadette/Sheila
Phone: (705) 326-9941/ (705) 737-0534

Waterloo
Nine week professional run group 4 times/year and monthly peer support group
Contact: Elisa Brewer-Singh
Phone: 519-894-1400 ext 2151
Email: ebrewersingh@lutherwood.ca

Halton/Peel
Heartache 2 Hope
Contact: Flavia Ceschin
1155 North Service Rd. Unit 11
Oakville, ON
Phone: 905.599.HOPE (4673)
Website: www.Heartache2Hope.com`,
  },
  {
    title: "Prince Edward Island",
    content: `CMHA: Adult Survivors of Suicide Self-Help Group
178 Fitzroy St
Charlottetown, PE C1A 7L9
Contact: Consumer & Family Support Program
Phone: (902) 628-1648
email: selfhelp@cmha.pe.ca`,
  },
  {
    title: "Quebec",
    content: `Support Group for Children 8 – 12
Laval, QC
contact: Danyelle Latreille
phone: (450) 687-5691

Family Survivors of Suicide
phone: (514) 932-9692
website: www.suicideaftermath.ca

Teen Survivors of Suicide
1857 de Maisonneuve Blvd.
Montreal, QC H3H 1J9
phone: (514) 937-5351
email: info@ccs-montreal.org`,
  },
  {
    title: "Saskatchewan",
    content: `After Suicide Support Saskatoon
108 – 322 LaRonge Road
Saskatoon, SK S7K 8B9
Contact: Cathy Campbell
Phone: (306) 249-5666
email: ccampbell@shaw.ca

Surviving Suicide Support Group
Greystone Bereavement Centre
700 B 4400 – 4th Avenue
Regina, SK S4T 0H8
Contact: Marlene Jackson
Phone: (306) 766-6947

Survivors of Suicide Grief Support Group
4th Wed. of each month at 7:30pm
at Jones-Parkview Funeral Services
474 Hochelaga St. W.
Moose Jaw Saskatchewan.
Contact: Della Ferguson
Email: dferguson@sasktel.net
Phone Jones-Parkview at 306-693-4644

Suicide Bereavement Group
Contact: Joanne Nicholls
Tisdale, Saskatchewan
Every 2nd Wednesday of the month at 7:00pm
Anglican Church (1304-98th Street, Tisdale)
Phone: 306-873-3760`,
  },
];

const MentalHealthSurvivorsBereavedSupport: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-12">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-purple-100">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-xs sm:text-sm font-medium text-purple-700">Mental Health Support</span>
        </div>

        <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
            Bereaved Support
          </span>
        </h1>

        <main className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700">
          <p className="leading-relaxed">
            Grieving a loss to suicide can seem overwhelming, but the support and understanding of others can be a
            powerful source of strength.
          </p>

          <p className="mt-4 leading-relaxed">
            Bereavement support, or grief and loss services, can help family members and loved ones process emotions
            and understand how they&apos;re feeling during this painful time. Grief support services can also help you
            celebrate the life of your family member and focus on the positive aspects of their journey.
          </p>
        </main>

        <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            Bereavement Programs, Resources &amp; Support Groups by Province
          </h2>

          <ul className="mt-6 space-y-3">
            {provinceResources.map((province) => {
              const contentBlocks = province.content.split("\n\n");

              return (
                <li key={province.title} className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm list-none">
                  <details>
                    <summary className="cursor-pointer text-xl font-semibold text-purple-700">
                      {province.title}
                    </summary>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                      {contentBlocks.map((block, index) => (
                        <div key={`${province.title}-${index}`} className="rounded-lg border border-purple-100 bg-slate-50/70 p-3">
                          <div className="space-y-1 text-sm sm:text-base">
                            {block.split("\n").map((line, lineIndex) => (
                              <p key={`${province.title}-${index}-${lineIndex}`} className="leading-relaxed">
                                {renderLineWithWebsiteLinks(line)}
                              </p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </details>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            Additional Links of Interest on this Site
          </h2>

          <div className="mt-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm text-center">
              <a
                href="/resources/suicide-loss"
                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
              >
                Survivors of Suicide Loss
              </a>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm text-center">
              <a
                href="/resources/after-suicide-loss"
                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
              >
                After A Suicide Loss
              </a>
            </div>

            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm text-center">
              <a
                href="/resources/organizations"
                className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4"
              >
                Resource Organizations
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthSurvivorsBereavedSupport;