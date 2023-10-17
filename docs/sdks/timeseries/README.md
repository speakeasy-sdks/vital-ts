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

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getBloodOxygen({
    startDate: "blue",
    userId: "67a20d00-10c6-4df9-a363-b96cbd8acaa7",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                  | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                  | [operations.GetTimeseriesResourceDataV2TimeseriesUserIdBloodOxygenGetRequest](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridbloodoxygengetrequest.md) | :heavy_check_mark:                                                                                                                                                         | The request object to use for the request.                                                                                                                                 |
| `config`                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                               | :heavy_minus_sign:                                                                                                                                                         | Available config options for making requests.                                                                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdBloodOxygenGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridbloodoxygengetresponse.md)>**


## getBloodPressure

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getBloodPressure({
    startDate: "man Puerto Shoes",
    userId: "3ea62b59-387d-4e81-9d04-67b189bcd02a",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTimeseriesResourceDataV2TimeseriesUserIdBloodPressureGetRequest](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridbloodpressuregetrequest.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `config`                                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                   | :heavy_minus_sign:                                                                                                                                                             | Available config options for making requests.                                                                                                                                  |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdBloodPressureGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridbloodpressuregetresponse.md)>**


## getCaffeine

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getCaffeine({
    startDate: "Electronic",
    userId: "3a0eb860-98dc-4c6f-ac35-7cf521cb838d",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                            | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                            | [operations.GetTimeseriesResourceDataV2TimeseriesUserIdCaffeineGetRequest](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcaffeinegetrequest.md) | :heavy_check_mark:                                                                                                                                                   | The request object to use for the request.                                                                                                                           |
| `config`                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                         | :heavy_minus_sign:                                                                                                                                                   | Available config options for making requests.                                                                                                                        |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCaffeineGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcaffeinegetresponse.md)>**


## getCaloriesActive

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getCaloriesActive({
    startDate: "Uranium",
    userId: "1117e3cf-3f90-4377-abb8-9ae3afbb8a22",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                        | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                        | [operations.GetTimeseriesResourceDataV2TimeseriesUserIdCaloriesActiveGetRequest](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcaloriesactivegetrequest.md) | :heavy_check_mark:                                                                                                                                                               | The request object to use for the request.                                                                                                                                       |
| `config`                                                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                     | :heavy_minus_sign:                                                                                                                                                               | Available config options for making requests.                                                                                                                                    |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCaloriesActiveGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcaloriesactivegetresponse.md)>**


## getCaloriesBasal

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getCaloriesBasal({
    startDate: "Promethium South",
    userId: "02f0d8b8-0aba-46b9-b347-0ca8035c35e5",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTimeseriesResourceDataV2TimeseriesUserIdCaloriesBasalGetRequest](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcaloriesbasalgetrequest.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `config`                                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                   | :heavy_minus_sign:                                                                                                                                                             | Available config options for making requests.                                                                                                                                  |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCaloriesBasalGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcaloriesbasalgetresponse.md)>**


## getCholesterolAll

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getCholesterolAll({
    startDate: "joule",
    userId: "c3b209b9-0b59-407c-942b-e3036af69597",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                  | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                  | [operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolGetRequest](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcholesterolgetrequest.md) | :heavy_check_mark:                                                                                                                                                         | The request object to use for the request.                                                                                                                                 |
| `config`                                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                               | :heavy_minus_sign:                                                                                                                                                         | Available config options for making requests.                                                                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcholesterolgetresponse.md)>**


## getCholesterolHdl

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getCholesterolHdl({
    startDate: "in Van West",
    userId: "3b2a529f-b1c2-4d8b-a728-20431e439f53",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                        | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                        | [operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolHdlGetRequest](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcholesterolhdlgetrequest.md) | :heavy_check_mark:                                                                                                                                                               | The request object to use for the request.                                                                                                                                       |
| `config`                                                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                     | :heavy_minus_sign:                                                                                                                                                               | Available config options for making requests.                                                                                                                                    |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolHdlGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcholesterolhdlgetresponse.md)>**


## getCholesterolLdl

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getCholesterolLdl({
    startDate: "construe",
    userId: "6c6985e4-8f6e-44ca-927e-deb29d732916",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                        | Type                                                                                                                                                                             | Required                                                                                                                                                                         | Description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                        | [operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolLdlGetRequest](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcholesterolldlgetrequest.md) | :heavy_check_mark:                                                                                                                                                               | The request object to use for the request.                                                                                                                                       |
| `config`                                                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                     | :heavy_minus_sign:                                                                                                                                                               | Available config options for making requests.                                                                                                                                    |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolLdlGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcholesterolldlgetresponse.md)>**


## getDistance

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getDistance({
    startDate: "Classical",
    userId: "b33e7f63-99b8-4f73-869a-8c4ea5f811a6",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                            | Type                                                                                                                                                                 | Required                                                                                                                                                             | Description                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                            | [operations.GetTimeseriesResourceDataV2TimeseriesUserIdDistanceGetRequest](../../models/operations/gettimeseriesresourcedatav2timeseriesuseriddistancegetrequest.md) | :heavy_check_mark:                                                                                                                                                   | The request object to use for the request.                                                                                                                           |
| `config`                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                         | :heavy_minus_sign:                                                                                                                                                   | Available config options for making requests.                                                                                                                        |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdDistanceGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseriddistancegetresponse.md)>**


## getFloorsClimbed

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getFloorsClimbed({
    startDate: "models",
    userId: "58dc04a1-4779-4d7b-8786-66ff90d3c15d",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTimeseriesResourceDataV2TimeseriesUserIdFloorsClimbedGetRequest](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridfloorsclimbedgetrequest.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `config`                                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                   | :heavy_minus_sign:                                                                                                                                                             | Available config options for making requests.                                                                                                                                  |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdFloorsClimbedGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridfloorsclimbedgetresponse.md)>**


## getGlucose

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getGlucose({
    startDate: "Syrian explicit",
    userId: "f4e36361-b988-48a3-bb17-31a7aefffe29",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                          | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                          | [operations.GetTimeseriesResourceDataV2TimeseriesUserIdGlucoseGetRequest](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridglucosegetrequest.md) | :heavy_check_mark:                                                                                                                                                 | The request object to use for the request.                                                                                                                         |
| `config`                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                       | :heavy_minus_sign:                                                                                                                                                 | Available config options for making requests.                                                                                                                      |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdGlucoseGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridglucosegetresponse.md)>**


## getHeartrate

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getHeartrate({
    startDate: "Corporate",
    userId: "4193a7e0-c48f-4711-b293-d439db945171",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                              | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                              | [operations.GetTimeseriesResourceDataV2TimeseriesUserIdHeartrateGetRequest](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridheartrategetrequest.md) | :heavy_check_mark:                                                                                                                                                     | The request object to use for the request.                                                                                                                             |
| `config`                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                           | :heavy_minus_sign:                                                                                                                                                     | Available config options for making requests.                                                                                                                          |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdHeartrateGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridheartrategetresponse.md)>**


## getHrv

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getHrv({
    startDate: "Global violet male",
    userId: "6cf8ac7c-9611-4342-813c-4a095df7f31a",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.GetTimeseriesResourceDataV2TimeseriesUserIdHrvGetRequest](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridhrvgetrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdHrvGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridhrvgetresponse.md)>**


## getHypnogram

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getHypnogram({
    startDate: "North Kroon",
    userId: "63f90dda-de35-440c-9806-b114554f66a1",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                              | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                              | [operations.GetTimeseriesResourceDataV2TimeseriesUserIdHypnogramGetRequest](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridhypnogramgetrequest.md) | :heavy_check_mark:                                                                                                                                                     | The request object to use for the request.                                                                                                                             |
| `config`                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                           | :heavy_minus_sign:                                                                                                                                                     | Available config options for making requests.                                                                                                                          |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdHypnogramGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridhypnogramgetresponse.md)>**


## getIge

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getIge({
    startDate: "Minivan TCP male",
    userId: "298b6fed-30c6-4813-b66b-e805e5cc66a9",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.GetTimeseriesResourceDataV2TimeseriesUserIdIgeGetRequest](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridigegetrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdIgeGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridigegetresponse.md)>**


## getIgg

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getIgg({
    startDate: "compressing pink",
    userId: "4a70b28d-95ef-4798-89cf-8e7ce7fd8dbc",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.GetTimeseriesResourceDataV2TimeseriesUserIdIggGetRequest](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridigggetrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdIggGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridigggetresponse.md)>**


## getMindfulnessMinutes

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getMindfulnessMinutes({
    startDate: "emigrate Ohio fuchsia",
    userId: "30f79dd6-64ec-4ae0-a26e-e2b9de9e3e65",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                | Type                                                                                                                                                                                     | Required                                                                                                                                                                                 | Description                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                | [operations.GetTimeseriesResourceDataV2TimeseriesUserIdMindfulnessMinutesGetRequest](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridmindfulnessminutesgetrequest.md) | :heavy_check_mark:                                                                                                                                                                       | The request object to use for the request.                                                                                                                                               |
| `config`                                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                       | Available config options for making requests.                                                                                                                                            |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdMindfulnessMinutesGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridmindfulnessminutesgetresponse.md)>**


## getRespiratoryRate

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getRespiratoryRate({
    startDate: "systematic Division Intersex",
    userId: "a55ea3cc-b2e2-4169-b40d-62dfeb102d68",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                          | Type                                                                                                                                                                               | Required                                                                                                                                                                           | Description                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                          | [operations.GetTimeseriesResourceDataV2TimeseriesUserIdRespiratoryRateGetRequest](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridrespiratoryrategetrequest.md) | :heavy_check_mark:                                                                                                                                                                 | The request object to use for the request.                                                                                                                                         |
| `config`                                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                 | Available config options for making requests.                                                                                                                                      |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdRespiratoryRateGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridrespiratoryrategetresponse.md)>**


## getSteps

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getSteps({
    startDate: "Sausages Surinam tan",
    userId: "ead1ba03-7920-4b80-b82a-067baf7e5286",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                      | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                      | [operations.GetTimeseriesResourceDataV2TimeseriesUserIdStepsGetRequest](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridstepsgetrequest.md) | :heavy_check_mark:                                                                                                                                             | The request object to use for the request.                                                                                                                     |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdStepsGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridstepsgetresponse.md)>**


## getTotalCholesterol

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getTotalCholesterol({
    startDate: "technologies Tricycle accusantium",
    userId: "0a01395d-12e9-4eeb-a971-547d810cce95",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                            | Type                                                                                                                                                                                 | Required                                                                                                                                                                             | Description                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                            | [operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolTotalGetRequest](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcholesteroltotalgetrequest.md) | :heavy_check_mark:                                                                                                                                                                   | The request object to use for the request.                                                                                                                                           |
| `config`                                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                   | Available config options for making requests.                                                                                                                                        |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolTotalGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcholesteroltotalgetresponse.md)>**


## getTriglycerides

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getTriglycerides({
    startDate: "transmit quam",
    userId: "f143ec93-55c9-466c-9c71-90c8f2e167e9",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                            | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                                                            | [operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolTriglyceridesGetRequest](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcholesteroltriglyceridesgetrequest.md) | :heavy_check_mark:                                                                                                                                                                                   | The request object to use for the request.                                                                                                                                                           |
| `config`                                                                                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                   | Available config options for making requests.                                                                                                                                                        |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdCholesterolTriglyceridesGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridcholesteroltriglyceridesgetresponse.md)>**


## getUserSleepStream

Get Sleep stream for a user_id

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getUserSleepStream({
    sleepId: "Rock Southwest",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                      | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                      | [operations.GetUserSleepStreamV2TimeseriesSleepSleepIdStreamGetRequest](../../models/operations/getusersleepstreamv2timeseriessleepsleepidstreamgetrequest.md) | :heavy_check_mark:                                                                                                                                             | The request object to use for the request.                                                                                                                     |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.GetUserSleepStreamV2TimeseriesSleepSleepIdStreamGetResponse](../../models/operations/getusersleepstreamv2timeseriessleepsleepidstreamgetresponse.md)>**


## getUserWorkouts

Get User Workouts

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getUserWorkouts({
    workoutId: "bc0edaf0-6098-41f4-a6eb-525d09cc6d26",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                          | Type                                                                                                                                                               | Required                                                                                                                                                           | Description                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                          | [operations.GetUserWorkoutsV2TimeseriesWorkoutsWorkoutIdStreamGetRequest](../../models/operations/getuserworkoutsv2timeseriesworkoutsworkoutidstreamgetrequest.md) | :heavy_check_mark:                                                                                                                                                 | The request object to use for the request.                                                                                                                         |
| `config`                                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                       | :heavy_minus_sign:                                                                                                                                                 | Available config options for making requests.                                                                                                                      |


### Response

**Promise<[operations.GetUserWorkoutsV2TimeseriesWorkoutsWorkoutIdStreamGetResponse](../../models/operations/getuserworkoutsv2timeseriesworkoutsworkoutidstreamgetresponse.md)>**


## getWater

Get timeseries data for user

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.getWater({
    startDate: "interactive",
    userId: "0182b86b-75ba-43c6-bd64-c9e6a0a1275f",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                      | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                      | [operations.GetTimeseriesResourceDataV2TimeseriesUserIdWaterGetRequest](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridwatergetrequest.md) | :heavy_check_mark:                                                                                                                                             | The request object to use for the request.                                                                                                                     |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.GetTimeseriesResourceDataV2TimeseriesUserIdWaterGetResponse](../../models/operations/gettimeseriesresourcedatav2timeseriesuseridwatergetresponse.md)>**


## postBloodPressure

Post User Blood Pressure

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.postBloodPressure({
    userId: "5d55820e-8c39-4307-91e1-9cdd23720f04",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                | Type                                                                                                                                                                     | Required                                                                                                                                                                 | Description                                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                | [operations.PostUserBloodPressureV2TimeseriesUserIdBloodPressurePostRequest](../../models/operations/postuserbloodpressurev2timeseriesuseridbloodpressurepostrequest.md) | :heavy_check_mark:                                                                                                                                                       | The request object to use for the request.                                                                                                                               |
| `config`                                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                             | :heavy_minus_sign:                                                                                                                                                       | Available config options for making requests.                                                                                                                            |


### Response

**Promise<[operations.PostUserBloodPressureV2TimeseriesUserIdBloodPressurePostResponse](../../models/operations/postuserbloodpressurev2timeseriesuseridbloodpressurepostresponse.md)>**


## postVitals

Post User Vitals

### Example Usage

```typescript
import { Vital } from "Vital";
import { IngestibleTimeseriesResource } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital();

  const res = await sdk.timeseries.postVitals({
    resource: IngestibleTimeseriesResource.BloodOxygen,
    userId: "7a0eca13-40ec-46ac-9433-f77edd2bbc91",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.PostUserVitalsV2TimeseriesUserIdResourcePostRequest](../../models/operations/postuservitalsv2timeseriesuseridresourcepostrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.PostUserVitalsV2TimeseriesUserIdResourcePostResponse](../../models/operations/postuservitalsv2timeseriesuseridresourcepostresponse.md)>**

