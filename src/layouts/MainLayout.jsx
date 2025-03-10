import Header from "../components/Header";
import Footer from "../components/Footer";
import { ContactUs } from "../components/ContactUs";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">{children}</main>
      
      <div className="py-20">
      <ContactUs />

      </div>
      
      <Footer />

    </div>
  );
};

export default MainLayout;
