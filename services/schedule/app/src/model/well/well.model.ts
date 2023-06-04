import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface GroupInterface {
  id?: string;

  short_name?: string;

  full_name?: string;
}

@Table({ tableName: 'group' })
export default class GroupModel extends Model implements GroupInterface {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.STRING,
  })
  short_name: string;

  @Column({
    type: DataType.STRING,
  })
  full_name: string;
}
