import { AlertCircle } from 'lucide-react';
import { IoCloseOutline } from 'react-icons/io5';

interface FeedbackBarProps {
  onClose: () => void;
}

const FeedbackBar =({ onClose }: FeedbackBarProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 p-4 bg-custom-red shadow-md z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-red-500" />
          <span className="text-red-800 font-mulish">Chatbot not working as intended?</span>
          <button className="text-red-600 underline">Share feedback</button>
        </div>
        <button 
          onClick={onClose}
          className="text-red-600"
        >
          <IoCloseOutline className='h-4 w-4' />
        </button>
      </div>
    </div>
  );
}

export default FeedbackBar;
