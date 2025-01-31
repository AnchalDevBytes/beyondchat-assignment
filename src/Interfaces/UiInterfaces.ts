import { IntegrationMethod, Step } from "@/components/Chatbot/types";
import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

export interface LoginProps {
    onLogin: () => void;
}

export interface EmailVerificationProps {
    onVerify: () => void;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    type?: "text" | "email" | "checkbox" | "password" | "number" | "date" | "url" | undefined;
    placeholder?: string;
    className?: string;
    Icon?: IconType;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IntegrationButtonProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    onClick: () => void;
    color: 'blue' | 'green' | 'purple';
}

export interface IntegrationStepProps {
    integrationMethod: IntegrationMethod;
    onSetIntegrationMethod: (method: IntegrationMethod) => void;
    onSetStep: (step: Step) => void;
}

export interface MethodButtonProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    isSelected: boolean;
    onClick: () => void;
}

export interface TestingStepProps {
    onSetStep: (step: 'success') => void;
}

export interface SocialButtonProps {
    icon: React.ReactNode;
    color: string;
}
