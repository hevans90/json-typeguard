import { Observable } from "rxjs";

export interface Card {
  darkTheme?: boolean;
  imageUrl?: string;
  ribbon?: CardRibbon;
  body?: CardBody;
  footer?: CardFooter;
  likeable?: boolean;
  liked?: boolean;
  size?: 'small';
  cardStyle: 'gradient' | 'halfnhalf';
  url?: string;
}

export interface CardRibbon {
  text: string;
  filled: boolean;
}

export interface CardBody {
  heading?: string;
  text?: string;
  booking?: CardBooking;
  status?: CardStatus;
  tags?: CardTag[];
}

export interface CardTag {
  id: number;
  text: string;
}

export interface CardBooking {
  description: string;
  time?: string;
  date?: string;
}

export interface CardStatus {
  healthy: boolean;
  description: string;
}

export interface CardFooter {
  heading?: string;
  text?: string;
  button?: {
    // optional async callback that will execute before the buttonClicked event is emitted
    callback?: () => Observable<any>;
    text: string;
  };
}
