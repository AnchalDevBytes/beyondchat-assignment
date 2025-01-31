import { Bot, Code, MessageSquare } from 'lucide-react';
import { Step } from '@/components/Chatbot/types';
import { IntegrationButton } from '@/components/Chatbot/index';

interface InitialStepProps {
  onTestChatbot: () => void;
  onSetStep: (step: Step) => void;
}

const InitialStep = ({ onTestChatbot, onSetStep }: InitialStepProps) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-custom-blue">Chatbot Integration</h1>
      
      <div className="flex flex-col gap-6">
        <IntegrationButton
          icon={<Bot className="h-5 w-5 md:h-6 md:w-6 text-custom-blue" />}
          title="Test Chatbot"
          description="Preview how your chatbot will appear and function on your website"
          onClick={onTestChatbot}
          color="blue"
        />

        <IntegrationButton
          icon={<Code className="h-5 w-5 md:h-6 md:w-6 text-custom-green" />}
          title="Integrate on Your Website"
          description="Get the integration code or send instructions to your development team"
          onClick={() => onSetStep('integration')}
          color="green"
        />

        <IntegrationButton
          icon={<MessageSquare className="h-5 w-5 md:h-6 md:w-6 text-custom-dark-blue" />}
          title="Test Integration"
          description="Verify that the chatbot is properly integrated with your website"
          onClick={() => onSetStep('testing')}
          color="purple"
        />
      </div>
    </>
  );
}

export default InitialStep;
