import "./globals.css";

export const metadata = {
  title: "Dashboard",
  description: "Full-stack Next.js App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-200">
        <div className="min-h-screen flex flex-col">

          {/* Page content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Global Footer */}
          <footer className="py-6 text-center bg-gray-800 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Lean Montirozo & Hannah Villarao. Invoice Manager. All rights reserved.
            </p>
          </footer>

        </div>
      </body>
    </html>
  );
}
