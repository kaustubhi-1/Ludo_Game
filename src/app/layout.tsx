import "./globals.css";

import { GameProvider } from "@/context/GameContext";

export const metadata = {
  title: 'Ludo Game',
  description: 'Ludo game',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GameProvider>
          {children}
        </GameProvider>
      </body>
    </html>
  );
}
