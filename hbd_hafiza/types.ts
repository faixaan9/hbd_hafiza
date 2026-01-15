
export interface Surprise {
  id: number;
  title: string;
  message: string;
  icon: string;
  revealed: boolean;
}

export interface WallItem {
  id: string;
  type: 'shayari' | 'sorry' | 'confession';
  content: string;
  author: string;
  date: string;
}

export enum Section {
  HERO = 'hero',
  CALENDAR = 'calendar',
  SURPRISE = 'surprise',
  WALLS = 'walls',
  MAGIC = 'magic'
}
