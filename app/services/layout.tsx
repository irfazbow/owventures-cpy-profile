import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services of Outer Wilds Ventures",
  description: "The services of Outer Wilds Ventures",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {children}
    </section>
  )
}