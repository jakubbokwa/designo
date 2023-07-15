import Button from "../ui/Button";
import Input from "./Input";

const FormInner = () => {
  return (
    <form className="relative flex flex-col items-center sm:items-end lg:w-[45%]">
      <Input type="text" name="name" id="name" text="Name" />
      <Input type="email" name="email" id="email" text="Email Address" />
      <Input type="tel" name="phone" id="phone" text="Phone" />
      <Input long name="msg" id="msg" text="Your Message" />
      <Button className="mt-6 lg:mt-0 py-4 px-12" type="button" isDark={false}>
        Submit
      </Button>
    </form>
  );
};

export default FormInner;
