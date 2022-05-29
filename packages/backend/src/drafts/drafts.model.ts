import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface DraftCreationAttrs {
  content: string;
}

@Table({ tableName: 'drafts' })
export class Draft extends Model<Draft, DraftCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.TEXT, allowNull: true })
  content: string;
}
