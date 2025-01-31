import { MethodButtonProps } from "@/Interfaces/UiInterfaces";

const MethodButton = ({ 
    icon, 
    title, 
    description, 
    isSelected, 
    onClick 
}: MethodButtonProps) => {

    return (
      <button
        onClick={onClick}
        className={`p-2 md:p-6 border-2 rounded-xl text-left space-y-3 transition-colors ${
          isSelected 
            ? 'border-custom-green bg-custom-green/30' 
            : 'border-custom-blue hover:border-custom-blue'
        }`}
      >
        {icon}
        <h3 className="font-semibold text-lg text-custom-blue">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </button>
    );
}

export default MethodButton;
