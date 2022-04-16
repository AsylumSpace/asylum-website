import partners from '../../styles/Homepage/Partners.module.scss'
import Title from "../BaseLayout/Title";

const Partners = () => {
    return (
        <div className={`${partners.partnersWrapper} baseWrapper`}>
            <Title text="Our Partners" />
            <div className={partners.partnersContainer}>
                <div className={partners.containerUnderline} />
            </div>
        </div>
    )
}

export default Partners;