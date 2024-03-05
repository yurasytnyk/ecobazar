import Link from "next/link";

export const HelpFooterLinks = () => {
  return (
    <ul className="flex flex-col gap-3">
      <li className="text-white  text-base mb-2">Helps</li>

      <li>
        <Link href="/" className="hover:text-white">Contact</Link>
      </li>

      <li>
        <Link href="/" className="hover:text-white">FAQS</Link>
      </li>

      <li>
        <Link href="/" className="hover:text-white">Terms & Conditions</Link>
      </li>

      <li>
        <Link href="/" className="hover:text-white">Privacy Policy</Link>
      </li>
    </ul>
  );
};
