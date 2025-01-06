import "@/app/ui/global.css";
import '@/app/ui/fonts.ts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className = {'${inter.className} antialiased'}>{children}</body>
    </html>
  );
}
