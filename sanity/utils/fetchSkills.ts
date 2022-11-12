import { Skill } from "./../../typings.d";

export const fetchSkills = async () => {
  const res = await fetch(`${process.env.Next_PUBLIC_BASE_URL}/api/getSkills`);

  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
};
