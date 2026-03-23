import { useState } from "react";
import { Link } from "react-router-dom";

type Book = {
  title: string;
  author: string;
  description: string;
  isbn: string;       // used to fetch cover from Open Library
  href: string;
};

const books: Book[] = [
  {
    title: "The Book of Virtues",
    author: "William J. Bennett",
    isbn: "9780684835778",
    description:
      "William J. Bennett has collected hundreds of stories in The Book of Virtues, an instructive and inspiring anthology that will help children understand and develop character — and help adults teach them. From the Bible to American history, from Greek mythology to English poetry, from fairy tales to modern fiction, these stories are a rich mine of moral literacy, a reliable moral reference point that will help anchor our children and ourselves in our culture, our history, and our traditions — the sources of the ideals by which we wish to live our lives.",
    href: "https://www.amazon.ca/s?k=The+Book+of+Virtues+William+J+Bennett",
  },
  {
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    isbn: "9780743269513",
    description:
      "One of the most inspiring and impactful books ever written, The 7 Habits of Highly Effective People has captivated readers for 25 years. It has transformed the lives of presidents and CEOs, educators and parents — in short, millions of people of all ages and occupations across the world. This twenty-fifth anniversary edition of Stephen Covey's cherished classic commemorates his timeless wisdom, and encourages us to live a life of great and enduring purpose.",
    href: "https://www.amazon.ca/s?k=7+Habits+of+Highly+Effective+People+Stephen+Covey",
  },
  {
    title: "How to Win Friends & Influence People",
    author: "Dale Carnegie",
    isbn: "9780671027032",
    description:
      "How to Win Friends and Influence People is a 1936 self-help book written by Dale Carnegie. Over 30 million copies have been sold worldwide, making it one of the best-selling books of all time. Carnegie had been conducting business education courses in New York since 1912. In 1934 Simon & Schuster took notes from the course to be revised for publication.",
    href: "https://www.amazon.ca/s?k=How+to+Win+Friends+and+Influence+People+Dale+Carnegie",
  },
  {
    title: "The Secret",
    author: "Rhonda Byrne",
    isbn: "9781582701707",
    description:
      "The Secret contains wisdom from modern-day teachers — men and women who have used it to achieve health, wealth, and happiness. By applying the knowledge of The Secret, they bring to light compelling stories of eradicating disease, acquiring massive wealth, overcoming obstacles, and achieving what many would regard as impossible.",
    href: "https://www.amazon.ca/s?k=The+Secret+Rhonda+Byrne",
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    isbn: "9780375842207",
    description:
      "Liesel Meminger is a foster girl living outside of Munich, who scratches out a meager existence for herself by stealing when she encounters something she can't resist — books. With the help of her accordion-playing foster father, she learns to read and shares her stolen books with her neighbors during bombing raids as well as with the Jewish man hidden in her basement.\n\nThe extraordinary, beloved novel about the ability of books to feed the soul even in the darkest of times. In superbly crafted writing that burns with intensity, award-winning author Markus Zusak has given us one of the most enduring stories of our time.",
    href: "https://www.amazon.ca/s?k=The+Book+Thief+Markus+Zusak",
  },
  {
    title: "The Shack",
    author: "William P. Young",
    isbn: "9780964729230",
    description:
      "Mackenzie Allen Phillips's youngest daughter, Missy, has been abducted during a family vacation, and evidence that she may have been brutally murdered is found in an abandoned shack deep in the Oregon wilderness. Four years later, in the midst of his great sadness, Mack receives a suspicious note, apparently from God, inviting him back to that shack for a weekend. Against his better judgment he arrives at the shack on a wintry afternoon and walks back into his darkest nightmare. What he finds there will change his life forever.",
    href: "https://www.amazon.ca/s?k=The+Shack+William+P+Young",
  },
  {
    title: "The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    isbn: "9780064404990",
    description:
      "Four adventurous siblings — Peter, Susan, Edmund, and Lucy Pevensie — step through a wardrobe door and into the land of Narnia, a land frozen in eternal winter and enslaved by the power of the White Witch. But when almost all hope is lost, the return of the Great Lion, Aslan, signals a great change … and a great sacrifice.",
    href: "https://www.amazon.ca/s?k=The+Lion+the+Witch+and+the+Wardrobe",
  },
  {
    title: "The Great Divorce",
    author: "C.S. Lewis",
    isbn: "9780060652951",
    description:
      "C. S. Lewis takes us on a profound journey through both heaven and hell in this engaging allegorical tale. Using his extraordinary descriptive powers, Lewis introduces us to supernatural beings who will change the way we think about good and evil.",
    href: "https://www.amazon.ca/s?k=The+Great+Divorce+C.S.+Lewis",
  },
  {
    title: "The Seven Paths",
    author: "Anasazi Foundation",
    isbn: "9781609946784",
    description:
      "This poetic, evocative story presents the meditations of an ancient Anasazi tribesman who rejects his family and sets off on a journey through the desert. He walks seven paths, each teaching a lesson symbolized by an element of the natural world: light, wind, water, stone, plants, animals, and, finally, the unity of all beings with the Creator. The Seven Paths reveals a source of wisdom, restoration, and renewal familiar to native people but lost to the rest of us, seven elements among nature that combine to mend human hearts.",
    href: "https://www.amazon.ca/s?k=The+Seven+Paths+Anasazi",
  },
  {
    title: "Les Misérables",
    author: "Victor Hugo",
    isbn: "9780451419439",
    description:
      "Set in the Parisian underworld and plotted like a detective story, the work follows Jean Valjean, a victim of society who has been imprisoned for 19 years for stealing a loaf of bread. A hardened criminal upon his release, he eventually reforms, becoming a successful industrialist and mayor of a northern town. Despite this he is haunted by an impulsive, regretted former crime and is pursued relentlessly by the police inspector Javert.",
    href: "https://www.amazon.ca/s?k=Les+Miserables+Victor+Hugo",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isbn: "9780061935466",
    description:
      "Compassionate, dramatic, and deeply moving, To Kill A Mockingbird takes readers to the roots of human behavior — to innocence and experience, kindness and cruelty, love and hatred, humor and pathos. With 18 million copies in print and translated into forty languages, this regional story by a young Alabama woman claims universal appeal. Today it is regarded as a masterpiece of American literature.",
    href: "https://www.amazon.ca/s?k=To+Kill+a+Mockingbird+Harper+Lee",
  },
  {
    title: "The Road Less Traveled",
    author: "M. Scott Peck",
    isbn: "9780743243155",
    description:
      "The Road Less Traveled, Timeless Edition: A New Psychology of Love, Traditional Values and Spiritual Growth by M. Scott Peck. Published in 1978, is a description of the attributes that make for a fulfilled human being, based largely on the author's experiences as a psychiatrist and a person.",
    href: "https://www.amazon.ca/s?k=The+Road+Less+Traveled+M+Scott+Peck",
  },
  {
    title: "The Gifts of Imperfection",
    author: "Brené Brown",
    isbn: "9781592858491",
    description:
      "Each day we face a barrage of images and messages from society and the media telling us who, what, and how we should be. We are led to believe that if we could only look perfect and lead perfect lives, we'd no longer feel inadequate. Brené Brown, PhD, a leading expert on shame, authenticity and belonging, shares what she's learned from a decade of research on the power of Wholehearted Living — a way of engaging with the world from a place of worthiness.",
    href: "https://www.amazon.ca/s?k=The+Gifts+of+Imperfection+Brene+Brown",
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor Frankl",
    isbn: "9780807014295",
    description:
      "Viktor Frankl's riveting account of his time in the Nazi concentration camps, and his insightful exploration of the human will to find meaning in spite of the worst adversity, has offered solace and guidance to generations of readers since it was first published in 1946. \"One of the outstanding contributions to psychological thought\" — \"One of the great books of our time.\"",
    href: "https://www.amazon.ca/s?k=Man%27s+Search+for+Meaning+Viktor+Frankl",
  },
  {
    title: "Don't Sweat the Small Stuff…and it's all Small Stuff",
    author: "Richard Carlson",
    isbn: "9780786881857",
    description:
      "Don't Sweat The Small Stuff… and It's All Small Stuff: Simple Ways to Keep the Little Things from Taking Over Your Life is all about finding happiness and peace of mind. It teaches you how to turn your problems into opportunities, stay calm in stressful situations and fully live in the moment so you can appreciate what you have and get the most out of life.",
    href: "https://www.amazon.ca/s?k=Don%27t+Sweat+the+Small+Stuff+Richard+Carlson",
  },
  {
    title: "The Last Lecture",
    author: "Randy Pausch",
    isbn: "9781401323257",
    description:
      "In this book, Randy Pausch has combined the humor, inspiration and intelligence that made his lecture such a phenomenon and given it an indelible form. It is a book that will be shared for generations to come. \"We cannot change the cards we are dealt, just how we play the hand.\"",
    href: "https://www.amazon.ca/s?k=The+Last+Lecture+Randy+Pausch",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    isbn: "9780061122415",
    description:
      "The Alchemist by Paulo Coelho continues to change the lives of its readers forever. With more than two million copies sold around the world, The Alchemist has established itself as a modern classic, universally admired. Paulo Coelho's masterpiece tells the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found.",
    href: "https://www.amazon.ca/s?k=The+Alchemist+Paulo+Coelho",
  },
  {
    title: "As a Man Thinketh",
    author: "James Allen",
    isbn: "9781585424337",
    description:
      "\"As a Man Thinketh\" is a literary essay by James Allen, first published in 1902. In more than a century it has become an inspirational classic, selling millions of copies worldwide and bringing faith, inspiration, and self healing to all who have encountered it. The title comes from the Bible: \"As a man thinketh in his heart, so is he.\" — Proverbs, chapter 23, verse 7.",
    href: "https://www.amazon.ca/s?k=As+a+Man+Thinketh+James+Allen",
  },
];

