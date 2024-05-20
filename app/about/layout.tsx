import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Outer Wilds Ventures",
  description: "The explanations of Outer Wilds Ventures establishment",
};

export default function AboutLayout({
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