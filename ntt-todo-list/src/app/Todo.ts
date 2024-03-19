export class Todo {
  id: number;
  title: string;
  isCompleted: boolean;
  createdAt: Date;

  constructor(
    id: number,
    title: string,
    isCompleted: boolean,
    createdAt: Date,
  ) {
    this.id = createdAt.getTime();
    this.title = title;
    this.isCompleted = isCompleted;
    this.createdAt = createdAt;
  }
}
