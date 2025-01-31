import { SocialButtonProps } from "@/Interfaces/UiInterfaces";

const SocialButton = ({ icon, color }: SocialButtonProps) => {
    return (
      <button className={`p-2 text-${color} hover:bg-blue-50 rounded-full transition-colors`}>
        {icon}
      </button>
    );
}

export default SocialButton;    