// Open Library cover URL — free, no API key needed
function coverUrl(isbn: string) {
  return `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
}

// ── Book cover with automatic fallback ───────────────────────────────────────
function BookCover({ book }: { book: Book }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    // Clean placeholder when Open Library has no cover
    return (
      <div className="w-full aspect-[2/3] rounded-sm bg-gradient-to-br from-[#e7e3f3] to-[#c9c0e8] flex flex-col items-center justify-center p-3 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
        <span className="text-4xl mb-2">📖</span>
        <p className="text-[11px] text-center text-[#5a4d8a] font-medium leading-snug">
          {book.title}
        </p>
      </div>
    );
  }

  return (
    <img
      src={coverUrl(book.isbn)}
      alt={`${book.title} cover`}
      className="w-full rounded-sm shadow-[0_4px_12px_rgba(0,0,0,0.15)] ring-1 ring-black/5 object-cover"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}

// ── Single book entry ─────────────────────────────────────────────────────────
function BookEntry({ book, index }: { book: Book; index: number }) {
  return (
    <div>
      <div className="grid grid-cols-[100px_1fr] gap-6 md:grid-cols-[140px_1fr] md:gap-10 items-start">

        {/* Left: cover + amazon link */}
        <div className="flex flex-col items-center gap-3">
          <BookCover book={book} />
          <a
            href={book.href}
            target="_blank"
            rel="noreferrer"
            className="text-center text-[12px] font-medium text-[#4c7bd9] hover:underline leading-snug"
          >
            View on Amazon
          </a>
        </div>

        {/* Right: title + author + description */}
        <div className="pt-1">
          <a
            href={book.href}
            target="_blank"
            rel="noreferrer"
            className="text-[18px] font-semibold text-[#4c7bd9] hover:underline leading-snug block mb-1"
          >
            {book.title}
          </a>
          <p className="text-[13px] text-[#888] italic mb-3">{book.author}</p>
          {book.description.split("\n\n").map((para, i) => (
            <p key={i} className="text-[15px] leading-7 text-[#333] mb-3 last:mb-0">
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Divider between books */}
      {index < books.length - 1 && (
        <div className="my-10 border-t border-[#ddd]" />
      )}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function LifeChangingBooksPage() {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">

      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1200px] px-6 py-6">
        <div className="text-[12px] text-[#666]">
          <Link to="/pattern" className="text-[#4c7bd9] hover:underline">
            Pattern Interrupts
          </Link>{" "}
          / <span className="text-[#333]">Life Changing Books</span>
        </div>
      </div>

      {/* Hero */}
      <section className="w-full bg-[linear-gradient(to_right,#e7e3f3_0%,#e7e3f3_50%,#e8edf7_50%,#e8edf7_100%)]">
        <div className="mx-auto grid max-w-[980px] items-center gap-10 px-6 py-14 md:grid-cols-2">
          <div>
            <h1 className="font-serif text-[34px] leading-tight text-black md:text-[46px]">
              Life Changing Books
            </h1>
            <div className="mt-4 space-y-4 text-[15px] leading-7 text-black">
              <p>
                Reading allows you to learn new things and opens up the possibility of
                letting these new things impact your life and change the way you see your
                surroundings. Reading fosters your imagination and creativity. It requires
                your brain to be active making you smarter, and because it requires focus,
                improves your concentration.
              </p>
              <p>
                Reading, when done for pleasure, reduces your stress which is good for your
                overall health and because it makes you think and apply what you've read,
                actually improves your reasoning skills.
              </p>
              <p className="font-medium">
                Here are a few suggestions. Links take you to Amazon.com
              </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src="/images/resources/life-changing-books.jpg"
              alt="Life changing books"
              className="w-full max-w-[420px] object-cover shadow-[0_8px_16px_rgba(0,0,0,0.18)]"
            />
          </div>
        </div>
      </section>

      {/* Book list */}
      <section className="mx-auto max-w-[980px] px-6 py-14">
        {books.map((book, index) => (
          <BookEntry key={book.title} book={book} index={index} />
        ))}
      </section>

    </div>
  );
}