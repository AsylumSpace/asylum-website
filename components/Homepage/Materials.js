import Title from "../BaseLayout/Title";
import materials from "../../styles/Homepage/Materials.module.scss"

const Materials = () => {
    return (
        <div className={materials.materialsWrapper}>
            <div className={`${materials.materialsContainer} baseWrapper`}>
                <Title {...{text: 'Materials'}}/>
                <div className={materials.materialsHolderDesktop}>
                    <img className={materials.materialsIllustration} src="/img/materials-illustration.png" alt='illustration'/>
                    <div className={materials.buttonsContainer}>

                        <a href="/">
                            <div className={`${materials.buttonWrapper} ${materials.buttonWrapperFirst}`}>
                                <div className={materials.button}>
                                    <span>Download pitch-deck</span>
                                </div>
                            </div>
                        </a>

                        <a href="/">
                            <div className={`${materials.buttonWrapper} ${materials.buttonWrapperSecond}`}>
                                <div className={materials.button}>
                                    <span>Download litepaper</span>
                                </div>
                            </div>
                        </a>

                    </div>
                    <img className={materials.materialsIllustrationRightside} src="/img/materials-illustration1.png" alt='illustration'/>
                </div>

                <div className={materials.materialsHolderMobile}>
                    <img className={materials.materialsIllustration} src="/img/materials-illustration.png" alt='illustration'/>
                    <div className={materials.buttonsContainer}>

                        <a href="/">
                            <div className={`${materials.buttonWrapper} ${materials.buttonWrapperFirst}`}>
                                <div className={materials.button}>
                                    <span>Download pitch-deck</span>
                                </div>
                            </div>
                        </a>

                        <a href="/">
                            <div className={`${materials.buttonWrapper} ${materials.buttonWrapperSecond}`}>
                                <div className={materials.button}>
                                    <span>Download litepaper</span>
                                </div>
                            </div>
                        </a>

                    </div>
                    <img className={materials.materialsIllustrationRightside} src="/img/materials-illustration1.png" alt='illustration'/>
                </div>
            </div>
        </div>
    )
}

export default Materials;