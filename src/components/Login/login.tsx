import { Container, Header, Overlay, Form, Button, Email, Senha, Text } from "@/styles/loginStyles";
import { useState } from "react";
import { HashStraight, Eye, EyeSlash, X } from "phosphor-react";
import { db } from "../../services/api";
import { setCookie } from "nookies";
import { errorAlert, successfullAlert } from "../Utils/alert";

const Login = ({setActiveLogin, setActiveCadastro} : any) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


    const handlerSubmit = async (e : any) => {
        e.preventDefault();

        if (!email && !senha){
            errorAlert('Preencha todos os campos.');
        } else if (!email) {
            errorAlert('Preencha o campo E-mail.');
        } else if (!senha) {
            errorAlert('Preencha o campo Senha.');
        }

        else {
            setIsLoading(true);
            if (await verifyExist()) {
                const {data} = await db.get('/getClient');
                for (let i = 0; i < data.data.length; i++) {
                    if (email == data.data[i].email && senha == data.data[i].senha) {
                        setCookie(null, 'ID_CLIENT', data.data[i]._id, {
                            path: '/',
                            maxAge: 86400 * 7,
                            SameSite: null
                        });
                        setIsLoading(false);
                    }
                } 
                setEmail('');
                setSenha('');
                setActiveLogin(false);
                successfullAlert('Login feito, seja bem-vindo(a)');
            }
    
            else {
                errorAlert('Usuário não esta cadastrado.');
                setIsLoading(false);
            }
        } 
    }

    const verifyExist = async () => {
        const {data} = await db.get('/getClient');
        for (let i = 0; i < data.data.length; i++) {
            if (email === data.data[i].email && senha === data.data[i].senha) {
                return true;
            }
        } 
        return false;
    }

    const handlerCadastro = () => {
        setActiveLogin(false);
        setActiveCadastro(true);
    }

    return (  
        <>
            <Overlay onClick={() => setActiveLogin(false)}></Overlay>
            <Container>
                <Header>
                    <h1>LOGIN</h1>
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
                        <button className={isLoading ? "loading" : undefined}>
                            <div className="spinner" />
                            <p>Logar</p>
                        </button>
                    </Button>
                </Form>
                <Text>
                    <p>Ainda não tem conta? <a onClick={() => handlerCadastro()}>Cadastre-se</a></p>
                </Text>
            </Container>
        </>
    );
}
 
export default Login;