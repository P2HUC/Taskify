import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#FDAA48] via-orange-100/60 to-orange-100/40">
      <Navbar />
      <main className="pt-32 pb-20 bg-transparent flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
