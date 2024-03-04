import { BagIcon } from "@/components/icons/bag-icon";

interface Props {
  amount: number;
  price?: number;
}

export const ShoppingCart = ({ amount, price }: Props) => {
  return (
    <div className="flex items-center gap-[0.625rem]">
      <button className="relative" aria-label="open shopping cart">
        <BagIcon />

        {amount && (
          <span className="absolute top-0.5 right-0 flex items-center justify-center size-4 bg-success-dark rounded-full text-white text-[0.625rem] p-0.5 box-content">
            {amount}
          </span>
        )}
      </button>

      <p className="flex flex-col">
        <span className="text-xs">Shopping cart:</span>
        <span className="font-semibold text-sm">{price ?? 0}</span>
      </p>
    </div>
  );
};
