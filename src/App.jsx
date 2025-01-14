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
      <section className="xl:p-1 padding-b">
        <Hero></Hero>
      </section>
      <section className="padding">
        <Product></Product>
      </section>
      <section className="padding">
        <SuperQuality></SuperQuality>
      </section>
      <section className="padding-x py-10">
        <Services></Services>
      </section>
      <section className="padding">
        <SpecialOffer></SpecialOffer>
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews></CustomerReviews>
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe></Subscribe>
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer></Footer>
      </section>
    </main>
  )
}

export default App;