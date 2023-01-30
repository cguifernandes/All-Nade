import { Container, Favoritos, Button, Account, UserAccount, List, Email, Text, Caret, Logo } from '../../styles/headerStyles';
import { useEffect, useState } from 'react';
import { User, SignOut, CaretUp, Star } from "phosphor-react";
import { parseCookies, destroyCookie } from 'nookies';
import { db } from "../../services/api";
import { typeClients } from '../../types/types';
import Skeleton from 'react-loading-skeleton';
import router from 'next/router';
import { Input } from '@/styles/searchStyles';

const Header = ({setActiveCadastro, setFavorites, favorites} : any) => {
    const [ID, setID] = useState<typeClients[]>();
    const [isLoading, setIsLoading] = useState(false);
    const [active, setActive] = useState(false);
    const ID_Client = parseCookies();

    useEffect(() => {
        var clientCard : any = [];
        
        if (ID_Client["ID_CLIENT"]) {
            setIsLoading(true);
            (async () => {
                try {
                    const response = await db.get(`${ID_Client['ID_CLIENT']}`);
                    clientCard.push(response.data.data);
                    setID(clientCard);
                    setIsLoading(false);
                } catch(err) {
                    console.log(err);
                    setIsLoading(false);
                }
            })();
        }
    }, [ID_Client["ID_CLIENT"]]);

    const handlerClick = () => {
        router.reload();
        destroyCookie(null, "ID_CLIENT")
    }

    return (  
        <Container>
            <Input>
            </Input>
            {
                ID != null && !isLoading ?
                <Account>
                    {
                        ID?.map((client) => {
                            return (
                                <div key={client.email} >
                                    <UserAccount 
                                    onClick={() => setActive(!active)}>
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
                                                <Text onClick={handlerClick}>
                                                    <p>Sair</p>
                                                    <SignOut className='icon' />
                                                </Text>
                                            </List>
                                        </>
                                    }
                                </div>
                            )})
                    }
                </Account>
                :
                isLoading ?
                <Account>
                    <Skeleton width={240} height={30}></Skeleton>
                </Account>
                :
                <Button>
                    <button onClick={() => setActiveCadastro(true)}><User className='icon button' />Cadastrar</button>
                </Button>
            }
            <Logo>
                <h2>ALL NADE</h2>
            </Logo>
            <Favoritos onClick={() => setFavorites(!favorites)}>
                <Star className='icon' weight='fill' />
            </Favoritos>
        </Container>
    );
}
 
export default Header;