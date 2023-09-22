import { Metadata } from "next"
import Header from "./components/Header"
import { defaultMetadata } from "../metadata"

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <article className="overflow-hidden pt-16">
      <Header />
      {children}
    </article>
  )
}
