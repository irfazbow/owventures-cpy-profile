import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teams of Outer Wilds Ventures",
  description: "The founder and member/specialist of Outer Wilds Ventures",
};

export default function TeamsLayout({
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