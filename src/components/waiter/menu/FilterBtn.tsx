type Props = {
  nameFilter: string;
  onClick?: () => void;
};

export function FilterBtn({ nameFilter, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="border-2 border-orange-400 rounded-md w-28 text-orange-400 font-bold text-base py-1 hover:bg-orange-400 hover:text-white"
    >
      {nameFilter}
    </button>
  );
}
