import React from 'react'
import Layout from '../../../Layout'
import company from '../../assets/company.jpg'
import tea_types from '../../assets/tea_types.jpg'

const About = () => {
  return (
    <Layout>
      <div className="pt-16">

        {/* Section 1 */}
        <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Welcome to our Tea Sales Price Prediction System!</h2>
              <p className="mb-4 text-gray-900 ">We are passionate about harnessing the power of technology and data analytics to provide the tea industry with innovative tools for accurate forecasting. Our platform is designed to empower tea producers, distributors, and retailers with actionable insights that drive better decision-making, improve profitability, and keep up with market trends.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img className="w-full rounded-lg" src={company} alt="Company" />
              <img className="mt-4 w-full lg:mt-10 rounded-lg" src={tea_types} alt="tea_types" />
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="bg-white dark:bg-gray-900">
          <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Vision and Mission</h2>
              <p className="mb-4 text-gray-900 ">We envision a future where tea businesses can effortlessly anticipate price fluctuations, make data-driven decisions, and maximize their profits. By providing a reliable and easy-to-use prediction system, we are committed to helping our users achieve success and foster innovation within the industry.</p>
              
            </div>
            <div className="mt-4 font-light text-gray-500 sm:text-lg lg:mt-0 dark:text-gray-400">
              <p className="mb-4 text-gray-900">Our mission is to revolutionize the tea industry by offering state-of-the-art machine learning solutions that predict future sales prices with unmatched precision. We aim to help businesses thrive by giving them the tools they need to stay ahead in a dynamic and competitive market.</p>
              <p className='text-gray-900'>We are a dedicated team of tech enthusiasts, data scientists, and tea industry experts who share a common goal: making advanced technology accessible and practical for tea businesses of all sizes. Our experience in machine learning, data analytics, and business intelligence has enabled us to develop a tool that provides accurate and valuable predictions for the tea market.</p>
            </div>
          </div>
        </section>

        {/* Last Section */}
        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 lg:text-5xl dark:text-white">Join Us on Our Journey</h2>
            <p className="font-light text-gray-500 sm:text-lg sm:px-8 lg:px-32 xl:px-64 dark:text-gray-400">We believe that innovation and data-driven decisions can unlock the full potential of the tea industry. By partnering with us, you're not just getting a prediction system – you're gaining a valuable ally in your business journey.</p>
            <dl className="grid grid-cols-2 gap-8 mx-auto mt-8 max-w-screen-md text-gray-900 lg:mt-14 sm:grid-cols-3 dark:text-white">
              <div className="flex flex-col justify-center items-center">
                <dt className="mb-2 text-4xl font-extrabold">73+</dt>
                <dd className="text-xl font-normal text-gray-500 dark:text-gray-400">coustomers</dd>
              </div>
              <div className="flex flex-col justify-center items-center">
                <dt className="mb-2 text-4xl font-extrabold">80+</dt>
                <dd className="text-xl font-normal text-gray-500 dark:text-gray-400">contributors</dd>
              </div>
              <div className="flex flex-col justify-center items-center">
                <dt className="mb-2 text-4xl font-extrabold">40+</dt>
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