import prismaClient from '../../../../shared/infra/prisma/prismaClient';
import { IGameDTO } from '../entities/Game';
import { IGameRepository } from './IGameRepository';

class GameRepository implements IGameRepository {
  async register({ designer, developer, genre, mode, name, platform, releaseData }: IGameDTO): Promise<void> {
    await prismaClient.game.create({
      data: {
        designer,
        developer,
        genre,
        mode,
        name,
        platform,
        releaseData
      }
    });
  }
}

export { GameRepository };
