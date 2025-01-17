import instagramIcon from '../../assets/img/instagram.png'
import facebookIcon from '../../assets/img/facebook.png'
import linkedinIcon from '../../assets/img/linkedin.png'
import githubIcon from '../../assets/img/github.png'
import Tooltip from '../Tooltip'

export default function MediaSocial(){
    return(
        <div>

            {/* Logo Instagram */}
            <Tooltip dataTip={"Instagram"}>
                <img alt="Instagram" src={ instagramIcon }/>
            </Tooltip>

            {/* Logo Facebook */}

            <Tooltip dataTip={"Facebook"}>
                <img alt="Facebook" src={ facebookIcon }/>
            </Tooltip>

            {/* Logo LinkedIn */}
            <Tooltip dataTip={"Linkedin"}>
                <img alt="Linkedin" src={ linkedinIcon }/>
            </Tooltip>

            {/* Logo GitHub */}
            <Tooltip dataTip={"Github"}>
                <img alt="Github" src={ githubIcon }/>
            </Tooltip>
        </div>
    )
}