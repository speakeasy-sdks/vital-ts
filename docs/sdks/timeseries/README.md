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

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "impactful";
const userId: string = "167a20d0-010c-46df-9636-3b96cbd8acaa";
const endDate: string = "Dollar";
const provider: string = "California";

  const res = await sdk.timeseries.getBloodOxygen(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdBloodOxygenGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridbloodoxygengetresponse.md)>**


## getBloodPressure

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdBloodPressureGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "gee";
const userId: string = "1b0b644f-7b3e-4a62-b593-87de819d0467";
const endDate: string = "Silicon";
const provider: string = "generating";

  const res = await sdk.timeseries.getBloodPressure(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdBloodPressureGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridbloodpressuregetresponse.md)>**


## getCaffeine

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdCaffeineGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "Bike";
const userId: string = "0eb86098-dcc6-4f6c-b57c-f521cb838d86";
const endDate: string = "Ward";
const provider: string = "Account";

  const res = await sdk.timeseries.getCaffeine(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCaffeineGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcaffeinegetresponse.md)>**


## getCaloriesActive

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdCaloriesActiveGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "Federation";
const userId: string = "1117e3cf-3f90-4377-abb8-9ae3afbb8a22";
const endDate: string = "minor";
const provider: string = "Officer";

  const res = await sdk.timeseries.getCaloriesActive(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCaloriesActiveGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcaloriesactivegetresponse.md)>**


## getCaloriesBasal

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdCaloriesBasalGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "encoding";
const userId: string = "ab80902f-0d8b-480a-ba6b-9f3470ca8035";
const endDate: string = "Cruiser";
const provider: string = "hm";

  const res = await sdk.timeseries.getCaloriesBasal(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCaloriesBasalGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcaloriesbasalgetresponse.md)>**


## getCholesterolAll

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "scale";
const userId: string = "6c3b209b-90b5-4907-8d42-be3036af6959";
const endDate: string = "nulla";
const provider: string = "deposit";

  const res = await sdk.timeseries.getCholesterolAll(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcholesterolgetresponse.md)>**


## getCholesterolHdl

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolHdlGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "offer";
const userId: string = "7d0d0e3b-2a52-49fb-9c2d-8b672820431e";
const endDate: string = "sticky";
const provider: string = "Rap";

  const res = await sdk.timeseries.getCholesterolHdl(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolHdlGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcholesterolhdlgetresponse.md)>**


## getCholesterolLdl

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolLdlGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "Shirt";
const userId: string = "6985e48f-6e4c-4a12-bede-b29d7329161d";
const endDate: string = "Fish";
const provider: string = "Customer";

  const res = await sdk.timeseries.getCholesterolLdl(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolLdlGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcholesterolldlgetresponse.md)>**


## getDistance

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdDistanceGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "Borders";
const userId: string = "ab33e7f6-399b-48f7-bc69-a8c4ea5f811a";
const endDate: string = "secured";
const provider: string = "capacitor";

  const res = await sdk.timeseries.getDistance(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdDistanceGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseriddistancegetresponse.md)>**


## getFloorsClimbed

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdFloorsClimbedGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "Framingham";
const userId: string = "b58dc04a-1477-49d7-b878-666ff90d3c15";
const endDate: string = "Mazda";
const provider: string = "aspernatur";

  const res = await sdk.timeseries.getFloorsClimbed(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdFloorsClimbedGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridfloorsclimbedgetresponse.md)>**


## getGlucose

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdGlucoseGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "withdrawal";
const userId: string = "c755f4e3-6361-4b98-88a3-3b1731a7aeff";
const endDate: string = "tinker";
const provider: string = "New";

  const res = await sdk.timeseries.getGlucose(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdGlucoseGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridglucosegetresponse.md)>**


## getHeartrate

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdHeartrateGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "Tuna";
const userId: string = "24193a7e-0c48-4f71-9f29-3d439db94517";
const endDate: string = "Bedfordshire";
const provider: string = "Burundi";

  const res = await sdk.timeseries.getHeartrate(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdHeartrateGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridheartrategetresponse.md)>**


## getHrv

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdHrvGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "onto";
const userId: string = "8c7b86cf-8ac7-4c96-9134-2c13c4a095df";
const endDate: string = "invoice";
const provider: string = "Music";

  const res = await sdk.timeseries.getHrv(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdHrvGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridhrvgetresponse.md)>**


## getHypnogram

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdHypnogramGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "Agender";
const userId: string = "16363f90-ddad-4e35-80c1-806b114554f6";
const endDate: string = "South";
const provider: string = "parsing";

  const res = await sdk.timeseries.getHypnogram(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdHypnogramGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridhypnogramgetresponse.md)>**


## getIge

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdIgeGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "gosh";
const userId: string = "97cbc298-b6fe-4d30-8681-3b66be805e5c";
const endDate: string = "maroon";
const provider: string = "Rupee";

  const res = await sdk.timeseries.getIge(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdIgeGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridigegetresponse.md)>**


## getIgg

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdIggGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "orchestrate";
const userId: string = "54a70b28-d95e-4f79-8c9c-f8e7ce7fd8db";
const endDate: string = "Recumbent";
const provider: string = "Classical";

  const res = await sdk.timeseries.getIgg(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdIggGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridigggetresponse.md)>**


## getMindfulnessMinutes

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdMindfulnessMinutesGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "win";
const userId: string = "42bcd30f-79dd-4664-acae-0a26ee2b9de9";
const endDate: string = "equally";
const provider: string = "humming";

  const res = await sdk.timeseries.getMindfulnessMinutes(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdMindfulnessMinutesGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridmindfulnessminutesgetresponse.md)>**


