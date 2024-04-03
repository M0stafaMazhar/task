import { User } from './user';

export interface Res {
  data: User[];
  page: number;
  per_page: number;
  total: number;
  Stotal_pages: number;
}
