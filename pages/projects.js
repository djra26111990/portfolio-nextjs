import Head from "next/head";

const RepoData = [
  {
    name: "react-ts-keyevent-modal-portals",
    description:
      "Little project to test open modals pressing F1 to F3 keys & testing React Portals to make Modals",
    url: "https://github.com/djra26111990/react-ts-keyevent-modal-portals",
    technologies: ["React", "TypeScript", "ViteJS", "Material-UI"],
  },
  {
    name: "portfolio-nextjs",
    description:
      "Little project using graphQL with Subscriptions to get data from the API in real time",
    url: "https://github.com/djra26111990/graphql-subscription-api",
    technologies: ["NodeJS", "Apollo-Server", "graphql", "mongoDB", "Express"],
  },
  {
    name: "ChatInAppAgentes",
    description:
      "React native app for agents to chat with Banco Guayaquil customers",
    url: "#",
    technologies: ["RN", "Express", "TailwindCSS", "mongoDB", "PGSQL"],
  },
  {
    name: "ChatInAppClientes",
    description: "Chat app for Banco Guayaquil customers to chat with agents",
    url: "#",
    technologies: ["React", "Express", "TailwindCSS", "SocketIO"],
  },
  {
    name: "Kiosk-Admin-system",
    description:
      "Admin system for little and medium sized business to manage inventory, sales, and customers",
    url: "#",
    technologies: ["React", "TypeScript", "graphQL", "NodeJS"],
  },
  {
    name: "Easy Shop API",
    description:
      "API Rest for a e-commerce store to manage products, customers, and orders",
    url: "https://github.com/djra26111990/easy-shop-api",
    technologies: ["NodeJS", "Express", "mongoDB", "JavaScript"],
  },
  {
    name: "Easy Shop App mobile",
    description:
      "App mobile for a e-commerce store to manage products, customers, and orders",
    url: "https://github.com/djra26111990/easy-shop-app",
    technologies: ["RN", "Expo", "JavaScript", "Redux"],
  },
  {
    name: "Profile card component",
    description:
      "Frontend Challenge to Frontend Mentor website to create a profile card component",
    url: "https://github.com/djra26111990/react-webpack-frontend-challenge",
    technologies: ["React", "TailwindCSS", "JavaScript"],
  },
];

export default function Projects() {
  return (
    <>
      <div div className="flex flex-wrap items-center py-10">
        <main className="flex flex-col w-full px-20 text-center">
          <h1 className="text-3xl font-bold">Projects</h1>
        </main>
      </div>
      <section className="text-gray-600 body-font py-10">
        <div className="md:max-w-7xl mx-auto">
          <div div className="flex flex-wrap items-center">
            <Head>
              <title>Daniel Rivas - About me</title>
              <link rel="icon" href="/favicon.ico" />
              <meta
                name="description"
                content="In this section you can know a little bit more about me, my skills and my experience as a software developer."
              />
            </Head>
            {RepoData.map((repo, index) => (
              <div key={index} className="p-4 lg:w-1/3">
                <div className="hover:shadow-md h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h1 className="sm:text-xl text-2xl font-medium text-gray-900 mb-3">
                    {repo.name}
                  </h1>
                  <p className="leading-relaxed text-sm mb-3">
                    {repo.description}
                  </p>
                  {repo.url === "#" ? (
                    "Private Project - no repo available"
                  ) : (
                    <a
                      href={repo.url}
                      className="text-grey-300 inline-flex items-center hover:text-black"
                    >
                      Go to the github repo
                      <svg width="24" height="24" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                        ></path>
                      </svg>
                    </a>
                  )}
                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    {repo.technologies.map((tech, index) => (
                      <span
                        key={tech}
                        className={`text-gray-400 mr-3 inline-flex items-center leading-none text-xs pr-3 py-1 ${
                          repo.technologies.length - 1 <= index
                            ? ""
                            : "border-r-2 "
                        }border-gray-200`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
