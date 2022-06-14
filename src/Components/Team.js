import React from "react";
import teamData from "../Data/Teamdata";
import Teamcard from "./Teamcard";
import Layout from "./Layout";
import TeamImg from "../Assets/Images/Team.png"

function Team() {

    return (
        <Layout id='teampage'>
            <h1 id="team-heading">The Team
            <img src={TeamImg} alt="team" id="teamImg"/>
            </h1>
            <section id="team">
                {teamData ? teamData.map((element, key) => <Teamcard key={key} name={element.name} role={element.role} git={element.github} linkedin={element.linkedin} mail={element.mail} image={element.image}/>): <></>}
            </section>
        </Layout>
    );
}

export default Team;