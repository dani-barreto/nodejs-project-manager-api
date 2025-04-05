import { Injectable } from '@nestjs/common';
import { ProjectsRepositoryService } from '@project-manager-api/infrastructure/database/repositories/projects.repository.service';
 import { IProject } from '@project-manager-api/domain/interfaces/project.interface';
 import { UsersRepositoryService } from '@project-manager-api/infrastructure/database/repositories/users.repository.service';
 import { BaseUseCase } from '@app/common/interfaces/base-use-case';

@Injectable()
export class GetAllProjectsService implements BaseUseCase {
  constructor(
    private readonly usersRepository: UsersRepositoryService,
    private readonly projectsRepository: ProjectsRepositoryService,
  ) {}
  async execute(userId: number): Promise<IProject[]> {
    // fetch user data
    const userData = await this.usersRepository.findById(userId);
    if (!userData) {
      throw new Error('Usuário não encontrado');
    }
    const projects = await this.projectsRepository.findAll(userId);
    if (!projects) {
      throw new Error('Erro ao recuperar projetos');
    }
    return projects;
  }
}