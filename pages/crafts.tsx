import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { CodeCraftCard, GraphicDesignCard } from '../components/cards'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

export interface projectData {
  title: string
  shortDesc?: string
  link?: string
  repo?: string
}

const projectData: projectData[] = [
  {
    title: 'Oraboros (Work In Progress)',
    shortDesc:
      'An app to track your daily expenses written in Expo React Native and Firebase',
    repo: 'https://github.com/agungfir98/oraboros',
  },
  {
    title: 'Demo-Kureiji',
    shortDesc:
      'An full fledged e-voting web app for organization. build with MongoDB, ExpressJS, ReactJS, NodeJS (MERN) stack.',
    link: 'https://demokureiji.vercel.app',
    repo: 'https://github.com/agungfir98/demokureiji',
  },
  {
    title: 'Poke Not Go',
    shortDesc:
      'A frontend mini project to experiment with Apollo Client GraphQL to create a web app about Pokemon.',
    link: 'https://pokenotgoapi.vercel.app',
    repo: 'https://github.com/agungfir98/pokeapi.git',
  },
  {
    title: 'Old Portfolio Website',
    shortDesc:
      'A single page portfolio to brand myself as web developer (never finished it).',
    link: 'https://agungfir98.netlify.app',
    repo: 'https://github.com/agungfir98/af-frontend.git',
  },
  {
    title: 'Price Checker',
    shortDesc:
      "A scripting project. experimenting with python's library named beautifoulSoup to scrape data from website and smtplib to send mail.",
    link: '',
    repo: 'https://github.com/agungfir98/TokopediaPriceChecker',
  },
  {
    title: 'Pekan Hidupmu',
    shortDesc:
      'A calender of your life that represent weeks in your life ever since you are born, made as a reminder that your life is finite while times keep marching so that we shall live at our best but do not fear death.',
    link: 'https://pekanhidupmu.vercel.app',
    repo: 'https://github.com/agungfir98/memento-mori',
  },
]
const Posts: React.FC = () => {
  const router = useRouter()
  const route = router.pathname
  return (
    <>
      <Head>
        <title>Crafts</title>
      </Head>
      <div className="min-h-screen flex flex-col gap-y-16">
        <Navbar activeRoute={route} />
        <div className="h-fit px-6 md:px-0">
          <div className="md:w-6/12 mx-auto flex flex-col gap-y-10">
            <h1 className="text-3xl font-bold">Crafts</h1>

            <div className=" gap-y-4 flex flex-col">
              <h2 className="text-2xl font-bold underline-offset-4 underline">
                Code Project
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projectData.map((data, i) => (
                  <CodeCraftCard key={i} {...data} />
                ))}
              </div>
            </div>
            <div className="gap-y-4 flex flex-col">
              <h1 className="text-2xl font-bold underline-offset-4 underline">
                Graphic Design
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-semibold tracking-wide">
                <div className="relative w-full h-full group">
                  <GraphicDesignCard
                    src={'/asset/designGraphic/cactus.png'}
                    width={3020}
                    height={3020}
                  />
                  <div className="h-full w-full rounded-lg absolute top-0 hidden group-hover:block bg-gradient-to-t from-black via-transparent to-transparent">
                    <p className="text-white absolute bottom-0 p-2 py-3">
                      Cactus Vector Design
                    </p>
                  </div>
                </div>
                <div className="relative w-full h-full group">
                  <GraphicDesignCard
                    src={'/asset/designGraphic/pencilgirl.png'}
                    width={3467}
                    height={3467}
                  />
                  <div className="h-full w-full rounded-lg absolute top-0 hidden group-hover:block bg-gradient-to-t from-black via-transparent to-transparent">
                    <p className="text-white absolute bottom-0 p-2 py-3">
                      Pencil Girl Coloring
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Posts
