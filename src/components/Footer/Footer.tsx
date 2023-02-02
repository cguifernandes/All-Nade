import { Container, Text, Sociais } from "@/styles/footerStyles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (  
        <Container>
            <Sociais>
                <div className="hover">
                    <a href="https://www.instagram.com/_.guiii/"><FontAwesomeIcon className='icon' icon={faInstagram} /></a>
                </div>
                <div className="hover">
                    <a href="https://www.linkedin.com/in/guilherme-fernandes-6b1353243/"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
                </div>
                <div className="hover">
                    <a href="https://github.com/cguifernandes"><FontAwesomeIcon className='icon' icon={faGithub} /></a>
                </div>
                <div className="hover">
                    <a href="mailto:gui.adfer@gmail.com.com"><FontAwesomeIcon className='icon' icon={faAt} /></a>
                </div>
            </Sociais>
            <Text>
                <p>Feito por <a href="https://github.com/cguifernandes">Guilherme Fernandes</a></p>
            </Text>
        </Container>
    );
}
 
export default Footer;