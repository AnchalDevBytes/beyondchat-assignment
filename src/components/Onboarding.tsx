"use client"
import { useState } from "react";
import EmailVerification from "@/components/EmailVerification";
import Login from "@/components/Login";
import { useRouter } from "next/navigation";

const Onboarding = () => {
    const [currentStep, setCurrentStep] = useState<'login' | 'verification'>('login');

    const router = useRouter();

    const handleLogin = () => {
      setCurrentStep('verification');
    };
  
    const handleVerification = () => {
      console.log("verified");
      router.push("/organization")
    };

    return (
      <div 
        className="min-h-screen bg-white md:bg-custom-white w-full flex justify-center items-center"
      >
        {currentStep === 'login' && <Login onLogin={handleLogin} />}
        {currentStep === 'verification' && <EmailVerification onVerify={handleVerification} />}
      </div>
    );
}

export default Onboarding;
