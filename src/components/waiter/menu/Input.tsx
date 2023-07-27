import { HTMLProps } from "react";

type Props = Omit<HTMLProps<HTMLInputElement>, "className"> & {
  icon: string;
};

export const Input = ({ icon, ...inputProps }: Props) => {
  return (
    <>
      <div className="inline-block relative">
        <input
          {...inputProps}
          className="border border-orange-900 rounded-xl p-1"
        />
        <img src={icon} alt="icon" className="absolute bottom-2 right-5" />
      </div>
    </>
  );
};
