import React from 'react'
import Layout from '../../../Layout'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Layout>
      <div className="pt-16">

        {/* Section 1 */}
        <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
              <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
              <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
              <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Powering innovation at 200,000+ companies worldwide</h2>
              <p className="mb-4">Empower Developers, IT Ops, and business teams to collaborate at high velocity. Respond to changes and deliver great customer and employee service experiences fast.</p>
              <Link href="#" className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                Learn more
                <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
              </Link>
            </div>
            <div className="mt-4 font-light text-gray-500 sm:text-lg lg:mt-0 dark:text-gray-400">
              <p className="mb-4">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
              <p>Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
            </div>
          </div>
        </section>

        {/* Last Section */}
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 lg:text-5xl dark:text-white">Home to the software teams</h2>
            <p className="font-light text-gray-500 sm:text-lg sm:px-8 lg:px-32 xl:px-64 dark:text-gray-400">Meet your developers where they already are. GitHub is home to over 40 million developers and the world’s largest open source community.</p>
            <dl className="grid grid-cols-2 gap-8 mx-auto mt-8 max-w-screen-md text-gray-900 lg:mt-14 sm:grid-cols-3 dark:text-white">
              <div className="flex flex-col justify-center items-center">
                <dt className="mb-2 text-4xl font-extrabold">73M+</dt>
                <dd className="text-xl font-normal text-gray-500 dark:text-gray-400">developers</dd>
              </div>
              <div className="flex flex-col justify-center items-center">
                <dt className="mb-2 text-4xl font-extrabold">1B+</dt>
                <dd className="text-xl font-normal text-gray-500 dark:text-gray-400">contributors</dd>
              </div>
              <div className="flex flex-col justify-center items-center">
                <dt className="mb-2 text-4xl font-extrabold">4M+</dt>
                <dd className="text-xl font-normal text-gray-500 dark:text-gray-400">organizations</dd>
              </div>
            </dl>
          </div>
        </section>

      </div>
    </Layout>
  )
}

export default About