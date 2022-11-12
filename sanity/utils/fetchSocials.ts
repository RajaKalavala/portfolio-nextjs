import { Skill } from "../../typings";
import { Social } from "./../../typings.d";

export const fetchSocials = async () => {
  const res = await fetch(`${process.env.Next_PUBLIC_BASE_URL}/api/getSocials`);

  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
};
