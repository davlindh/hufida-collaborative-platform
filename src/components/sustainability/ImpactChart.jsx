import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ImpactChart = () => {
  const impactData = [
    { name: 'Jobs Created', value: 500 },
    { name: 'Businesses Supported', value: 150 },
    { name: 'CO2 Reduction (tons)', value: 1000 },
    { name: 'Community Projects', value: 50 },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-6 text-center">Our Impact</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={impactData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </section>
  );
};

export default ImpactChart;