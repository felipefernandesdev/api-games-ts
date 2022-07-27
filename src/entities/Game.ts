import { randomUUID as uuid } from 'crypto';

export interface IGameDTO {
  id?: string;
  name: string;
  releaseData: string;
  designer: string;
  developer: string;
  genre: string;
  mode: string;
  platform: string;
}

class Game {
  id?: string;
  name!: string;
  releaseData!: string;
  designer!: string;
  developer!: string;
  genre!: string;
  mode!: string;
  platform!: string;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Game };