## getRespiratoryRate

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdRespiratoryRateGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "circa";
const userId: string = "daa7f697-3a55-4ea3-8cb2-e2169f40d62d";
const endDate: string = "upon";
const provider: string = "Fluorine";

  const res = await sdk.timeseries.getRespiratoryRate(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdRespiratoryRateGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridrespiratoryrategetresponse.md)>**


## getSteps

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdStepsGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "copying";
const userId: string = "f7b728ea-d1ba-4037-920b-80b82a067baf";
const endDate: string = "optical";
const provider: string = "platforms";

  const res = await sdk.timeseries.getSteps(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdStepsGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridstepsgetresponse.md)>**


## getTotalCholesterol

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolTotalGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "Director";
const userId: string = "6cf900a0-1395-4d12-a9ee-be971547d810";
const endDate: string = "farad";
const provider: string = "partially";

  const res = await sdk.timeseries.getTotalCholesterol(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolTotalGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcholesteroltotalgetresponse.md)>**


## getTriglycerides

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolTriglyceridesGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "Optional";
const userId: string = "c97f143e-c935-45c9-a6cd-c7190c8f2e16";
const endDate: string = "state";
const provider: string = "female";

  const res = await sdk.timeseries.getTriglycerides(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolTriglyceridesGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcholesteroltriglyceridesgetresponse.md)>**


## getUserSleepStream

Get Sleep stream for a user_id

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetUserSleepStreamV2TimeseriesSleepSleepIdStreamGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const sleepId: string = "quantify";

  const res = await sdk.timeseries.getUserSleepStream(sleepId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `sleepId`                                                           | *string*                                                            | :heavy_check_mark:                                                  | The Vital Sleep ID                                                  |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetUserSleepStreamV2TimeseriesSleepSleepIdStreamGetResponse](../../models/operations/getusersleepstreamv2timeseriessleepsleepidstreamgetresponse.md)>**


## getUserWorkouts

Get User Workouts

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetUserWorkoutsV2TimeseriesWorkoutsWorkoutIdStreamGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const workoutId: string = "bc0edaf0-6098-41f4-a6eb-525d09cc6d26";

  const res = await sdk.timeseries.getUserWorkouts(workoutId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `workoutId`                                                         | *string*                                                            | :heavy_check_mark:                                                  | The Vital ID for the workout                                        |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetUserWorkoutsV2TimeseriesWorkoutsWorkoutIdStreamGetResponse](../../models/operations/getuserworkoutsv2timeseriesworkoutsworkoutidstreamgetresponse.md)>**


## getWater

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTimeseriesResourceDataV2TimeseriesUserIdWaterGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const startDate: string = "Garden";
const userId: string = "80182b86-b75b-4a3c-a7d6-4c9e6a0a1275";
const endDate: string = "construction";
const provider: string = "withdrawal";

  const res = await sdk.timeseries.getWater(startDate, userId, endDate, provider);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | Date from in YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 00:00:00 |
| `userId`                                                                                                                   | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `endDate`                                                                                                                  | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Date to YYYY-MM-DD or ISO formatted date time. If a date is provided without a time, the time will be set to 23:59:59      |
| `provider`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Provider oura/strava etc                                                                                                   |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdWaterGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridwatergetresponse.md)>**


## postBloodPressure

Post User Blood Pressure

### Example Usage

```typescript
import { Vital } from "Vital";
import { PostUserBloodPressureV2TimeseriesUserIdBloodPressurePostRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const userId: string = "5d55820e-8c39-4307-91e1-9cdd23720f04";
const xVitalAndroidSDKVersion: string = "Indium";
const xVitalIosSDKVersion: string = "Cab";

  const res = await sdk.timeseries.postBloodPressure(userId, xVitalAndroidSDKVersion, xVitalIosSDKVersion);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `userId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `xVitalAndroidSDKVersion`                                           | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `xVitalIosSDKVersion`                                               | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.PostUserBloodPressureV2TimeseriesUserIdBloodPressurePostResponse](../../models/operations/postuserbloodpressurev2timeseriesuseridbloodpressurepostresponse.md)>**


## postVitals

Post User Vitals

### Example Usage

```typescript
import { Vital } from "Vital";
import { PostUserVitalsV2TimeseriesUserIdResourcePostRequest } from "Vital/dist/sdk/models/operations";
import { IngestibleTimeseriesResource } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const resource: IngestibleTimeseriesResource = IngestibleTimeseriesResource.BloodOxygen;
const userId: string = "7a0eca13-40ec-46ac-9433-f77edd2bbc91";
const xVitalAndroidSDKVersion: string = "Arkansas";
const xVitalIosSDKVersion: string = "perferendis";

  const res = await sdk.timeseries.postVitals(resource, userId, xVitalAndroidSDKVersion, xVitalIosSDKVersion);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                  | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `resource`                                                                                 | [shared.IngestibleTimeseriesResource](../../models/shared/ingestibletimeseriesresource.md) | :heavy_check_mark:                                                                         | An enumeration.                                                                            |
| `userId`                                                                                   | *string*                                                                                   | :heavy_check_mark:                                                                         | N/A                                                                                        |
| `xVitalAndroidSDKVersion`                                                                  | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `xVitalIosSDKVersion`                                                                      | *string*                                                                                   | :heavy_minus_sign:                                                                         | N/A                                                                                        |
| `retries`                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                     | :heavy_minus_sign:                                                                         | Configuration to override the default retry behavior of the client.                        |
| `config`                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                               | :heavy_minus_sign:                                                                         | Available config options for making requests.                                              |


### Response

**Promise<[operations.PostUserVitalsV2TimeseriesUserIdResourcePostResponse](../../models/operations/postuservitalsv2timeseriesuseridresourcepostresponse.md)>**

