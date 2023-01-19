import { Container, Email, Footer, Header, Form, Overlay, Senha, Nome, Button, Text } from "@/styles/cadastroStyles";
import IDV from "../Header/logo";
import { HashStraight, Eye, IdentificationCard, EyeSlash } from "phosphor-react";
import { useState } from "react";
import { toast, Toaster } from 'react-hot-toast';

const Cadastro = ({setActiveForm} : any) => {
    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');  
    const [senha, setSenha] = useState('');
    const [show, setShow] = useState(false);

    const handleSubmit = (e : any) => {
        e.preventDefault();

        const alert = (error : any) => 
        toast.error(error, {
            position: 'top-right',
            duration: 4200,
            style: {
                padding: '16px',
                color: '#090909',
            },
            iconTheme: {
                primary: '#FF0000',
                secondary: '#FFFAEE',
            },
        });

        if (!email && !nome && !senha) {
            alert('Preencha todos os campos!')
        } else if (!email && !nome) {
            alert('Preencha os campos E-mail e Nome!')
        } else if (!email && !senha) {
            alert('Preencha os campos E-mail e Senha!')
        } else if (!email) {
            alert('Preencha o campo E-mail!')
        } else if (!nome && !senha) {
            alert('Preencha os campos Nome e Senha!')
        } else if (!senha) {
            alert('Preencha o campo Senha!')
        } else if (!nome) {
            alert('Preencha o campo Nome!')
        }
    }

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
                </Header>
                <Form onSubmit={handleSubmit}>
                    <Email>
                        <input placeholder="" autoComplete='on' type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <label>E-mail</label>
                        <HashStraight className="icon" />
                    </Email>
                    <Nome>
                        <input placeholder="" autoComplete='on' type="name" onChange={(e) => setNome(e.target.value)} value={nome} />
                        <label>Nome</label>
                        <IdentificationCard className="icon" />
                    </Nome>
                    <Senha>
                        <input placeholder="" maxLength={8} type={show ? "text" : "password"} onChange={(e) => setSenha(e.target.value)} value={senha} />
                        <label>Senha</label>
                        {
                            show ?
                            <EyeSlash onClick={() => handleShow()} className="icon" />
                            :
                            <Eye onClick={() => handleShow()} className="icon" />
                        }   
                    </Senha>
                    <Button>
                        <button type='submit'>Login</button>
                        <button>Logar com google</button>
                    </Button>
                </Form>
                <Footer>
                    <Text>
                        <a className="senha">Esqueceu a senha?</a>
                        <p>Não tem uma conta?<a href="https://dribbble.com/shots/17408454-Login-Form-Prototype"> Crie uma!</a></p>
                    </Text>
                </Footer>
            </Container>
        </>
    );
}
 
export default Cadastro;