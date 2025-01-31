'use client';
import { useState } from 'react';
import { IntegrationMethod, Step } from '@/components/Chatbot/types';
import { FeedbackBar, InitialStep, IntegrationStep, PendingStep, SuccessStep, TestingStep } from '@/components/Chatbot/index';

export function ChatbotIntegration() {
  const [currentStep, setCurrentStep] = useState<Step>('initial');
  const [integrationMethod, setIntegrationMethod] = useState<IntegrationMethod>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleTestChatbot = () => {
    setShowFeedback(true);
  };

  return (
    <div className="min-h-screen bg-white flex items-center">
      {showFeedback && <FeedbackBar onClose={() => setShowFeedback(false)} />}

      <div className="w-full max-w-4xl mx-auto md:bg-custom-white rounded-2xl md:shadow-xl p-8 flex flex-col gap-5">
        {currentStep === 'initial' && (
          <InitialStep 
            onTestChatbot={handleTestChatbot}
            onSetStep={setCurrentStep}
          />
        )}

        {currentStep === 'integration' && (
          <IntegrationStep 
            integrationMethod={integrationMethod}
            onSetIntegrationMethod={setIntegrationMethod}
            onSetStep={setCurrentStep}
          />
        )}

        {currentStep === 'testing' && (
          <TestingStep onSetStep={setCurrentStep} />
        )}

        {currentStep === 'success' && (
          <SuccessStep />
        )}

        {currentStep === 'pending' && (
          <PendingStep onSetStep={setCurrentStep} />
        )}
      </div>
    </div>
  );
}

export default ChatbotIntegration;