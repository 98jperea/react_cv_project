import React from 'react';
import styles from "./ProjectCard.module.css";
import projectImage from '../../assets/projects/project.png';
import { getImageUrl } from '../../utils';

export const ProjectCard = ({ 
    project: {title, imageSrc, description, skills, demo, source} 
}) => {
    return (
        <div className={styles.container}>
            <img 
                src={projectImage} 
                alt={`Image of ${projectImage}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>{
                skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>
                            {skill};
                        </li>
                    );
                })}
            </ul>
            <div className={styles.links}>
                <a href={demo} className={styles.links}>
                    Demo
                </a>
                <a href={source} className={styles.links}>
                    Source
                </a>
            </div>
        </div>
    );
}