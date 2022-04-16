import TeamMembersList from "../components/Team/TeamMembersList/TeamMembersList";

import teamPage from './../styles/Team/TeamPage.module.scss';
import Head from "next/head";

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
        <>
        <Head>
            <title>Asylum team</title>
        </Head>
        <div className={teamPage.teamPage}>
            {
                TeamData.sections.map((i, k) =>
                    <TeamMembersList title={i.title} key={i.toString()} members={i.members}/>)
            }
        </div>
        </>
    )
}