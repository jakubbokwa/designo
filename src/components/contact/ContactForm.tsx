import FormInner from "./FormInner";
import { ReactComponent as ContactDecorationMobile } from "../../assets/contact/mobile/bg-pattern-hero-contact-mobile.svg";
import { ReactComponent as ContactDecorationDesktop } from "../../assets/contact/desktop/bg-pattern-hero-desktop.svg";

const ContactForm = () => {
  return (
    <section className="bg-primary-peach text-white py-18 lg:py-14 px-6 xl:px-24 sm:px-14 relative mb-40 md:rounded-xl overflow-hidden lg:flex lg:items-center lg:justify-between lg:gap-12 xl:gap-24">
      <ContactDecorationMobile className="sm:hidden absolute top-0 -left-1/3" />
      <ContactDecorationDesktop className="hidden sm:block absolute -top-[16%] -left-1/3 lg:bottom-0 lg:left-0 lg:top-auto" />
      <div className="relative text-center sm:text-left mb-12 lg:w-[55%]">
        <header className="text-3xl lg:text-5xl font-medium mb-6">
          Contact Us
        </header>
        <p className="text-base-mobile md:text-base">
          Ready to take it to the next level? Let's talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that's relatable to your users,
          drop us a line.
        </p>
      </div>
      <FormInner />
    </section>
  );
};

export default ContactForm;
