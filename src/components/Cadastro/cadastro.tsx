import { Container, Email, Footer, Header, Form, Overlay, Senha, Nome, Button, Text } from "@/styles/cadastroStyles";
import IDV from "../Header/logo";
import { HashStraight, Eye, IdentificationCard, EyeSlash, X } from "phosphor-react";
import { useEffect, useState } from "react";
import { toast, Toaster } from 'react-hot-toast';
import api from "../../services/api";

export type typeClients = {
    _id: string;
    email: string;
    senha: string;
    nome: string;
    createdAt: Date
}

const Cadastro = ({setActiveForm} : any) => {
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
        for (let i = 0; i < clients.length; i++) {
            if (clients[i].email == email) {
                return false
            }
        }
        return true
    }

    useEffect(() => {
        api.get('/clients').then(({data}) => {
            setClients(data.data)
        })
    }, [])

    const handleShow = () => {
        setShow(!show);  
    }

    return (  
        <>
            <Overlay onClick={() => setActiveForm(false)} ></Overlay>
            <div><Toaster/></div>
            <Container>
                <Header>
                    <IDV />
                    <p>Faça o login ou crie uma conta!</p>
                    <button onClick={() => setActiveForm(false)}>
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
                            <EyeSlash onClick={() => handleShow()} className="icon" />
                            :
                            <Eye onClick={() => handleShow()} className="icon" />
                        }   
                    </Senha>
                    <Button>
                        <button type='submit'>Registrar</button>
                        <button>Registrar com google</button>
                    </Button>
                </Form>
                <Footer>
                    <Text>
                        <p>Já tem uma conta?<a href="https://dribbble.com/shots/17408454-Login-Form-Prototype"> Logar!</a></p>
                    </Text>
                </Footer>
            </Container>
        </>
    );
}
 
export default Cadastro;