import {CustomInput} from "../CustomInput/CustomInput.tsx";

export const Password = () => {
    return (
        <div className="w-full h-full flex flex-col">

            <h2 className="text-[17px] font-normal text-white mb-8">
                Change Password
            </h2>

            <form className="flex flex-col w-full">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <CustomInput label='New Password' placeholder='..................' type='password'/>
                    <CustomInput label=' Confirm Password' placeholder='..................' type='password'/>
                </div>

                <div className="flex justify-end">
                    <button
                        type="button"
                        className="bg-[#F29315] hover:bg-[#d68213] text-[#111] text-[11px] font-bold py-3.5 px-8 rounded-full uppercase tracking-wider transition-transform active:scale-95 "
                    >
                        Save Changes
                    </button>
                </div>

            </form>
        </div>
    );
};