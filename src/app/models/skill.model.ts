export enum SkillCategory {
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  DEVOPS = 'DevOps',
  TOOLS = 'Tools'
}

export interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
  level?: number;
}
