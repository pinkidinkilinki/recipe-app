import "./globals.css"
import Navbar from "../components/Navbar"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
          fontFamily: "Arial"
        }}
      >
        <Navbar />

        <main
          style={{
            width: "100%",
            maxWidth: "800px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          {children}
        </main>
      </body>
    </html>
  )
}