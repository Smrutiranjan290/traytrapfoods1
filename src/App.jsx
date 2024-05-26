import Navbar from "./components/Navbar";
import MainFeed from "./components/MainFeed";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import UserDataGoogleForm from "./components/UserDataGoogleForm";

function App() {
  return (
    <section className="">
      <Navbar />
      <UserDataGoogleForm />
      <MainFeed />
      <ContactUs />
      <Footer />
    </section>
  );
}

export default App;
