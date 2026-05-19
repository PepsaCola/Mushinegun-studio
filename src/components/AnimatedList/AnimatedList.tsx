import { motion } from "framer-motion";
import React from "react";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

interface AnimatedListProps {
    className?: string;
    children: React.ReactNode;
}

export const AnimatedList = ({ className, children }: AnimatedListProps) => {
    return (
        <motion.ul
            variants={container}
            initial="hidden"
            animate="show"
            className={className}
        >
            {React.Children.map(children, (child) => (
                <motion.li variants={itemAnim} className="h-full">
                    {child}
                </motion.li>
            ))}
        </motion.ul>
    );
};