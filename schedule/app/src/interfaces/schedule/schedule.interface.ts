export interface ScheduleInterface {
  id?: string;

  cabinet_id?: string;

  lesson_id?: string;

  teacher_id?: string;

  group_id?: string;

  date?: string;

  pair?: number;

  self_training?: boolean;

  sub_group?: number;

  deactivated?: boolean;
}
