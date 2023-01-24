import { Container, Header, Overlay, Form, Button, Email, Senha } from "@/styles/loginStyles";
import { useState } from "react";
import { HashStraight, Eye, EyeSlash, X } from "phosphor-react";
import { Toaster } from 'react-hot-toast';
import LoginSVG from "../../assets/LoginSVG";

const Login = ({setActiveLogin} : any) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [show, setShow] = useState(false);

    return (  
        <>
            <Overlay onClick={() => setActiveLogin(false)}></Overlay>
            <div><Toaster/></div>
            <Container>
                <Header>
                    <LoginSVG />
                    <button onClick={() => setActiveLogin(false)}>
                        <X className="icon" />
                    </button>
                </Header>
                <Form>
                    <Email>
                        <input placeholder="E-mail" autoComplete='on' type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <HashStraight className="icon" />
                    </Email>
                    <Senha>
                        <input placeholder="Senha" maxLength={9} type={show ? "text" : "password"} onChange={(e) => setSenha(e.target.value)} value={senha} />
                        {
                            show ?
                            <EyeSlash onClick={() =>setShow(!show)} className="icon" />
                            :
                            <Eye onClick={() => setShow(!show)} className="icon" />
                        }
                    </Senha>
                    <Button>
                        <button type='submit'>Logar</button>
                    </Button>
                </Form>
            </Container>
        </>
    );
}
 
export default Login;