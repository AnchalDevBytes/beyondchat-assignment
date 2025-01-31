import { Step } from '@/components/Chatbot/types';
import { CiClock2 } from 'react-icons/ci';

interface PendingStepProps {
  onSetStep: (step: Step) => void;
}

const PendingStep = ({ onSetStep }: PendingStepProps) => {
  return (
    <div className="text-center py-12 space-y-4">
      <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
      <CiClock2 className="h-12 w-12 text-custom-wheat" />
      </div>
      
      <h2 className="text-3xl font-bold text-custom-blue font-mulish">Integration Pending</h2>
      <p className="text-gray-600">
        We've sent the integration instructions to your development team.
        We'll notify you once the integration is complete.
      </p>

      <button 
        onClick={() => onSetStep('testing')}
        className="bg-custom-green text-white px-6 py-2 rounded-lg transition-colors"
      >
        Check Integration Status
      </button>
    </div>
  );
}

export default PendingStep; 

