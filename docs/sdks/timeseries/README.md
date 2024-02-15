# Timeseries
(*timeseries*)

### Available Operations

* [getBloodOxygen](#getbloodoxygen) - Get Timeseries Resource Data
* [getBloodPressure](#getbloodpressure) - Get Timeseries Resource Data
* [getCaffeine](#getcaffeine) - Get Timeseries Resource Data
* [getCaloriesActive](#getcaloriesactive) - Get Timeseries Resource Data
* [getCaloriesBasal](#getcaloriesbasal) - Get Timeseries Resource Data
* [getCholesterolAll](#getcholesterolall) - Get Timeseries Resource Data
* [getCholesterolHdl](#getcholesterolhdl) - Get Timeseries Resource Data
* [getCholesterolLdl](#getcholesterolldl) - Get Timeseries Resource Data
* [getDistance](#getdistance) - Get Timeseries Resource Data
* [getFloorsClimbed](#getfloorsclimbed) - Get Timeseries Resource Data
* [getGlucose](#getglucose) - Get Timeseries Resource Data
* [getHeartrate](#getheartrate) - Get Timeseries Resource Data
* [getHrv](#gethrv) - Get Timeseries Resource Data
* [getHypnogram](#gethypnogram) - Get Timeseries Resource Data
* [getIge](#getige) - Get Timeseries Resource Data
* [getIgg](#getigg) - Get Timeseries Resource Data
* [getMindfulnessMinutes](#getmindfulnessminutes) - Get Timeseries Resource Data
* [getRespiratoryRate](#getrespiratoryrate) - Get Timeseries Resource Data
* [getSteps](#getsteps) - Get Timeseries Resource Data
* [getTotalCholesterol](#gettotalcholesterol) - Get Timeseries Resource Data
* [getTriglycerides](#gettriglycerides) - Get Timeseries Resource Data
* [getUserSleepStream](#getusersleepstream) - Get User Sleep Stream
* [getUserWorkouts](#getuserworkouts) - Get User Workouts
* [getWater](#getwater) - Get Timeseries Resource Data
* [postBloodPressure](#postbloodpressure) - Post User Blood Pressure
* [postVitals](#postvitals) - Post User Vitals

## getBloodOxygen

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdBloodOxygenGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "<value>";
const userId: string = "4c167a20-d001-40c6-9f96-363b96cbd8ac";
const endDate: string = "<value>";
const provider: string = "<value>";

  const res = await sdk.timeseries.getBloodOxygen(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdBloodOxygenGetResponse](../../sdk/models/operations/gettimeseriesresourcedatav2timeseriesuseridbloodoxygengetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getBloodPressure

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdBloodPressureGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "<value>";
const userId: string = "e91b0b64-4f7b-43ea-a2b5-9387de819d04";
const endDate: string = "<value>";
const provider: string = "<value>";

  const res = await sdk.timeseries.getBloodPressure(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdBloodPressureGetResponse](../../sdk/models/operations/gettimeseriesresourcedatav2timeseriesuseridbloodpressuregetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getCaffeine

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdCaffeineGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "<value>";
const userId: string = "4313a0eb-8609-48dc-86f6-c357cf521cb8";
const endDate: string = "<value>";
const provider: string = "<value>";

  const res = await sdk.timeseries.getCaffeine(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCaffeineGetResponse](../../sdk/models/operations/gettimeseriesresourcedatav2timeseriesuseridcaffeinegetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getCaloriesActive

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdCaloriesActiveGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "<value>";
const userId: string = "0bc1117e-3cf3-4f90-b776-bb89ae3afbb8";
const endDate: string = "<value>";
const provider: string = "<value>";

  const res = await sdk.timeseries.getCaloriesActive(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCaloriesActiveGetResponse](../../sdk/models/operations/gettimeseriesresourcedatav2timeseriesuseridcaloriesactivegetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getCaloriesBasal

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdCaloriesBasalGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "<value>";
const userId: string = "64ab8090-2f0d-48b8-8aba-6b9f3470ca80";
const endDate: string = "<value>";
const provider: string = "<value>";

  const res = await sdk.timeseries.getCaloriesBasal(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCaloriesBasalGetResponse](../../sdk/models/operations/gettimeseriesresourcedatav2timeseriesuseridcaloriesbasalgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getCholesterolAll

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "<value>";
const userId: string = "4b6c3b20-9b90-4b59-87cd-42be3036af69";
const endDate: string = "<value>";
const provider: string = "<value>";

  const res = await sdk.timeseries.getCholesterolAll(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolGetResponse](../../sdk/models/operations/gettimeseriesresourcedatav2timeseriesuseridcholesterolgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getCholesterolHdl

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolHdlGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "<value>";
const userId: string = "f97d0d0e-3b2a-4529-bb1c-2d8b67282043";
const endDate: string = "<value>";
const provider: string = "<value>";

  const res = await sdk.timeseries.getCholesterolHdl(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolHdlGetResponse](../../sdk/models/operations/gettimeseriesresourcedatav2timeseriesuseridcholesterolhdlgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getCholesterolLdl

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolLdlGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "<value>";
const userId: string = "4f26c698-5e48-4f6e-8ca1-27edeb29d732";
const endDate: string = "<value>";
const provider: string = "<value>";

  const res = await sdk.timeseries.getCholesterolLdl(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolLdlGetResponse](../../sdk/models/operations/gettimeseriesresourcedatav2timeseriesuseridcholesterolldlgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getDistance

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdDistanceGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "<value>";
const userId: string = "19ab33e7-f639-49b8-b73c-69a8c4ea5f81";
const endDate: string = "<value>";
const provider: string = "<value>";

  const res = await sdk.timeseries.getDistance(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdDistanceGetResponse](../../sdk/models/operations/gettimeseriesresourcedatav2timeseriesuseriddistancegetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getFloorsClimbed

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdFloorsClimbedGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "<value>";
const userId: string = "05b58dc0-4a14-4779-97b8-78666ff90d3c";
const endDate: string = "<value>";
const provider: string = "<value>";

  const res = await sdk.timeseries.getFloorsClimbed(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdFloorsClimbedGetResponse](../../sdk/models/operations/gettimeseriesresourcedatav2timeseriesuseridfloorsclimbedgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getGlucose

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdGlucoseGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "<value>";
const userId: string = "76c755f4-e363-461b-9888-a33b1731a7ae";
const endDate: string = "<value>";
const provider: string = "<value>";

  const res = await sdk.timeseries.getGlucose(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdGlucoseGetResponse](../../sdk/models/operations/gettimeseriesresourcedatav2timeseriesuseridglucosegetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getHeartrate

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdHeartrateGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "<value>";
const userId: string = "3a24193a-7e0c-448f-b11f-293d439db945";
const endDate: string = "<value>";
const provider: string = "<value>";

  const res = await sdk.timeseries.getHeartrate(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdHeartrateGetResponse](../../sdk/models/operations/gettimeseriesresourcedatav2timeseriesuseridheartrategetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getHrv

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdHrvGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "<value>";
const userId: string = "fa8c7b86-cf8a-4c7c-9611-342c13c4a095";
const endDate: string = "<value>";
const provider: string = "<value>";

  const res = await sdk.timeseries.getHrv(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdHrvGetResponse](../../sdk/models/operations/gettimeseriesresourcedatav2timeseriesuseridhrvgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getHypnogram

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdHypnogramGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "<value>";
const userId: string = "9016363f-90dd-4ade-b540-c1806b114554";
const endDate: string = "<value>";
const provider: string = "<value>";

  const res = await sdk.timeseries.getHypnogram(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdHypnogramGetResponse](../../sdk/models/operations/gettimeseriesresourcedatav2timeseriesuseridhypnogramgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getIge

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdIgeGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "<value>";
const userId: string = "ed97cbc2-98b6-4fed-b0c6-813b66be805e";
const endDate: string = "<value>";
const provider: string = "<value>";

  const res = await sdk.timeseries.getIge(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdIgeGetResponse](../../sdk/models/operations/gettimeseriesresourcedatav2timeseriesuseridigegetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getIgg

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdIggGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "<value>";
const userId: string = "584254a7-0b28-4d95-af79-8c9cf8e7ce7f";
const endDate: string = "<value>";
const provider: string = "<value>";

  const res = await sdk.timeseries.getIgg(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdIggGetResponse](../../sdk/models/operations/gettimeseriesresourcedatav2timeseriesuseridigggetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getMindfulnessMinutes

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdMindfulnessMinutesGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "<value>";
const userId: string = "ff42bcd3-0f79-4dd6-a4ec-ae0a26ee2b9d";
const endDate: string = "<value>";
const provider: string = "<value>";

  const res = await sdk.timeseries.getMindfulnessMinutes(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdMindfulnessMinutesGetResponse](../../sdk/models/operations/gettimeseriesresourcedatav2timeseriesuseridmindfulnessminutesgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getRespiratoryRate

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdRespiratoryRateGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "<value>";
const userId: string = "f5daa7f6-973a-455e-a3cc-b2e2169f40d6";
const endDate: string = "<value>";
const provider: string = "<value>";

  const res = await sdk.timeseries.getRespiratoryRate(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdRespiratoryRateGetResponse](../../sdk/models/operations/gettimeseriesresourcedatav2timeseriesuseridrespiratoryrategetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getSteps

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdStepsGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "<value>";
const userId: string = "f3f7b728-ead1-4ba0-b792-0b80b82a067b";
const endDate: string = "<value>";
const provider: string = "<value>";

  const res = await sdk.timeseries.getSteps(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdStepsGetResponse](../../sdk/models/operations/gettimeseriesresourcedatav2timeseriesuseridstepsgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getTotalCholesterol

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolTotalGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "<value>";
const userId: string = "b56cf900-a013-495d-92e9-eebe971547d8";
const endDate: string = "<value>";
const provider: string = "<value>";

  const res = await sdk.timeseries.getTotalCholesterol(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolTotalGetResponse](../../sdk/models/operations/gettimeseriesresourcedatav2timeseriesuseridcholesteroltotalgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getTriglycerides

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolTriglyceridesGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "<value>";
const userId: string = "58c97f14-3ec9-4355-8966-cdc7190c8f2e";
const endDate: string = "<value>";
const provider: string = "<value>";

  const res = await sdk.timeseries.getTriglycerides(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolTriglyceridesGetResponse](../../sdk/models/operations/gettimeseriesresourcedatav2timeseriesuseridcholesteroltriglyceridesgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getUserSleepStream

Get Sleep stream for a user_id

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetUserSleepStreamV2TimeseriesSleepSleepIdStreamGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const sleepId: string = "<value>";

  const res = await sdk.timeseries.getUserSleepStream(sleepId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `sleepId`                                                           | *string*                                                            | :heavy_check_mark:                                                  | The Vital Sleep ID                                                  |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetUserSleepStreamV2TimeseriesSleepSleepIdStreamGetResponse](../../sdk/models/operations/getusersleepstreamv2timeseriessleepsleepidstreamgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getUserWorkouts

Get User Workouts

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetUserWorkoutsV2TimeseriesWorkoutsWorkoutIdStreamGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const workoutId: string = "bc0edaf0-6098-41f4-a6eb-525d09cc6d26";

  const res = await sdk.timeseries.getUserWorkouts(workoutId);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `workoutId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | The Vital ID for the workout                                        |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetUserWorkoutsV2TimeseriesWorkoutsWorkoutIdStreamGetResponse](../../sdk/models/operations/getuserworkoutsv2timeseriesworkoutsworkoutidstreamgetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getWater

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdWaterGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "<value>";
const userId: string = "2580182b-86b7-45ba-bc67-d64c9e6a0a12";
const endDate: string = "<value>";
const provider: string = "<value>";

  const res = await sdk.timeseries.getWater(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                   | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdWaterGetResponse](../../sdk/models/operations/gettimeseriesresourcedatav2timeseriesuseridwatergetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## postBloodPressure

Post User Blood Pressure

### Example Usage

```typescript
import { Vital } from "Vital";
import { PostUserBloodPressureV2TimeseriesUserIdBloodPressurePostRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const userId: string = "5d55820e-8c39-4307-91e1-9cdd23720f04";
const xVitalAndroidSDKVersion: string = "<value>";
const xVitalIosSDKVersion: string = "<value>";

  const res = await sdk.timeseries.postBloodPressure(userId, xVitalAndroidSDKVersion, xVitalIosSDKVersion);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `userId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `xVitalAndroidSDKVersion`                                           | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `xVitalIosSDKVersion`                                               | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.PostUserBloodPressureV2TimeseriesUserIdBloodPressurePostResponse](../../sdk/models/operations/postuserbloodpressurev2timeseriesuseridbloodpressurepostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## postVitals

Post User Vitals

### Example Usage

```typescript
import { Vital } from "Vital";
import { PostUserVitalsV2TimeseriesUserIdResourcePostRequest } from "Vital/dist/sdk/models/operations";
import { IngestibleTimeseriesResource } from "Vital/dist/sdk/models/shared";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const resource: IngestibleTimeseriesResource = IngestibleTimeseriesResource.BloodOxygen;
const userId: string = "7a0eca13-40ec-46ac-9433-f77edd2bbc91";
const xVitalAndroidSDKVersion: string = "<value>";
const xVitalIosSDKVersion: string = "<value>";

  const res = await sdk.timeseries.postVitals(resource, userId, xVitalAndroidSDKVersion, xVitalIosSDKVersion);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                      | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `resource`                                                                                     | [shared.IngestibleTimeseriesResource](../../sdk/models/shared/ingestibletimeseriesresource.md) | :heavy_check_mark:                                                                             | An enumeration.                                                                                |
| `userId`                                                                                       | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `xVitalAndroidSDKVersion`                                                                      | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `xVitalIosSDKVersion`                                                                          | *string*                                                                                       | :heavy_minus_sign:                                                                             | N/A                                                                                            |
| `retries`                                                                                      | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                       | :heavy_minus_sign:                                                                             | Configuration to override the default retry behavior of the client.                            |
| `config`                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                   | :heavy_minus_sign:                                                                             | Available config options for making requests.                                                  |


### Response

**Promise<[operations.PostUserVitalsV2TimeseriesUserIdResourcePostResponse](../../sdk/models/operations/postuservitalsv2timeseriesuseridresourcepostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |
