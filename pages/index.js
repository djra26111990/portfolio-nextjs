import Head from 'next/head'
import Typical from 'react-typical'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Daniel Rivas - Home</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Portfolio website made by me, Daniel Rivas to showcase all projects made by me." />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <Typical
            className="text-6xl font-bold"
            steps={[
              'Hi, I\'m Daniel Rivas',
              1000,
              'I\'m a Full Stack Developer',
              500]}
            loop={Infinity}
            wrapper="h1"
          />

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          
        </div>
      </main>
    </div>
  )
}
