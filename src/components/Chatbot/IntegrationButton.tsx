import { IntegrationButtonProps } from "@/Interfaces/UiInterfaces";

const IntegrationButton = ({ icon, title, description, onClick, color }: IntegrationButtonProps) => {
    const colorClasses = {
      blue: 'border-custom-blue hover:border-custom-blue hover:bg-custom-green/20',
      green: 'border-custom-green hover:border-custom-green hover:bg-custom-green/20',
      purple: 'border-custom-dark-blue hover:border-custom-dark-blue hover:bg-custom-green/20',
    };
  
    return (
      <button
        onClick={onClick}
        className={`p-4 md:p-6 border-2 rounded-xl text-left hover:border-custom-blue transition-colors group ${colorClasses[color]}`}
      >
        <div className="flex items-start gap-4">
          <div className={`hidden md:flex  p-3 bg-${color}-100 rounded-lg group-hover:bg-${color}-200 transition-colors`}>
            {icon}
          </div>
          <div className='flex flex-col gap-1'>
            <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </button>
    );
  }

  export default IntegrationButton;
  