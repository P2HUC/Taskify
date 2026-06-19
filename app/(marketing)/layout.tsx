import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100">
      <Navbar />
      <main className="pt-32 pb-20 bg-slate-100 flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MarketingLayout;
