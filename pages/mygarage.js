
import Layout from '../components/Layout';

export default function MyGarage() {
  return (
    <Layout title="My Garage">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">My Garage</h1>
        <div className="bg-white shadow-md rounded-lg p-4">
          <p className="text-gray-700">You don’t have any vehicles added yet.</p>
        </div>
      </div>
    </Layout>
  );
}
