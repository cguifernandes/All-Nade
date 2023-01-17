import { Container, Footer, Header, Input, Overlay } from "@/styles/cadastroStyles";

const Cadastro = ({setActiveForm} : any) => {
    return (  
        <Overlay onClick={(e) => setActiveForm(false)}>
            <Container>
                <Header>
                    <p>iou</p>
                </Header>
                <Input>
                
                </Input>
                <Footer>

                </Footer>
            </Container>
        </Overlay>
    );
}
 
export default Cadastro;