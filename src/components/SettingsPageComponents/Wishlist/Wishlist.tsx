
interface WishlistItem {
    id: number;
    title: string;
    price: string;
    image: string;
}

const mockWishlist: WishlistItem[] = [];

export const Wishlist = () => {
    return (
        <div className="w-full h-full flex flex-col min-h-[400px]">

            <h2 className="text-[17px] font-normal text-white mb-8">
                My Wishlist
                <span className="text-[#585A5D] ml-1">
                    ({mockWishlist.length})
                </span>
            </h2>

            {mockWishlist.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center h-full">
                    <p className="text-[#585A5D] text-[13px] font-normal">
                        You don't have any items.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {mockWishlist.map(item => (
                        <div key={item.id} className="text-white p-4 border border-white/10 rounded">
                            {item.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};