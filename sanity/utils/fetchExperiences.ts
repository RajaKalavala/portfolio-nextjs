import { Experience } from "../../typings";

export const fetchExperiences = async () => {
  const res = await fetch(
    `${process.env.Next_PUBLIC_BASE_URL}/api/getExperiences`
  );

  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  return experiences;
};
