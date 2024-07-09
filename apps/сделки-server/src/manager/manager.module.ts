import { Module } from "@nestjs/common";
import { ManagerModuleBase } from "./base/manager.module.base";
import { ManagerService } from "./manager.service";
import { ManagerController } from "./manager.controller";
import { ManagerResolver } from "./manager.resolver";

@Module({
  imports: [ManagerModuleBase],
  controllers: [ManagerController],
  providers: [ManagerService, ManagerResolver],
  exports: [ManagerService],
})
export class ManagerModule {}
