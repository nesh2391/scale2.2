import { StoriesPopUpData } from "./StoriesDialogData";

export interface SprintObjectDef {
  sprintId: number;
  sprintName: string;
  sprintStart: number;
  sprintEnd: number;
  stories: StoriesPopUpData[];
}
