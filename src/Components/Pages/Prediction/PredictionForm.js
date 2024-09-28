import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../../../Layout';
import { Link } from 'react-router-dom';

function App() {
  const [formData, setFormData] = useState({
    date: '',
    selling_mark: '',
    grade: '',
    invoice_no: '',
    lot_no: '',
    bag_weight: '',
    no_of_bags: ''
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "no_of_bags" || name === "bag_weight" ? parseFloat(value) : value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/predict', formData);
      setResult(response.data);
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  return (
    <Layout>
      <div className="pt-16">

        <section className="bg-white antialiased dark:bg-gray-900 py-16">
          <form onSubmit={handleSubmit} className="mx-auto max-w-screen-xl px-4 2xl:px-0">

            <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
              <div className="min-w-0 flex-1 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Prediction Form</h2>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="invoice_no" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Invoice Number* </label>
                      <input type="number" name="invoice_no" value={formData.invoice_no} onChange={handleChange} required id="invoice_no" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Invoice Number" />
                    </div>

                    <div>
                      <label htmlFor="selling_mark" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Selling Mark* </label>
                      <input type="text" name="selling_mark" value={formData.selling_mark} onChange={handleChange} required id="selling_mark" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Selling Mark" />
                      <p className="ml-4 block text-xs font-medium text-gray-600 dark:text-white">NEW BATUWANGALA or BATUWANGALA</p>
                    </div>

                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <label htmlFor="date" className="block text-sm font-medium text-gray-900 dark:text-white"> Date </label>
                      </div>
                      <input
                        type="text" name="date" value={formData.date} onChange={handleChange} required id="date" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="dd/mm/yyyy" />
                    </div>

                    <div>
                      <div className="mb-2 flex items-center gap-2">
                        <label htmlFor="grade" className="block text-sm font-medium text-gray-900 dark:text-white"> Grade </label>
                      </div>
                      <input type="text" name="grade" value={formData.grade} onChange={handleChange} required id="grade" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Grade" />
                    </div>

                    <div>
                      <label htmlFor="lot_no" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Lot Number </label>
                      <input type="number" name="lot_no" value={formData.lot_no} onChange={handleChange} required id="lot_no" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Lot Number" />
                    </div>

                    <div>
                      <label htmlFor="bag_weight" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Bag Weight (Kg) </label>
                      <input type="number" name="bag_weight" value={formData.bag_weight} onChange={handleChange} required id="bag_weight" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Bag Weight (kg)" />
                    </div>

                    <div>
                      <label htmlFor="no_of_bags" className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"> Number of Bags </label>
                      <input type="number" name="no_of_bags" value={formData.no_of_bags} onChange={handleChange} id="no_of_bags" className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500" placeholder="Number of Bags" />
                    </div>


                    <div className="sm:col-span-2">
                      <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        Predict
                      </button>
                    </div>
                  </div>
                </div>
              </div>


              <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
                <div className="flow-root">
                  <h1>Prediction Results:</h1>
                  {result && (
                    <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                      <dl className="flex items-center justify-between gap-4 py-3">
                        <dt className="text-base font-normal text-gray-500 dark:text-gray-400">Price per unit:</dt>
                        <dd className="text-base font-medium text-gray-900 dark:text-white">Rs.{result.price}</dd>
                      </dl>

                      <dl className="flex items-center justify-between gap-4 py-3">
                        <dt className="text-base font-bold text-gray-900 dark:text-white">Total  Income:</dt>
                        <dd className="text-base font-bold text-gray-900 dark:text-white">Rs. {result.amount}</dd>
                      </dl>
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <button type="submit" className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Proceed to Payment</button>

                  <p className="text-sm font-normal text-gray-500 dark:text-gray-400">One or more time to Predict require an account. <Link href="#" title="" className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500">Sign in or create an account now.</Link>.</p>
                </div>
              </div>


            </div>
          </form>
        </section>



        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Tea Grades
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white dark:bg-gray-800">
                <td class="px-6 py-4">
                  BM
                </td>
                <td class="px-6 py-4">
                  BOP
                </td>
                <td class="px-6 py-4">
                  BOP1
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">

                <td class="px-6 py-4">
                  GOLDEN TIP
                </td>
                <td class="px-6 py-4">
                  BOPA
                </td>
                <td class="px-6 py-4">
                  BOPF
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800">

                <td class="px-6 py-4">
                  BOPSP
                </td>
                <td class="px-6 py-4">
                  BP
                </td>
                <td class="px-6 py-4">
                  BT
                </td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>
    </Layout>
  );
}

export default App;
