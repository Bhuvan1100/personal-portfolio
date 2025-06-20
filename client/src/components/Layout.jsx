import Navigation from "./Navigation";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="min-h-screen portfolio-bg">
      <Navigation />
      <main className="max-w-7xl mx-auto px-6">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;