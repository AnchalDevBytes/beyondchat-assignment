import { BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { LiaLinkedin } from 'react-icons/lia';
import { SocialButton } from '@/components/Chatbot/index';
import Image from 'next/image';
import { FiExternalLink } from 'react-icons/fi';
import { LuMessageSquare } from 'react-icons/lu';

const SuccessStep = () => {
  return (
    <div className="text-center py-12 space-y-4">
      <Image
        src={"/success_tick.gif"}
        alt="Success Icon"
        width={100}
        height={100}
        className="text-green-500 flex items-center justify-center mx-auto"
      />
      
      <h2 className="text-3xl font-bold text-custom-blue">Integration Successful!</h2>
      <p className="text-custom-dark-blue">Your chatbot is now ready to assist your website visitors</p>

      <div className="flex flex-wrap gap-4 justify-center mt-8">
        <button className="flex items-center gap-2 bg-custom-green text-white px-6 py-2 rounded-lg active:scale-105 transition-colors">
        <FiExternalLink className="h-5 w-5" />
          Explore Admin Panel
        </button>
        <button className="flex items-center gap-2 bg-custom-wheat text-custom-dark-blue px-6 py-2 rounded-lg active:scale-105 transition-colors">
        <LuMessageSquare className="h-5 w-5" />
          Start Talking to Your Chatbot
        </button>
      </div>

      <div className="pt-8 border-t">
        <p className="text-gray-600 mb-4">Share your success</p>
        <div className="flex justify-center gap-4">
          <SocialButton icon={<FaFacebook className="h-6 w-6" />} color="blue-600" />
          <SocialButton icon={<BsTwitter className="h-6 w-6" />} color="sky-500" />
          <SocialButton icon={<LiaLinkedin className="h-6 w-6" />} color="blue-300" />
        </div>
      </div>
    </div>
  );
}

export default SuccessStep;
