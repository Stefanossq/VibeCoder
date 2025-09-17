
export interface QuestStep {
  level: number;
  title: string;
  description: string;
  xp: number;
}

export interface Quest {
  title:string;
  description: string;
  steps: QuestStep[];
}
