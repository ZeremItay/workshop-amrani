import type { Metadata } from "next";
import { Heebo, Secular_One } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "700", "800"],
});

const secularOne = Secular_One({
  variable: "--font-secular-one",
  subsets: ["latin", "hebrew"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "איתי זרם | וויב קודר - בניית אתרים מקצועית",
  description:
    "אתר מקצועי שמביא לקוחות — מהיר, יפה, ועובד. בניית אתרים ו-Landing Pages לעסקים קטנים ובינוניים.",
  keywords: [
    "בניית אתרים",
    "Landing Page",
    "אתר עסקי",
    "וויב קודר",
    "איתי זרם",
    "עיצוב אתרים",
  ],
  openGraph: {
    title: "איתי זרם | וויב קודר - בניית אתרים מקצועית",
    description:
      "אתר מקצועי שמביא לקוחות — מהיר, יפה, ועובד.",
    type: "website",
    locale: "he_IL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${heebo.variable} ${secularOne.variable} font-sans antialiased noise-bg`}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
