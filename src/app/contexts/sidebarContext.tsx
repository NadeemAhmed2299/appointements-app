"use client";
import { useMediaQuery, useTheme } from "@mui/material";
import { createContext, ReactNode, useContext, useState } from "react";

type SidebarContextType = {
    isSidebarOpen: boolean;
    mobileOpen: boolean;
    toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const [mobileOpen, setMobileOpen] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        if (isMobile) {
            setMobileOpen(!mobileOpen);
        } else {
            setSidebarOpen(!isSidebarOpen);
        }
    };

    return (
        <SidebarContext.Provider value={{ isSidebarOpen, mobileOpen, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
};