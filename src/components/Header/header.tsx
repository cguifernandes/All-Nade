import { Container, Menu, Logo, Ul, Button } from '../../styles/headerStyles';
import { useEffect, useRef } from 'react';
import LogoSVG from '../../assets/logoSVG';
import { User } from "phosphor-react";

const Header = ({setActiveCadastro} : any) => {

    var ul = useRef(null);
    var menuResponsive = useRef(null);
    var li1 = useRef(null);
    var li2 = useRef(null);
    var li3 = useRef(null);

    var btnMenu : any;
    var list : any;

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
            <Button>
                <button onClick={() => setActiveCadastro(true)}><User className='icon' />Cadastrar</button>
            </Button>
        </Container>
    );
}
 
export default Header;