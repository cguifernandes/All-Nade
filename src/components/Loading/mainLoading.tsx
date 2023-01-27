import { Card, Text, Img } from "@/styles/mainStyles";
import Skeleton from "react-loading-skeleton";

const LoadingMain = () => {
    return (  
        <>
            <Card>
                <Img>
                    <h3><Skeleton /></h3>
                    <Skeleton height="400px"/>
                </Img>
                <Text>
                    <div className="vote">
                        <Skeleton />
                    </div>
                    <p><Skeleton height="100px"/></p>
                </Text>
            </Card>
        </>
    );
}
 
export default LoadingMain;