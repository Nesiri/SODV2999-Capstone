import React from "react";
const youthAtRisk = "/pdfs/Youth-at-Risk-Youth.pdf";

const coverPhoto = '/assets/AdditionalResourceImages/youth-group-600x400.jpg';
const informationForYouth = '/assets/AdditionalResourceImages/Group-246-600x521.png';
const whatCanYouDo = '/assets/AdditionalResourceImages/Value-img-600x600.png';

const kidsHelpPhone = '/assets/AdditionalResourceImages/kidsHelpPhone-1-800x352.jpg';
const arcticChildrenYouthFoundation = '/assets/AdditionalResourceImages/ArcticChildren.png';
const keltyMentalHealth = '/assets/AdditionalResourceImages/KeltyMentalHealth.png';
const youthInBC = '/assets/AdditionalResourceImages/YouthInBC.png';
const lgbtYouthline = '/assets/AdditionalResourceImages/LBGTYouthline.png';
const foundry = '/assets/AdditionalResourceImages/Foundry.png';
const telJeunes = '/assets/AdditionalResourceImages/tel-jeunes.png';
const teenMentalHealth = '/assets/AdditionalResourceImages/mentalHealthLiteracy.png';
const parentsGuideTeenOnlineSafety = '/assets/AdditionalResourceImages/parentsGuide.png';
const openMind = '/assets/AdditionalResourceImages/openMind.png';
const jackOrg = '/assets/AdditionalResourceImages/jackOrg.png';
const mindCheck = '/assets/AdditionalResourceImages/aetna.png';
const connecTeen = '/assets/AdditionalResourceImages/connecTeen.png';
const youthSpace = '/assets/AdditionalResourceImages/youthSpace.png';
const kootenayFamilyPlace = '/assets/AdditionalResourceImages/kootenay.png';
const mindYourMind = '/assets/AdditionalResourceImages/mindYourMind.png';
const teenSuicide = '/assets/AdditionalResourceImages/teenSuicide.png';
const reasonToLive = '/assets/AdditionalResourceImages/reasonToLive.png';
const kidsHealth = '/assets/AdditionalResourceImages/nemours.png';
const teenDepression = '/assets/AdditionalResourceImages/teenDepression.png';
const theBalancedMind = '/assets/AdditionalResourceImages/DBSA-1.png';
const yellowRibbonCampaign = '/assets/AdditionalResourceImages/yellowRibbon.png';
const trevorProject = '/assets/AdditionalResourceImages/trevorProject.png';

const alcoholAwareness = '/assets/AdditionalResourceImages/alcoholAwareness.png';
const rehabCenter = '/assets/AdditionalResourceImages/rehabCenter.png';
const drugRehab = '/assets/AdditionalResourceImages/drugRehab.png';

const cyberBullyingGuide = '/assets/AdditionalResourceImages/backgroundChecks.png';
const kidsHelpPhoneImg = '/assets/AdditionalResourceImages/KHP.png';
const theImpact = '/assets/AdditionalResourceImages/theImpact.png';
const needHelpNow = '/assets/AdditionalResourceImages/needHelpNow.png';

