import Hero from "./mysections/Hero";
import CustomerReviews from "./mysections/CustomerReviews";
import Footer from "./mysections/Footer";
import Product from "./mysections/Product";
import Services from "./mysections/Services";
import SpecialOffer from "./mysections/SpecialOffer";
import Subscribe from "./mysections/Subscribe";
import SuperQuality from "./mysections/SuperQuality";
import Nav from "./myComponents/Nav";


function App() {
  return (
    <main className="relative">
      <Nav></Nav>
      <section className="xl:p-1 padding-b" data-aos="fade-up" data-aos-duration="1500">
        <Hero></Hero>
      </section>
      <section className="padding" data-aos="fade-up" data-aos-duration="1500">
        <Product></Product>
      </section>
      <section className="padding" data-aos="fade-up" data-aos-duration="1500">
        <SuperQuality></SuperQuality>
      </section>
      <section className="padding-x py-10" data-aos="fade-up" data-aos-duration="1500">
        <Services></Services>
      </section>
      <section id="specialOffer" className="padding" data-aos="fade-up" data-aos-duration="1500">
        <SpecialOffer></SpecialOffer>
      </section>
      <section id="aboutUs" className="bg-pale-blue padding" data-aos="fade-up" data-aos-duration="1500">
        <CustomerReviews></CustomerReviews>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full" data-aos="fade-up" data-aos-duration="1500">
        <Subscribe></Subscribe>
      </section>
      <section id="contact" className="bg-black padding-x padding-t pb-8" data-aos="fade-up" data-aos-duration="1500">
        <Footer></Footer>
      </section>
    </main>
  )
}

export default App;