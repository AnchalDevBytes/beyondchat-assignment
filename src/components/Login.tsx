import { FcGoogle } from "react-icons/fc";
import { LoginProps } from "@/Interfaces/UiInterfaces";
import { IoMdMail } from "react-icons/io";
import { FaLock, FaUser } from "react-icons/fa";
import IconInput from "@/components/IconInput";

const Login: React.FC<LoginProps> = ({ onLogin }) => {

    return (
        <div className="relative flex flex-col gap-3 items-center justify-center">
            <div className="w-full h-full md:w-[480px] md:h-[568px] bg-white rounded-2xl p-4 md:p-10 flex flex-col gap-4 md:shadow-sm">
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold pr-24 md:pr-0 font-montserrat text-custom-blue">
                        Beyond Chats
                    </h1>
                    <p className="text-sm font-normal font-montserrat text-custom-black tracking-wider">
                        Please login/signup to proceed further.
                    </p>
                </div>
                <div className="flex flex-col gap-4 mt-2">
                    <div className="flex flex-col gap-3 w-full">
                        <IconInput 
                            name='Full Name' 
                            placeholder="Full Name"
                            Icon={FaUser} 
                        />
                        <IconInput 
                            type='email'
                            name="Email Address" 
                            placeholder="Email Address"
                            Icon={IoMdMail} 
                        />
                        <IconInput 
                            type='password'
                            name="password" 
                            placeholder="password"
                            Icon={FaLock} 
                        />
                    </div>
                    <button 
                        onClick={onLogin}
                        className="w-full cursor-pointer transition-all duration-200 ease-in-out active:scale-105 rounded-xl text-base font-montserrat font-semibold flex items-center gap-2 bg-custom-green py-3 px-6 text-white justify-center"
                    >
                        Login
                    </button>
                </div>
                <div className="relative border border-gray-500/30 my-6">
                    <span className="absolute inset-0 w-fit mx-auto h-fit -translate-y-3 bg-white px-3 z-10 text-base font-normal font-montserrat text-custom-black">
                        or
                    </span>
                </div>
                <button className="text-base font-medium font-montserrat text-custom-dark-blue border-2 border-gray-300 p-4 rounded-lg w-full flex items-center gap-4 text-center justify-center">
                    <span>
                        <FcGoogle size={26}/>
                    </span>
                        Sign in with Google
                </button>
            </div>
        </div>
    );
}

export default Login;
