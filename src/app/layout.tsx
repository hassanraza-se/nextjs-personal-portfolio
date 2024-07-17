import type {Metadata} from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Loading from "@/app/loading";

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

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={poppins.className + " bg-white"}>
        <header className={"sticky top-0 z-50"}>
            <NavBar />
        </header>
        <main className={"relative"}>
            {children}
        </main>
        </body>
        </html>
    );
}
