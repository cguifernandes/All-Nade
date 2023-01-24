import { Container, Header, Overlay, Form, Button, Email, Senha } from "@/styles/loginStyles";
import { useState } from "react";
import { HashStraight, Eye, EyeSlash, X } from "phosphor-react";
import { Toaster, toast } from 'react-hot-toast';
import LoginSVG from "../../assets/LoginSVG";

const Login = ({setActiveLogin} : any) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [show, setShow] = useState(false);

    const errorAlert = (message : any) => 
    toast.error(message, {
        position: 'top-right',
        duration: 2200,
        style: {
            padding: '16px',
            color: '#090909',
        },
        iconTheme: {
            primary: '#FF0000',
            secondary: '#FFFAEE',
        },
    });

    const handlerSubmit = (e : any) => {
        e.preventDefault();

        if (!email && !senha){
            errorAlert('Preencha todos os campos.');
        } else if (!email) {
            errorAlert('Preencha o campo E-mail.');
        } else if (!senha) {
            errorAlert('Preencha o campo Senha.');
        }

        else {
            const Clients = await api.get('/clients');
        }

    }

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
                <Form onSubmit={handlerSubmit}>
                    <Email>
                        <input placeholder="E-mail" autoComplete='on' type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <HashStraight className="icon" />
                    </Email>
                    <Senha>
                        <input placeholder="Senha" maxLength={9} type={show ? "text" : "password"} onChange={(e) => setSenha(e.target.value)} value={senha} />
                        {
                            show ?
                            <EyeSlash onClick={() => setShow(!show)} className="icon" />
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