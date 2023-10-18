# Order
(*order*)

### Available Operations

* [bookPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentBookPost](#bookphlebotomyappointmentv3orderorderidphlebotomyappointmentbookpost) - Book Phlebotomy Appointment
* [cancelOrderV3OrderOrderIdCancelPost](#cancelorderv3orderorderidcancelpost) - Cancel Order
* [cancelPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentCancelPatch](#cancelphlebotomyappointmentv3orderorderidphlebotomyappointmentcancelpatch) - Cancel Phlebotomy Appointment
* [create](#create) - Create Order
* [createTestkit](#createtestkit) - Create Testkit Order
* [dispatchStatus](#dispatchstatus) - Dispatch Order Status
* [get](#get) - Get Order
* [getAppointmentAvailability](#getappointmentavailability) - Get Order Appointment Availability
* [getAreaInfo](#getareainfo) - Get Area Info
* [getLabTestResult](#getlabtestresult) - Get Lab Test Result
* [getLabTestResultMetadata](#getlabtestresultmetadata) - Get Lab Test Result Metadata
* [getLabTestResultRaw](#getlabtestresultraw) - Get Lab Test Result Raw
* [getPhlebotomyAppointment](#getphlebotomyappointment) - Get Phlebotomy Appointment
* [getPhlebotomyCancellationReasons](#getphlebotomycancellationreasons) - Get Phlebotomy Appointment Cancellation Reasons
* [getRequisitionUrl](#getrequisitionurl) - Get Order Requisition Url
* [orderProcessSimulateV3OrderOrderIdTestPost](#orderprocesssimulatev3orderorderidtestpost) - Order Process Simulate
* [processTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPost](#processtestkitorderv3ordertestkitprocessteamidorderidpost) - Process Testkit Order
* [processTestkitShipHeroOrderShippedV3OrderTestkitWebhookShipheroShipmentUpdatePost](#processtestkitshipheroordershippedv3ordertestkitwebhookshipheroshipmentupdatepost) - Process Testkit Ship Hero Order Shipped
* [registerTestkitV3OrderTestkitRegisterPost](#registertestkitv3ordertestkitregisterpost) - Register Testkit
* [reschedulePhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentReschedulePatch](#reschedulephlebotomyappointmentv3orderorderidphlebotomyappointmentreschedulepatch) - Reschedule Phlebotomy Appointment
* [syncTestkitOrderStatusV3OrderTestkitStatusPost](#synctestkitorderstatusv3ordertestkitstatuspost) - Sync Testkit Order Status

## bookPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentBookPost

Book an at-home phlebotomy appointment.

### Example Usage

```typescript
import { Vital } from "Vital";
import { BookPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentBookPostRequest } from "Vital/dist/sdk/models/operations";
import { AppointmentBookingRequest } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const appointmentBookingRequest: AppointmentBookingRequest = {
  bookingKey: "henry",
};
const orderId: string = "486d40b1-d815-4182-a6c0-e7d72ca79bcf";

  const res = await sdk.order.bookPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentBookPost(appointmentBookingRequest, orderId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `appointmentBookingRequest`                                                          | [shared.AppointmentBookingRequest](../../models/shared/appointmentbookingrequest.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `orderId`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | Your Order ID.                                                                       |
| `retries`                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                   | Configuration to override the default retry behavior of the client.                  |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.BookPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentBookPostResponse](../../models/operations/bookphlebotomyappointmentv3orderorderidphlebotomyappointmentbookpostresponse.md)>**


## cancelOrderV3OrderOrderIdCancelPost

POST cancel order

### Example Usage

```typescript
import { Vital } from "Vital";
import { CancelOrderV3OrderOrderIdCancelPostRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const orderId: string = "b9d919c2-b9aa-4759-bba5-fb974a744f9a";

  const res = await sdk.order.cancelOrderV3OrderOrderIdCancelPost(orderId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orderId`                                                           | *string*                                                            | :heavy_check_mark:                                                  | Your Order ID.                                                      |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.CancelOrderV3OrderOrderIdCancelPostResponse](../../models/operations/cancelorderv3orderorderidcancelpostresponse.md)>**


## cancelPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentCancelPatch

Cancel a previously booked at-home phlebotomy appointment.

### Example Usage

```typescript
import { Vital } from "Vital";
import { CancelPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentCancelPatchRequest } from "Vital/dist/sdk/models/operations";
import { AppointmentCancelRequest } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const appointmentCancelRequest: AppointmentCancelRequest = {
  cancellationReasonId: "Program",
};
const orderId: string = "cd9528dd-b0d2-47a7-a901-ccf3b9448c5e";

  const res = await sdk.order.cancelPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentCancelPatch(appointmentCancelRequest, orderId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `appointmentCancelRequest`                                                         | [shared.AppointmentCancelRequest](../../models/shared/appointmentcancelrequest.md) | :heavy_check_mark:                                                                 | N/A                                                                                |
| `orderId`                                                                          | *string*                                                                           | :heavy_check_mark:                                                                 | Your Order ID.                                                                     |
| `retries`                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                             | :heavy_minus_sign:                                                                 | Configuration to override the default retry behavior of the client.                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.CancelPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentCancelPatchResponse](../../models/operations/cancelphlebotomyappointmentv3orderorderidphlebotomyappointmentcancelpatchresponse.md)>**


## create

POST create new order

### Example Usage

```typescript
import { Vital } from "Vital";
import { ConsentType, Gender, ResponsibleRelationship } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.create({
    consents: [
      {
        consentType: ConsentType.MobileTermsAndConditions,
      },
    ],
    healthInsurance: {
      backImage: "bluetooth",
      diagnosisCodes: [
        "Extended",
      ],
      frontImage: "South",
      patientSignatureImage: "shred",
      responsibleDetails: {
        address: {
          city: "Fort Silas",
          country: "Afghanistan",
          firstLine: "deposit",
          state: "evolve",
          zip: "male",
        },
        firstName: "Russel",
        lastName: "Schumm",
        phoneNumber: "quantify",
      },
    },
    labTestId: "dc7fa504-e083-433b-9d5e-261915a25d0d",
    patientAddress: {
      city: "Volkmanfurt",
      country: "Belarus",
      state: "Mouse",
      street: "Sydni Meadow",
      zip: "Towels",
    },
    patientDetails: {
      dob: new Date("2023-09-20T15:47:14.817Z"),
      email: "Izabella_Ritchie@yahoo.com",
      firstName: "Destiny",
      gender: Gender.Other,
      lastName: "Sawayn",
      phoneNumber: "choke",
    },
    physician: {
      firstName: "Dorcas",
      lastName: "Prosacco",
      licensedStates: [
        "Toyota",
      ],
      npi: "Neptunium",
      signatureImage: "round",
    },
    userId: "23e7d6f9-4157-4472-91ef-09254895835d",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `request`                                                                                  | [shared.CreateOrderRequestCompatible](../../models/shared/createorderrequestcompatible.md) | :heavy_check_mark:                                                                         | The request object to use for the request.                                                 |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.CreateOrderV3OrderPostResponse](../../models/operations/createorderv3orderpostresponse.md)>**


## createTestkit

Creates an order for an unregistered testkit

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.createTestkit({
    labTestId: "eb480e87-d170-4ada-8df4-8f4bbca14aec",
    shippingDetails: {
      city: "West Esmeraldaborough",
      country: "Antarctica (the territory South of 60 deg S)",
      firstLine: "process",
      phoneNumber: "Bedfordshire",
      receiverName: "Research",
      state: "granular",
      zip: "Movies",
    },
    userId: "d9798fbf-e68e-4fed-b371-3330afbf06a4",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [shared.CreateRegistrableTestkitOrderRequest](../../models/shared/createregistrabletestkitorderrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.CreateTestkitOrderV3OrderTestkitPostResponse](../../models/operations/createtestkitorderv3ordertestkitpostresponse.md)>**


## dispatchStatus

Dispatch Order Status

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.dispatchStatus();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.DispatchOrderStatusV3OrderDispatchStatusChecksPostResponse](../../models/operations/dispatchorderstatusv3orderdispatchstatuscheckspostresponse.md)>**


## get

GET individual order by ID.

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetOrderV3OrderOrderIdGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const orderId: string = "b18d8d81-fd7b-4764-a31e-475cb1f36591";

  const res = await sdk.order.get(orderId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orderId`                                                           | *string*                                                            | :heavy_check_mark:                                                  | Your Order ID.                                                      |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetOrderV3OrderOrderIdGetResponse](../../models/operations/getorderv3orderorderidgetresponse.md)>**


## getAppointmentAvailability

Return the available time slots to book an appointment with a phlebotomist
for the given address and order.

### Example Usage

```typescript
import { Vital } from "Vital";
import {
  GetOrderAppointmentAvailabilityV3OrderOrderIdPhlebotomyAppointmentAvailabilityPostRequest,
  GetOrderAppointmentAvailabilityV3OrderOrderIdPhlebotomyAppointmentAvailabilityPostUSAddress,
} from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const orderId: string = "c094c82e-a8e0-42d1-a065-be1f658ff11c";
const requestBody: GetOrderAppointmentAvailabilityV3OrderOrderIdPhlebotomyAppointmentAvailabilityPostUSAddress = {
  city: "Shanahanboro",
  firstLine: "Hat",
  state: "Implementation",
  zipCode: "62212-1095",
};

  const res = await sdk.order.getAppointmentAvailability(orderId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `orderId`                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                               | Your Order ID.                                                                                                                                                                                                                   |
| `requestBody`                                                                                                                                                                                                                    | [operations.GetOrderAppointmentAvailabilityV3OrderOrderIdPhlebotomyAppointmentAvailabilityPostUSAddress](../../models/operations/getorderappointmentavailabilityv3orderorderidphlebotomyappointmentavailabilitypostusaddress.md) | :heavy_minus_sign:                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                              |
| `retries`                                                                                                                                                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                               | Configuration to override the default retry behavior of the client.                                                                                                                                                              |
| `config`                                                                                                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                               | Available config options for making requests.                                                                                                                                                                                    |


### Response

**Promise<[operations.GetOrderAppointmentAvailabilityV3OrderOrderIdPhlebotomyAppointmentAvailabilityPostResponse](../../models/operations/getorderappointmentavailabilityv3orderorderidphlebotomyappointmentavailabilitypostresponse.md)>**


## getAreaInfo

GET information about an area with respect to lab-testing.

Information returned:
* Whether a given zip code is served by our Phlebotomy network.

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetAreaInfoV3OrderAreaInfoGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const zipCode: string = "Tuvalu";

  const res = await sdk.order.getAreaInfo(zipCode);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `zipCode`                                                           | *string*                                                            | :heavy_check_mark:                                                  | Zip code of the area to check                                       |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetAreaInfoV3OrderAreaInfoGetResponse](../../models/operations/getareainfov3orderareainfogetresponse.md)>**


## getLabTestResult

This endpoint returns the lab results for the order.

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetLabTestResultV3OrderOrderIdResultPdfGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const orderId: string = "c9229487-8f86-47ef-848e-7eb7243713ad";

  const res = await sdk.order.getLabTestResult(orderId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orderId`                                                           | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetLabTestResultV3OrderOrderIdResultPdfGetResponse](../../models/operations/getlabtestresultv3orderorderidresultpdfgetresponse.md)>**


## getLabTestResultMetadata

Return metadata related to order results, such as lab metadata,
provider and sample dates.

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetLabTestResultMetadataV3OrderOrderIdResultMetadataGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const orderId: string = "daf5fdc5-7c54-4772-826b-69600571af0f";

  const res = await sdk.order.getLabTestResultMetadata(orderId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orderId`                                                           | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetLabTestResultMetadataV3OrderOrderIdResultMetadataGetResponse](../../models/operations/getlabtestresultmetadatav3orderorderidresultmetadatagetresponse.md)>**


## getLabTestResultRaw

Return both metadata and raw json test data

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetLabTestResultRawV3OrderOrderIdResultGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const orderId: string = "2cfa7265-4a8d-45d9-b8ea-42e844b02385";

  const res = await sdk.order.getLabTestResultRaw(orderId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orderId`                                                           | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetLabTestResultRawV3OrderOrderIdResultGetResponse](../../models/operations/getlabtestresultrawv3orderorderidresultgetresponse.md)>**


## getPhlebotomyAppointment

Get the appointment associated with an order.

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const orderId: string = "3e95493c-2969-4eab-9aaf-61adbf59533c";

  const res = await sdk.order.getPhlebotomyAppointment(orderId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orderId`                                                           | *string*                                                            | :heavy_check_mark:                                                  | Your Order ID.                                                      |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentGetResponse](../../models/operations/getphlebotomyappointmentv3orderorderidphlebotomyappointmentgetresponse.md)>**


## getPhlebotomyCancellationReasons

Get the list of reasons for cancelling an at-home phlebotomy appointment.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.getPhlebotomyCancellationReasons();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetPhlebotomyAppointmentCancellationReasonsV3OrderPhlebotomyAppointmentCancellationReasonsGetResponse](../../models/operations/getphlebotomyappointmentcancellationreasonsv3orderphlebotomyappointmentcancellationreasonsgetresponse.md)>**


## getRequisitionUrl

GET requisition pdf for an order

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetOrderRequisitionUrlV3OrderOrderIdRequisitionPdfGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const orderId: string = "bfbbc5db-bd5f-47b5-9a88-6ef4ccfaf335";

  const res = await sdk.order.getRequisitionUrl(orderId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orderId`                                                           | *string*                                                            | :heavy_check_mark:                                                  | Your Order ID.                                                      |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetOrderRequisitionUrlV3OrderOrderIdRequisitionPdfGetResponse](../../models/operations/getorderrequisitionurlv3orderorderidrequisitionpdfgetresponse.md)>**


## orderProcessSimulateV3OrderOrderIdTestPost

Get available test kits.

### Example Usage

```typescript
import { Vital } from "Vital";
import { OrderProcessSimulateV3OrderOrderIdTestPostRequest } from "Vital/dist/sdk/models/operations";
import { OrderStatus } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const orderId: string = "03c5e046-8598-4154-ab3e-444d34fe425a";
const delay: number = 560672;
const finalStatus: OrderStatus = OrderStatus.CollectingSampleAtHomePhlebotomyAppointmentScheduled;

  const res = await sdk.order.orderProcessSimulateV3OrderOrderIdTestPost(orderId, delay, finalStatus);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orderId`                                                           | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `delay`                                                             | *number*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `finalStatus`                                                       | [shared.OrderStatus](../../models/shared/orderstatus.md)            | :heavy_minus_sign:                                                  | An enumeration.                                                     |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.OrderProcessSimulateV3OrderOrderIdTestPostResponse](../../models/operations/orderprocesssimulatev3orderorderidtestpostresponse.md)>**


## processTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPost

POST Create shipment for order

### Example Usage

```typescript
import { Vital } from "Vital";
import { ProcessTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPostRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const orderId: string = "21061e75-f548-42fd-90f0-d372d63dff6e";
const teamId: string = "26a256a9-b0f5-4854-8814-40907e852835";

  const res = await sdk.order.processTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPost(orderId, teamId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orderId`                                                           | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `teamId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.ProcessTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPostResponse](../../models/operations/processtestkitorderv3ordertestkitprocessteamidorderidpostresponse.md)>**


## processTestkitShipHeroOrderShippedV3OrderTestkitWebhookShipheroShipmentUpdatePost

Process Testkit Ship Hero Order Shipped

### Example Usage

```typescript
import { Vital } from "Vital";
import { ShipmentWebhookUpdateWebhookType } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.processTestkitShipHeroOrderShippedV3OrderTestkitWebhookShipheroShipmentUpdatePost({
    fulfillment: {
      orderNumber: "platforms",
      orderUuid: "hungry",
    },
    webhookType: ShipmentWebhookUpdateWebhookType.ShipmentUpdate,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.ShipmentWebhookUpdate](../../models/shared/shipmentwebhookupdate.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `retries`                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                       | :heavy_minus_sign:                                                           | Configuration to override the default retry behavior of the client.          |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.ProcessTestkitShipHeroOrderShippedV3OrderTestkitWebhookShipheroShipmentUpdatePostResponse](../../models/operations/processtestkitshipheroordershippedv3ordertestkitwebhookshipheroshipmentupdatepostresponse.md)>**


## registerTestkitV3OrderTestkitRegisterPost

Register Testkit

### Example Usage

```typescript
import { Vital } from "Vital";
import { ConsentType, Gender } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.registerTestkitV3OrderTestkitRegisterPost({
    consents: [
      {
        consentType: ConsentType.MobileTermsAndConditions,
      },
    ],
    patientAddress: {
      city: "Phoenix",
      country: "Netherlands",
      state: "Shirt",
      street: "Medhurst Courts",
      zip: "transmit",
    },
    patientDetails: {
      dob: new Date("2023-05-18T10:14:03.395Z"),
      email: "Valentine69@yahoo.com",
      firstName: "Arne",
      gender: Gender.Male,
      lastName: "Upton",
      phoneNumber: "Compatible",
    },
    physician: {
      firstName: "Santiago",
      lastName: "Langosh",
      licensedStates: [
        "Avon",
      ],
      npi: "Games",
    },
    sampleId: "aggregate",
    userId: "6747b05c-ba39-4bba-bcb7-ed536a4e3800",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.RegisterTestkitRequest](../../models/shared/registertestkitrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `retries`                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                         | :heavy_minus_sign:                                                             | Configuration to override the default retry behavior of the client.            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.RegisterTestkitV3OrderTestkitRegisterPostResponse](../../models/operations/registertestkitv3ordertestkitregisterpostresponse.md)>**


## reschedulePhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentReschedulePatch

Reschedule a previously booked at-home phlebotomy appointment.

### Example Usage

```typescript
import { Vital } from "Vital";
import {
  ReschedulePhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentReschedulePatchRequest,
} from "Vital/dist/sdk/models/operations";
import { AppointmentRescheduleRequest } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const appointmentRescheduleRequest: AppointmentRescheduleRequest = {
  bookingKey: "Electronics",
};
const orderId: string = "7372e4dd-db83-4234-a562-cb3ddc204a69";

  const res = await sdk.order.reschedulePhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentReschedulePatch(appointmentRescheduleRequest, orderId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `appointmentRescheduleRequest`                                                             | [shared.AppointmentRescheduleRequest](../../models/shared/appointmentreschedulerequest.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `orderId`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | Your Order ID.                                                                             |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.ReschedulePhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentReschedulePatchResponse](../../models/operations/reschedulephlebotomyappointmentv3orderorderidphlebotomyappointmentreschedulepatchresponse.md)>**


## syncTestkitOrderStatusV3OrderTestkitStatusPost

This function receives requests from cloud_scheduler
and checks the order status of the order if the order status
in terms of the inbound delivery and outbound delivery status has
changed. If changed then the order status is updated and a webhook
is sent to the respective team.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.syncTestkitOrderStatusV3OrderTestkitStatusPost();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.SyncTestkitOrderStatusV3OrderTestkitStatusPostResponse](../../models/operations/synctestkitorderstatusv3ordertestkitstatuspostresponse.md)>**

