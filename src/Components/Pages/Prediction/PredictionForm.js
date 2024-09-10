import React, { useState } from 'react';
import axios from 'axios';
import Layout from '../../../Layout';

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
      <h1>Tea Sales Prediction</h1>
      <form onSubmit={handleSubmit}>
        <label>Date (dd/mm/yyyy):</label>
        <input type="text" name="date" value={formData.date} onChange={handleChange} required /><br />

        <label>Selling Mark:</label>
        <input type="text" name="selling_mark" value={formData.selling_mark} onChange={handleChange} required /><br />

        <label>Grade:</label>
        <input type="text" name="grade" value={formData.grade} onChange={handleChange} required /><br />

        <label>Invoice No:</label>
        <input type="text" name="invoice_no" value={formData.invoice_no} onChange={handleChange} required /><br />

        <label>Lot No:</label>
        <input type="text" name="lot_no" value={formData.lot_no} onChange={handleChange} required /><br />

        <label>Bag Weight (kg):</label>
        <input type="text" name="bag_weight" value={formData.bag_weight} onChange={handleChange} required /><br />

        <label>No of Bags:</label>
        <input type="text" name="no_of_bags" value={formData.no_of_bags} onChange={handleChange} required /><br />

        <button type="submit">Predict</button>
      </form>

      {result && (
        <div>
          <h2>Prediction Results:</h2>
          <p>Price per unit: {result.price}</p>
          <p>Total Amount: {result.amount}</p>
        </div>
      )}
    </div>
    </Layout>
  );
}

export default App;
