# Summary
(*summary*)

### Available Operations

* [getMeals](#getmeals) - Get Meals
* [getUserActivity](#getuseractivity) - Get User Activity
* [getUserActivityRaw](#getuseractivityraw) - Get User Activity Raw
* [getUserBody](#getuserbody) - Get User Body
* [getUserBodyRaw](#getuserbodyraw) - Get User Body Raw
* [getUserDevicesRaw](#getuserdevicesraw) - Get User Devices Raw
* [getUserProfile](#getuserprofile) - Get User Profile
* [getUserProfileRaw](#getuserprofileraw) - Get User Profile Raw
* [getUserSleep](#getusersleep) - Get User Sleep
* [getUserSleepRaw](#getusersleepraw) - Get User Sleep Raw
* [getUserSleepStream](#getusersleepstream) - Get User Sleep Stream
* [getUserWorkouts](#getuserworkouts) - Get User Workouts
* [getUserWorkoutsRaw](#getuserworkoutsraw) - Get User Workouts Raw
* [postUserActivity](#postuseractivity) - Post User Activity
* [postUserBody](#postuserbody) - Post User Body
* [postUserProfile](#postuserprofile) - Post User Profile
* [postUserSleep](#postusersleep) - Post User Sleep
* [postUserWorkout](#postuserworkout) - Post User Workout

## getMeals

Get user's meals

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.summary.getMeals({
    startDate: "Steel relative",
    userId: "67cc4de4-d24b-45e3-a073-000b0a593dec",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                            | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                            | [operations.GetMealsV2SummaryMealUserIdGetRequest](../../models/operations/getmealsv2summarymealuseridgetrequest.md) | :heavy_check_mark:                                                                                                   | The request object to use for the request.                                                                           |
| `retries`                                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                               | :heavy_minus_sign:                                                                                                   | Configuration to override the default retry behavior of the client.                                                  |
| `config`                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                         | :heavy_minus_sign:                                                                                                   | Available config options for making requests.                                                                        |


### Response

**Promise<[operations.GetMealsV2SummaryMealUserIdGetResponse](../../models/operations/getmealsv2summarymealuseridgetresponse.md)>**


## getUserActivity

Get Daily Activity for user_id

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.summary.getUserActivity({
    startDate: "unde",
    userId: "94eda1c8-12f3-4633-bdcb-5592eeffbfef",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.GetUserActivityV2SummaryActivityUserIdGetRequest](../../models/operations/getuseractivityv2summaryactivityuseridgetrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `retries`                                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                     | :heavy_minus_sign:                                                                                                                         | Configuration to override the default retry behavior of the client.                                                                        |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.GetUserActivityV2SummaryActivityUserIdGetResponse](../../models/operations/getuseractivityv2summaryactivityuseridgetresponse.md)>**


## getUserActivityRaw

Get Daily Activity for user_id

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.summary.getUserActivityRaw({
    startDate: "HEX black indexing",
    userId: "b77c7c61-ed1e-4e88-9ef0-bdc3cdae1f4a",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.GetUserActivityRawV2SummaryActivityUserIdRawGetRequest](../../models/operations/getuseractivityrawv2summaryactivityuseridrawgetrequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `retries`                                                                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                                 | :heavy_minus_sign:                                                                                                                                     | Configuration to override the default retry behavior of the client.                                                                                    |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.GetUserActivityRawV2SummaryActivityUserIdRawGetResponse](../../models/operations/getuseractivityrawv2summaryactivityuseridrawgetresponse.md)>**


## getUserBody

Get Daily Body data for user_id

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.summary.getUserBody({
    startDate: "Northwest West",
    userId: "aa1c702d-4a96-4539-a8a9-e6e4eae9b476",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.GetUserBodyV2SummaryBodyUserIdGetRequest](../../models/operations/getuserbodyv2summarybodyuseridgetrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `retries`                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                     | :heavy_minus_sign:                                                                                                         | Configuration to override the default retry behavior of the client.                                                        |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.GetUserBodyV2SummaryBodyUserIdGetResponse](../../models/operations/getuserbodyv2summarybodyuseridgetresponse.md)>**


## getUserBodyRaw

Get Daily Body data for user_id

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.summary.getUserBodyRaw({
    startDate: "Southeast",
    userId: "730e01d9-9c94-457d-a8e7-2c19854893e6",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.GetUserBodyRawV2SummaryBodyUserIdRawGetRequest](../../models/operations/getuserbodyrawv2summarybodyuseridrawgetrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `retries`                                                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                 | :heavy_minus_sign:                                                                                                                     | Configuration to override the default retry behavior of the client.                                                                    |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.GetUserBodyRawV2SummaryBodyUserIdRawGetResponse](../../models/operations/getuserbodyrawv2summarybodyuseridrawgetresponse.md)>**


## getUserDevicesRaw

Get Devices for user_id

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.summary.getUserDevicesRaw({
    userId: "d3afcead-cf24-4987-97fa-74fe26009852",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.GetUserDevicesRawV2SummaryDevicesUserIdRawGetRequest](../../models/operations/getuserdevicesrawv2summarydevicesuseridrawgetrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `retries`                                                                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                             | :heavy_minus_sign:                                                                                                                                 | Configuration to override the default retry behavior of the client.                                                                                |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.GetUserDevicesRawV2SummaryDevicesUserIdRawGetResponse](../../models/operations/getuserdevicesrawv2summarydevicesuseridrawgetresponse.md)>**


## getUserProfile

Get Daily profile for user_id

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.summary.getUserProfile({
    userId: "1e03319e-ca0e-4660-8784-a0581ebdd19f",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.GetUserProfileV2SummaryProfileUserIdGetRequest](../../models/operations/getuserprofilev2summaryprofileuseridgetrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `retries`                                                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                 | :heavy_minus_sign:                                                                                                                     | Configuration to override the default retry behavior of the client.                                                                    |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.GetUserProfileV2SummaryProfileUserIdGetResponse](../../models/operations/getuserprofilev2summaryprofileuseridgetresponse.md)>**


## getUserProfileRaw

Get Daily profile for user_id

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.summary.getUserProfileRaw({
    userId: "ae101aa4-8797-4dc6-bac7-aa9d64e72a37",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.GetUserProfileRawV2SummaryProfileUserIdRawGetRequest](../../models/operations/getuserprofilerawv2summaryprofileuseridrawgetrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `retries`                                                                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                             | :heavy_minus_sign:                                                                                                                                 | Configuration to override the default retry behavior of the client.                                                                                |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.GetUserProfileRawV2SummaryProfileUserIdRawGetResponse](../../models/operations/getuserprofilerawv2summaryprofileuseridrawgetresponse.md)>**


## getUserSleep

Get Daily sleep for user_id

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.summary.getUserSleep({
    startDate: "Corporate quirkily",
    userId: "429e1c88-ab24-43bc-aa94-c896bba7aa1a",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.GetUserSleepV2SummarySleepUserIdGetRequest](../../models/operations/getusersleepv2summarysleepuseridgetrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `retries`                                                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                         | :heavy_minus_sign:                                                                                                             | Configuration to override the default retry behavior of the client.                                                            |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.GetUserSleepV2SummarySleepUserIdGetResponse](../../models/operations/getusersleepv2summarysleepuseridgetresponse.md)>**


## getUserSleepRaw

Get Daily sleep for user_id

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.summary.getUserSleepRaw({
    startDate: "Clothing Agent Account",
    userId: "f41f3fc0-77ea-4e72-85ab-9bb882f3ab0f",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.GetUserSleepRawV2SummarySleepUserIdRawGetRequest](../../models/operations/getusersleeprawv2summarysleepuseridrawgetrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `retries`                                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                     | :heavy_minus_sign:                                                                                                                         | Configuration to override the default retry behavior of the client.                                                                        |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.GetUserSleepRawV2SummarySleepUserIdRawGetResponse](../../models/operations/getusersleeprawv2summarysleepuseridrawgetresponse.md)>**


## getUserSleepStream

Get Daily sleep stream for user_id

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.summary.getUserSleepStream({
    startDate: "Rock Southwest",
    userId: "35295037-bc4a-4b08-90f3-0d313cc6ef2c",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.GetUserSleepStreamV2SummarySleepUserIdStreamGetRequest](../../models/operations/getusersleepstreamv2summarysleepuseridstreamgetrequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `retries`                                                                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                                 | :heavy_minus_sign:                                                                                                                                     | Configuration to override the default retry behavior of the client.                                                                                    |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.GetUserSleepStreamV2SummarySleepUserIdStreamGetResponse](../../models/operations/getusersleepstreamv2summarysleepuseridstreamgetresponse.md)>**


## getUserWorkouts

Get Daily workout for user_id

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.summary.getUserWorkouts({
    startDate: "green whereas Principal",
    userId: "060981f4-a6eb-4525-909c-c6d2663c92f9",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.GetUserWorkoutsV2SummaryWorkoutsUserIdGetRequest](../../models/operations/getuserworkoutsv2summaryworkoutsuseridgetrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `retries`                                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                     | :heavy_minus_sign:                                                                                                                         | Configuration to override the default retry behavior of the client.                                                                        |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.GetUserWorkoutsV2SummaryWorkoutsUserIdGetResponse](../../models/operations/getuserworkoutsv2summaryworkoutsuseridgetresponse.md)>**


## getUserWorkoutsRaw

Get Daily workout for user_id

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.summary.getUserWorkoutsRaw({
    startDate: "card",
    userId: "3d65358a-d8c0-474b-9c21-9bac589e4fc0",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                              | Type                                                                                                                                                   | Required                                                                                                                                               | Description                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                              | [operations.GetUserWorkoutsRawV2SummaryWorkoutsUserIdRawGetRequest](../../models/operations/getuserworkoutsrawv2summaryworkoutsuseridrawgetrequest.md) | :heavy_check_mark:                                                                                                                                     | The request object to use for the request.                                                                                                             |
| `retries`                                                                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                                 | :heavy_minus_sign:                                                                                                                                     | Configuration to override the default retry behavior of the client.                                                                                    |
| `config`                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                           | :heavy_minus_sign:                                                                                                                                     | Available config options for making requests.                                                                                                          |


### Response

**Promise<[operations.GetUserWorkoutsRawV2SummaryWorkoutsUserIdRawGetResponse](../../models/operations/getuserworkoutsrawv2summaryworkoutsuseridrawgetresponse.md)>**


## postUserActivity

Post User Activity

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.summary.postUserActivity({
    userId: "0e4724f5-d113-41c1-bf58-cd7168d06d0c",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                      | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                      | [operations.PostUserActivityV2SummaryActivityUserIdPostRequest](../../models/operations/postuseractivityv2summaryactivityuseridpostrequest.md) | :heavy_check_mark:                                                                                                                             | The request object to use for the request.                                                                                                     |
| `retries`                                                                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                         | :heavy_minus_sign:                                                                                                                             | Configuration to override the default retry behavior of the client.                                                                            |
| `config`                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                   | :heavy_minus_sign:                                                                                                                             | Available config options for making requests.                                                                                                  |


### Response

**Promise<[operations.PostUserActivityV2SummaryActivityUserIdPostResponse](../../models/operations/postuseractivityv2summaryactivityuseridpostresponse.md)>**


## postUserBody

Post User Body

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.summary.postUserBody({
    userId: "2aac64a8-1a4b-47b9-b083-c6d33a9beb02",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.PostUserBodyV2SummaryBodyUserIdPostRequest](../../models/operations/postuserbodyv2summarybodyuseridpostrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `retries`                                                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                         | :heavy_minus_sign:                                                                                                             | Configuration to override the default retry behavior of the client.                                                            |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.PostUserBodyV2SummaryBodyUserIdPostResponse](../../models/operations/postuserbodyv2summarybodyuseridpostresponse.md)>**


## postUserProfile

Post User Profile

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.summary.postUserProfile({
    userId: "343ee935-de73-408c-a15e-4782d3b864c4",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.PostUserProfileV2SummaryProfileUserIdPostRequest](../../models/operations/postuserprofilev2summaryprofileuseridpostrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `retries`                                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                     | :heavy_minus_sign:                                                                                                                         | Configuration to override the default retry behavior of the client.                                                                        |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.PostUserProfileV2SummaryProfileUserIdPostResponse](../../models/operations/postuserprofilev2summaryprofileuseridpostresponse.md)>**


## postUserSleep

Post User Sleep

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.summary.postUserSleep({
    userId: "4332e922-db99-44ec-bd9d-77a063c520e5",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                          | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                          | [operations.PostUserSleepV2SummarySleepUserIdPostRequest](../../models/operations/postusersleepv2summarysleepuseridpostrequest.md) | :heavy_check_mark:                                                                                                                 | The request object to use for the request.                                                                                         |
| `retries`                                                                                                                          | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                             | :heavy_minus_sign:                                                                                                                 | Configuration to override the default retry behavior of the client.                                                                |
| `config`                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                       | :heavy_minus_sign:                                                                                                                 | Available config options for making requests.                                                                                      |


### Response

**Promise<[operations.PostUserSleepV2SummarySleepUserIdPostResponse](../../models/operations/postusersleepv2summarysleepuseridpostresponse.md)>**


## postUserWorkout

Post User Workout

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.summary.postUserWorkout({
    userId: "63a9d635-f084-45f5-a781-131420d3a83b",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                    | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                    | [operations.PostUserWorkoutV2SummaryWorkoutsUserIdPostRequest](../../models/operations/postuserworkoutv2summaryworkoutsuseridpostrequest.md) | :heavy_check_mark:                                                                                                                           | The request object to use for the request.                                                                                                   |
| `retries`                                                                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                       | :heavy_minus_sign:                                                                                                                           | Configuration to override the default retry behavior of the client.                                                                          |
| `config`                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                 | :heavy_minus_sign:                                                                                                                           | Available config options for making requests.                                                                                                |


### Response

**Promise<[operations.PostUserWorkoutV2SummaryWorkoutsUserIdPostResponse](../../models/operations/postuserworkoutv2summaryworkoutsuseridpostresponse.md)>**

