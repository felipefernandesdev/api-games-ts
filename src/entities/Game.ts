import { randomUUID as uuid } from 'crypto';

class Game {
  id?: string;
  name!: string;
  releaseData!: string;
  designer!: string;
  developer!: string;
  genre!: string;
  mode!: string;
  platform!: string;
  created!: Date;
  updated!: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Game };
