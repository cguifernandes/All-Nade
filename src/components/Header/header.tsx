import { Container, Menu, Logo, Ul, Button, Account, UserAccount, List, Email, Text, Caret } from '../../styles/headerStyles';
import { useEffect, useRef, useState } from 'react';
import LogoSVG from '../../assets/logoSVG';
import { User, SignOut, CaretUp } from "phosphor-react";
import { parseCookies, destroyCookie } from 'nookies';
import api from '@/services/api';
import { typeClients } from '../Cadastro/cadastro';

const Header = ({setActiveCadastro} : any) => {
    const [ID, setID] = useState<typeClients[]>()
    const [active, setActive] = useState(false)
    const ID_Client = parseCookies();

    var ul = useRef(null);
    var menuResponsive = useRef(null);
    var li1 = useRef(null);
    var li2 = useRef(null);
    var li3 = useRef(null);
    
    var btnMenu : any;
    var list : any;
    
    useEffect(() => {
        var clientCard : any = [];
        
        if (ID_Client["ID_CLIENT"]) {
            (async () => {
                try {
                    const response = await api.get(`/clients/${ID_Client['ID_CLIENT']}`);
                    clientCard.push(response.data.data);
                    setID(clientCard);
                } catch(err) {
                    console.log(err);
                }
            })();
        }
    }, [ID_Client]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        btnMenu = menuResponsive.current;
        btnMenu.addEventListener('click', EventListener)
        return () => {btnMenu.removeEventListener('click', EventListener)};
    });

    const EventListener = () => {
        var lis = [li1.current, li2.current, li3.current];
        list = ul.current;

        if (list.classList.contains('active')) {
            list.classList.remove('active');
            btnMenu.classList.remove('active');
        }
        else {
            list.classList.add('active');
            btnMenu.classList.add('active');
        }
        AnimateLinks(lis);
    };

    const AnimateLinks = (links : any) => {
        links.forEach((link : any, index : any) => {
            if (!list.classList.contains('active')) {
                link.style.animation = `navLinkFadeOut 0.5s ease`;
            }
            else {
                link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    };

    const handlerClick = () => {
        window.location.reload();
        destroyCookie(null, "ID_CLIENT")
    }

    return (  
        <Container>
            <Logo>
                <LogoSVG />
            </Logo>
            <Ul ref={ul}>
                <li ref={li1} className='li'><a href='#about'>Sobre</a></li>
                <li ref={li2} className='li'><a href='#produtos'>Produtos</a></li>
                <li ref={li3} className='li'><a href='#contato'>Contato</a></li>
            </Ul>
            <Menu ref={menuResponsive}>
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
            </Menu>
            {
                ID != null ?
                <Account>
                    {ID.map((client) => {
                        return (
                            <>
                                <UserAccount key={client._id} onClick={() => setActive(!active)}>
                                    <p>{client.nome}</p>
                                    <User className='icon account' />
                                </UserAccount>
                                {
                                    active &&
                                    <>
                                        <Caret key={client.senha}>
                                            <CaretUp className='icon' />
                                        </Caret>
                                        <List>
                                            <Email>
                                                <p>Email: {client.email}</p>
                                            </Email>
                                            <div className="line"></div>
                                            <Text onClick={() => handlerClick()}>
                                                <p>Sair</p>
                                                <SignOut className='icon' />
                                            </Text>
                                        </List>
                                    </>
                                }
                            </>
                        )})}
                </Account>
                :
                <Button>
                    <button onClick={() => setActiveCadastro(true)}><User className='icon button' />Cadastrar</button>
                </Button>
            }
        </Container>
    );
}
 
export default Header;