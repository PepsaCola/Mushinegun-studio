export const SectionTitle = ({children,className,link=false}: {children: any,className?:string,link?:boolean})=>{
    return (
        <>
            <h3 className={`flex gap-[14px] items-center text-white text-[22px] font-bold tracking-wide ${className}`}>
                {children}
                {link && <img src="/icons/ArrowRight.svg" alt=""/>}
            </h3>
        </>
    )
}