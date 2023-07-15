type InputType = {
  id: string;
  name: string;
  type?: "text" | "email" | "tel";
  text: string;
  long?: boolean;
};

const Input = ({ id, name, type = "text", text, long }: InputType) => {
  return (
    <div
      className={`focus-within:border-b-[3px] ${
        long ? "" : "h-8"
      } border-b border-white mb-6 pl-3.5 w-full`}
    >
      <label
        aria-hidden={true}
        id={`label-${id}`}
        htmlFor={id}
        className="hidden"
      >
        {text}
      </label>
      {long ? (
        <textarea
          className="w-full resize-none bg-transparent outline-none placeholder-white/50"
          placeholder={text}
          name={name}
          id={id}
          aria-labelledby={`label-${id}`}
          rows={4}
        />
      ) : (
        <input
          aria-labelledby={`label-${id}`}
          placeholder={text}
          className="bg-transparent outline-none placeholder-white/50"
          type={type}
          id={id}
          name={name}
        />
      )}
    </div>
  );
};

export default Input;
