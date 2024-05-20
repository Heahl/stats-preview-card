import Head from "next/head";
import Image from "next/image";

type Stat = {
  value: string;
  label: string;
};

const stats: Stat[] = [
  { value: "10k+", label: "companies" },
  { value: "314", label: "templates" },
  { value: "12M+", label: "queries" },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Stats Preview Card</title>
        <meta name="description" content="stats-preview-card" />
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
      <main className="font-lexend flex min-h-screen flex-col items-center justify-center bg-very-dark-blue">
        {/* Preview Card Container */}
        <div className="flex w-[90vw] flex-col overflow-hidden rounded-xl bg-dark-desaturated-blue shadow-2xl  md:max-h-[380px] md:max-w-[950px] md:flex-row-reverse">
          {/* Hero Image */}
          <div className="relative w-full md:w-1/2">
            <Image
              className="block w-full md:hidden"
              src="/images/image-header-mobile.jpg"
              width={100}
              height={100}
              alt="Hero-Image"
            />
            <Image
              className="hidden h-full w-full md:block md:object-cover"
              src="/images/image-header-desktop.jpg"
              width={100}
              height={100}
              alt="Hero-Image"
            />
            <div className="z-2 absolute left-0 top-0 h-full w-full bg-soft-violet/40" />
          </div>
          {/* Content */}
          <div className="flex flex-col justify-between gap-6 p-8 md:mx-6 md:w-1/2">
            <h1 className="font-inter mt-2 text-center text-3xl font-semibold text-white md:text-start">
              Get <span className="text-soft-violet">insights</span> that help
              your business grow.
            </h1>
            <p className="text-center font-extralight leading-6 tracking-wider text-main-p md:mb-3 md:text-start">
              Discover the benefits of data analytics and amke better decisions
              regarding revenue, customer experience, and overall efficiency.
            </p>
            {/* Stats */}
            <div className="flex flex-col md:flex-row md:justify-between">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="mb-3 flex w-full flex-col items-center gap-1"
                >
                  <p className="w-full text-center text-2xl text-white md:text-start">
                    {stat.value}
                  </p>
                  <p className="mb-4 w-full text-center uppercase text-stat-h md:text-start">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
