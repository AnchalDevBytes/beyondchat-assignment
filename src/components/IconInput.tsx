import { InputProps } from "@/Interfaces/UiInterfaces";

const IconInput : React.FC<InputProps> = ({
    type = "text",
    name,
    className = "",
    Icon,
    placeholder = "",
    onChange = () => {}
}) => {
  return (
    <div className="relative">
        {Icon && <Icon className='absolute left-3 top-3 h-5 w-5 text-gray-400 text-xs bg-gc-green rounded-full' />}
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            className={`w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg ${className}`}
            required
    />
    </div>
  )
}

export default IconInput;
