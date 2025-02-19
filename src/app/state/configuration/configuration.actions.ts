import { createAction, props } from '@ngrx/store';
import { GitHubTeamModel } from '../../git-hub.service';

export const changeToken = createAction(
  '[Configuration] Change Token',
  props<{ token: string }>(),
);

export const changeTeamsFilter = createAction(
  '[Configuration] Change Teams Filter',
  props<{ filter: GitHubTeamModel[] }>(),
);

export const changeTeamRepositoryFilter = createAction(
    '[Configuration] Change Repos Filter',
    props<{ filter: any[] }>(),
);

export const changeStatusFilter = createAction(
  '[Configuration] Change Status Filter',
  props<{ filter: string[] }>(),
);

export const changeConclusionFilter = createAction(
  '[Configuration] Change Conclusion Filter',
  props<{ filter: string[] }>(),
);

export const changePollingInterval = createAction(
  '[Configuration] Change Polling Interval',
  props<{ interval: number }>(),
);

export const addWorkflowNameFilter = createAction(
  '[Configuration] Add Workflow Name Filter',
  props<{ filter: string }>(),
);

export const removeWorkflowNameFilter = createAction(
  '[Configuration] Remove Workflow Name Filter',
  props<{ filter: string }>(),
);

