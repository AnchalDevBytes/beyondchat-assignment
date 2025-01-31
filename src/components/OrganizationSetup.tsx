'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LuBuilding2, LuFileText } from 'react-icons/lu';
import { CiGlobe } from 'react-icons/ci';
import IconInput from '@/components/IconInput';

const OrganizationSetup = () => {
  const router = useRouter();
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleFetchMetaDescription = () => {
    setDescription('This is an auto-fetched meta description for the website...');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/scanning');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="bg-white md:bg-custom-white rounded-2xl md:shadow-xl md:p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold pr-24 md:pr-0 font-montserrat text-custom-blue mb-6">Setup Organization</h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <IconInput 
            type='text' 
            name='Company Name' 
            placeholder='Company Name'
            Icon={LuBuilding2}
          />
          <IconInput 
            type='url' 
            name='Website URL' 
            placeholder='Website URL'
            Icon={CiGlobe} 
            value={websiteUrl} 
            onChange={(e) => setWebsiteUrl(e.target.value)}
          />
          <div className="relative">
            <LuFileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <textarea
              placeholder="Company Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg min-h-[100px]"
              required
            />
            <button
              type="button"
              onClick={handleFetchMetaDescription}
              className="absolute right-2 top-2 text-sm text-custom-green"
            >
              Auto-fetch
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-custom-green text-white py-2 rounded-lg transition-colors"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default OrganizationSetup;
