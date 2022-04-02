import TeamMembersList from "../components/Team/TeamMembersList/TeamMembersList";

import teamPage from './../styles/Team/TeamPage.module.scss';

const TeamData = {
    sections: [
        {
            title: "Team",
            members: new Array(7).fill({
                name: "Illia Abrosimov",
                position: "Founder | CEO",
                image: "/img/team/photo_ex.png",
            })
        },
        {
            title: "Advisors",
            members: new Array(4).fill({
                name: "Illia Abrosimov",
                position: "Founder | CEO",
                image: "/img/team/photo_ex.png",
            })
        }
    ]
}
export default function Team(){
    return (
        <div className={teamPage.teamPage}>
            {
                TeamData.sections.map(i =>
                    <TeamMembersList title={i.title} members={i.members}/>)
            }
        </div>
    )
}