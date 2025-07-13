import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
}

const PageLayout = ({ children, title }: PageLayoutProps) => {
  // Update document title
  if (title) {
    document.title = `Afroja Parvin - ${title}`;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;