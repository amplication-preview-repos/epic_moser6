import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { DeliveryList } from "./delivery/DeliveryList";
import { DeliveryCreate } from "./delivery/DeliveryCreate";
import { DeliveryEdit } from "./delivery/DeliveryEdit";
import { DeliveryShow } from "./delivery/DeliveryShow";
import { SupplierList } from "./supplier/SupplierList";
import { SupplierCreate } from "./supplier/SupplierCreate";
import { SupplierEdit } from "./supplier/SupplierEdit";
import { SupplierShow } from "./supplier/SupplierShow";
import { ClientList } from "./client/ClientList";
import { ClientCreate } from "./client/ClientCreate";
import { ClientEdit } from "./client/ClientEdit";
import { ClientShow } from "./client/ClientShow";
import { ManagerList } from "./manager/ManagerList";
import { ManagerCreate } from "./manager/ManagerCreate";
import { ManagerEdit } from "./manager/ManagerEdit";
import { ManagerShow } from "./manager/ManagerShow";
import { ContractList } from "./contract/ContractList";
import { ContractCreate } from "./contract/ContractCreate";
import { ContractEdit } from "./contract/ContractEdit";
import { ContractShow } from "./contract/ContractShow";
import { TransporterList } from "./transporter/TransporterList";
import { TransporterCreate } from "./transporter/TransporterCreate";
import { TransporterEdit } from "./transporter/TransporterEdit";
import { TransporterShow } from "./transporter/TransporterShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Сделки"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Delivery"
          list={DeliveryList}
          edit={DeliveryEdit}
          create={DeliveryCreate}
          show={DeliveryShow}
        />
        <Resource
          name="Supplier"
          list={SupplierList}
          edit={SupplierEdit}
          create={SupplierCreate}
          show={SupplierShow}
        />
        <Resource
          name="Client"
          list={ClientList}
          edit={ClientEdit}
          create={ClientCreate}
          show={ClientShow}
        />
        <Resource
          name="Manager"
          list={ManagerList}
          edit={ManagerEdit}
          create={ManagerCreate}
          show={ManagerShow}
        />
        <Resource
          name="Contract"
          list={ContractList}
          edit={ContractEdit}
          create={ContractCreate}
          show={ContractShow}
        />
        <Resource
          name="Transporter"
          list={TransporterList}
          edit={TransporterEdit}
          create={TransporterCreate}
          show={TransporterShow}
        />
      </Admin>
    </div>
  );
};

export default App;
