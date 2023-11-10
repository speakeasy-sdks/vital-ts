# LabTests
(*labTests*)

### Available Operations

* [create](#create) - Create Lab Test For Team
* [getLabs](#getlabs) - Get Labs
* [getMarkerByProvider](#getmarkerbyprovider) - Get Markers By Provider Id
* [getMarkers](#getmarkers) - Get Markers
* [list](#list) - Get Lab Tests For Team

## create

Create Lab Test For Team

### Example Usage

```typescript
import { Vital } from "Vital";
import { LabTestCollectionMethod, LabTestSampleType } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.labTests.create({
    description: "Multi-tiered human-resource model",
    labId: 859213,
    markerIds: [
      417458,
    ],
    method: LabTestCollectionMethod.Testkit,
    name: "string",
    sampleType: LabTestSampleType.DriedBloodSpot,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                      | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `request`                                                                      | [shared.CreateLabTestRequest](../../sdk/models/shared/createlabtestrequest.md) | :heavy_check_mark:                                                             | The request object to use for the request.                                     |
| `retries`                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                       | :heavy_minus_sign:                                                             | Configuration to override the default retry behavior of the client.            |
| `config`                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                   | :heavy_minus_sign:                                                             | Available config options for making requests.                                  |


### Response

**Promise<[operations.CreateLabTestForTeamV3LabTestsPostResponse](../../sdk/models/operations/createlabtestforteamv3labtestspostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 400-600                    | */*                        |

## getLabs

GET all the labs.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.labTests.getLabs();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetLabsV3LabTestsLabsGetResponse](../../sdk/models/operations/getlabsv3labtestslabsgetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |

## getMarkerByProvider

GET a specific marker for the given lab and provider_id

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetMarkersByProviderIdV3LabTestsLabIdMarkersProviderIdGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const labId: number = 263548;
const providerId: string = "string";

  const res = await sdk.labTests.getMarkerByProvider(labId, providerId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `labId`                                                             | *number*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `providerId`                                                        | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetMarkersByProviderIdV3LabTestsLabIdMarkersProviderIdGetResponse](../../sdk/models/operations/getmarkersbyprovideridv3labtestslabidmarkersprovideridgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 400-600                    | */*                        |

## getMarkers

GET all the markers for the given lab.

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetMarkersV3LabTestsMarkersGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const labId: number = 614936;
const name: string = "string";
const page: number = 549571;
const size: number = 962743;

  const res = await sdk.labTests.getMarkers(labId, name, page, size);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `labId`                                                                                        | *number*                                                                                       | :heavy_minus_sign:                                                                             | The identifier Vital assigned to a lab partner.                                                |
| `name`                                                                                         | *string*                                                                                       | :heavy_minus_sign:                                                                             | The name of an individual biomarker or a panel. Used as a fuzzy filter when searching markers. |
| `page`                                                                                         | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `size`                                                                                         | *number*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `retries`                                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.GetMarkersV3LabTestsMarkersGetResponse](../../sdk/models/operations/getmarkersv3labtestsmarkersgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 400-600                    | */*                        |

## list

GET all the lab tests the team has access to.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.labTests.list();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetLabTestsForTeamV3LabTestsGetResponse](../../sdk/models/operations/getlabtestsforteamv3labtestsgetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 400-600         | */*             |
