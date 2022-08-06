import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { IGameDTO } from '../../infra/entities/Game';
import { RegisterGameUseCase } from './RegisterGameUseCase';

class RegisterGameController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { designer, developer, genre, mode, name, platform, releaseData }: IGameDTO = request.body;
    const registerUseCase = container.resolve(RegisterGameUseCase);

    await registerUseCase.execute({ designer, developer, genre, mode, name, platform, releaseData });

    return response.status(201).json({ message: 'Registro criado com sucesso!' });
  }
}

export { RegisterGameController };
