'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { HiOutlineCheckCircle } from 'react-icons/hi';
import { CiCircleAlert, CiClock2 } from 'react-icons/ci';
import { IoChevronDown } from 'react-icons/io5';

export interface WebpageStatus {
  url: string;
  status: 'detected' | 'scraped' | 'pending';
  chunks?: string[];
}

const dummyData: WebpageStatus[] = [
  {
    url: '/about',
    status: 'scraped',
    chunks: [
      'About our company and mission...',
      'Our team of experts...',
      'Contact information...'
    ]
  },
  {
    url: '/products',
    status: 'pending',
  },
  {
    url: '/services',
    status: 'detected',
  }
];

const WebpageStatus = () => {
  const router = useRouter();
  const [expandedUrl, setExpandedUrl] = useState<string | null>(null);

  const getStatusIcon = (status: WebpageStatus['status']) => {
    switch (status) {
      case 'scraped':
        return <HiOutlineCheckCircle className="h-5 w-5 text-green-500" />;
      case 'pending':
        return <CiClock2 className="h-5 w-5 text-yellow-500" />;
      case 'detected':
        return <CiCircleAlert className="h-5 w-5 text-blue-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center p-4">
      <div className="w-full flex flex-col gap-5 max-w-4xl mx-auto bg-white md:bg-custom-white rounded-2xl md:shadow-xl md:p-8">
        <h1 className="text-3xl font-bold pr-10 md:pr-0 font-montserrat text-custom-blue mb-4">Website Scanning Status</h1>
        
        <div className="space-y-4">
          {dummyData.map((page) => (
            <div key={page.url} className="border border-gray-200 rounded-lg p-4">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setExpandedUrl(expandedUrl === page.url ? null : page.url)}
              >
                <div className="flex items-center gap-3">
                  {getStatusIcon(page.status)}
                  <span className="font-medium">{page.url}</span>
                  <span className="text-sm text-gray-500 capitalize">({page.status})</span>
                </div>
                <IoChevronDown className={`h-5 w-5 transition-transform ${
                  expandedUrl === page.url ? 'transform rotate-180' : ''
                }`} />
              </div>
              
              {expandedUrl === page.url && page.chunks && (
                <div className="mt-4 pl-8 space-y-2">
                  <h3 className="font-medium text-gray-700 mb-2">Scraped Content:</h3>
                  {page.chunks.map((chunk, i) => (
                    <div key={i} className="p-3 bg-custom-input-bg border text-custom-dark-blue font-mulish rounded-lg text-sm">
                      {chunk}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-between">
          <button 
            onClick={() => router.push('/integration')}
            className="bg-custom-green active:scale-105 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Continue Setup
          </button>
          <button className="text-custom-green transition-colors">
            Wait for completion
          </button>
        </div>
      </div>
    </div>
  );
}

export default WebpageStatus;
