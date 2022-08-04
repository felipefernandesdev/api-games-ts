import { Request, Response } from 'express';

import { IGameDTO } from '../../infra/entities/Game';
import { GameRepository } from '../../infra/repositories/GameRepository';
import { RegisterGameUseCase } from './RegisterGameUseCase';

const factory = () => {
  const gameRepository = new GameRepository();
  const useCase = new RegisterGameUseCase(gameRepository);

  return useCase;
};

class RegisterGameController {
  constructor(private useCase: RegisterGameUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { designer, developer, genre, mode, name, platform, releaseData }: IGameDTO = request.body;

    // await this.useCase.execute({ designer, developer, genre, mode, name, platform, releaseData });
    await factory().execute({ designer, developer, genre, mode, name, platform, releaseData });

    return response.status(201).json({ message: 'Registro criado com sucesso!' });
  }
}

export { RegisterGameController };
