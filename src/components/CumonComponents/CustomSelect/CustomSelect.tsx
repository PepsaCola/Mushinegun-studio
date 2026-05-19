import {type FC, useEffect, useRef, useState} from "react";

interface CustomSelectProps {
    options: string[];
    defaultValue?: string;
    onChange?: (value: string) => void;
    className?: string;
    popUpClassName?: string;
}

export const CustomSelect: FC<CustomSelectProps> = ({ options, defaultValue, onChange,className,popUpClassName }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<string>(defaultValue || options[0]);

    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (option: string) => {
        setSelected(option);
        setIsOpen(false);
        if (onChange) onChange(option);
    };

    return (
        <div className={`relative flex-1 `} ref={dropdownRef}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`  bg-[#28282B] text-sm border ${isOpen ? 'border-[#FCA311]' : 'border-white/25'} 
                rounded-[10px] px-[16px] py-[18px] cursor-pointer flex justify-between items-center transition-colors ${className}`}
            >
                <span className="truncate mr-2 leading-[12px]">{selected}</span>
                <svg
                    width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className={`transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#FCA311]' : 'text-gray-400'}`}
                >
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            </div>

            {isOpen && (
                <div className={`absolute top-full left-0 w-full mt-2 bg-[#1A1D21] border border-white/10 rounded-[10px] shadow-xl z-50 overflow-hidden `}>
                    {options.map((option, idx) => (
                        <div
                            key={idx}
                            onClick={() => handleSelect(option)}
                            className={`px-[16px] py-[12px] text-sm cursor-pointer transition-colors ${popUpClassName}
                                ${selected === option ? 'bg-[#FCA311]/10 text-[#FCA311]' : 'text-gray-300 hover:bg-white/5 hover:text-white'}
                            `}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};