
interface PurchaseItem {
    id: number;
    title: string;
    price: string;
    date: string;
    img: string;
}

const mockPurchases: PurchaseItem[] = [];


export const Purchases = () => {
    return (
        <div className="w-full h-full flex flex-col min-h-[400px]">
            <h2 className="text-[17px] font-normal text-white mb-8">
                My Purchase List
                <span className="text-[#585A5D] ml-1">
                    ({mockPurchases.length})
                </span>
            </h2>

            {mockPurchases.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center h-full">
                    <p className="text-[#585A5D] text-[13px] font-normal">
                        You don't have any purchases.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {mockPurchases.map(item => (
                        <div key={item.id} className="text-white">
                            {item.title} - {item.price}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};