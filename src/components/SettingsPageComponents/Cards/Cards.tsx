
interface CardItem {
    id: number;
    brand: string;
    last4: string;
    expiry: string;
}

const mockCards: CardItem[] = [];

export const Cards = () => {
    return (
        <div className="w-full h-full flex flex-col min-h-[400px]">

            <div className="flex items-center justify-between mb-8">
                <h2 className="text-[17px] font-normal text-white">
                    My Cards
                </h2>

                <button className="flex items-center gap-2 text-[#FCA311] hover:text-[#e0900e] text-[13px] font-medium transition-colors outline-none">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Add Card(s)
                </button>
            </div>

            {mockCards.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center h-full">
                    <p className="text-[#585A5D] text-[13px] font-normal">
                        You don't have any cards.
                    </p>
                </div>
            ) : (
                <div className="grid gap-4">
                    {mockCards.map(card => (
                        <div key={card.id} className="text-white p-4 border border-white/10 rounded">
                            •••• {card.last4}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};