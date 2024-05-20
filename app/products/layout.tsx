import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products of Outer Wilds Ventures",
  description: "The products of Outer Wilds Ventures",
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