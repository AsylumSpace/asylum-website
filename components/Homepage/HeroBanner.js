import banner from '../../styles/Homepage/HeroBanner.module.scss'


const HeroBanner = () => {
    return (
        <div className={banner.heroBannerWrapper}>
            <div className={`${banner['heroBanner']} baseWrapper`}>
                <img className={banner.heroIllustrationDesktop} src='/img/banner.png' alt='illustration'/>
                <img className={banner.heroIllustrationMobile} src='/img/banner-mobile.png' alt='illustration'/>
                <h1 className={banner.heroTitle}>Entrypoint to the <br/> gaming metaverse</h1>
            </div>
        </div>
    )
}

export default HeroBanner;