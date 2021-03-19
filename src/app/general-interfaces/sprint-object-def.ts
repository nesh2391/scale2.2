import { StoriesPopUpData } from "./StoriesDialogData";

export interface SprintObjectDef {
  sprintId: number;
  sprintName: string;
  sprintStart: Date;
  sprintEnd: Date;
  stories: StoriesPopUpData[];
}
