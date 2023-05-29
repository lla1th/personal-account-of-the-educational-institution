import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface cabinetsInterface {
  id?: string;

  full_name: string;

  short_name: string;
}

@Table({ tableName: 'cabinets' })
export default class CabinetModel extends Model implements cabinetsInterface {
  @Column({
    type: DataType.UUID,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING,
  })
  full_name: string;

  @Column({
    type: DataType.STRING,
  })
  short_name: string;
}
