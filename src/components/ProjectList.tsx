import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Project from "../types/Project";


export function ProjectList() {
    const [projects, setProjects] = useState(new Array<Project>());

    useEffect(() => {
        const json = fetch("../projects/projectData.json", {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(function (myJson) {
                console.log(myJson);
                setProjects(myJson.projects);
            });
    }, []);

    const getProjects = () => {
        return projects.map((p,i) => <ProjectCard project={p} index={i} />);
    };

    return (
        <>
            <Container>
                {getProjects()}
            </Container>
        </>
    );

}
