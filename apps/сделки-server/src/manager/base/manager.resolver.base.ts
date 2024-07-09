/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Manager } from "./Manager";
import { ManagerCountArgs } from "./ManagerCountArgs";
import { ManagerFindManyArgs } from "./ManagerFindManyArgs";
import { ManagerFindUniqueArgs } from "./ManagerFindUniqueArgs";
import { CreateManagerArgs } from "./CreateManagerArgs";
import { UpdateManagerArgs } from "./UpdateManagerArgs";
import { DeleteManagerArgs } from "./DeleteManagerArgs";
import { DeliveryFindManyArgs } from "../../delivery/base/DeliveryFindManyArgs";
import { Delivery } from "../../delivery/base/Delivery";
import { ManagerService } from "../manager.service";
@graphql.Resolver(() => Manager)
export class ManagerResolverBase {
  constructor(protected readonly service: ManagerService) {}

  async _managersMeta(
    @graphql.Args() args: ManagerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Manager])
  async managers(
    @graphql.Args() args: ManagerFindManyArgs
  ): Promise<Manager[]> {
    return this.service.managers(args);
  }

  @graphql.Query(() => Manager, { nullable: true })
  async manager(
    @graphql.Args() args: ManagerFindUniqueArgs
  ): Promise<Manager | null> {
    const result = await this.service.manager(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Manager)
  async createManager(
    @graphql.Args() args: CreateManagerArgs
  ): Promise<Manager> {
    return await this.service.createManager({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Manager)
  async updateManager(
    @graphql.Args() args: UpdateManagerArgs
  ): Promise<Manager | null> {
    try {
      return await this.service.updateManager({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Manager)
  async deleteManager(
    @graphql.Args() args: DeleteManagerArgs
  ): Promise<Manager | null> {
    try {
      return await this.service.deleteManager(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Delivery], { name: "deliveries" })
  async findDeliveries(
    @graphql.Parent() parent: Manager,
    @graphql.Args() args: DeliveryFindManyArgs
  ): Promise<Delivery[]> {
    const results = await this.service.findDeliveries(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
