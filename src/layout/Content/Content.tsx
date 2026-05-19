export const Content = ({children} :{children: any})=>{
    return(
        <div className="flex-1 px-4 py-6 md:px-[28px] md:py-[24px] w-full max-w-full overflow-x-hidden">
            {children}
        </div>
    )
}