import teamMemberView from './../../../styles/Team/TeamMemberView.module.scss';

const TeamMemberView = ({name, position, image}) => {
    return(
            <div className={teamMemberView.teamMemberView}>
                <img src={image} className={teamMemberView.image} />
                <p className={teamMemberView.name} >{name}</p>
                <p className={teamMemberView.position} >{position}</p>
            </div>
    )
}

export default TeamMemberView