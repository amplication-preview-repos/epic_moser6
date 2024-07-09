import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { DeliveryController } from "../delivery.controller";
import { DeliveryService } from "../delivery.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  deliveryNumber: "exampleDeliveryNumber",
  secured: "true",
  saleVolume: 42,
  salePrice: 42.42,
  totalAmount: 42.42,
  basis: "exampleBasis",
  purchaseRegion: "examplePurchaseRegion",
  purchaseVolume: 42,
  deficit: 42,
  averagePurchasePrice: 42.42,
  transportRate: 42.42,
  startOfShipment: new Date(),
  contractTrainDispatch: new Date(),
  vesselDispatch: new Date(),
  paymentToSupplier: 42.42,
  invoiceDirectionDate: new Date(),
  clientAdvance: 42.42,
  advanceAmount: 42.42,
  documentDispatchDate: new Date(),
  clientPaymentAmount: 42.42,
  cnyExchangeRate: 42.42,
  exportContractNumber: "exampleExportContractNumber",
  deliveryOwner: "exampleDeliveryOwner",
  actualShipped: 42,
  plannedTrainDispatch: new Date(),
  actualTrainDispatch: new Date(),
  comments: "exampleComments",
  finish: "true",
  paymentProblems: "true",
  estimatedLogisticsRate: 42.42,
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  deliveryNumber: "exampleDeliveryNumber",
  secured: "true",
  saleVolume: 42,
  salePrice: 42.42,
  totalAmount: 42.42,
  basis: "exampleBasis",
  purchaseRegion: "examplePurchaseRegion",
  purchaseVolume: 42,
  deficit: 42,
  averagePurchasePrice: 42.42,
  transportRate: 42.42,
  startOfShipment: new Date(),
  contractTrainDispatch: new Date(),
  vesselDispatch: new Date(),
  paymentToSupplier: 42.42,
  invoiceDirectionDate: new Date(),
  clientAdvance: 42.42,
  advanceAmount: 42.42,
  documentDispatchDate: new Date(),
  clientPaymentAmount: 42.42,
  cnyExchangeRate: 42.42,
  exportContractNumber: "exampleExportContractNumber",
  deliveryOwner: "exampleDeliveryOwner",
  actualShipped: 42,
  plannedTrainDispatch: new Date(),
  actualTrainDispatch: new Date(),
  comments: "exampleComments",
  finish: "true",
  paymentProblems: "true",
  estimatedLogisticsRate: 42.42,
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    deliveryNumber: "exampleDeliveryNumber",
    secured: "true",
    saleVolume: 42,
    salePrice: 42.42,
    totalAmount: 42.42,
    basis: "exampleBasis",
    purchaseRegion: "examplePurchaseRegion",
    purchaseVolume: 42,
    deficit: 42,
    averagePurchasePrice: 42.42,
    transportRate: 42.42,
    startOfShipment: new Date(),
    contractTrainDispatch: new Date(),
    vesselDispatch: new Date(),
    paymentToSupplier: 42.42,
    invoiceDirectionDate: new Date(),
    clientAdvance: 42.42,
    advanceAmount: 42.42,
    documentDispatchDate: new Date(),
    clientPaymentAmount: 42.42,
    cnyExchangeRate: 42.42,
    exportContractNumber: "exampleExportContractNumber",
    deliveryOwner: "exampleDeliveryOwner",
    actualShipped: 42,
    plannedTrainDispatch: new Date(),
    actualTrainDispatch: new Date(),
    comments: "exampleComments",
    finish: "true",
    paymentProblems: "true",
    estimatedLogisticsRate: 42.42,
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  deliveryNumber: "exampleDeliveryNumber",
  secured: "true",
  saleVolume: 42,
  salePrice: 42.42,
  totalAmount: 42.42,
  basis: "exampleBasis",
  purchaseRegion: "examplePurchaseRegion",
  purchaseVolume: 42,
  deficit: 42,
  averagePurchasePrice: 42.42,
  transportRate: 42.42,
  startOfShipment: new Date(),
  contractTrainDispatch: new Date(),
  vesselDispatch: new Date(),
  paymentToSupplier: 42.42,
  invoiceDirectionDate: new Date(),
  clientAdvance: 42.42,
  advanceAmount: 42.42,
  documentDispatchDate: new Date(),
  clientPaymentAmount: 42.42,
  cnyExchangeRate: 42.42,
  exportContractNumber: "exampleExportContractNumber",
  deliveryOwner: "exampleDeliveryOwner",
  actualShipped: 42,
  plannedTrainDispatch: new Date(),
  actualTrainDispatch: new Date(),
  comments: "exampleComments",
  finish: "true",
  paymentProblems: "true",
  estimatedLogisticsRate: 42.42,
};

