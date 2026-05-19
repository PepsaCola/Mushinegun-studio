import {CustomInput} from "../CustomInput/CustomInput.tsx";

export const ProfileSettings = () => {
    return (
        <div className="w-full max-w-4xl">
            <h2 className="text-[17px] font-normal text-white mb-8">Profile Settings</h2>

            <div className="flex items-center gap-6 mb-10">
                <div className="w-[80px] h-[80px] rounded-full overflow-hidden ">
                    <img
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <button className="bg-white/5  hover:bg-white/10 text-white text-xs font-normal px-[15px] py-[14px] rounded-full uppercase tracking-[2px] transition-all active:scale-95">
                    Upload Photo
                </button>
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <CustomInput label='Full Name' placeholder='John McCoy' type='text'/>
                <CustomInput label='Company Name' placeholder='Company Name' type='text'/>
                <CustomInput label='Email' placeholder='jackson.graham@example.com' type='email'/>
                <CustomInput label='Phone' placeholder='(629) 555-0129' type='tel'/>
                <div className="md:col-span-2 flex justify-end mt-4">
                    <button
                        type="button"
                        className="bg-[#FCA311] hover:bg-[#e0900e] text-black text-xs font-bold px-8 py-3.5 rounded-full uppercase tracking-[2px]  transition-all active:scale-95"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};