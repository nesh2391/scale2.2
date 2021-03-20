import { SprintObjectDef } from "../general-interfaces/sprint-object-def";
import { StoriesPopUpData } from "../general-interfaces/StoriesDialogData";

export class SprintObject implements SprintObjectDef {
  sprintId: number;
  sprintName: string;
  sprintStart: Date;
  sprintEnd: Date;
  stories: StoriesPopUpData[];
}
