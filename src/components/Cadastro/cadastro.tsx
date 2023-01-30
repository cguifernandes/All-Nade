import { Container, Email, Footer, Header, Form, Overlay, Senha, Nome, Button, Text } from "@/styles/cadastroStyles";
import { HashStraight, Eye, IdentificationCard, EyeSlash, X } from "phosphor-react";
import { useState } from "react";
import { db } from "../../services/api";
import { setCookie } from "nookies";
import { errorAlert, successfullAlert } from "../Utils/alert";

const Cadastro = ({setActiveCadastro, setActiveLogin} : any) => {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');  
    const [senha, setSenha] = useState('');
    const [show, setShow] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e : any) => {
        e.preventDefault();

        if (!email && !nome && !senha) {
            errorAlert('Preencha todos os campos.');
        } else if (!email && !nome) {
            errorAlert('Preencha os campos E-mail e Nome.');
        } else if (!email && !senha) {
            errorAlert('Preencha os campos E-mail e Senha.');
        } else if (!email) {
            errorAlert('Preencha o campo E-mail.');
        } else if (!nome && !senha) {
            errorAlert('Preencha os campos Nome e Senha.');
        } else if (!senha) {
            errorAlert('Preencha o campo Senha.');
        } else if (!nome) {
            errorAlert('Preencha o campo Nome.');
        }

        else {
            setIsLoading(true);
            if (await verifyEmail()) {
                try {
                    const {data} = await db.post('/createClient', {nome, email, senha})
                    setNome('');
                    setEmail('');
                    setSenha('');
                    successfullAlert('Cadastro feito, seja bem-vindo(a)');
                    setCookie(null, 'ID_CLIENT', data.data._id, {
                        path: '/',
                        maxAge: 86400 * 7,
                        SameSite: null
                    });
                    setIsLoading(false);
                    setActiveCadastro(false);
                } catch (error) {
                    console.log(error)
                    setIsLoading(false);
                }
            }

            else {
                errorAlert('Este e-mail já está sendo usado.');
                setIsLoading(false);
            }
        }
    }

    const verifyEmail = async () => {
        const {data} = await db.get('/getClient');
        for (let i = 0; i < data.data.length; i++) {
            if (data.data[i].email === email) {
                return false;
            }
        }
        return true;
    }

    const handlerLogin = () => {
        setActiveLogin(true);
        setActiveCadastro(false);
    }

    return (  
        <>
            <Overlay onClick={() => setActiveCadastro(false)} ></Overlay>
            <Container>
                <Header>
                    <h1>CADASTRO</h1>
                    <button onClick={() => setActiveCadastro(false)}>
                        <X className="icon" />
                    </button>
                </Header>
                <Form onSubmit={handleSubmit}>
                    <Email>
                        <input placeholder="E-mail" autoComplete='on' type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <HashStraight className="icon" />
                    </Email>
                    <Nome>
                        <input placeholder="Nome" autoComplete='on' type="name" onChange={(e) => setNome(e.target.value)} value={nome} />
                        <IdentificationCard className="icon" />
                    </Nome>
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
                            <p>Registrar</p>
                        </button>
                    </Button>
                </Form>
                <Footer>
                    <Text>
                        <p>Já tem uma conta?<a onClick={() => handlerLogin()}> Logar!</a></p>
                    </Text>
                </Footer>
            </Container>
        </>
    );
}
 
export default Cadastro;