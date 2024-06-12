/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ReminderService } from "../reminder.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ReminderCreateInput } from "./ReminderCreateInput";
import { Reminder } from "./Reminder";
import { ReminderFindManyArgs } from "./ReminderFindManyArgs";
import { ReminderWhereUniqueInput } from "./ReminderWhereUniqueInput";
import { ReminderUpdateInput } from "./ReminderUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ReminderControllerBase {
  constructor(
    protected readonly service: ReminderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Reminder })
  @nestAccessControl.UseRoles({
    resource: "Reminder",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createReminder(
    @common.Body() data: ReminderCreateInput
  ): Promise<Reminder> {
    return await this.service.createReminder({
      data: {
        ...data,

        task: data.task
          ? {
              connect: data.task,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        reminderTime: true,

        task: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Reminder] })
  @ApiNestedQuery(ReminderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Reminder",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async reminders(@common.Req() request: Request): Promise<Reminder[]> {
    const args = plainToClass(ReminderFindManyArgs, request.query);
    return this.service.reminders({
      ...args,
      select: {
        createdAt: true,
        id: true,
        reminderTime: true,

        task: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Reminder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Reminder",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async reminder(
    @common.Param() params: ReminderWhereUniqueInput
  ): Promise<Reminder | null> {
    const result = await this.service.reminder({
      where: params,
      select: {
        createdAt: true,
        id: true,
        reminderTime: true,

        task: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Reminder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Reminder",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateReminder(
    @common.Param() params: ReminderWhereUniqueInput,
    @common.Body() data: ReminderUpdateInput
  ): Promise<Reminder | null> {
    try {
      return await this.service.updateReminder({
        where: params,
        data: {
          ...data,

          task: data.task
            ? {
                connect: data.task,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          reminderTime: true,

          task: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Reminder })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Reminder",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteReminder(
    @common.Param() params: ReminderWhereUniqueInput
  ): Promise<Reminder | null> {
    try {
      return await this.service.deleteReminder({
        where: params,
        select: {
          createdAt: true,
          id: true,
          reminderTime: true,

          task: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