const service = {
  createDelivery() {
    return CREATE_RESULT;
  },
  deliveries: () => FIND_MANY_RESULT,
  delivery: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Delivery", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DeliveryService,
          useValue: service,
        },
      ],
      controllers: [DeliveryController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /deliveries", async () => {
    await request(app.getHttpServer())
      .post("/deliveries")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        startOfShipment: CREATE_RESULT.startOfShipment.toISOString(),
        contractTrainDispatch:
          CREATE_RESULT.contractTrainDispatch.toISOString(),
        vesselDispatch: CREATE_RESULT.vesselDispatch.toISOString(),
        invoiceDirectionDate: CREATE_RESULT.invoiceDirectionDate.toISOString(),
        documentDispatchDate: CREATE_RESULT.documentDispatchDate.toISOString(),
        plannedTrainDispatch: CREATE_RESULT.plannedTrainDispatch.toISOString(),
        actualTrainDispatch: CREATE_RESULT.actualTrainDispatch.toISOString(),
      });
  });

  test("GET /deliveries", async () => {
    await request(app.getHttpServer())
      .get("/deliveries")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          startOfShipment: FIND_MANY_RESULT[0].startOfShipment.toISOString(),
          contractTrainDispatch:
            FIND_MANY_RESULT[0].contractTrainDispatch.toISOString(),
          vesselDispatch: FIND_MANY_RESULT[0].vesselDispatch.toISOString(),
          invoiceDirectionDate:
            FIND_MANY_RESULT[0].invoiceDirectionDate.toISOString(),
          documentDispatchDate:
            FIND_MANY_RESULT[0].documentDispatchDate.toISOString(),
          plannedTrainDispatch:
            FIND_MANY_RESULT[0].plannedTrainDispatch.toISOString(),
          actualTrainDispatch:
            FIND_MANY_RESULT[0].actualTrainDispatch.toISOString(),
        },
      ]);
  });

  test("GET /deliveries/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/deliveries"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /deliveries/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/deliveries"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        startOfShipment: FIND_ONE_RESULT.startOfShipment.toISOString(),
        contractTrainDispatch:
          FIND_ONE_RESULT.contractTrainDispatch.toISOString(),
        vesselDispatch: FIND_ONE_RESULT.vesselDispatch.toISOString(),
        invoiceDirectionDate:
          FIND_ONE_RESULT.invoiceDirectionDate.toISOString(),
        documentDispatchDate:
          FIND_ONE_RESULT.documentDispatchDate.toISOString(),
        plannedTrainDispatch:
          FIND_ONE_RESULT.plannedTrainDispatch.toISOString(),
        actualTrainDispatch: FIND_ONE_RESULT.actualTrainDispatch.toISOString(),
      });
  });

  test("POST /deliveries existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/deliveries")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        startOfShipment: CREATE_RESULT.startOfShipment.toISOString(),
        contractTrainDispatch:
          CREATE_RESULT.contractTrainDispatch.toISOString(),
        vesselDispatch: CREATE_RESULT.vesselDispatch.toISOString(),
        invoiceDirectionDate: CREATE_RESULT.invoiceDirectionDate.toISOString(),
        documentDispatchDate: CREATE_RESULT.documentDispatchDate.toISOString(),
        plannedTrainDispatch: CREATE_RESULT.plannedTrainDispatch.toISOString(),
        actualTrainDispatch: CREATE_RESULT.actualTrainDispatch.toISOString(),
      })
      .then(function () {
        agent
          .post("/deliveries")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
