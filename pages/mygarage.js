import { useState } from 'react';
import Layout from '../components/Layout';

export default function MyGarage() {
  const [vehicles] = useState([
    {
      id: 1,
      year: 2021,
      make: 'Volkswagen',
      model: 'Tiguan',
      mileage: 45600,
      oilType: '0W‑20 Synthetic',
      tireSize: '235/55R18',
      tirePressure: 35
    },
    {
      id: 2,
      year: 2017,
      make: 'Honda',
      model: 'Civic',
      mileage: 89000,
      oilType: '5W‑30',
      tireSize: '205/55R16',
      tirePressure: 32
    }
  ]);

  return (
    <Layout title="My Garage">
      <h1 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>My Garage</h1>
      {vehicles.map(v => (
        <div key={v.id} style={{
          background: '#fff',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '12px',
          marginBottom: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,.05)'
        }}>
          <strong>{v.year} {v.make} {v.model}</strong>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '8px', color: '#555', fontSize: '14px' }}>
            <li>Mileage: {v.mileage.toLocaleString()} mi</li>
            <li>Oil Type: {v.oilType}</li>
            <li>Tire Size: {v.tireSize}</li>
            <li>Tire Pressure: {v.tirePressure} PSI</li>
          </ul>
        </div>
      ))}
    </Layout>
  );
}
