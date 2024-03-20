import Hero from "@/components/Hero";

export default function StudiKasusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Hero />
      <section className="flex items-center justify-center pb-14">
        <div className="w-full">
          <div className="max-w-screen-2xl mx-auto px-4">{children}</div>
        </div>
      </section>
    </main>
  );
}
