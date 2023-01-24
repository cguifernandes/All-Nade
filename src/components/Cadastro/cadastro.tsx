import { Container, Email, Footer, Header, Form, Overlay, Senha, Nome, Button, Text } from "@/styles/cadastroStyles";
import CadastroSVG from "../../assets/CadastroSVG";
import { HashStraight, Eye, IdentificationCard, EyeSlash, X } from "phosphor-react";
import { useState } from "react";
import { toast, Toaster } from 'react-hot-toast';
import api from "../../services/api";
import { setCookie } from "nookies";

export type typeClients = {
    _id: string;
    email: string;
    senha: string;
    nome: string;
    createdAt: Date
}

const Cadastro = ({setActiveCadastro, setActiveLogin} : any) => {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');  
    const [senha, setSenha] = useState('');
    const [show, setShow] = useState(false);
    const [clients, setClients] = useState<typeClients[]>([]);

    const handleSubmit = async (e : any) => {

        e.preventDefault();
        var clientsCards : any = [];

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

        const successfulAlert = (message : any) => 
        toast.success(message, {
            position: 'top-right',
            duration: 2200,
            style: {
                padding: '16px',
                width: '500px',
                color: '#090909',
            },
            iconTheme: {
                primary: '#00a000',
                secondary: '#FFFAEE',
            },
        });

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
            if (await verifyEmail()) {
                try {
                    const {data} = await api.post('/clients', {nome, email, senha})
                    clientsCards.push(data.data)
                    setClients(clientsCards)
                    setNome('');
                    setEmail('');
                    setSenha('');
                    successfulAlert('Cadastro feito, seja bem-vindo(a)');
                    setCookie(null, 'ID_CLIENT', data.data._id, {
                        path: '/',
                        maxAge: 86400 * 7,
                        SameSite: null
                    })
        
                } catch (error) {
                    console.log(error)
                }
            }

            else {
                errorAlert('Este e-mail já está sendo usado.');
            }
        }
    }

    const verifyEmail = async () => {
        const Clients = await api.get('/clients');
        for (let i = 0; i < Clients.data.data.length; i++) {
            if (Clients.data.data[i].email === email) {
                return false;
            }
        }
        return true;
    }

    const handleLogin = () => {
        setActiveLogin(true);
        setActiveCadastro(false);
    }

    return (  
        <>
            <Overlay onClick={() => setActiveCadastro(false)} ></Overlay>
            <div><Toaster/></div>
            <Container>
                <Header>
                    <CadastroSVG />
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
                        <button type='submit'>Registrar</button>
                    </Button>
                </Form>
                <Footer>
                    <Text>
                        <p>Já tem uma conta?<a onClick={() => handleLogin()}> Logar!</a></p>
                    </Text>
                </Footer>
            </Container>
        </>
    );
}
 
export default Cadastro;