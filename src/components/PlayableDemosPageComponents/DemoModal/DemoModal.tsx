import {useEffect} from "react";

interface DemoModalProps {
    isOpen: boolean;
    onClose: () => void;
    data: {
        title: string;
        img: string;
    } | null;
}

export const DemoModal = ({ isOpen, onClose, data }: DemoModalProps) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen || !data) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            <div className="relative w-full max-w-[480px] bg-[#111111] border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col gap-6 animate-fadeIn">

                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-white transition-colors"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                <div className="w-full h-[240px] rounded-xl overflow-hidden relative group">
                    <img
                        src={data.img}
                        alt={data.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                </div>

                <div>
                    <h3 className="text-white text-[17px] font-medium leading-normal text-left">
                        {data.title}
                    </h3>
                </div>

                <div className="flex flex-col gap-3">
                    <DownloadButton icon="windows" label="DOWNLOAD WINDOWS VERSION" />
                    <DownloadButton icon="linux" label="DOWNLOAD LINUX VERSION" />
                    <DownloadButton icon="mac" label="DOWNLOAD MAC VERSION" />
                </div>
            </div>
        </div>
    );
};

const DownloadButton = ({ icon, label }: { icon: 'windows' | 'linux' | 'mac'; label: string }) => {
    return (
        <button className="w-full h-[48px] bg-[#28282B]  border border-white/25 rounded-full flex items-center px-6 transition-all active:scale-[0.98] group">
            <span className="w-5 h-5 flex items-center justify-center  ">
                {icon === 'windows' && (
                    <img src="/icons/windows.svg" alt=""/>
                )}
                {icon === 'linux' && (
                    <img src="/icons/linux.svg" alt=""/>
                )}
                {icon === 'mac' && (
                    <img src="/icons/apple.svg" alt=""/>
                )}
            </span>
            <span className="flex-1 text-center opacity-80 text-[13px] font-semibold tracking-widest uppercase ">
                {label}
            </span>
        </button>
    );
};