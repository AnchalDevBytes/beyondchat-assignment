import { TestingStepProps } from "@/Interfaces/UiInterfaces";

const TestingStep = ({ onSetStep }: TestingStepProps) => {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-custom-green mx-auto mb-8"></div>
        <h2 className="text-2xl font-bold text-custom-blue mb-4">Testing Integration...</h2>
        <p className="text-custom-dark-blue mb-8">Please wait while we verify your chatbot integration</p>
        <button 
          onClick={() => onSetStep('success')}
          className="bg-custom-green text-white px-6 py-2 rounded-lg active:scale-105 transition-colors"
        >
          Simulate Success
        </button>
      </div>
    );
  }

  export default TestingStep;
  