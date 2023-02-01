import Link from "next/link";
import { ArrowCounterClockwise } from "phosphor-react";

const Back = () => {
    return (  
        <Link href='/'>
            <ArrowCounterClockwise className="icon" />
        </Link>
    );
}
 
export default Back;