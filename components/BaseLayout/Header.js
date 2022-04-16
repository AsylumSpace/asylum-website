import header from './../../styles/BaseLayout/Header.module.scss';
import Link from 'next/link';
import { headerMenu } from '../../data/navigation/header-menu';
import { socials } from '../../data/navigation/socials';

const Header = () => {
    return(
        <header className={header.headerWrapper}>
            <div className={`${header['header']} baseWrapper`}>
                <img className={header.logo} src={`/img/icons/asylumLogo.svg`} alt="logo"/>
                <div className={header.rightsideWrapper}>
                    {/*<div className={header.menuWrapper}>*/}
                    {/*    <ul>*/}
                    {/*        {*/}
                    {/*            headerMenu.map((item, i) =>*/}
                    {/*                <li key={i.toString()}>*/}
                    {/*                    <a href={item.link}>*/}
                    {/*                        <span>{item.title}</span>*/}
                    {/*                    </a>*/}
                    {/*                </li>*/}
                    {/*            )*/}
                    {/*        }*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                    <div className={header.socialsWrapper}>
                        <ul>
                            {
                                socials.map((item,i) =>
                                    <li className={header.socialsNav}>
                                        <a href={item.link} target='_blank'>
                                            <div className={header.social}>
                                                <img className={header.socialNormal} src={item.greyImagePath} alt={item.name}/>
                                                <img className={header.socialColored} src={item.coloredImagePath} alt={item.name}/>
                                            </div>
                                        </a>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header