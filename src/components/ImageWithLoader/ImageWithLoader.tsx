import { useState } from "react";

interface ImageWithLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    containerClassName?: string;
}

export const ImageWithLoader = ({ src, alt, className, containerClassName, ...props }: ImageWithLoaderProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden bg-[#202024] ${containerClassName}`}>
            {!isLoaded && (
                <div className="absolute inset-0 animate-pulse bg-white/5" />
            )}

            <img
                src={src}
                alt={alt}
                onLoad={() => setIsLoaded(true)}
                className={`transition-opacity duration-500 ease-in-out ${className} ${
                    isLoaded ? "opacity-100" : "opacity-0"
                }`}
                {...props}
            />
        </div>
    );
};