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

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.bookPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentBookPost({
    appointmentBookingRequest: {
      bookingKey: "how index Electric",
    },
    orderId: "0b1d8151-82e6-4c0e-bd72-ca79bcf3d5ba",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                        | Type                                                                                                                                                                                             | Required                                                                                                                                                                                         | Description                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                                        | [operations.BookPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentBookPostRequest](../../models/operations/bookphlebotomyappointmentv3orderorderidphlebotomyappointmentbookpostrequest.md) | :heavy_check_mark:                                                                                                                                                                               | The request object to use for the request.                                                                                                                                                       |
| `retries`                                                                                                                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                               | Configuration to override the default retry behavior of the client.                                                                                                                              |
| `config`                                                                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                               | Available config options for making requests.                                                                                                                                                    |


### Response

**Promise<[operations.BookPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentBookPostResponse](../../models/operations/bookphlebotomyappointmentv3orderorderidphlebotomyappointmentbookpostresponse.md)>**


## cancelOrderV3OrderOrderIdCancelPost

POST cancel order

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.cancelOrderV3OrderOrderIdCancelPost({
    orderId: "b9d919c2-b9aa-4759-bba5-fb974a744f9a",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.CancelOrderV3OrderOrderIdCancelPostRequest](../../models/operations/cancelorderv3orderorderidcancelpostrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `retries`                                                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                         | :heavy_minus_sign:                                                                                                             | Configuration to override the default retry behavior of the client.                                                            |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.CancelOrderV3OrderOrderIdCancelPostResponse](../../models/operations/cancelorderv3orderorderidcancelpostresponse.md)>**


## cancelPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentCancelPatch

Cancel a previously booked at-home phlebotomy appointment.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.cancelPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentCancelPatch({
    appointmentCancelRequest: {
      cancellationReasonId: "Sandy Minivan",
    },
    orderId: "528ddb0d-27a7-4e90-9ccf-3b9448c5e365",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                  | Type                                                                                                                                                                                                       | Required                                                                                                                                                                                                   | Description                                                                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                  | [operations.CancelPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentCancelPatchRequest](../../models/operations/cancelphlebotomyappointmentv3orderorderidphlebotomyappointmentcancelpatchrequest.md) | :heavy_check_mark:                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                 |
| `retries`                                                                                                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                         | Configuration to override the default retry behavior of the client.                                                                                                                                        |
| `config`                                                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                         | Available config options for making requests.                                                                                                                                                              |


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
          firstLine: "orange Northwest",
          state: "SUV quantify Polestar",
          zip: "physical Ameliorated",
        },
        firstName: "Destiny",
        lastName: "Turcotte",
        phoneNumber: "overriding",
      },
    },
    labTestId: "33b1d5e2-6191-45a2-9d0d-9ea1320e8504",
    patientAddress: {
      city: "Nitzschestad",
      country: "Senegal",
      state: "Dollar 1080p Rubber",
      street: "Ziemann Cove",
      zip: "male",
    },
    patientDetails: {
      dob: new Date("2023-10-06T11:43:11.876Z"),
      email: "Osborne.Willms21@hotmail.com",
      firstName: "Susanna",
      gender: Gender.Male,
      lastName: "Stracke",
      phoneNumber: "overhang Electronic",
    },
    physician: {
      firstName: "Jennifer",
      lastName: "Dare",
      licensedStates: [
        "markets",
      ],
      npi: "avenge Pop discrete",
      signatureImage: "pixel",
    },
    userId: "5835d6b1-b39d-47ea-8def-ed8d063eda5a",
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
      firstLine: "Bedfordshire Research",
      phoneNumber: "reinvent",
      receiverName: "Minivan",
      state: "Soul plus",
      zip: "kookily capacitor er",
    },
    userId: "df371333-0afb-4f06-a4cd-2f36154eee26",
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

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.get({
    orderId: "b18d8d81-fd7b-4764-a31e-475cb1f36591",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                  | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                  | [operations.GetOrderV3OrderOrderIdGetRequest](../../models/operations/getorderv3orderorderidgetrequest.md) | :heavy_check_mark:                                                                                         | The request object to use for the request.                                                                 |
| `retries`                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                     | :heavy_minus_sign:                                                                                         | Configuration to override the default retry behavior of the client.                                        |
| `config`                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                               | :heavy_minus_sign:                                                                                         | Available config options for making requests.                                                              |


### Response

**Promise<[operations.GetOrderV3OrderOrderIdGetResponse](../../models/operations/getorderv3orderorderidgetresponse.md)>**


## getAppointmentAvailability

Return the available time slots to book an appointment with a phlebotomist
for the given address and order.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.getAppointmentAvailability({
    requestBody: {
      city: "Beierfurt",
      firstLine: "Gasoline",
      state: "quietly",
      zipCode: "90180-6043",
    },
    orderId: "be1f658f-f11c-4cd4-b893-8a333321e842",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                    | [operations.GetOrderAppointmentAvailabilityV3OrderOrderIdPhlebotomyAppointmentAvailabilityPostRequest](../../models/operations/getorderappointmentavailabilityv3orderorderidphlebotomyappointmentavailabilitypostrequest.md) | :heavy_check_mark:                                                                                                                                                                                                           | The request object to use for the request.                                                                                                                                                                                   |
| `retries`                                                                                                                                                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                           | Configuration to override the default retry behavior of the client.                                                                                                                                                          |
| `config`                                                                                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                           | Available config options for making requests.                                                                                                                                                                                |


### Response

**Promise<[operations.GetOrderAppointmentAvailabilityV3OrderOrderIdPhlebotomyAppointmentAvailabilityPostResponse](../../models/operations/getorderappointmentavailabilityv3orderorderidphlebotomyappointmentavailabilitypostresponse.md)>**


## getAreaInfo

GET information about an area with respect to lab-testing.

Information returned:
* Whether a given zip code is served by our Phlebotomy network.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.getAreaInfo({
    zipCode: "94836",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                          | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                          | [operations.GetAreaInfoV3OrderAreaInfoGetRequest](../../models/operations/getareainfov3orderareainfogetrequest.md) | :heavy_check_mark:                                                                                                 | The request object to use for the request.                                                                         |
| `retries`                                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                             | :heavy_minus_sign:                                                                                                 | Configuration to override the default retry behavior of the client.                                                |
| `config`                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                       | :heavy_minus_sign:                                                                                                 | Available config options for making requests.                                                                      |


### Response

**Promise<[operations.GetAreaInfoV3OrderAreaInfoGetResponse](../../models/operations/getareainfov3orderareainfogetresponse.md)>**


## getLabTestResult

This endpoint returns the lab results for the order.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.getLabTestResult({
    orderId: "c9229487-8f86-47ef-848e-7eb7243713ad",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.GetLabTestResultV3OrderOrderIdResultPdfGetRequest](../../models/operations/getlabtestresultv3orderorderidresultpdfgetrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `retries`                                                                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                       | :heavy_minus_sign:                                                                                                                           | Configuration to override the default retry behavior of the client.                                                                          |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.GetLabTestResultV3OrderOrderIdResultPdfGetResponse](../../models/operations/getlabtestresultv3orderorderidresultpdfgetresponse.md)>**


## getLabTestResultMetadata

Return metadata related to order results, such as lab metadata,
provider and sample dates.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.getLabTestResultMetadata({
    orderId: "daf5fdc5-7c54-4772-826b-69600571af0f",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                              | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                              | [operations.GetLabTestResultMetadataV3OrderOrderIdResultMetadataGetRequest](../../models/operations/getlabtestresultmetadatav3orderorderidresultmetadatagetrequest.md) | :heavy_check_mark:                                                                                                                                                     | The request object to use for the request.                                                                                                                             |
| `retries`                                                                                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                     | Configuration to override the default retry behavior of the client.                                                                                                    |
| `config`                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                           | :heavy_minus_sign:                                                                                                                                                     | Available config options for making requests.                                                                                                                          |


### Response

**Promise<[operations.GetLabTestResultMetadataV3OrderOrderIdResultMetadataGetResponse](../../models/operations/getlabtestresultmetadatav3orderorderidresultmetadatagetresponse.md)>**


## getLabTestResultRaw

Return both metadata and raw json test data

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.getLabTestResultRaw({
    orderId: "2cfa7265-4a8d-45d9-b8ea-42e844b02385",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.GetLabTestResultRawV3OrderOrderIdResultGetRequest](../../models/operations/getlabtestresultrawv3orderorderidresultgetrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `retries`                                                                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                       | :heavy_minus_sign:                                                                                                                           | Configuration to override the default retry behavior of the client.                                                                          |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.GetLabTestResultRawV3OrderOrderIdResultGetResponse](../../models/operations/getlabtestresultrawv3orderorderidresultgetresponse.md)>**


## getPhlebotomyAppointment

Get the appointment associated with an order.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.getPhlebotomyAppointment({
    orderId: "3e95493c-2969-4eab-9aaf-61adbf59533c",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                            | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                            | [operations.GetPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentGetRequest](../../models/operations/getphlebotomyappointmentv3orderorderidphlebotomyappointmentgetrequest.md) | :heavy_check_mark:                                                                                                                                                                   | The request object to use for the request.                                                                                                                                           |
| `retries`                                                                                                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                   | Configuration to override the default retry behavior of the client.                                                                                                                  |
| `config`                                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                   | Available config options for making requests.                                                                                                                                        |


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

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.getRequisitionUrl({
    orderId: "bfbbc5db-bd5f-47b5-9a88-6ef4ccfaf335",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                          | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                          | [operations.GetOrderRequisitionUrlV3OrderOrderIdRequisitionPdfGetRequest](../../models/operations/getorderrequisitionurlv3orderorderidrequisitionpdfgetrequest.md) | :heavy_check_mark:                                                                                                                                                 | The request object to use for the request.                                                                                                                         |
| `retries`                                                                                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                                             | :heavy_minus_sign:                                                                                                                                                 | Configuration to override the default retry behavior of the client.                                                                                                |
| `config`                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                       | :heavy_minus_sign:                                                                                                                                                 | Available config options for making requests.                                                                                                                      |


### Response

**Promise<[operations.GetOrderRequisitionUrlV3OrderOrderIdRequisitionPdfGetResponse](../../models/operations/getorderrequisitionurlv3orderorderidrequisitionpdfgetresponse.md)>**


## orderProcessSimulateV3OrderOrderIdTestPost

Get available test kits.

### Example Usage

```typescript
import { Vital } from "Vital";
import { OrderStatus } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.orderProcessSimulateV3OrderOrderIdTestPost({
    orderId: "03c5e046-8598-4154-ab3e-444d34fe425a",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.OrderProcessSimulateV3OrderOrderIdTestPostRequest](../../models/operations/orderprocesssimulatev3orderorderidtestpostrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `retries`                                                                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                       | :heavy_minus_sign:                                                                                                                           | Configuration to override the default retry behavior of the client.                                                                          |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.OrderProcessSimulateV3OrderOrderIdTestPostResponse](../../models/operations/orderprocesssimulatev3orderorderidtestpostresponse.md)>**


## processTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPost

POST Create shipment for order

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.processTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPost({
    orderId: "21061e75-f548-42fd-90f0-d372d63dff6e",
    teamId: "26a256a9-b0f5-4854-8814-40907e852835",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                  | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                  | [operations.ProcessTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPostRequest](../../models/operations/processtestkitorderv3ordertestkitprocessteamidorderidpostrequest.md) | :heavy_check_mark:                                                                                                                                                         | The request object to use for the request.                                                                                                                                 |
| `retries`                                                                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                                                     | :heavy_minus_sign:                                                                                                                                                         | Configuration to override the default retry behavior of the client.                                                                                                        |
| `config`                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                               | :heavy_minus_sign:                                                                                                                                                         | Available config options for making requests.                                                                                                                              |


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
      orderNumber: "Shoals",
      orderUuid: "City Southeast",
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
      state: "software",
      street: "Cole Motorway",
      zip: "olive plagiarism visualize",
    },
    patientDetails: {
      dob: new Date("2021-03-31T18:31:24.365Z"),
      email: "Sylvan86@yahoo.com",
      firstName: "Johnny",
      gender: Gender.Female,
      lastName: "Armstrong",
      phoneNumber: "Constantin",
    },
    physician: {
      firstName: "Dina",
      lastName: "Koss",
      licensedStates: [
        "female",
      ],
      npi: "Gasoline Developer",
    },
    sampleId: "ruler Cerium",
    userId: "ed536a4e-3800-4791-aee9-d389c73aa02f",
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

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.reschedulePhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentReschedulePatch({
    appointmentRescheduleRequest: {
      bookingKey: "Shoes",
    },
    orderId: "372e4ddd-b832-434a-962c-b3ddc204a698",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                                                  | [operations.ReschedulePhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentReschedulePatchRequest](../../models/operations/reschedulephlebotomyappointmentv3orderorderidphlebotomyappointmentreschedulepatchrequest.md) | :heavy_check_mark:                                                                                                                                                                                                         | The request object to use for the request.                                                                                                                                                                                 |
| `retries`                                                                                                                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                         | Configuration to override the default retry behavior of the client.                                                                                                                                                        |
| `config`                                                                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                                                         | Available config options for making requests.                                                                                                                                                                              |


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

