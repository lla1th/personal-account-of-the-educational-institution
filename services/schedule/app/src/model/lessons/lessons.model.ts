import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface lessonsInterface {
  id?: string;

  name: string;

  code: string;
}

@Table({ tableName: 'lessons' })
export default class LessonsModel extends Model implements lessonsInterface {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  code: string;
}
