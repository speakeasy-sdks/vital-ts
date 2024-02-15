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

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const appointmentBookingRequest: AppointmentBookingRequest = {
  bookingKey: "<value>",
};
const orderId: string = "ce486d40-b1d8-4151-82e6-c0e7d72ca79b";

  const res = await sdk.order.bookPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentBookPost(appointmentBookingRequest, orderId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `appointmentBookingRequest`                                                              | [shared.AppointmentBookingRequest](../../sdk/models/shared/appointmentbookingrequest.md) | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `orderId`                                                                                | *string*                                                                                 | :heavy_check_mark:                                                                       | Your Order ID.                                                                           |
| `retries`                                                                                | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                 | :heavy_minus_sign:                                                                       | Configuration to override the default retry behavior of the client.                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.BookPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentBookPostResponse](../../sdk/models/operations/bookphlebotomyappointmentv3orderorderidphlebotomyappointmentbookpostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## cancelOrderV3OrderOrderIdCancelPost

POST cancel order

### Example Usage

```typescript
import { Vital } from "Vital";
import { CancelOrderV3OrderOrderIdCancelPostRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const orderId: string = "b9d919c2-b9aa-4759-bba5-fb974a744f9a";

  const res = await sdk.order.cancelOrderV3OrderOrderIdCancelPost(orderId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orderId`                                                           | *string*                                                            | :heavy_check_mark:                                                  | Your Order ID.                                                      |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.CancelOrderV3OrderOrderIdCancelPostResponse](../../sdk/models/operations/cancelorderv3orderorderidcancelpostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## cancelPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentCancelPatch

Cancel a previously booked at-home phlebotomy appointment.

### Example Usage

```typescript
import { Vital } from "Vital";
import { CancelPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentCancelPatchRequest } from "Vital/dist/sdk/models/operations";
import { AppointmentCancelRequest } from "Vital/dist/sdk/models/shared";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const appointmentCancelRequest: AppointmentCancelRequest = {
  cancellationReasonId: "<value>",
};
const orderId: string = "a0cd9528-ddb0-4d27-a7e9-01ccf3b9448c";

  const res = await sdk.order.cancelPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentCancelPatch(appointmentCancelRequest, orderId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                              | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `appointmentCancelRequest`                                                             | [shared.AppointmentCancelRequest](../../sdk/models/shared/appointmentcancelrequest.md) | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `orderId`                                                                              | *string*                                                                               | :heavy_check_mark:                                                                     | Your Order ID.                                                                         |
| `retries`                                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)                               | :heavy_minus_sign:                                                                     | Configuration to override the default retry behavior of the client.                    |
| `config`                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                           | :heavy_minus_sign:                                                                     | Available config options for making requests.                                          |


### Response

**Promise<[operations.CancelPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentCancelPatchResponse](../../sdk/models/operations/cancelphlebotomyappointmentv3orderorderidphlebotomyappointmentcancelpatchresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## create

POST create new order

### Example Usage

```typescript
import { Vital } from "Vital";
import { ConsentType, Gender, ResponsibleRelationship } from "Vital/dist/sdk/models/shared";

async function run() {
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
      backImage: "<value>",
      diagnosisCodes: [
        "<value>",
      ],
      frontImage: "<value>",
      patientSignatureImage: "<value>",
      responsibleDetails: {
        address: {
          city: "Loyalhaven",
          country: "Iraq",
          firstLine: "<value>",
          state: "Iowa",
          zip: "70973",
        },
        firstName: "Valerie",
        lastName: "Toy",
        phoneNumber: "<value>",
      },
    },
    labTestId: "07241bcd-d89d-4c7f-a504-e08333b1d5e2",
    patientAddress: {
      city: "Aprilstead",
      country: "Bhutan",
      state: "Louisiana",
      street: "Cole Greens",
      zip: "08696-0210",
    },
    patientDetails: {
      dob: new Date("2024-09-22T06:48:17.041Z"),
      email: "Eugene65@yahoo.com",
      firstName: "Lucius",
      gender: Gender.Other,
      lastName: "Schaefer",
      phoneNumber: "<value>",
    },
    physician: {
      firstName: "Sven",
      lastName: "Kautzer",
      licensedStates: [
        "<value>",
      ],
      npi: "<value>",
      signatureImage: "<value>",
    },
    userId: "7b7c49cf-24bd-4ebc-bc23-e7d6f9415747",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `request`                                                                                      | [shared.CreateOrderRequestCompatible](../../sdk/models/shared/createorderrequestcompatible.md) | :heavy_check_mark:                                                                             | The request object to use for the request.                                                     |
| `retries`                                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.CreateOrderV3OrderPostResponse](../../sdk/models/operations/createorderv3orderpostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## createTestkit

Creates an order for an unregistered testkit

### Example Usage

```typescript
import { Vital } from "Vital";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.createTestkit({
    labTestId: "eb480e87-d170-4ada-8df4-8f4bbca14aec",
    shippingDetails: {
      city: "West Esmeraldaborough",
      country: "Antarctica (the territory South of 60 deg S)",
      firstLine: "<value>",
      phoneNumber: "<value>",
      receiverName: "<value>",
      state: "Maryland",
      zip: "40261-2310",
    },
    userId: "d9798fbf-e68e-4fed-b371-3330afbf06a4",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [shared.CreateRegistrableTestkitOrderRequest](../../sdk/models/shared/createregistrabletestkitorderrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `retries`                                                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                       | :heavy_minus_sign:                                                                                             | Configuration to override the default retry behavior of the client.                                            |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.CreateTestkitOrderV3OrderTestkitPostResponse](../../sdk/models/operations/createtestkitorderv3ordertestkitpostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## dispatchStatus

Dispatch Order Status

### Example Usage

```typescript
import { Vital } from "Vital";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.dispatchStatus();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.DispatchOrderStatusV3OrderDispatchStatusChecksPostResponse](../../sdk/models/operations/dispatchorderstatusv3orderdispatchstatuscheckspostresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## get

GET individual order by ID.

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetOrderV3OrderOrderIdGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const orderId: string = "b18d8d81-fd7b-4764-a31e-475cb1f36591";

  const res = await sdk.order.get(orderId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orderId`                                                           | *string*                                                            | :heavy_check_mark:                                                  | Your Order ID.                                                      |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetOrderV3OrderOrderIdGetResponse](../../sdk/models/operations/getorderv3orderorderidgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getAppointmentAvailability

Return the available time slots to book an appointment with a phlebotomist
for the given address and order.

### Example Usage

```typescript
import { Vital } from "Vital";
import {
  GetOrderAppointmentAvailabilityV3OrderOrderIdPhlebotomyAppointmentAvailabilityPostAddress,
  GetOrderAppointmentAvailabilityV3OrderOrderIdPhlebotomyAppointmentAvailabilityPostRequest,
} from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const orderId: string = "c094c82e-a8e0-42d1-a065-be1f658ff11c";
const requestBody: GetOrderAppointmentAvailabilityV3OrderOrderIdPhlebotomyAppointmentAvailabilityPostAddress = {
  city: "Shanahanboro",
  firstLine: "<value>",
  state: "Hawaii",
  zipCode: "61562-2121",
};

  const res = await sdk.order.getAppointmentAvailability(orderId, requestBody);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `orderId`                                                                                                                                                                                                                        | *string*                                                                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                               | Your Order ID.                                                                                                                                                                                                                   |
| `requestBody`                                                                                                                                                                                                                    | [operations.GetOrderAppointmentAvailabilityV3OrderOrderIdPhlebotomyAppointmentAvailabilityPostAddress](../../sdk/models/operations/getorderappointmentavailabilityv3orderorderidphlebotomyappointmentavailabilitypostaddress.md) | :heavy_minus_sign:                                                                                                                                                                                                               | N/A                                                                                                                                                                                                                              |
| `retries`                                                                                                                                                                                                                        | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                               | Configuration to override the default retry behavior of the client.                                                                                                                                                              |
| `config`                                                                                                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                               | Available config options for making requests.                                                                                                                                                                                    |


### Response

**Promise<[operations.GetOrderAppointmentAvailabilityV3OrderOrderIdPhlebotomyAppointmentAvailabilityPostResponse](../../sdk/models/operations/getorderappointmentavailabilityv3orderorderidphlebotomyappointmentavailabilitypostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getAreaInfo

GET information about an area with respect to lab-testing.

Information returned:
* Whether a given zip code is served by our Phlebotomy network.

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetAreaInfoV3OrderAreaInfoGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const zipCode: string = "<value>";

  const res = await sdk.order.getAreaInfo(zipCode);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `zipCode`                                                           | *string*                                                            | :heavy_check_mark:                                                  | Zip code of the area to check                                       |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetAreaInfoV3OrderAreaInfoGetResponse](../../sdk/models/operations/getareainfov3orderareainfogetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getLabTestResult

This endpoint returns the lab results for the order.

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetLabTestResultV3OrderOrderIdResultPdfGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const orderId: string = "c9229487-8f86-47ef-848e-7eb7243713ad";

  const res = await sdk.order.getLabTestResult(orderId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orderId`                                                           | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetLabTestResultV3OrderOrderIdResultPdfGetResponse](../../sdk/models/operations/getlabtestresultv3orderorderidresultpdfgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getLabTestResultMetadata

Return metadata related to order results, such as lab metadata,
provider and sample dates.

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetLabTestResultMetadataV3OrderOrderIdResultMetadataGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const orderId: string = "daf5fdc5-7c54-4772-826b-69600571af0f";

  const res = await sdk.order.getLabTestResultMetadata(orderId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orderId`                                                           | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetLabTestResultMetadataV3OrderOrderIdResultMetadataGetResponse](../../sdk/models/operations/getlabtestresultmetadatav3orderorderidresultmetadatagetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getLabTestResultRaw

Return both metadata and raw json test data

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetLabTestResultRawV3OrderOrderIdResultGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const orderId: string = "2cfa7265-4a8d-45d9-b8ea-42e844b02385";

  const res = await sdk.order.getLabTestResultRaw(orderId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orderId`                                                           | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetLabTestResultRawV3OrderOrderIdResultGetResponse](../../sdk/models/operations/getlabtestresultrawv3orderorderidresultgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getPhlebotomyAppointment

Get the appointment associated with an order.

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const orderId: string = "3e95493c-2969-4eab-9aaf-61adbf59533c";

  const res = await sdk.order.getPhlebotomyAppointment(orderId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orderId`                                                           | *string*                                                            | :heavy_check_mark:                                                  | Your Order ID.                                                      |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetPhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentGetResponse](../../sdk/models/operations/getphlebotomyappointmentv3orderorderidphlebotomyappointmentgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getPhlebotomyCancellationReasons

Get the list of reasons for cancelling an at-home phlebotomy appointment.

### Example Usage

```typescript
import { Vital } from "Vital";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.getPhlebotomyCancellationReasons();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetPhlebotomyAppointmentCancellationReasonsV3OrderPhlebotomyAppointmentCancellationReasonsGetResponse](../../sdk/models/operations/getphlebotomyappointmentcancellationreasonsv3orderphlebotomyappointmentcancellationreasonsgetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getRequisitionUrl

GET requisition pdf for an order

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetOrderRequisitionUrlV3OrderOrderIdRequisitionPdfGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const orderId: string = "bfbbc5db-bd5f-47b5-9a88-6ef4ccfaf335";

  const res = await sdk.order.getRequisitionUrl(orderId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orderId`                                                           | *string*                                                            | :heavy_check_mark:                                                  | Your Order ID.                                                      |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetOrderRequisitionUrlV3OrderOrderIdRequisitionPdfGetResponse](../../sdk/models/operations/getorderrequisitionurlv3orderorderidrequisitionpdfgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## orderProcessSimulateV3OrderOrderIdTestPost

Get available test kits.

### Example Usage

```typescript
import { Vital } from "Vital";
import { OrderProcessSimulateV3OrderOrderIdTestPostRequest } from "Vital/dist/sdk/models/operations";
import { OrderStatus } from "Vital/dist/sdk/models/shared";

async function run() {
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
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orderId`                                                           | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `delay`                                                             | *number*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `finalStatus`                                                       | [shared.OrderStatus](../../sdk/models/shared/orderstatus.md)        | :heavy_minus_sign:                                                  | An enumeration.                                                     |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.OrderProcessSimulateV3OrderOrderIdTestPostResponse](../../sdk/models/operations/orderprocesssimulatev3orderorderidtestpostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## processTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPost

POST Create shipment for order

### Example Usage

```typescript
import { Vital } from "Vital";
import { ProcessTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPostRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const orderId: string = "21061e75-f548-42fd-90f0-d372d63dff6e";
const teamId: string = "26a256a9-b0f5-4854-8814-40907e852835";

  const res = await sdk.order.processTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPost(orderId, teamId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `orderId`                                                           | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `teamId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.ProcessTestkitOrderV3OrderTestkitProcessTeamIdOrderIdPostResponse](../../sdk/models/operations/processtestkitorderv3ordertestkitprocessteamidorderidpostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## processTestkitShipHeroOrderShippedV3OrderTestkitWebhookShipheroShipmentUpdatePost

Process Testkit Ship Hero Order Shipped

### Example Usage

```typescript
import { Vital } from "Vital";
import { WebhookType } from "Vital/dist/sdk/models/shared";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.processTestkitShipHeroOrderShippedV3OrderTestkitWebhookShipheroShipmentUpdatePost({
    fulfillment: {
      orderNumber: "<value>",
      orderUuid: "<value>",
    },
    webhookType: WebhookType.ShipmentUpdate,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.ShipmentWebhookUpdate](../../sdk/models/shared/shipmentwebhookupdate.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `retries`                                                                        | [utils.RetryConfig](../../internal/utils/retryconfig.md)                         | :heavy_minus_sign:                                                               | Configuration to override the default retry behavior of the client.              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ProcessTestkitShipHeroOrderShippedV3OrderTestkitWebhookShipheroShipmentUpdatePostResponse](../../sdk/models/operations/processtestkitshipheroordershippedv3ordertestkitwebhookshipheroshipmentupdatepostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## registerTestkitV3OrderTestkitRegisterPost

Register Testkit

### Example Usage

```typescript
import { Vital } from "Vital";
import { ConsentType, Gender } from "Vital/dist/sdk/models/shared";

async function run() {
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
      state: "Hawaii",
      street: "Roma Overpass",
      zip: "58769",
    },
    patientDetails: {
      dob: new Date("2024-01-01T04:15:29.649Z"),
      email: "Mateo_Bode@gmail.com",
      firstName: "Flossie",
      gender: Gender.Female,
      lastName: "Stroman",
      phoneNumber: "<value>",
    },
    physician: {
      firstName: "Johnny",
      lastName: "Blick",
      licensedStates: [
        "<value>",
      ],
      npi: "<value>",
    },
    sampleId: "<value>",
    userId: "03243674-7b05-4cba-b9bb-afcb7ed536a4",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                          | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `request`                                                                          | [shared.RegisterTestkitRequest](../../sdk/models/shared/registertestkitrequest.md) | :heavy_check_mark:                                                                 | The request object to use for the request.                                         |
| `retries`                                                                          | [utils.RetryConfig](../../internal/utils/retryconfig.md)                           | :heavy_minus_sign:                                                                 | Configuration to override the default retry behavior of the client.                |
| `config`                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                       | :heavy_minus_sign:                                                                 | Available config options for making requests.                                      |


### Response

**Promise<[operations.RegisterTestkitV3OrderTestkitRegisterPostResponse](../../sdk/models/operations/registertestkitv3ordertestkitregisterpostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## reschedulePhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentReschedulePatch

Reschedule a previously booked at-home phlebotomy appointment.

### Example Usage

```typescript
import { Vital } from "Vital";
import {
  ReschedulePhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentReschedulePatchRequest,
} from "Vital/dist/sdk/models/operations";
import { AppointmentRescheduleRequest } from "Vital/dist/sdk/models/shared";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const appointmentRescheduleRequest: AppointmentRescheduleRequest = {
  bookingKey: "<value>",
};
const orderId: string = "337372e4-dddb-4832-b4a5-62cb3ddc204a";

  const res = await sdk.order.reschedulePhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentReschedulePatch(appointmentRescheduleRequest, orderId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `appointmentRescheduleRequest`                                                                 | [shared.AppointmentRescheduleRequest](../../sdk/models/shared/appointmentreschedulerequest.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `orderId`                                                                                      | *string*                                                                                       | :heavy_check_mark:                                                                             | Your Order ID.                                                                                 |
| `retries`                                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.ReschedulePhlebotomyAppointmentV3OrderOrderIdPhlebotomyAppointmentReschedulePatchResponse](../../sdk/models/operations/reschedulephlebotomyappointmentv3orderorderidphlebotomyappointmentreschedulepatchresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## syncTestkitOrderStatusV3OrderTestkitStatusPost

This function receives requests from cloud_scheduler
and checks the order status of the order if the order status
in terms of the inbound delivery and outbound delivery status has
changed. If changed then the order status is updated and a webhook
is sent to the respective team.

### Example Usage

```typescript
import { Vital } from "Vital";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.order.syncTestkitOrderStatusV3OrderTestkitStatusPost();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.SyncTestkitOrderStatusV3OrderTestkitStatusPostResponse](../../sdk/models/operations/synctestkitorderstatusv3ordertestkitstatuspostresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
