import Footer from "@/components/global/footer";
import Header from "@/components/global/header";

export default function OtherLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Header />
      {children}
    </>
  );
}