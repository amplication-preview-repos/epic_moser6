/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

import {
  IsString,
  MaxLength,
  IsOptional,
  IsBoolean,
  IsEnum,
  IsInt,
  Min,
  Max,
  IsNumber,
  IsDate,
  ValidateNested,
} from "class-validator";

import { EnumDeliveryStatus } from "./EnumDeliveryStatus";
import { Type } from "class-transformer";
import { EnumDeliverySupplierPaymentStatus } from "./EnumDeliverySupplierPaymentStatus";
import { EnumDeliveryClientPaymentStatus } from "./EnumDeliveryClientPaymentStatus";
import { EnumDeliveryGuSubmissionStatus } from "./EnumDeliveryGuSubmissionStatus";
import { EnumDeliveryFss } from "./EnumDeliveryFss";
import { EnumDeliverySt1 } from "./EnumDeliverySt1";
import { EnumDeliverySurvey } from "./EnumDeliverySurvey";
import { EnumDeliveryHedgeStatus } from "./EnumDeliveryHedgeStatus";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
import { ClientWhereUniqueInput } from "../../client/base/ClientWhereUniqueInput";
import { SupplierWhereUniqueInput } from "../../supplier/base/SupplierWhereUniqueInput";
import { TransporterWhereUniqueInput } from "../../transporter/base/TransporterWhereUniqueInput";
import { ManagerWhereUniqueInput } from "../../manager/base/ManagerWhereUniqueInput";

@InputType()
class DeliveryUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  deliveryNumber?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  secured?: boolean | null;

  @ApiProperty({
    required: false,
    enum: EnumDeliveryStatus,
  })
  @IsEnum(EnumDeliveryStatus)
  @IsOptional()
  @Field(() => EnumDeliveryStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  saleVolume?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  salePrice?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalAmount?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  basis?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  purchaseRegion?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  purchaseVolume?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  deficit?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  averagePurchasePrice?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  transportRate?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  startOfShipment?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  contractTrainDispatch?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  vesselDispatch?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumDeliverySupplierPaymentStatus,
  })
  @IsEnum(EnumDeliverySupplierPaymentStatus)
  @IsOptional()
  @Field(() => EnumDeliverySupplierPaymentStatus, {
    nullable: true,
  })
  supplierPaymentStatus?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  paymentToSupplier?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  invoiceDirectionDate?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  clientAdvance?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  advanceAmount?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  documentDispatchDate?: Date | null;

  @ApiProperty({
    required: false,
    enum: EnumDeliveryClientPaymentStatus,
  })
  @IsEnum(EnumDeliveryClientPaymentStatus)
  @IsOptional()
  @Field(() => EnumDeliveryClientPaymentStatus, {
    nullable: true,
  })
  clientPaymentStatus?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  clientPaymentAmount?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumDeliveryGuSubmissionStatus,
  })
  @IsEnum(EnumDeliveryGuSubmissionStatus)
  @IsOptional()
  @Field(() => EnumDeliveryGuSubmissionStatus, {
    nullable: true,
  })
  guSubmissionStatus?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  cnyExchangeRate?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  exportContractNumber?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  deliveryOwner?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  actualShipped?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  plannedTrainDispatch?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  actualTrainDispatch?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  comments?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  finish?: boolean | null;

  @ApiProperty({
    required: false,
    enum: EnumDeliveryFss,
  })
  @IsEnum(EnumDeliveryFss)
  @IsOptional()
  @Field(() => EnumDeliveryFss, {
    nullable: true,
  })
  fss?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumDeliverySt1,
  })
  @IsEnum(EnumDeliverySt1)
  @IsOptional()
  @Field(() => EnumDeliverySt1, {
    nullable: true,
  })
  st1?: "Option1" | null;

  @ApiProperty({
    required: false,
    enum: EnumDeliverySurvey,
  })
  @IsEnum(EnumDeliverySurvey)
  @IsOptional()
  @Field(() => EnumDeliverySurvey, {
    nullable: true,
  })
  survey?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  paymentProblems?: boolean | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  estimatedLogisticsRate?: number | null;

  @ApiProperty({
    required: false,
    enum: EnumDeliveryHedgeStatus,
  })
  @IsEnum(EnumDeliveryHedgeStatus)
  @IsOptional()
  @Field(() => EnumDeliveryHedgeStatus, {
    nullable: true,
  })
  hedgeStatus?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductWhereUniqueInput, {
    nullable: true,
  })
  product?: ProductWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ClientWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ClientWhereUniqueInput)
  @IsOptional()
  @Field(() => ClientWhereUniqueInput, {
    nullable: true,
  })
  client?: ClientWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SupplierWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SupplierWhereUniqueInput)
  @IsOptional()
  @Field(() => SupplierWhereUniqueInput, {
    nullable: true,
  })
  supplier?: SupplierWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TransporterWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TransporterWhereUniqueInput)
  @IsOptional()
  @Field(() => TransporterWhereUniqueInput, {
    nullable: true,
  })
  transporter?: TransporterWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => ManagerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ManagerWhereUniqueInput)
  @IsOptional()
  @Field(() => ManagerWhereUniqueInput, {
    nullable: true,
  })
  manager?: ManagerWhereUniqueInput | null;
}

export { DeliveryUpdateInput as DeliveryUpdateInput };
