import React, { forwardRef } from "react";
import Navigation from "../navigation";

const Layout = ({ children, withNavigation = true }) => {
    return (
        <div className="contain-layout">
            {withNavigation &&
                <>
                    <Navigation />
                </>
            }
            <main className={`main-content bg-base-100 ${withNavigation && '-mt-[88px]'}`}>{children}</main>
        </div>
    );
};

export default Layout;
