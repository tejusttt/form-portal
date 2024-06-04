"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Form } from '@/types';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import { runFireworks } from '../../../../lib/utils';

const SubmissionsPage = () => {
  const router = useRouter();
  const [form, setForm] = useState<Form | null>(null);

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const res = await axios.get('/api/forms');
        setForm(res.data[0]);
        runFireworks(); // Run fireworks when the form is fetched successfully
      } catch (error) {
        console.error('Error fetching form:', error);
      }
    };

    fetchForm();
  }, []);

  const handleCardClick = (id: string) => {
    router.push(`/submission/${id}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8">
      {form ? (
        <div
          className="max-w-md w-full p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl cursor-pointer transform transition-transform hover:scale-105"
          onClick={() => handleCardClick(form.id)}
        >
          <h1 className="text-4xl font-extrabold mb-8 text-center text-purple-700">Your Submission</h1>
          <div className="text-center space-y-6">
            <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
              <h2 className="text-2xl font-semibold text-gray-800">Username</h2>
              <p className="text-lg text-gray-600">{form.name}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
              <h2 className="text-2xl font-semibold text-gray-800">Wallet Address</h2>
              <p className="text-lg text-gray-600">{form.walletAddress}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
              <h2 className="text-2xl font-semibold text-gray-800">Status</h2>
              <Badge className={`text-lg px-4 py-2 rounded-full ${form.status === 'pending' ? 'bg-yellow-500' : form.status === 'approved' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                {form.status}
              </Badge>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-2xl font-semibold text-white">Loading...</p>
      )}
    </div>
  );
};

export default SubmissionsPage;
