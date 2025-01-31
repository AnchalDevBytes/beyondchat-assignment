"use client"
import React, { useState, ChangeEvent, KeyboardEvent } from 'react';

interface OTPInputProps {
  length: number;
  isDisabled: boolean;
  onChange: (otp: string[]) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({ length, isDisabled, onChange }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    if (/^\d$/.test(value) || value === '') {
      const newOtp = [...otp];
      newOtp[index] = value.substring(value.length - 1);
      setOtp(newOtp);
      onChange(newOtp);

      if (value && index < length - 1) {
        const nextInput = document.getElementById(`otpInput-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && index > 0 && !otp[index]) {
      const prevInput = document.getElementById(`otpInput-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex space-x-2 mb-4">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            id={`otpInput-${index}`}
            type="text"
            maxLength={1}
            value={otp[index]}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            disabled={isDisabled}
            className="w-12 h-12 border-b-2 focus:outline-none focus:border-b-gray-950 border-b-gray-400 text-center text-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default OTPInput;
