import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./head";

const roboto = Roboto({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700']
});

export const metadata = {
  title: "Image-Based Search",
  description: "AI-Powered Image Similarity Search",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}