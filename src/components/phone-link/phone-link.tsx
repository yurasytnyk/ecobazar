import { PhoneIcon } from "@/components/icons/phone-icon";

interface Props {
  tel: string;
}

export const PhoneLink = ({ tel }: Props) => {
  return (
    <a href={`tel:${tel}`} className="flex items-center gap-2">
      <PhoneIcon />

      {tel}
    </a>
  );
};
