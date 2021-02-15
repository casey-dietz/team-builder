import React from "react";
import teamData from "../Data";

const Member = (teamData) => {
    return (
        <div>
            <h3>Name: {teamData.name}</h3>
            <h3>Email: {teamData.email}</h3>
            <h3>Role: {teamData.role}</h3>
        </div>
    )
}

export default Member