import Link from "next/link";
import { Button } from "../ui/button";
import { SiBluesky } from "react-icons/si";
function Logo() {
  return (
    <Button size='icon' className='bg-teal-300' asChild>
      <Link href='/'>
        <SiBluesky className='w-6 h-6' />
      </Link>
    </Button>
  );
}

export default Logo;
