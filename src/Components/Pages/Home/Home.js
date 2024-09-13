import React from 'react'
import Layout from '../../../Layout'
import { Link } from 'react-router-dom'
import main_image from '../../assets/Home_main.png'
import tea_garden from '../../assets/tea-garden.jpg'

const Home = () => {
  return (
    <Layout>
      <div className="pt-16">

        {/* Slider */}
        <section className="bg-white pt-8 antialiased dark:bg-gray-900 md:pt-16">
          <div className="mx-auto grid max-w-screen-xl px-4 pb-8 md:grid-cols-12 lg:gap-12 lg:pb-16 xl:gap-0">
            <div className="content-center justify-self-start md:col-span-7 md:text-start">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight dark:text-white md:max-w-2xl md:text-5xl xl:text-6xl">Tea Price sales<br />Prediction System</h1>
              <p className="mb-4 max-w-2xl text-gray-500 dark:text-gray-400 md:mb-12 md:text-lg mb-3 lg:mb-5 lg:text-xl"> Your go-to platform for predicting and analyzing tea sales prices with precision and ease.</p>
              <Link href="#" className="inline-block rounded-lg bg-primary-700 px-6 py-3.5 text-center font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Shop Now</Link>
            </div>
            <div className="hidden md:col-span-5 md:mt-0 md:flex">
              <img className="dark:hidden" src={main_image} alt="Main_image" />
            </div>
          </div>
        </section>

        {/* second section */}
        <section className="bg-white dark:bg-gray-900 antialiased">
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-20">
              <article>
                <Link href="#" title="">
                  <img className="object-cover w-full rounded-lg" src={tea_garden} alt="" />
                </Link>

                <div className="mt-5 space-y-3">
                  <span
                    className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                    <svg aria-hidden="true" className="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                      fill="currentColor">
                      <path fillRule="evenodd"
                        d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd" />
                    </svg>
                    Machine Learning
                  </span>

                  <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                    <Link href="#" className="hover:underline" title="">
                      Accurate Predictions Powered by Machine Learning
                    </Link>
                  </h2>

                  <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Our system utilizes advanced machine learning algorithms to analyze large datasets, considering various factors such as market trends, tea quality, and regional preferences, ensuring highly accurate tea sales price forecasts.
                  </p>
                </div>
              </article>

              <div className="space-y-8">
                <article>
                  <div className="space-y-3">
                    <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                      <Link href="#" className="hover:underline" title="">
                        Why Choose Us?
                      </Link>
                    </h2>
                    <span
                      className="bg-indigo-100 text-indigo-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-1" viewBox="0 0 512 512"><path d="M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z" fill="currentColor"/></svg>
                      User-Friendly Interface
                    </span>



                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Whether you're a tea producer, distributor, or retailer, our intuitive interface makes it easy for you to input data and receive predictions with just a few clicks.
                    </p>

                  </div>
                </article>

                <article>
                  <div className="space-y-3">
                    <span
                      className="bg-pink-100 text-pink-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-1" viewBox="0 0 512 512"><path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm147.1 371.1c-19.1 19.1-41.4 34.1-66.1 44.6-25.6 10.8-52.9 16.3-81 16.3s-55.3-5.5-81-16.3c-24.8-10.5-47-25.5-66.1-44.6C89.8 384 74.8 361.7 64.3 337 53.5 311.3 48 284.1 48 256s5.5-55.3 16.3-81c10.5-24.8 25.5-47 44.6-66.1C128 89.8 150.3 74.8 175 64.3 200.7 53.5 227.9 48 256 48s55.3 5.5 81 16.3c24.8 10.5 47 25.5 66.1 44.6 19.1 19.1 34.1 41.4 44.6 66.1 10.8 25.6 16.3 52.9 16.3 81s-5.5 55.3-16.3 81c-10.5 24.7-25.5 47-44.6 66.1z" fill="currentColor"/><circle cx="256" cy="80" r="8" fill="currentColor"/><circle cx="256" cy="432" r="8" fill="currentColor"/><circle cx="432" cy="256" r="8" fill="currentColor"/><circle cx="80" cy="256" r="8" fill="currentColor"/><circle cx="168" cy="103.6" r="8" fill="currentColor"/><circle cx="344" cy="408.4" r="8" fill="currentColor"/><circle cx="408.4" cy="168" r="8" fill="currentColor"/><circle cx="103.6" cy="344" r="8" fill="currentColor"/><circle cx="103.6" cy="168" r="8" fill="currentColor"/><circle cx="408.4" cy="344" r="8" fill="currentColor"/><circle cx="344" cy="103.6" r="8" fill="currentColor"/><circle cx="168" cy="408.4" r="8" fill="currentColor"/><path d="M269.9 248c-2.9-5-8.1-7.8-13.4-8l-38-63.4c-2.3-3.8-7.2-5-11-2.7s-5 7.2-2.7 11l37.6 62.9c-2.9 4.8-3.2 11.1-.2 16.3 1.5 2.5 3.5 4.5 5.9 5.8V392c0 4.4 3.6 8 8 8s8-3.6 8-8V269.9c7.6-4.5 10.2-14.2 5.8-21.9z" fill="currentColor"/></svg>
                      Real-Time Data
                    </span>

                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      With our system, you can access real-time market insights, allowing you to make timely and informed decisions based on the most up-to-date information.
                    </p>

                  </div>
                </article>

                <article>
                  <div className="space-y-3">
                    <span
                      className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-1" viewBox="0 0 512 512"><path fill="currentColor" d="m479.07 111.36l-.79-12.53l-12.36-2.21c-86.5-15.52-122.61-26.74-203.33-63.2l-6.59-3l-6.59 3C168.69 69.88 132.58 81.1 46.08 96.62l-12.36 2.21l-.79 12.53c-3.85 61.11 4.36 118.05 24.43 169.24A349.5 349.5 0 0 0 129 393.11c53.47 56.73 110.24 81.37 121.07 85.73l6 2.41l6-2.41c10.83-4.36 67.6-29 121.07-85.73a349.5 349.5 0 0 0 71.5-112.51c20.07-51.19 28.28-108.13 24.43-169.24m-252.91 216L153.37 256l22.4-22.86l48.47 47.49l110.13-127.2l24.2 20.94Z"/></svg>
                      Expert Support
                    </span>

                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Our dedicated team of experts is always on hand to assist you, ensuring that you get the most out of our machine learning-powered prediction system.
                    </p>

                  </div>
                </article>

                <article>
                  <div className="space-y-3">
                    <span
                      className="bg-yellow-100 text-yellow-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                      <svg aria-hidden="true" className="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fillRule="evenodd"
                          d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
                          clipRule="evenodd" />
                      </svg>
                      Customizable Forecasts
                    </span>

                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                    Tailor your predictions based on specific factors such as geographical region, quality of tea, or market trends to get forecasts that meet your unique business needs.
                    </p>

                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Last section */}
        <section className="bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/coast-house-view.jpg')] bg-no-repeat bg-cover bg-center bg-gray-700 bg-blend-multiply ">
          <div className="relative py-8 px-4 mx-auto max-w-screen-xl text-white lg:py-16 z-1">
            <div className="mb-6 max-w-screen-lg lg:mb-0">
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl">Key Features</h1>
              <p className="mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl">Our Tea Sales Price Prediction System is designed to help you stay ahead in the competitive tea market. Whether you're looking to predict future sales prices or gain insights into market trends, we've got you covered.</p>
              <Link to="/prediction" className="inline-flex items-center py-3 px-5 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-900 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                Go to Prediction page
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </Link>
            </div>
            <div className="grid gap-8 pt-8 lg:pt-12 mt-8 lg:mt-12 border-t border-gray-600 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <h2 className="mb-1 text-lg font-bold">Sales Price Prediction</h2>
                <p className="mb-1 text-sm text-gray-400">Input relevant data about your tea, such as quality, grade, and weight, and let our system forecast the expected market price.</p>
                
              </div>
              <div>
                <h2 className="mb-1 text-lg font-bold">Data Analysis</h2>
                <p className="mb-1 text-sm text-gray-400">Dive deeper into historical data and trends to make better business decisions.</p>
                
              </div>
              <div>
                <h2 className="mb-1 text-lg font-bold">Easy Registration</h2>
                <p className="mb-1 text-sm text-gray-400">Get started by simply signing up, entering your tea details, and viewing instant predictions. </p>
               
              </div>
              <div>
                <h2 className="mb-1 text-lg font-bold">Start predicting now</h2>
                <p className="mb-1 text-sm text-gray-400">Investing in the future of Africa</p>
                
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  )
}

export default Home