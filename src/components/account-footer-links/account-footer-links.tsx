import Link from "next/link";

export const AccountFooterLinks = () => {
  return (
    <ul className="flex flex-col gap-3">
      <li className="text-white text-base mb-2">My Account</li>

      <li>
        <Link href="/" className="hover:text-white">My Account</Link>
      </li>

      <li>
        <Link href="/" className="hover:text-white">Order History</Link>
      </li>

      <li>
        <Link href="/" className="hover:text-white">Shopping Cart</Link>
      </li>

      <li>
        <Link href="/" className="hover:text-white">Wishlist</Link>
      </li>
    </ul>
  );
};
