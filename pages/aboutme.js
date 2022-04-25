import Head from "next/head";

export default function AboutMe() {
  return (
    <div div className="flex flex-col items-center min-h-screen py-10">
      <Head>
        <title>Daniel Rivas - About me</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="In this section you can know a little bit more about me, my skills and my experience as a software developer."
        />
      </Head>

      <main className="flex flex-col w-full px-20 text-center">
        <h1 className="text-3xl font-bold">About Me</h1>
      </main>
      <section className="text-gray-600 body-font">
        <div className="container px-5 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <img
                    className="rounded-full"
                    alt="Profile Picture of Daniel"
                    src="/assets/profilephoto.png"
                  />
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Daniel Rivas
                  </h2>
                  <div className="w-12 h-1 bg-black rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Software Developer | ReactJS | JavaScript | TypeScript |
                    NodeJS | NestJS
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4 text-justify">
                  Hi, there! I'm Daniel, a software developer with a passion for create new things. 
                  I've being working as a full stack developer since 2019, and I'm currently working as a Frontend developer at Intelnexo S.A. in Ecuador.
                </p>
                <p className="leading-relaxed text-lg text-justify mb-4">
                  I have a strong background in software development, and I'm always looking for new challenges to improve my skills.
                  Actually I'm a big fan of the JavaScript language, also the TypeScript language and I'm always trying to learn new things.
                </p>
                <p className="leading-relaxed text-lg text-justify mb-4">
                  I have been using the MERN stack since 2019, and I'm always looking for new challenges to improve my skills.
                  Also, in my free time I'm always trying to learn new things, like learning new languages, frameworks, libraries, etc.
                  I've been working with ReactJS, React Native, NodeJS, TypeScript, GraphQL, MongoDB, MySQL, PostgreSQL, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
