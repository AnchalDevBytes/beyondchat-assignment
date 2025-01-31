import { DUMMY_CODE } from '@/components/Chatbot/types';
import { IntegrationStepProps } from '@/Interfaces/UiInterfaces';
import { IoCodeOutline } from 'react-icons/io5';
import { CiMail } from 'react-icons/ci';
import { MethodButton } from '@/components/Chatbot/index';

const IntegrationStep = ({ 
  integrationMethod, 
  onSetIntegrationMethod, 
  onSetStep 
}: IntegrationStepProps) => {

  return (
    <>
      <button 
        onClick={() => onSetStep('initial')}
        className="text-custom-green flex items-start hover:underline"
      >
        ← Back to options
      </button>

      <h2 className="text-2xl font-bold text-custom-blue pr-10 md:pr-0 mb-4">Choose Integration Method</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <MethodButton
          icon={<IoCodeOutline className="h-6 w-6 text-custom-green" />}
          title="Copy Integration Code"
          description="Get the code snippet to add to your website's <head> tag"
          isSelected={integrationMethod === 'code'}
          onClick={() => onSetIntegrationMethod('code')}
        />

        <MethodButton
          icon={<CiMail className="h-6 w-6 text-custom-green" />}
          title="Email Instructions"
          description="Send integration instructions to your development team"
          isSelected={integrationMethod === 'email'}
          onClick={() => onSetIntegrationMethod('email')}
        />
      </div>

      {integrationMethod === 'code' && (
        <div className="mt-6 space-y-4">
          <div className="bg-custom-dark-blue text-gray-100 p-4 rounded-lg">
            <pre className="whitespace-pre-wrap text-sm">{DUMMY_CODE}</pre>
          </div>
          <button 
            onClick={() => onSetStep('testing')}
            className="w-full bg-custom-green text-white py-2 rounded-lg active:scale-105 transition-colors"
          >
            I've Added the Code
          </button>
        </div>
      )}

      {integrationMethod === 'email' && (
        <div className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Developer's Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          />
          <button 
            onClick={() => onSetStep('pending')}
            className="w-full bg-custom-green text-white py-2 rounded-lg active:scale-105 transition-colors"
          >
            Send Instructions
          </button>
        </div>
      )}
    </>
  );
}

export default IntegrationStep;
