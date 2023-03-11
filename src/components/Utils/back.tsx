import Link from "next/link";
import { ArrowArcLeft } from "phosphor-react";

const Back = () => {
    return (  
        <Link href='/'>
            <ArrowArcLeft className="icon" />
        </Link>
    );
}
 
export default Back;