// context/SettingsContext.tsx
'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import {Setting} from "@/lib/contentful-helpers";


interface SettingsContextType {
    settings: Setting[] | null;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({
                                     children,
                                     settings
                                 }: {
    children: ReactNode;
    settings: Setting[] | null;
}) {
    return (
        <SettingsContext.Provider value={{ settings }}>
            {children}
        </SettingsContext.Provider>
    );
}

export function useSettings() {
    const context = useContext(SettingsContext);
    if (context === undefined) {
        throw new Error('useSettings must be used within a SettingsProvider');
    }
    return context;
}