import Title from "../../BaseLayout/Title";
import TeamMemberView from "../TeamMemberView/TeamMemberView";

import teamMembersList from './../../../styles/Team/TeamMembersList.module.scss';

const TeamMembersList = ({title, members}) => {
    return (
        <div className={teamMembersList.teamMembersList}>
            <Title {...{text: title}}/>
            <div className={teamMembersList.container}>
                {
                    members.map(i =>
                        <TeamMemberView name={i.name} position={i.position} image={i.image}/>)
                }
            </div>
        </div>
    )
} 

export default TeamMembersList