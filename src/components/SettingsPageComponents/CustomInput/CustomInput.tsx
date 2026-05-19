
export const CustomInput = ({label,placeholder,inputClassName,type}:{label:string,placeholder:string,inputClassName?:string,type:string})=>{
    return (
        <div className="flex flex-col gap-[11px]">
            <label className="text-[#a0a0a0] text-[13px] leading-[9px]">{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                className={`${inputClassName} bg-[#101014] border border-white/5 rounded-[10px]  font-normal px-[16px] py-[20px] text-white text-sm focus:outline-none focus:border-[#FCA311] transition-colors leading-[11px] placeholder:text-[#a0a0a0] placeholder:text-[15px]`}
            />
        </div>
    )
}