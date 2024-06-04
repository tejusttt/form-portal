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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-pattern bg-opacity-10 animate-gradient-xy"></div>
      {form ? (
        <div
          className="max-w-lg w-full p-8 bg-white rounded-3xl shadow-2xl hover:shadow-3xl cursor-pointer transform transition-transform hover:scale-105 z-10"
          onClick={() => handleCardClick(form.id)}
        >
          <h1 className="text-4xl font-extrabold mb-8 text-center text-purple-700">Your Submission</h1>
          <div className="text-center space-y-6">
            <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-inner">
              <svg className="w-10 h-10 text-purple-700 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 01-8 0M12 14v6m0 0H9m3 0h3m4-6H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v11a2 2 0 01-2 2z"></path>
              </svg>
              <h2 className="text-2xl font-semibold text-gray-800">Username</h2>
              <p className="text-lg text-gray-600">{form.name}</p>
            </div>
            <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-inner">
              <svg className="w-10 h-10 text-purple-700 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 10l-7 7-7-7"></path>
              </svg>
              <h2 className="text-2xl font-semibold text-gray-800">Wallet Address</h2>
              <p className="text-lg text-gray-600">{form.walletAddress}</p>
            </div>
            <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow-inner">
              <svg className="w-10 h-10 text-purple-700 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
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