const MentalHealthResourcesCommunitiesTeensYouth: React.FC = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 py-12">
            <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

                <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                        Teens &amp; Youth
                    </span>
                </h1>

                <main className="mt-6 bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700">
                    <img
                        src={coverPhoto}
                        alt="Youth group"
                        className="float-right ml-6 mb-4 w-64 sm:w-80 rounded-xl shadow-md object-cover"
                    />
                    <p className="leading-relaxed">
                        "We know that sometimes it seems that we don't see you or know you or get you and maybe sometimes we don't. Sometimes we forget.
                    </p>

                    <p className="mt-4 leading-relaxed">
                        But we want you to know that you are precious to us, to our community. you are loved, you are sacred, you are strong, you are powerful. We need your presence. You are our family, you are our friends.
                    </p>

                    <p className="mt-4 leading-relaxed">
                        We know sometimes it gets bad but please remember who you are. You are wise, you are funny, you are smart. You are beautiful. We respect you.
                    </p>

                    <p className="mt-4 leading-relaxed">
                        We love you. You are our future. We need you here."
                    </p>
                    <div className="clear-both" />
                </main>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-purple-700">
                        Information for Youth
                    </h2>

                    <img
                        src={informationForYouth}
                        alt="Information for Youth"
                        className="float-right ml-6 mb-4 w-56 sm:w-72 rounded-xl shadow-md object-cover"
                    />

                    <p className="mt-4 leading-relaxed">
                        <span className="font-semibold text-purple-700">If You Are Feeling Suicidal:</span> Tell someone right away. Contact a <a href="/in-crisis" className="text-purple-700 underline underline-offset-4 hover:text-purple-800">crisis line</a> or talk to an adult, such as a parent, teacher or school counsellor. It may not seem like it now, but things can and do change. Asking for help opens the door to change.
                    </p>

                    <p className="mt-4 leading-relaxed">
                        <span className="font-semibold text-purple-700">Stigma:</span> For many young people the thought of being different from their friends or social group can be frightening. The importance of fitting in is one of the main reasons a person does not seek help for problems. This is particularly true for issues concerning mental and emotional health which can carry a burden of stigma and shame.
                    </p>

                    <p className="mt-4 leading-relaxed">
                        <span className="font-semibold text-purple-700">What Is Stigma?</span> Stigma is a negative stereotype you may hold about someone, something or even yourself. We discriminate against and label those we see as having characteristics that are undesirable. In doing this we establish a sense of separation between “us” and “them.” Ultimately stigma is about disrespect.
                    </p>

                    <p className="mt-4 leading-relaxed">
                        <span className="font-semibold text-purple-700">What effect does this have on the person(s) being stigmatized?</span> When we hold negative attitudes toward someone it frequently results in the person feeling dismissed, marginalized and less than human. Poor self esteem can follow, as well as a loss of hope and even thoughts of suicide. Because of stigma and a fear of being rejected the person may not actively seek help when they need it.
                    </p>

                    <p className="mt-4 leading-relaxed">
                        By <a href="https://www.suicideinfo.ca" className="text-purple-700 underline underline-offset-4 hover:text-purple-800">Centre for Suicide Prevention</a>
                    </p>

                    <p className="mt-2 leading-relaxed">
                        Download a Free Copy <a href={youthAtRisk} className="text-purple-700 underline underline-offset-4 hover:text-purple-800">Youth at Risk – Youth Information</a>
                    </p>

                    <div className="clear-both" />

                    <div className="mt-6 rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                        <h3 className="text-lg font-semibold text-purple-700">What Can You Do?</h3>

                        <img
                            src={whatCanYouDo}
                            alt="What Can You Do"
                            className="float-right ml-6 mb-4 w-48 sm:w-64 rounded-xl shadow-md object-cover"
                        />

                        <p className="mt-3 leading-relaxed">
                            <span className="font-semibold text-purple-700">Examine Your Own Attitude:</span> Ask yourself – Do I stereotype people who are different? Do I treat them with disrespect? We all have the capacity to discriminate against others. Even children as young as three can recognize when someone is different. By stigmatizing we can feel a sense of separation and relief that “I am normal'. The good news is this can change…
                        </p>

                        <p className="mt-4 leading-relaxed">
                            <span className="font-semibold text-purple-700">Where Did My Attitude Come From?</span> Many of the images and views we hold about people who have mental illness or who may be suicidal have a long history. These beliefs are reinforced by the media who often portray people with mental illness as unpredictable and aggressive or dangerous and violent.
                        </p>

                        <p className="mt-4 leading-relaxed">
                            <span className="font-semibold text-purple-700">How Can I Change Things?</span> Get informed! The best way to counteract the stigma of mental illness and suicidal behaviour is to get the facts. Mental illness can develop after a traumatic event or it may be linked to the genetic makeup of a person.
                        </p>

                        <p className="mt-4 leading-relaxed">
                            Be compassionate and understanding. When you encounter a friend, classmate, teammate or even a stranger who may have different ways of doing things or a different way of being, treat them how you would want to be treated. We all have times when we feel down, angry, overwhelmed, or unable to cope.
                        </p>

                        <p className="mt-4 leading-relaxed">
                            Download Free: <a href={youthAtRisk} className="text-purple-700 underline underline-offset-4 hover:text-purple-800">Youth at Risk – Youth Information</a>
                        </p>

                        <p className="mt-2 leading-relaxed">
                            By <a href="https://www.suicideinfo.ca" className="text-purple-700 underline underline-offset-4 hover:text-purple-800">Centre for Suicide Prevention</a>
                        </p>
                        <div className="clear-both" />
                    </div>
                </div>

                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-center text-gray-700">
                    <p className="leading-relaxed">
                        Remember, normal is a state that really doesn't exist. We are all human - interesting, flawed, talented..... different. The thing to remember is when different means mentally unwell, help is available. Support from family, friends, teammates, school teachers and strangers is crucial.
                    </p>
                </div>

                {/* Resources for Youth in Crisis */}
                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-purple-700">
                        Resources for Youth in Crisis
                    </h2>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Kids Help Phone */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={kidsHelpPhone} alt="Kids Help Phone" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://kidshelpphone.ca" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Kids Help Phone</a>
                            <p className="mt-3 text-sm leading-relaxed">Mental health is different for everyone, and talking about it can bring up strong emotions. Kids Help Phone is available 24/7 to help boost understanding of mental health so you can feel more empowered to talk about it. A safe space for young people (20 years old and under). Get info, contact a counsellor, try our surveys and games.</p>
                        </div>

                        {/* Arctic Children & Youth Foundation */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={arcticChildrenYouthFoundation} alt="Arctic Children & Youth Foundation" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://acyf.ca" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Arctic Children &amp; Youth Foundation</a>
                            <p className="mt-3 text-sm leading-relaxed">They work at all levels to assist Arctic children and youth to attain standards of living, education, opportunities, health and well-being equal to those of other Canadians. ACYF is mandated to serve children and youth in the Canadian northern territories and regions, focusing on Inuvialuit, Nunavut, Nunavik, and Nunatsiavut.</p>
                        </div>

                        {/* Kelty Mental Health */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={keltyMentalHealth} alt="Kelty Mental Health" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://keltymentalhealth.ca" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Kelty Mental Health</a>
                            <p className="mt-3 text-sm leading-relaxed">A provincial resource centre that provides mental health and substance use information, resources, and peer support to children, youth and their families from across BC. We also provide peer support to people of all ages with eating disorders. Free Phone, In-Person or eMail support.</p>
                        </div>

                        {/* Youth in BC */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={youthInBC} alt="Youth in BC" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://www.youthinbc.com" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Youth in BC</a>
                            <p className="mt-3 text-sm leading-relaxed">Youth In BC is a free online crisis, suicide prevention, and emotional support service for youth under 25 in British Columbia and Yukon. It connects youth with support, information and resources. Online chat is available from 12pm to 1am in BC &amp; Yukon for 25 and under.</p>
                        </div>

                        {/* LGBT Youthline */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={lgbtYouthline} alt="LGBT Youthline" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://www.youthline.ca" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">LGBT Youthline</a>
                            <p className="mt-3 text-sm leading-relaxed">Youth Line offers confidential and non-judgemental peer support through our telephone, text and chat services. Get in touch with a peer support volunteer from Sunday to Friday, 4:00PM to 9:30 PM.</p>
                        </div>

                        {/* Foundry */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={foundry} alt="Foundry" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://foundrybc.ca" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Foundry</a>
                            <p className="mt-3 text-sm leading-relaxed">Foundry offers young people ages 12-24 health and wellness resources, services and supports – online and through integrated service centres in seven communities across BC.</p>
                        </div>

                        {/* Tel-jeunes */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={telJeunes} alt="Tel-jeunes" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://teljeunes.com" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Tel-jeunes</a>
                            <p className="mt-3 text-sm leading-relaxed">French Canadian. C'est un service où tu peux échanger sur un sujet qui te préoccupe et avoir l'avis d'autres jeunes comme toi. Viens consulter les différentes sections du forum. Ce mois-ci, notre Top forum porte sur les problèmes personnels.</p>
                        </div>

                        {/* Teen Mental Health */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={teenMentalHealth} alt="Teen Mental Health" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://mentalhealthliteracy.org" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Teen Mental Health</a>
                            <p className="mt-3 text-sm leading-relaxed">What are Mental Disorders? What is Brain Injury? What is Stigma? We need to know as much about our minds as we do our bodies. Have a look at the videos on our YouTube channel as well.</p>
                        </div>

                        {/* Parent's Guide: Teen Online Safety */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={parentsGuideTeenOnlineSafety} alt="Parent's Guide: Teen Online Safety" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://www.mytutor.co.uk/blog/parents/the-parents-guide-to-teaching-your-teen-online-safety/" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Parent's Guide: Teen Online Safety</a>
                            <p className="mt-3 text-sm leading-relaxed">Keeping your teen safe online is near the top of the worry list for parents today. Kids do everything online, from learning to socialising, gaming to shopping. For teens, learning how to recognise the risks and protect themselves is a life skill they'll need for years to come.</p>
                        </div>

                        {/* Open Mind */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={openMind} alt="Open Mind" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://openmindbc.ca" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Open Mind</a>
                            <p className="mt-3 text-sm leading-relaxed">OpenMindBC.ca presents a valuable resource for physicians, parents, teachers, and youth to learn more about the support services that are available in British Columbia and across Canada.</p>
                        </div>

                        {/* Jack.org */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={jackOrg} alt="Jack.org" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://www.jack.org" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Jack.org</a>
                            <p className="mt-3 text-sm leading-relaxed">The national network of young leaders transforming the way we think about mental health. With initiatives and programs designed with the input of young people at every step, we will end stigma in our generation.</p>
                        </div>

                        {/* Mind Check */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={mindCheck} alt="Mind Check" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://www.aetna.com/individuals-families/mental-emotional-health.html" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Mind Check</a>
                            <p className="mt-3 text-sm leading-relaxed">This Mind Check website was created in order to assist young people to identify and understand mental distress they may be experiencing and to link them to sources of help that will enable them to learn skills and strategies to manage these problems.</p>
                        </div>

                        {/* ConnecTeen */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={connecTeen} alt="ConnecTeen" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://calgaryconnecteen.com" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">ConnecTeen</a>
                            <p className="mt-3 text-sm leading-relaxed">ConnecTeen is a confidential peer support service for youth in Calgary and area. If you ever have a question, a problem or just need someone to talk to, give us a call, drop us an email, send us a text or chat with us online.</p>
                        </div>

                        {/* YouthSpace */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={youthSpace} alt="YouthSpace" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://www.need2.ca" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">YouthSpace</a>
                            <p className="mt-3 text-sm leading-relaxed">Youthspace.ca is made up of a community of volunteers who are here to support you – whatever you are going through.</p>
                        </div>

                        {/* Kootenay Family Place */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={kootenayFamilyPlace} alt="Kootenay Family Place" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://kootenayfamilyplace.org/#" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Kootenay Family Place</a>
                            <p className="mt-3 text-sm leading-relaxed">You are not alone. Whether you are dealing with mild anxiety, depression, eating disorders, substance use, or suicidal thoughts, we can help link you to the right services in your community.</p>
                        </div>

                        {/* Mind Your Mind */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={mindYourMind} alt="Mind Your Mind" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://mindyourmind.ca" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Mind Your Mind</a>
                            <p className="mt-3 text-sm leading-relaxed">Mind Your Mind is an award winning site for youth by youth. This is a place where you can get info, resources and the tools to help you manage stress, crisis &amp; mental health problems.</p>
                        </div>

                        {/* Teen Suicide */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={teenSuicide} alt="Teen Suicide" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="http://www.teensuicide.us" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Teen Suicide</a>
                            <p className="mt-3 text-sm leading-relaxed">Teen Suicide .us is presented for adults and teens. We offer articles, facts, and information on teenage suicide prevention, adolescent suicide statistics/rates, and related issues.</p>
                        </div>

                        {/* Reason to Live */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={reasonToLive} alt="Reason to Live" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://reasontolive.ca" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Reason to Live</a>
                            <p className="mt-3 text-sm leading-relaxed">The Manitoba Suicide Prevention and Support Line is a toll-free, confidential 24-hour crisis line run by trained crisis counsellors from Klinic Community Health.</p>
                        </div>

                        {/* Kids Health */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={kidsHealth} alt="Kids Health" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://kidshealth.org" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Kids Health</a>
                            <p className="mt-3 text-sm leading-relaxed">As part of The Nemours Foundation's Center for Children's Health Media, KidsHealth also provides families with perspective, advice, and comfort about a wide range of physical, emotional, and behavioral issues that affect children and teens.</p>
                        </div>

                        {/* Teen Depression */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={teenDepression} alt="Teen Depression" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="http://www.teendepression.org" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Teen Depression</a>
                            <p className="mt-3 text-sm leading-relaxed">Statistics, Prevention, Facts on Teenage Depression.</p>
                        </div>

                        {/* The Balanced Mind */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={theBalancedMind} alt="The Balanced Mind" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://www.dbsalliance.org/support/for-friends-family/for-parents/" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">The Balanced Mind</a>
                            <p className="mt-3 text-sm leading-relaxed">The Balanced Mind Foundation guides families raising children with mood disorders to the answers, support and stability they seek.</p>
                        </div>

                        {/* The Yellow Ribbon Campaign */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={yellowRibbonCampaign} alt="The Yellow Ribbon Campaign" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://yellowribbon.org" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">The Yellow Ribbon Campaign</a>
                            <p className="mt-3 text-sm leading-relaxed">Yellow Ribbon Suicide Prevention Program® is dedicated to preventing suicide and attempts by making suicide prevention accessible to everyone and removing barriers to help.</p>
                        </div>

                        {/* Trevor Project */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={trevorProject} alt="Trevor Project" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://www.thetrevorproject.org" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Trevor Project</a>
                            <p className="mt-3 text-sm leading-relaxed">Crisis intervention &amp; suicide prevention services to LGBTQ youth ages 13–24.</p>
                            <p className="mt-2 text-sm leading-relaxed">Call: 1-866-488-7386 (24 hrs)</p>
                            <p className="text-sm leading-relaxed">TrevorChat: www.thetrevorproject.org/chat</p>
                            <p className="text-sm leading-relaxed">Trevor Text: Fridays late afternoon to early evening. Text "Trevor" to 202-304-1200</p>
                        </div>
                    </div>
                </div>

                {/* Addiction Resources for Youth */}
                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-purple-700">
                        Addiction Resources for Youth
                    </h2>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Alcohol and Suicide */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={alcoholAwareness} alt="Alcohol and Suicide" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://alcoholawareness.org" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Alcohol and Suicide</a>
                            <p className="mt-3 text-sm leading-relaxed">When things get tough, when it's hard to cope, when feeling becomes too much – places where we all have been – the need to make it through becomes eminent. As this is something we all can relate to in one way or another, it should be easy to understand why you or someone you love has turned to alcohol to soothe or numb the pain.</p>
                        </div>

                        {/* Rehab Center */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={rehabCenter} alt="Rehab Center" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://www.rehabcenter.net/prevent-students-experimenting-drugs-alcohol/" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Rehab Center</a>
                            <p className="mt-3 text-sm leading-relaxed">RehabCenter.net is the Web's most comprehensive guide to quality rehab centers and addiction treatment. We offer free and confidential information about the many effective and empowering rehab options available today.</p>
                        </div>

                        {/* DrugRehab.com */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={drugRehab} alt="DrugRehab.com" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://www.drugrehab.com" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">DrugRehab.com</a>
                            <p className="mt-3 text-sm leading-relaxed">Drugs and alcohol have a greater effect on teens than on adults. The Signs of Addiction can be difficult to understand, and many teens don't realize the long-term damage drugs have on their bodies because the short-term side effects fade. Help is available for teens who have questions about drug abuse, treatment or think they are suffering from addiction.</p>
                        </div>
                    </div>
                </div>

                {/* Bullying & Cyber-Bullying Resources */}
                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-purple-700">
                        Bullying &amp; Cyber-Bullying Resources
                    </h2>

                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Cyber Bullying: The Complete Guide */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={cyberBullyingGuide} alt="Cyber Bullying: The Complete Guide" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://backgroundchecks.org/cyber-bullying-helping-the-bullied-stopping-the-bullies.html#Introduction" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Cyber Bullying: The Complete Guide</a>
                            <p className="mt-3 text-sm leading-relaxed">When the line between normal, even acceptable, playful teasing crosses into bullying, problems arise.</p>
                        </div>

                        {/* Kids HelpPhone */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={kidsHelpPhoneImg} alt="Kids HelpPhone" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://kidshelpphone.ca" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Kids HelpPhone</a>
                            <p className="mt-3 text-sm leading-relaxed">Bullying. Choose to make a difference. Stand up. Step in. Reach out. Tell someone, or tell Kids Help Phone.</p>
                        </div>

                        {/* The Impact! */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={theImpact} alt="The Impact!" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://impact.mediasmarts.ca/en/students" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">The Impact!</a>
                            <p className="mt-3 text-sm leading-relaxed">How to Make a Difference When You Witness Bullying Online. Designed to help students know how to intervene when witnessing cyber bullying so you can make a positive difference.</p>
                        </div>

                        {/* NeedHelpNow */}
                        <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                            <img src={needHelpNow} alt="NeedHelpNow" className="w-full h-40 object-contain rounded-lg mb-3 bg-gray-50" />
                            <a href="https://needhelpnow.ca/en/" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">NeedHelpNow</a>
                            <p className="mt-3 text-sm leading-relaxed">If you or a friend, peer or sibling have been involved in a self/peer exploitation incident ("sexting"), we are here to help. This site provides you with guidance on steps you can take to get through this.</p>
                        </div>
                    </div>
                </div>

                {/* International Youth Resources */}
                <div className="mt-8 rounded-2xl border border-purple-100 bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-purple-700">
                        International Youth Resources
                    </h2>

                    {/* United States */}
                    <div className="mt-6">
                        <h3 className="text-xl font-bold text-purple-700 mb-4">United States</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://commongroundhelps.org" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Common Ground</a>
                                <p className="mt-3 text-sm leading-relaxed">At Common Ground, they're dedicated to helping people move from crisis to hope.</p>
                            </div>

                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://ithacacrisis.org" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Suicide Prevention and Crisis Service (New York)</a>
                                <p className="mt-3 text-sm leading-relaxed">Text message Mondays through Fridays from 6 to 9 pm for free and confidential crisis counseling. Emotional problems, big or small, they will listen without judgement and help you find your own best solutions. The Chat will be for teens and young adults, among others, in the Finger Lakes and Southern Tier regions of New York.</p>
                            </div>

                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://www.crisistextline.org" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Crisis Text Line</a>
                                <p className="mt-3 text-sm leading-relaxed">Crisis Text Line is free, 24/7 support for those in crisis. Text 741741 from anywhere in the USA to text with a trained Crisis Counselor.</p>
                            </div>

                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://didihirsch.org/teenline/" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Teen Line</a>
                                <p className="mt-3 text-sm leading-relaxed">Do you need help working something out? Do you want to talk to someone who understands, like another teen? They are here to help.</p>
                            </div>

                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://www.canvashealth.org/contact-us/" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Canvas Health</a>
                                <p className="mt-3 text-sm leading-relaxed">Canvas Health's Crisis Connection provides qualified counselors who are able to respond to any problem 24 hours a day, 365 days a year by phone or text.</p>
                            </div>

                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://www.yourlifeyourvoice.org/Pages/home.aspx" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Your Life, Your Voice</a>
                                <p className="mt-3 text-sm leading-relaxed">If you are having thoughts of harming yourself or you are being abused, contact them. Text with a counselor for free. Every day, 2pm to 1am CST.</p>
                            </div>
                        </div>
                    </div>

                    {/* Australia */}
                    <div className="mt-8">
                        <h3 className="text-xl font-bold text-purple-700 mb-4">Australia</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://kidshelpline.com.au" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Kids Helpline</a>
                                <p className="mt-3 text-sm leading-relaxed">Any time. Any reason. You can talk with their team on a call, via email or WebChat. They listen and care. Talking helps.</p>
                            </div>

                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://au.reachout.com" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Reach Out</a>
                                <p className="mt-3 text-sm leading-relaxed">The help you need, where and when you need it.</p>
                            </div>
                        </div>
                    </div>

                    {/* New Zealand */}
                    <div className="mt-8">
                        <h3 className="text-xl font-bold text-purple-700 mb-4">New Zealand</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://www.thelowdown.co.nz" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">The Lowdown</a>
                                <p className="mt-3 text-sm leading-relaxed">Sometimes life's ups and downs are more than just the usual ups and downs. If you're stuck feeling bad we'll help you figure out if it could be anxiety or depression. Whatever's going on you'll find ideas and people who can help you get unstuck.</p>
                            </div>

                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://youthline.co.nz" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Youthline</a>
                                <p className="mt-3 text-sm leading-relaxed">Youthline works with young people, their families and those supporting young people.</p>
                            </div>
                        </div>
                    </div>

                    {/* United Kingdom */}
                    <div className="mt-8">
                        <h3 className="text-xl font-bold text-purple-700 mb-4">United Kingdom</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://www.childline.org.uk" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Childline</a>
                                <p className="mt-3 text-sm leading-relaxed">They are here for you on the phone or online. Or try getting support from other young people on their message boards.</p>
                            </div>

                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://www.themix.org.uk/get-support/" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">The Mix</a>
                                <p className="mt-3 text-sm leading-relaxed">The Mix is the UK's leading support service for young people. We are here to help you take on any challenge you're facing – from mental health to money, from homelessness to finding a job, from break-ups to drugs. Talk to us 24 hours a day via online, social or our free, confidential helpline.</p>
                            </div>

                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://mindout.org.uk" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">MindOut (LGBTQ)</a>
                                <p className="mt-3 text-sm leading-relaxed">They provide advice &amp; information, advocacy, a peer support group programme, wellbeing activities and events, a peer mentoring service, and online chat service.</p>
                            </div>

                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://turn2me.ie" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Turn2Me</a>
                                <p className="mt-3 text-sm leading-relaxed">Feeling anxious, sad or lonely? Going through a tough time? We are here to help, you are not alone.</p>
                            </div>

                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://thegoodlimbo.com" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">TheGoodLimbo</a>
                                <p className="mt-3 text-sm leading-relaxed">The Good Limbo is an online mental health community. We have forums and a Discord chat server where you can talk to others who understand. Whether you want to seek support, or just need a distraction, we're here for you.</p>
                            </div>
                        </div>
                    </div>

                    {/* Global */}
                    <div className="mt-8">
                        <h3 className="text-xl font-bold text-purple-700 mb-4">Global</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://www.7cups.com" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">7 Cups</a>
                                <p className="mt-3 text-sm leading-relaxed">Whether you are going through a challenging time or just want to talk to someone, at 7 Cups you'll find a path connecting you to kind people and helping you develop new skills to solve your problems.</p>
                            </div>

                            <div className="rounded-xl border border-gray-100 bg-white p-4 sm:p-5 shadow-sm">
                                <a href="https://forum.emptyclosets.com/index.php" className="text-lg font-semibold text-purple-700 hover:text-purple-800 underline underline-offset-4">Empty Closets (LGBTQ)</a>
                                <p className="mt-3 text-sm leading-relaxed">Empty Closets offers a forum where you can join in with a wide range of discussions or start your own, a chat room, useful articles and links. Members can also create their own galleries and blogs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MentalHealthResourcesCommunitiesTeensYouth;