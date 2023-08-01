type Props = {
  nameFilter: string;
};

export function FilterBtn({ nameFilter }: Props) {
  return (
    <button className="border-2 border-orange-400 rounded-md w-28 text-orange-400 font-bold text-base">
      {nameFilter}
    </button>
  );
}
