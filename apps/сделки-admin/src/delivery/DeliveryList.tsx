import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { CLIENT_TITLE_FIELD } from "../client/ClientTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";
import { TRANSPORTER_TITLE_FIELD } from "../transporter/TransporterTitle";
import { MANAGER_TITLE_FIELD } from "../manager/ManagerTitle";

export const DeliveryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Deliveries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="deliveryNumber" source="deliveryNumber" />
        <BooleanField label="secured" source="secured" />
        <TextField label="status" source="status" />
        <TextField label="saleVolume" source="saleVolume" />
        <TextField label="salePrice" source="salePrice" />
        <TextField label="totalAmount" source="totalAmount" />
        <TextField label="basis" source="basis" />
        <TextField label="purchaseRegion" source="purchaseRegion" />
        <TextField label="purchaseVolume" source="purchaseVolume" />
        <TextField label="deficit" source="deficit" />
        <TextField label="averagePurchasePrice" source="averagePurchasePrice" />
        <TextField label="transportRate" source="transportRate" />
        <TextField label="startOfShipment" source="startOfShipment" />
        <TextField
          label="contractTrainDispatch"
          source="contractTrainDispatch"
        />
        <TextField label="vesselDispatch" source="vesselDispatch" />
        <TextField
          label="supplierPaymentStatus"
          source="supplierPaymentStatus"
        />
        <TextField label="paymentToSupplier" source="paymentToSupplier" />
        <TextField label="invoiceDirectionDate" source="invoiceDirectionDate" />
        <TextField label="clientAdvance" source="clientAdvance" />
        <TextField label="advanceAmount" source="advanceAmount" />
        <TextField label="documentDispatchDate" source="documentDispatchDate" />
        <TextField label="clientPaymentStatus" source="clientPaymentStatus" />
        <TextField label="clientPaymentAmount" source="clientPaymentAmount" />
        <TextField label="guSubmissionStatus" source="guSubmissionStatus" />
        <TextField label="cnyExchangeRate" source="cnyExchangeRate" />
        <TextField label="exportContractNumber" source="exportContractNumber" />
        <TextField label="deliveryOwner" source="deliveryOwner" />
        <TextField label="actualShipped" source="actualShipped" />
        <TextField label="plannedTrainDispatch" source="plannedTrainDispatch" />
        <TextField label="actualTrainDispatch" source="actualTrainDispatch" />
        <TextField label="comments" source="comments" />
        <BooleanField label="finish" source="finish" />
        <TextField label="fss" source="fss" />
        <TextField label="st1" source="st1" />
        <TextField label="survey" source="survey" />
        <BooleanField label="paymentProblems" source="paymentProblems" />
        <TextField
          label="estimatedLogisticsRate"
          source="estimatedLogisticsRate"
        />
        <TextField label="hedgeStatus" source="hedgeStatus" />
        <ReferenceField label="product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="client" source="client.id" reference="Client">
          <TextField source={CLIENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="supplier"
          source="supplier.id"
          reference="Supplier"
        >
          <TextField source={SUPPLIER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="transporter"
          source="transporter.id"
          reference="Transporter"
        >
          <TextField source={TRANSPORTER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="manager" source="manager.id" reference="Manager">
          <TextField source={MANAGER_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
