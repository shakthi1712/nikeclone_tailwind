import Hero from "./Sections/Hero";
import PopularProducts from "./Sections/PopularProducts";
import SuperQuality from "./Sections/SuperQuality";
import Services from "./Sections/Services";
import SpecialOffer from "./Sections/SpecialOffer";
import CustomersReviews from "./Sections/CustomersReviews";
import Subscribe from "./Sections/Subscribe";
import Footer from "./Sections/Footer";
import Nav from "./Components/Nav";
function App() {
  return (
    <div className="relative">
       <Nav />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero /> 
      </section>
      <section className="padding">
        <PopularProducts />

      </section>
      <section className="padding">
        <SuperQuality />

      </section>
      <section className="padding-x py-10">
        <Services />

      </section>
      <section className="padding">
        <SpecialOffer />

      </section>
      <section className=" bg-pale-blue padding">
        <CustomersReviews />

      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />

      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer />

      </section>

   
    </div>
  );
}

export default App;
