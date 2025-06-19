
import Layout from '../components/Layout';

export default function MyInfo() {
  return (
    <Layout title="My Info">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">My Info</h1>
        <div className="bg-white shadow-md rounded-lg p-4">
          <p className="text-gray-700">Your account details will appear here.</p>
        </div>
      </div>
    </Layout>
  );
}
