import { SprintObjectDef } from "./sprint-object-def";

export interface ReleasesObject {
  releaseId: number;
  releaseName: string;
  releaseStartDate: Date;
  releaseEndDate: Date;
  sprints: SprintObjectDef;
}
