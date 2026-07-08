import "./globals.css";

export const metadata = {
  title: "FEBRUARY Cafe | Premium Coffee & Desserts",
  description: "Experience premium coffee, desserts and luxury cafe moments at FEBRUARY Cafe.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

