import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Loading from "@/app/loading";
import {getEntries, Setting} from "@/lib/contentful-helpers";
import {SettingsProvider} from "@/context/SettingsContext";

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
    title: "Hassan Raza - Personal Portfolio",
    description: "Developed by: Hassan Raza",
};

export default async function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    const settings = await getEntries<Setting>('settings');

    return (
        <html lang="en">
        <body className={poppins.className + " bg-white"}>
        <SettingsProvider settings={settings}>
            <header className={"sticky top-0 z-50"}>
                <NavBar />
            </header>
            <main className={"relative"}>
                {children}
            </main>
        </SettingsProvider>
        </body>
        </html>
    );
}
