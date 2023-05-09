import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ScheduleInterface } from '../../interfaces/schedule/schedule.interface';

@Table({ tableName: 'schedule' })
export default class ScheduleModel extends Model implements ScheduleInterface {
  @Column({
    type: DataType.UUID,
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
    type: DataType.DATE,
  })
  date: string;

  @Column({
    type: DataType.INTEGER,
  })
  pair: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  self_training: boolean;

  @Column({
    type: DataType.INTEGER,
  })
  sub_group: number;
}
