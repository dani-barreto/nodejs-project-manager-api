import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InfrastructureModule } from
'./infrastructure/infrastructure.module';
import { DomainModule } from './domain/domain.module';
import { GatewaysModule } from './gateways/gateways.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuardService } from './gateways/guards/auth-guard.service';
@Module({
 imports: [InfrastructureModule, DomainModule, GatewaysModule],
 controllers: [AppController],
 providers: [
 AppService,
 {
 provide: APP_GUARD,
 useClass: AuthGuardService,
 },
 ],
})
export class AppModule {}