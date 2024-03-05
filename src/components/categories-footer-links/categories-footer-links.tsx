import Link from "next/link";

export const CategoriesFooterLinks = () => {
  return (
    <ul className="flex flex-col gap-3">
      <li className="text-white  text-base mb-2">Categories</li>

      <li>
        <Link href="/" className="hover:text-white">Fruit & Vegetables</Link>
      </li>

      <li>
        <Link href="/" className="hover:text-white">Meat & Fish</Link>
      </li>

      <li>
        <Link href="/" className="hover:text-white">Bread & Bakery</Link>
      </li>

      <li>
        <Link href="/" className="hover:text-white">Beauty & Health</Link>
      </li>
    </ul>
  );
};
