export interface ISession {
  id: string;
  movie_id: string;
  room: string;
  capacity: number;
  day: Date;
  time: string;
  created_at: Date;
  updated_at: Date;
}
