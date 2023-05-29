import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface ScheduleInterface {
  id?: string;

  cabinet_id?: string;

  lesson_id?: string;

  teacher_id?: string;

  group_id?: string;

  date?: string;

  pair?: number;

  well?: number;

  self_training?: boolean;

  sub_group?: number;

  deactivated?: boolean;
}

@Table({ tableName: 'schedule' })
export default class ScheduleModel extends Model implements ScheduleInterface {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.UUID,
  })
  cabinet_id: string;

  @Column({
    type: DataType.UUID,
  })
  teacher_id: string;

  @Column({
    type: DataType.UUID,
  })
  group_id: string;

  @Column({
    type: DataType.UUID,
  })
  lesson_id: string;

  @Column({
    type: DataType.DATE,
  })
  date: string;

  @Column({
    type: DataType.INTEGER,
  })
  pair: number;

  @Column({
    type: DataType.INTEGER,
  })
  well: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  self_training: boolean;

  @Column({
    type: DataType.INTEGER,
  })
  sub_group: number;
}
