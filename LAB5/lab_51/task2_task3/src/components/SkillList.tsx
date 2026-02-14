import React from 'react';
import { Skill, SkillLevel } from '../types/types';

interface SkillListProps {
skills: Skill[]; // Array type (Ch. 6, p. 93)
}
const SkillList = ({ skills }: SkillListProps) => {
return (
<ul>
{skills.map((skill) => (
<li key={skill.id}>
{skill.name} - {skill.level}
</li>
))}
</ul>
);
};
