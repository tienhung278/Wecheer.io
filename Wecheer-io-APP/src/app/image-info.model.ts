export interface ImageEvent {
  image: {
    imageUrl: string;
    description: string;
    timestamp: Date;
  };
  lastHourCount: number;
}
