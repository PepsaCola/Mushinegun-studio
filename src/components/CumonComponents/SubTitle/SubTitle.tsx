export const SubTitle=({children,className}:{children:any,className?:string})=>{
    return(
        <p className={`max-w-[900px] opacity-80 text-[13px] font-normal leading-[22px] ${className}`}>
            {children}
        </p>
    )
}