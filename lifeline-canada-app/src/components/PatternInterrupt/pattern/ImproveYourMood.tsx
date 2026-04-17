

export default function ImproveYourMood() {
  const imageRowClassName =
    'rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row gap-5 items-start';
  const sideImageClassName =
    'w-full h-auto object-cover object-top rounded-lg shadow-md';

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#f8f5ff] via-white to-purple-50 py-12 overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
      </div>

      <div className="w-full px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="w-full lg:w-4/5 mx-auto">
          {/* Page Title */}
          <h1 className="!text-[#5f2d85] mt-4 !text-3xl sm:!text-4xl lg:!text-5xl font-black tracking-tight">
            <span className="!text-[#5f2d85]">Improve Your Mood</span>
          </h1>

          <div className="flex items-center gap-4 mt-3 mb-1">
            <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
          </div>

          {/* Intro Card */}
          <main className="mt-6 !bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50 text-gray-700 flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-1">
              <p className="leading-relaxed">
                Depression is hard. In many ways it is all up to you. And that
                can be difficult, tiring, scary. One way to try to combat
                depression is to find interruptions to the cycle that occurs. To
                interrupt these patterns takes time, strength and perseverance.
                A good place to start is by doing things that can change your
                mood.
              </p>
              <p className="mt-4 leading-relaxed">
                Studies show negative emotions – including anger, hostility and
                pessimism – are linked to a higher risk of heart disease and
                lower chance of recovery from events such as heart attacks, as
                well as poorer cognitive health.
              </p>
            </div>
            <div className="sm:w-[30vw] sm:max-w-[18rem] sm:flex-shrink-0 w-full">
              <img
                src="/images/improve-your-mood/improve-your-mood-hero.jpg"
                alt="Improve your mood"
                className="w-full h-full object-cover object-top rounded-lg shadow-md"
              />
            </div>
          </main>

          {/* 30 Ways Section */}
          <div className="mt-8 rounded-2xl border border-purple-100 !bg-white/90 backdrop-blur-sm shadow-sm p-6 sm:p-8 text-gray-700">
            <h2 className="!text-2xl sm:!text-3xl font-bold tracking-tight !text-[#5f2d85]">
              30 Ways to Improve Your Mood
            </h2>
            <p className="mt-3 leading-relaxed">
              If you're looking for suggestions, you may find these helpful:
            </p>

            {/* Block 1 — image LEFT, text RIGHT */}
            <div className="mt-6 space-y-4 sm:space-y-5">
              <div className={imageRowClassName}>
                <div className="sm:w-[18vw] sm:max-w-[14rem] sm:flex-shrink-0 w-full">
                  <img
                    src="/images/improve-your-mood/small-things-big-ways.jpg"
                    alt="Small Things That Impact Your Mood In Big Ways"
                    className={sideImageClassName}
                  />
                </div>
                <div className="flex-1 space-y-4 leading-relaxed">
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      1. Step back and self-reflect.
                    </span>{' '}
                    Whenever you start feeling depressed, try to stop, reflect,
                    and get to the root of the feelings.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      2. Reach out to someone.
                    </span>{' '}
                    You may bottle up feelings out of fear that you would be
                    judged if you talked about them. Reach out to a loving,
                    understanding person is one of the best things you can do.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      3. Listen to music.
                    </span>{' '}
                    Music can heal, put you in a better mood, make you feel less
                    alone, or take you on a mental journey.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      4. Cuddle or play with pets.
                    </span>{' '}
                    Spending quality time with a loving pet can instantly make
                    your heart and soul feel better.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      5. Go for a walk.
                    </span>{' '}
                    Walking always helps clear the head and shed negative
                    energy. It's especially therapeutic if you choose to walk at
                    a scenic location.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      6. Drink something healthy and reinvigorating.
                    </span>{' '}
                    There are many health and mood benefits of drinking orange
                    juice and other fruit juices.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      7. Write.
                    </span>{' '}
                    Writing can be the first thing to do when your feeling down.
                    It always helps me get thoughts and feelings out in front of
                    you.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      8. Take a nap.
                    </span>{' '}
                    Sometimes we just need to recharge. It always feels better
                    after getting some rest.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      9. Plan a fun activity.
                    </span>{' '}
                    Moping around never helps to feel any better, so it usually
                    helps to plan something fun to do if your feeling up to it.
                    It can be something as simple as creating your own vision
                    board or something as big as planning a trip.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      10. Do something spontaneous.
                    </span>{' '}
                    Some favorite memories entail choices you made
                    spontaneously. We should all learn to let go of routine
                    every now and then and do something exciting and unplanned.
                  </p>
                </div>
              </div>

              {/* Block 2 — text LEFT, images RIGHT */}
              <div className="rounded-xl border border-gray-100 !bg-white p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row gap-5 items-start">
                <div className="flex-1 space-y-4 leading-relaxed">
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      11. Prioritize.
                    </span>{' '}
                    Sometimes we feel depressed when priorities are out of
                    balance. Try to make sure your giving a fair amount of
                    attention to all the priorities in your life, such as work,
                    relationships, health, and personal happiness.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      12. Look through old photographs or snap some new ones.
                    </span>{' '}
                    Sorting through old memories or capturing new ones usually
                    puts a smile on ones face.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      13. Hug someone.
                    </span>{' '}
                    Be a hugger. Hugs are such an easy way to express love and
                    care without having to say a word.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      14. Laugh.
                    </span>{' '}
                    Watch a funny movie or spend time with someone who has a
                    good sense of humor. Laughing releases tension and has a
                    natural ability to heal.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      15. Cry.
                    </span>{' '}
                    I don't like crying in front of people, but whenever you
                    have an opportunity to slink away and cry by yourself, we
                    always feel better afterwards. Crying releases pain.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      16. Read back over old emails or text messages, or listen
                      to old voicemails.
                    </span>{' '}
                    Whenever you feel dejected or bad about yourself, read kind
                    emails and comments. Doing so reminds that you are loved,
                    thought about, and appreciated.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      17. Reconnect with someone.
                    </span>{' '}
                    Get back in touch with an old friend or a family member that
                    you haven't spoken to in awhile. Reconnecting with people
                    almost always puts one in a good mood and fills the heart up
                    with love.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      18. Write yourself a letter.
                    </span>{' '}
                    Try to separate yourself from the ego and give yourself a
                    pep talk every now and then. Cicero said, "Nobody can give
                    you wiser advice than yourself."
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      19. Try a deep breathing exercise.
                    </span>{' '}
                    There are all kinds of deep breathing exercises out there.
                    Find one you like and do it whenever you're feeling stressed
                    or overly emotional.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      20. Cultivate gratitude.
                    </span>{' '}
                    Practicing genuine gratitude on a daily basis can be a major
                    source of healing in your life. When you step back and
                    notice everything you have to be grateful for, it makes you
                    feel like you have everything you need and that nothing is
                    lacking.
                  </p>
                </div>
                <div className="sm:w-[18vw] sm:max-w-[14rem] sm:flex-shrink-0 w-full flex flex-col gap-4">
                  <img
                    src="/images/improve-your-mood/smile.webp"
                    alt="Smile"
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                  <img
                    src="/images/improve-your-mood/mood-2.jpg"
                    alt="Walking outdoors"
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>

              {/* Block 3 — image LEFT, text RIGHT */}
              <div className={imageRowClassName}>
                <div className="sm:w-[18vw] sm:max-w-[14rem] sm:flex-shrink-0 w-full">
                  <img
                    src="/images/improve-your-mood/mood-1.jpg"
                    alt="Mood illustration"
                    className={sideImageClassName}
                  />
                </div>
                <div className="flex-1 space-y-4 leading-relaxed">
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      21. Re-watch a funny or inspiring YouTube video.
                    </span>{' '}
                    There are so many funny and inspiring videos online.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      22. Bake something.
                    </span>{' '}
                    Plus, you can eat whatever you baked and share it with
                    others afterward.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      23. Get out of the house.
                    </span>{' '}
                    Make a point to get out every now and then, whether it's to
                    get some fresh air or go out to eat with a friend.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      24. Focus on what truly matters to you.
                    </span>{' '}
                    Sometimes we forget what matters to us and what isn't that
                    important. Some things just aren't worth getting too upset
                    over.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      25. Take a negative comment or situation and look for
                      something positive about it.
                    </span>{' '}
                    If someone says something negative to you or you get stuck
                    in an unpleasant situation, sometimes it helps to look at it
                    from a different angle. Perspective is everything.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      26. Daydream.
                    </span>{' '}
                    Take a mental vacation. Let your mind wander for a while.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      27. Let some natural sunlight come in.
                    </span>{' '}
                    Opening all the blinds and curtains and letting natural
                    sunlight flood your home can help elevate your mood.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      28. Take a mental health day.
                    </span>{' '}
                    Sometimes we just need to take a day to clear our heads and
                    nurture our souls. Mental health has a history of being a
                    bit erratic, so nurturing it is a priority in life.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      29. Let go.
                    </span>{' '}
                    This is a very simple mantra. Say it to yourself multiple
                    times each day, which is very liberating and empowering.
                  </p>
                  <p>
                    <span className="font-normal !text-[#5f2d85]">
                      30. Read Tiny Buddha.
                    </span>{' '}
                    There is a category for almost every universal theme or
                    emotion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
