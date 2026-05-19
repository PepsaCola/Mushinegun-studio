import React from "react";

interface ReviewItem {
    id: number;
    userName: string;
    avatarUrl: string;
    likes: number;
    rating: number;
    date: string;
    content: string;
}

const REVIEWS_DATA: ReviewItem[] = [
    {
        id: 1,
        userName: "Addison Mohr",
        avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
        likes: 4,
        rating: 5,
        date: "Feb 3, 2022",
        content: "Placeat eaque doloribus necessitatibus ex architecto voli ducimus similique voluptatibus harum repellendus. us labore consequatur non odit. Aspernatur quo aut"
    },
    {
        id: 2,
        userName: "Addison Mohr",
        avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
        likes: 4,
        rating: 5,
        date: "Feb 3, 2022",
        content: "Placeat eaque doloribus necessitatibus ex architecto voli ducimus similique voluptatibus harum repellendus. us labore consequatur non odit. Aspernatur quo aut"
    }
];


export const ReviewsTab: React.FC = () => {
    return (
        <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="flex flex-col">
                {REVIEWS_DATA.map((review, index) => (
                    <div
                        key={review.id}
                        className={`flex flex-col gap-4 py-8 ${index !== REVIEWS_DATA.length - 1 ? 'border-b border-white/10' : ''}`}
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-[28px] h-[28px] rounded-full overflow-hidden bg-gray-700">
                                <img
                                    src={review.avatarUrl}
                                    alt={review.userName}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-white text-sm font-semibold">
                                {review.userName}
                            </h3>
                        </div>

                        <div className="flex items-center gap-6 text-sm">
                            <div className="flex items-center gap-2">
                                <img src="/icons/heart-grey.svg" alt=""/>
                                <span className="text-[13px] font-light">{review.likes}</span>
                            </div>

                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={i < review.rating ? "opacity-100" : "opacity-30"}>
                                        <img src="/icons/star.svg" alt=""/>
                                    </span>
                                ))}
                            </div>

                            <span className="text-[13px] font-ligh">
                                {review.date}
                            </span>
                        </div>

                        <p className=" opacity-80 text-[13px] font-light leading-[22px]">
                            {review.content}
                        </p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center ">
                <button
                    className={'flex gap-[14px] justify-center items-center py-[14px] px-[55px] rounded-[360px] border border-white/25 bg-[#28282B] box-border opacity-80 hover:opacity-100 text-[13px] font-semibold uppercase '}>
                    Load More
                </button>
            </div>
        </div>
    );
};