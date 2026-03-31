import React from "react";

interface IBackgroundProps {
    children: React.ReactNode;
}

const Background = ({ children }: IBackgroundProps) => {
    return (
        <div className="background">
            {children}
        </div>
    );
}

export default Background;