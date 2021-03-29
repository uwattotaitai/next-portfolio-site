import { GetStaticProps } from 'next';
import React, { FC } from 'react'

import ProjectCards from '../components/ProjectCards'
import { Project, FetchProject } from '../types';

interface ProjectsProps {
    projects: Project[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
    return (
        <>
            <ProjectCards 
                projects={projects} 
            />
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const res: FetchProject = await fetch('https://next-portfolio.microcms.io/api/v1/projects', {
        headers: {"X-API-KEY":process.env.API_KEY}
    })
    .then(res => res.json())
    .catch(() => null);

    return {
        props: {
            projects: res.contents,
        }
    }
}

export default Projects;