import React, { useEffect, useState } from "react";

interface CartItem {
    id: number;
    title: string;
    category: string;
    price: number;
    quantity: number;
    image: string;
}

const MOCK_CART_ITEMS: CartItem[] = [
    {
        id: 1,
        title: "Decay: Oil Drums District",
        category: "Environment",
        price: 199.99,
        quantity: 1,
        image: "/img/Environments1.png",
    },
    {
        id: 2,
        title: "Elven Oak Village",
        category: "Environment",
        price: 199.99,
        quantity: 1,
        image: "/img/Environments2.png"
    }
];

interface ShoppingCartProps {
    isOpen: boolean;
    onClose: () => void;
}

export const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen, onClose }) => {
    const [items, setItems] = useState<CartItem[]>(MOCK_CART_ITEMS);

    const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const removeItem = (id: number) => {
        setItems(items.filter(item => item.id !== id));
    };

    return (
        <>
            <div
                className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] transition-opacity duration-300
                ${isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
                onClick={onClose}
            />

            <div className={`fixed top-0 right-0 h-full w-full max-w-[480px] bg-[#101014] z-[70] shadow-2xl flex flex-col transform transition-transform duration-300 ease-out
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex items-center justify-between p-8 pb-6">
                    <h2 className="text-white text-[22px] font-medium">Shopping Cart</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors p-1">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto px-8">
                    {items.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-gray-500 text-sm">
                            Your cart is empty.
                        </div>
                    ) : (
                        <div className="flex flex-col gap-6">
                            {items.map((item) => (
                                <div key={item.id} className="flex items-start gap-5 group">
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="mt-6 text-gray-500 hover:text-white transition-colors"
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                            <path d="M18 6L6 18M6 6l12 12" />
                                        </svg>
                                    </button>

                                    <div className="w-[120px] h-[70px] rounded-lg overflow-hidden flex-shrink-0 bg-[#222]">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover"/>
                                    </div>

                                    <div className="flex flex-col flex-1 pt-1">
                                        <h3 className="text-white text-sm font-medium leading-tight mb-1 line-clamp-1">
                                            {item.title}
                                        </h3>
                                        <span className="opacity-60 text-[13px] mb-3">
                                            {item.category}
                                        </span>

                                        <div className="flex items-center gap-1 lg:gap-4 text-[13px]">
                                            <span className="px-[9px] font-['Overpass_Mono'] leading-[22px] py-1 bg-white/5 rounded-[360px] text-[#FEA227] text-[13px] font-medium tracking-wide">
                                                ${item.price}
                                            </span>
                                            <span className="opacity-60 font-['Overpass_Mono'] text-[10px] font-normal">
                                                X {item.quantity}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="p-8 pt-6 border-t border-white/5 bg-[#101014]">
                    <div className="flex justify-between items-center mb-6 text-white">
                        <span className="text-sm font-medium">Subtotal:</span>
                        <span className="text-sm font-semibold font-['Overpass_Mono'] tracking-wide">
                            ${subtotal.toFixed(2)}
                        </span>
                    </div>

                    <button className="w-full bg-[#F29315] hover:bg-[#d68213] text-black text-[13px] font-bold py-4 rounded-full uppercase tracking-wider transition-transform active:scale-95">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </>
    );
};