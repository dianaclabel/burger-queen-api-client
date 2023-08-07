import { InputHTMLAttributes } from "react";

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, "className"> & {
  icon: string;
};

export const Input = ({ icon, ...inputProps }: Props) => {
  return (
    <>
      <div className="inline-block relative w-full">
        <input
          {...inputProps}
          className="border border-orange-900 rounded-xl px-4 py-1 w-full focus:outline-none focus:ring-2 focus:ring-orange-950/50"
        />
        <img src={icon} alt="icon" className="absolute bottom-1 right-2" />
      </div>
    </>
  );
};
