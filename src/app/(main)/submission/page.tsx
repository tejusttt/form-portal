"use client";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Form } from '@/types';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';

const SubmissionsPage = () => {
  const router = useRouter();
  const [form, setForm] = useState<Form | null>(null);

  useEffect(() => {
    const fetchForm = async () => {
      try {
        const res = await axios.get('/api/forms');
        setForm(res.data[0]);  // Assuming only one form submission
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8">
      {form ? (
        <div
          className="max-w-lg w-full p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => handleCardClick(form.id)}
        >
          <h1 className="text-3xl font-semibold mb-6 text-center">Your Submission</h1>
          <div className="text-center">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Username</h2>
              <p className="text-gray-700">{form.name}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Wallet Address</h2>
              <p className="text-gray-700">{form.walletAddress}</p>
            </div>
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Status</h2>
              <Badge color={form.status === 'pending' ? 'yellow' : form.status === 'approved' ? 'green' : 'red'}>
                {form.status}
              </Badge>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SubmissionsPage;
