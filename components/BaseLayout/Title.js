import title from './../../styles/BaseLayout/Title.module.scss';

const Title = ({text}) => {
    return(
        <div className={title.titleWrapper}>
            <div className={title.title}>
                {text}
            </div>
            <img src='/img/titleUnderlineImg.png' className={title.underlineImg} />
        </div>
    )
}

export default Title