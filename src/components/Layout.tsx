import { ComponentWithChildren } from "@/types";
import { Footer } from "./Footer";
import Header from "./Header";

interface LayoutProps extends ComponentWithChildren {
  headTitle: string;
  className?: string;
}

const Layout = ({ children, headTitle, className }: LayoutProps) => {
  return (
    <div className={className}>
      <Header />
      <main className="pt-16 flex flex-col  min-h-screen items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
