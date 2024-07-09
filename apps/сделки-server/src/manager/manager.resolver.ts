import * as graphql from "@nestjs/graphql";
import { ManagerResolverBase } from "./base/manager.resolver.base";
import { Manager } from "./base/Manager";
import { ManagerService } from "./manager.service";

@graphql.Resolver(() => Manager)
export class ManagerResolver extends ManagerResolverBase {
  constructor(protected readonly service: ManagerService) {
    super(service);
  }
}
