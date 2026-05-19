import {SectionTitle} from "../../components/CumonComponents/SectionTitle/SectionTitle.tsx";
import {SubTitle} from "../../components/CumonComponents/SubTitle/SubTitle.tsx";


export const Company=()=>{
    return(
        <div className="w-full text-white">
            <div className="mb-8">
                <SectionTitle className="mb-2">
                    Need help? We’ve got your back
                </SectionTitle>
                <SubTitle>
                    Perhaps you can find the answers in our collections
                </SubTitle>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
                <a href='#' className={'flex flex-col items-center justify-center bg-white/5 rounded-[10px] p-[22px]'}>
                    <img className={'p-[11px] bg-[#5662F2] rounded-[14px] w-[30px] h-[30px] box-content'} src="/icons/white-discord.svg" alt=""/>
                    <h5 className={'text-center text-[#5662f2] text-sm font-medium capitalize leading-[22px] mt-[24px] mb-[8px]'}>Technical Support</h5>
                    <p className={'opacity-30 text-center text-[13px] font-normal leading-[22px]'}>Our support team is available to answer any questions you may have. They can be reached by email, phone, or our live chat system. Got any questions? Just chat to our friendly team.</p>
                </a>
                <a href='#' className={'flex flex-col items-center justify-center bg-white/5 rounded-[10px] p-[22px]'}>
                    <img className={'p-[11px] bg-[#FFFFFF] rounded-[14px] w-[30px] h-[30px] box-content'} src="/icons/Ticket.svg" alt=""/>
                    <h5 className={'text-center text-white text-sm font-medium capitalize leading-[22px] mt-[24px] mb-[8px]'}>Submit a ticket</h5>
                    <p className={'opacity-30 text-center text-[13px] font-normal leading-[22px]'}>Our ticketing system allows you to track customer requests and monitor customer activity. You can easily assign, prioritize, and manage customer tickets from within the customer management platform.</p>
                </a>
                <a href='#' className={'flex flex-col items-center justify-center bg-white/5 rounded-[10px] p-[22px]'}>
                    <img className={'p-[11px] bg-[#95d957] rounded-[14px] w-[30px] h-[30px] box-content'} src="/icons/white-Info.svg" alt=""/>
                    <h5 className={'text-center text-[#95D957] text-sm font-medium capitalize leading-[22px] mt-[24px] mb-[8px]'}>Help center</h5>
                    <p className={'opacity-30 text-center text-[13px] font-normal leading-[22px]'}>Our support team is available to answer any questions you may have. They can be reached by email, phone, or our live chat system. Got any questions? Just chat to our friendly team.</p>
                </a>
            </div>
        </div>
    )
}