import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { ProductTitle } from "../product/ProductTitle";
import { ClientTitle } from "../client/ClientTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";
import { TransporterTitle } from "../transporter/TransporterTitle";
import { ManagerTitle } from "../manager/ManagerTitle";

export const DeliveryCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="deliveryNumber" source="deliveryNumber" />
        <BooleanInput label="secured" source="secured" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput step={1} label="saleVolume" source="saleVolume" />
        <NumberInput label="salePrice" source="salePrice" />
        <NumberInput label="totalAmount" source="totalAmount" />
        <TextInput label="basis" source="basis" />
        <TextInput label="purchaseRegion" source="purchaseRegion" />
        <NumberInput step={1} label="purchaseVolume" source="purchaseVolume" />
        <NumberInput step={1} label="deficit" source="deficit" />
        <NumberInput
          label="averagePurchasePrice"
          source="averagePurchasePrice"
        />
        <NumberInput label="transportRate" source="transportRate" />
        <DateTimeInput label="startOfShipment" source="startOfShipment" />
        <DateTimeInput
          label="contractTrainDispatch"
          source="contractTrainDispatch"
        />
        <DateTimeInput label="vesselDispatch" source="vesselDispatch" />
        <SelectInput
          source="supplierPaymentStatus"
          label="supplierPaymentStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="paymentToSupplier" source="paymentToSupplier" />
        <DateTimeInput
          label="invoiceDirectionDate"
          source="invoiceDirectionDate"
        />
        <NumberInput label="clientAdvance" source="clientAdvance" />
        <NumberInput label="advanceAmount" source="advanceAmount" />
        <DateTimeInput
          label="documentDispatchDate"
          source="documentDispatchDate"
        />
        <SelectInput
          source="clientPaymentStatus"
          label="clientPaymentStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="clientPaymentAmount" source="clientPaymentAmount" />
        <SelectInput
          source="guSubmissionStatus"
          label="guSubmissionStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="cnyExchangeRate" source="cnyExchangeRate" />
        <TextInput label="exportContractNumber" source="exportContractNumber" />
        <TextInput label="deliveryOwner" source="deliveryOwner" />
        <NumberInput step={1} label="actualShipped" source="actualShipped" />
        <DateTimeInput
          label="plannedTrainDispatch"
          source="plannedTrainDispatch"
        />
        <DateTimeInput
          label="actualTrainDispatch"
          source="actualTrainDispatch"
        />
        <TextInput label="comments" multiline source="comments" />
        <BooleanInput label="finish" source="finish" />
        <SelectInput
          source="fss"
          label="fss"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="st1"
          label="st1"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <SelectInput
          source="survey"
          label="survey"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <BooleanInput label="paymentProblems" source="paymentProblems" />
        <NumberInput
          label="estimatedLogisticsRate"
          source="estimatedLogisticsRate"
        />
        <SelectInput
          source="hedgeStatus"
          label="hedgeStatus"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="product.id" reference="Product" label="product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <ReferenceInput source="client.id" reference="Client" label="client">
          <SelectInput optionText={ClientTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="supplier.id"
          reference="Supplier"
          label="supplier"
        >
          <SelectInput optionText={SupplierTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="transporter.id"
          reference="Transporter"
          label="transporter"
        >
          <SelectInput optionText={TransporterTitle} />
        </ReferenceInput>
        <ReferenceInput source="manager.id" reference="Manager" label="manager">
          <SelectInput optionText={ManagerTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
