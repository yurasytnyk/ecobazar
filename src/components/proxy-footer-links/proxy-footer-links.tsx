import Link from "next/link";

export const ProxyFooterLinks = () => {
  return (
    <ul className="flex flex-col gap-3">
      <li className="text-white  text-base mb-2">Proxy</li>

      <li>
        <Link href="/" className="hover:text-white">About</Link>
      </li>

      <li>
        <Link href="/" className="hover:text-white">Shop</Link>
      </li>

      <li>
        <Link href="/" className="hover:text-white">Product</Link>
      </li>

      <li>
        <Link href="/" className="hover:text-white">Track Order</Link>
      </li>
    </ul>
  );
};
