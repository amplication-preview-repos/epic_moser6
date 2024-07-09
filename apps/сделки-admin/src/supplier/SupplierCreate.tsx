import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { DeliveryTitle } from "../delivery/DeliveryTitle";

export const SupplierCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="deliveries"
          reference="Delivery"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DeliveryTitle} />
        </ReferenceArrayInput>
        <TextInput label="phoneNumber" source="phoneNumber" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="address" multiline source="address" />
        <TextInput label="name" source="name" />
        <TextInput label="contactPerson" source="contactPerson" />
      </SimpleForm>
    </Create>
  );
};
