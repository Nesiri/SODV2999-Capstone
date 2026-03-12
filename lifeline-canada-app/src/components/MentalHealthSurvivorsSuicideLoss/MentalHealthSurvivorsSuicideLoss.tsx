import React from "react";
import { Sparkles } from "lucide-react";
import HopeAndHealing from "../../assets/HopeandHealing.pdf";
import Klinic from "../../assets/After-a-Suicide-A-Practical-and-Personal-Guide-for-Survivors.pdf";
import SPRC from "../../assets/AfteraSuicideToolkitforSchools-3.pdf";
import obituary from "../../assets/Suicide-Obituary-Brochure-8.5-x-14-Dec-7.pdf";
import FourToEight from "../../assets/Talking_to_your_4-8_year_old.pdf";
import NineToThirteen from "../../assets/Talking_to_your_9-13_year_old.pdf";
import FourteenToEighteen from "../../assets/Talking_to_your_14-18_year_old.pdf";

type ProvinceSupportGroup = {
    title: string;
    content: string;
};

const provinceSupportGroups: ProvinceSupportGroup[] = [
    {
        title: "Alberta",
        content: `Catholic Family Services – Men’s Support Group
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

Living with Loss to Suicide
When: The Last Monday of the Month
Time: 7:00pm – 9:00 pm
Where: Queen Street Medical Centre
FCSS Office 105 – 505 Queen Street, Spruce Grove, Alberta
Contact: Meryl Murray R.S.W.
Work phone—780-342-1340`,
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
52 Cariboo Road
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
        content: `Bereavement Support
P.O. Box 2391
Springhill, NS B0M 1X0
Contact: Earl & Marie Gilbert
Phone: (902) 597-3611

Survivors of Suicide
St. Andrew’s United Church Hall, 6036 Coburg Rd (at Robie Street)
Halifax, NS B3H 1Z1
Contact: George Tomie
Phone: (902) 445-0860
email: george.tomie@gmail.com
website: www.SOSnovascotia.com

Survivor of Suicide Support Group
929 Greenhill Road, R.R. #1
Westville, NS B0K 2A0
Contact: Lori Miller
Phone: (902) 396-3000`,
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
Tisdale, Sakstachewan
Every 2nd Wednesday of the month at 7:00pm
Anglican Church (1304-98th Street, Tisdale)
Phone: 306-873-3760`,
    },
];

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

const MentalHealthSurvivorsSuicideLoss: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-12">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm border border-purple-100">
                    <Sparkles className="w-4 h-4 text-purple-600" />
                    <span className="text-xs sm:text-sm font-medium text-purple-700">Mental Health Support</span>
                </div>

                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                        Survivors of Suicide Loss
                    </span>
                </h1>

                <main className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700">
                    <p className="leading-relaxed">
                        Immediately following the tragedy of suicide loss, it is not uncommon to feel only despair. It
                        helps to share the pain with others, whether that be one-on-one or in a group support setting.
                        You are not alone.
                    </p>

                    <p className="mt-4 leading-relaxed">
                        The fact that someone died by suicide does not diminish our love for them, their value, the
                        contribution they made to our families and communities and our right and need to celebrate and
                        honor their lives and accomplishments. It is how a person lived, not how they died, that defines
                        someone.
                    </p>
                </main>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        Guides &amp; Toolkits for Survivors of Suicide Loss
                    </h2>

                    <div className="mt-6 space-y-4 sm:space-y-5">
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href={HopeAndHealing} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                Hope and Healing: A Practical Guide for Survivors of Suicide, Family and Friends
                            </a>
                            <p className="mt-3 leading-relaxed">
                                This is a practical guide to help you through… the first few moments, then the first few
                                hours, then the first few days, then the first few years…after the suicide of someone you
                                love.
                            </p>
                            <p className="mt-3 leading-relaxed">
                                This guide has been written with the help of many suicide survivors and the health
                                professionals who work with them. We hope it will help you through this difficult time.
                                Please share it with others who may benefit from the information. The guide focuses on
                                the practical matters that survivors need to deal with after a suicide.
                            </p>
                            <p className="mt-3 leading-relaxed text-sm text-gray-600">
                                By Suicide Response Initiative of the Calgary Health Region and the BC Ministry of Health
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href={Klinic} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                After a Suicide: A Practical and Personal Guide for Survivors of Suicide Loss
                            </a>
                            <p className="mt-3 leading-relaxed">
                                This handbook was written to help you through the death by suicide of your loved one. It
                                contains both practical and personal information, as well as a list of books, websites and
                                support groups, that we hope will help you through your grief. Different parts of this
                                resource may be of help to you at different times.
                            </p>
                            <p className="mt-3 leading-relaxed">
                                Immediately after a death by suicide, there are many practical matters that families will
                                need to attend to and questions they might have about what to do. This resource starts
                                with addressing these practical matters. Grief associated with a death by suicide can be
                                complicated, and also very different to what people experience following death by other
                                causes. Immediately after a suicide death, people are often in shock and unable to
                                describe or explain their feelings or make meaning of what has happened. You may need
                                time before you feel ready to examine what has happened, how it has affected you, what it
                                all means, and what you need in order to begin healing.
                            </p>
                            <p className="mt-3 leading-relaxed text-sm text-gray-600">
                                By Klinic Community Health Centre
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href={SPRC} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                After a Suicide: A Toolkit for Schools
                            </a>
                            <p className="mt-3 leading-relaxed">
                                After a Suicide: A Toolkit for Schools assists schools in implementing a coordinated
                                response to the suicide death of a student. Originally developed in 2011, the second
                                edition includes new information and tools that middle and high schools can use to help
                                the school community cope and reduce suicide risk. It is designed primarily for
                                administrators and staff but can also be useful for parents and communities.
                            </p>
                            <p className="mt-3 leading-relaxed text-sm text-gray-600">
                                By the American Foundation for Suicide Prevention, the Suicide Prevention Resource Center
                                and the Education Development Center
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href={obituary} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                How Do I Write an Obituary when my Loved One Died by Suicide?
                            </a>
                            <p className="mt-3 leading-relaxed">
                                After a death by suicide, one of the first decisions you and your family will make is what
                                to include in an obituary and whether or not to include the word suicide. Historically,
                                suicide was never mentioned as the cause of death, but, in more recent times, some
                                families have chosen to disclose the fact that their loved one died by suicide. The
                                decision whether or not to disclose this information in an obituary is a personal one that
                                only you and your family can make.
                            </p>
                            <p className="mt-3 leading-relaxed text-sm text-gray-600">
                                By Ontario Funeral Services Association &amp; Waterloo Region Suicide Prevention Council
                            </p>
                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-gray-300 bg-white p-4 sm:p-5 shadow-sm">
                        <span className="text-xl font-semibold text-indigo-500">
                            How to Talk to your Child about a Suicide Attempt in Your Family
                        </span>
                        <p className="mt-3 leading-relaxed">
                            A guide for adults to use when talking with specific age groups of children about a
                            suicide attempt in the family. It is not intended to replace the advice of a mental health
                            professional. In fact, it may be best to use this along with professional support if you
                            or your child is struggling with how to talk about this difficult topic. It is important
                            to consider your child’s level of development and ability to understand events when
                            deciding how to talk with them about this issue.
                        </p>
                        <p className="mt-3 leading-relaxed text-sm text-gray-600">
                            By The US Department of Veterans Affairs
                        </p>

                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2">
                            <a
                                href={FourToEight}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center text-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold !text-white hover:bg-indigo-600 transition-colors"
                            >
                                4-8 YEAR OLDS
                            </a>
                            <a
                                href={NineToThirteen}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center text-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold !text-white hover:bg-indigo-600 transition-colors"
                            >
                                9-13 YEAR OLDS
                            </a>
                            <a
                                href={FourteenToEighteen}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center text-center rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold !text-white hover:bg-indigo-600 transition-colors"
                            >
                                14-18 YEAR OLDS
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        Resources &amp; Links for Survivors of Suicide Loss
                    </h2>

                    <div className="mt-6 space-y-4 sm:space-y-5">
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://mentalhealthcommission.ca/" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                The Mental Health Commission of Canada
                            </a>
                            <p className="mt-3 leading-relaxed">
                                The Mental Health Commission of Canada leads the development and dissemination of
                                innovative programs and tools to support the mental health and wellness of Canadians.
                                Through its unique mandate from the Government of Canada, the MHCC supports federal,
                                provincial, and territorial governments as well as organizations in the implementation of
                                sound public policy.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://theactionalliance.org/" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                The Action Alliance
                            </a>
                            <p className="mt-3 leading-relaxed">
                                The National Action Alliance for Suicide Prevention works with more than 250 national
                                partners from the public and private sectors to advance the National Strategy for Suicide
                                Prevention. The Action Alliance is currently focusing on three priority areas, selected
                                from the National Strategy, based on their potential to save lives: transforming health
                                systems, transforming communities, and changing the conversation.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://cmhastarttalking.ca" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                Canadian Mental Health Association
                            </a>
                            <p className="mt-3 leading-relaxed">
                                The Canadian Mental Health Association Simcoe County provides a full care system for those
                                with addictions and mental health issues. We serve everyone from youth to adults to
                                seniors. Our programs help individuals and families to lead lives filled with meaning and
                                promise. We have 250 staff at offices in Barrie, Orillia, Collingwood, Midland, Innisfil
                                and soon Wasaga Beach.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://www.dougy.org/resource-articles/the-bill-of-rights" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                Bill of Rights
                            </a>
                            <p className="mt-3 leading-relaxed">
                                Created by teens at Dougy Center for teens who are grieving. Dougy Center provides
                                support in a safe place where children, teens, young adults, and families who are
                                grieving can share their experiences before and after a death. They provide support and
                                training locally, nationally, and internationally to individuals and organizations seeking
                                to assist children in grief.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://dougybookstore.org/products/understanding-suicide-supporting-children-video-2020" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                Understanding Suicide, Supporting Children
                            </a>
                            <p className="mt-3 leading-relaxed">
                                Video provides insight on the experiences of children and families after a suicide death,
                                and offers ways to support them. The video and guide are resources for professional
                                trainings, as well as for general viewing by anyone who wants to better understand how to
                                help those who are grieving. 26 Minutes, $19.95 download.
                            </p>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <a href="https://www.grievingchildren.com" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                Seasons Centre for Grieving Children
                            </a>
                            <p className="mt-3 leading-relaxed">
                                Provides peer to peer support for children between the ages of 5 and 24 years who are
                                grieving the death of an immediate family member. The Centre is founded on the belief
                                that every child deserves the opportunity to grieve in a supportive and understanding
                                environment.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        Survivors of Suicide Loss Support Groups by Province
                    </h2>

                    <div className="mt-6 space-y-3 sm:space-y-4">
                        {provinceSupportGroups.map((group) => (
                            <details key={group.title} className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <summary className="cursor-pointer text-xl font-semibold text-purple-700 hover:text-purple-800">
                                    {group.title}
                                </summary>
                                <div className="mt-3 border-t border-gray-100 pt-3">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                                        {group.content
                                            .split("\n\n")
                                            .map((paragraph) => paragraph.trim())
                                            .filter((paragraph) => paragraph.length > 0)
                                            .map((paragraph, index) => (
                                                <div key={`${group.title}-${index}`} className="rounded-lg border border-gray-100 bg-slate-50 p-3 sm:p-4">
                                                    <div className="space-y-1">
                                                        {paragraph.split("\n").map((line, lineIndex) => (
                                                            <p key={`${group.title}-${index}-${lineIndex}`} className="leading-relaxed">
                                                                {renderLineWithWebsiteLinks(line)}
                                                            </p>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-6 text-center">
                        Additional Links of Interest on this Site
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm text-center">
                            <a href="/resources/bereaved-support" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                Bereaved Support
                            </a>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm text-center">
                            <a href="/resources/after-suicide-loss" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                After A Suicide Loss
                            </a>
                        </div>

                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm text-center">
                            <a href="/resources/organizations" className="text-xl font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">
                                Resource Organizations
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentalHealthSurvivorsSuicideLoss;