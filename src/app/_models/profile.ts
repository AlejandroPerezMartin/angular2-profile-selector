interface Skill {
  name: string;
  level: number;
}

export class Profile {
  id: string;
  name: string;
  surname: string;
  email: string;
  skills: Array<Skill>;
  role: string;
}

