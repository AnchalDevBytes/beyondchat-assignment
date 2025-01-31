"use client"
import OTPInput from "@/components/OTPInput";
import { EmailVerificationProps } from "@/Interfaces/UiInterfaces";

const EmailVerification: React.FC<EmailVerificationProps> = ({ onVerify }) => {

    const handleOTPChange = (otp: string[]) => {
        // console.log('OTP:', otp.join(''));
      };
    
      const handleResend = () => {
        // console.log('Resend OTP');
        // Handle resend OTP
      };

      const handleVerification = () => {
        // console.log("verifyed");
      }

    return (
        <div className="relative h-full w-full md:w-[479px] md:h-[600px] bg-white rounded-2xl p-4 md:p-12 flex flex-col gap-4">
            <div className="flex flex-col gap-3">
                <h1 className="hidden md:flex text-3xl font-bold font-montserrat text-custom-blue tracking-wider">
                    Verify One Time Password
                </h1>
                <h1 className="md:hidden text-3xl font-bold font-montserrat text-custom-blue tracking-wider">
                    Verify OTP
                </h1>
                <p className="text-sm font-normal tracking-wider font-montserrat text-custom-black">
                    Please enter the one time password to verify your email
                </p>
            </div>
            <div className="flex flex-col gap-3 mt-3">
                <OTPInput
                    length={6}
                    isDisabled={false}
                    onChange={handleOTPChange}
                />
                <div onClick={handleVerification}>
                    <button 
                        onClick={onVerify}
                        className="w-full cursor-pointer transition-all duration-200 ease-in-out active:scale-105 rounded-xl text-base font-montserrat font-semibold flex items-center gap-2 bg-custom-green py-3 px-6 text-white justify-center"
                    >
                        Verify
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-3 items-center">
                <span className="text-xl font-bold font-montserrat text-custom-blue">
                    01 : 52
                </span>
                <p className="text-sm font-normal font-montserrat text-custom-black">
                    Didn&apos;t receive the OTP?
                </p>
                <div onClick={handleResend}>
                <button className="text-custom-green font-bold text-base">
                    Resend
                </button>
                </div>
            </div>
        </div>
    );
}

export default EmailVerification;
