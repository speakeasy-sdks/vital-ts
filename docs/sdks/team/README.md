# Team
(*team*)

### Available Operations

* [create](#create) - Create Team
* [createApiKey](#createapikey) - Create Api Key
* [createPriority](#createpriority) - Create Priority
* [deleteApiKey](#deleteapikey) - Delete Api Key
* [get](#get) - Get Team
* [getApiKeys](#getapikeys) - Get Api Keys For Team
* [getConfig](#getconfig) - Get Team Config
* [getSourcePriorities](#getsourcepriorities) - Get Source Priorities
* [getUserCount](#getusercount) - Get Team User Count
* [getWebhookUrl](#getwebhookurl) - Get Svix Webhook Url
* [rotateApiKeyV2TeamTeamIdApikeyApiKeyIdRotatePatch](#rotateapikeyv2teamteamidapikeyapikeyidrotatepatch) - Rotate Api Key
* [searchUsersByUuid](#searchusersbyuuid) - Search Team Users By Uuid Or Client User Id
* [updateApiKeyLabelV2TeamTeamIdApikeyApiKeyIdPatch](#updateapikeylabelv2teamteamidapikeyapikeyidpatch) - Update Api Key Label
* [updateSourcePrioritiesV2TeamSourcePrioritiesPatch](#updatesourceprioritiesv2teamsourceprioritiespatch) - Update Source Priorities
* [updateTeamV2TeamTeamIdPatch](#updateteamv2teamteamidpatch) - Update Team

## create

Create Team.

### Example Usage

```typescript
import { Vital } from "Vital";
import { TeamCreatePhysicianNetworkT } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.team.create({
    brandInformation: {
      brandColor: "bluetooth Extended",
      companyAddress: "blue",
      companyName: "Schinner, Hodkiewicz and Wiegand",
      companyWebsite: "East orange Northwest",
      supportEmail: "Russel_Schumm@hotmail.com",
    },
    name: "volt physical Ameliorated",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [shared.TeamCreate](../../models/shared/teamcreate.md)              | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.CreateTeamV2TeamPostResponse](../../models/operations/createteamv2teampostresponse.md)>**


## createApiKey

Create api key.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.team.createApiKey({
    createApiKeyBody: {
      label: "deposit API",
    },
    teamId: "Sudan",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                    | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                    | [operations.CreateApiKeyV2TeamTeamIdApikeyPostRequest](../../models/operations/createapikeyv2teamteamidapikeypostrequest.md) | :heavy_check_mark:                                                                                                           | The request object to use for the request.                                                                                   |
| `retries`                                                                                                                    | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                       | :heavy_minus_sign:                                                                                                           | Configuration to override the default retry behavior of the client.                                                          |
| `config`                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                 | :heavy_minus_sign:                                                                                                           | Available config options for making requests.                                                                                |


### Response

**Promise<[operations.CreateApiKeyV2TeamTeamIdApikeyPostResponse](../../models/operations/createapikeyv2teamteamidapikeypostresponse.md)>**


## createPriority

Add Team priority row for source

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.team.createPriority({
    priorityCreate: {
      priority: 548209,
      sourceId: 168326,
      teamId: "0d4e3a38-5a06-40f0-b144-d921de79168b",
    },
    teamId: "Pants Summerville",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                            | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                            | [operations.CreatePriorityV2TeamTeamIdPriorityPostRequest](../../models/operations/createpriorityv2teamteamidprioritypostrequest.md) | :heavy_check_mark:                                                                                                                   | The request object to use for the request.                                                                                           |
| `retries`                                                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                               | :heavy_minus_sign:                                                                                                                   | Configuration to override the default retry behavior of the client.                                                                  |
| `config`                                                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                         | :heavy_minus_sign:                                                                                                                   | Available config options for making requests.                                                                                        |


### Response

**Promise<[operations.CreatePriorityV2TeamTeamIdPriorityPostResponse](../../models/operations/createpriorityv2teamteamidprioritypostresponse.md)>**


## deleteApiKey

Invalidate api key by key value.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.team.deleteApiKey({
    apiKeyId: "sans",
    teamId: "Minivan orchid knee",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.DeleteApiKeyV2TeamTeamIdApikeyApiKeyIdDeleteRequest](../../models/operations/deleteapikeyv2teamteamidapikeyapikeyiddeleterequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `retries`                                                                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                           | :heavy_minus_sign:                                                                                                                               | Configuration to override the default retry behavior of the client.                                                                              |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.DeleteApiKeyV2TeamTeamIdApikeyApiKeyIdDeleteResponse](../../models/operations/deleteapikeyv2teamteamidapikeyapikeyiddeleteresponse.md)>**


## get

Get team.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.team.get({
    teamId: "b18d8d81-fd7b-4764-a31e-475cb1f36591",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetTeamV2TeamTeamIdGetRequest](../../models/operations/getteamv2teamteamidgetrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `retries`                                                                                            | [utils.RetryConfig](../../models/utils/retryconfig.md)                                               | :heavy_minus_sign:                                                                                   | Configuration to override the default retry behavior of the client.                                  |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetTeamV2TeamTeamIdGetResponse](../../models/operations/getteamv2teamteamidgetresponse.md)>**


## getApiKeys

Invalidate api key by key value.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.team.getApiKeys({
    teamId: "South",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.GetApiKeysForTeamV2TeamTeamIdApikeysGetRequest](../../models/operations/getapikeysforteamv2teamteamidapikeysgetrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `retries`                                                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                 | :heavy_minus_sign:                                                                                                                     | Configuration to override the default retry behavior of the client.                                                                    |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.GetApiKeysForTeamV2TeamTeamIdApikeysGetResponse](../../models/operations/getapikeysforteamv2teamteamidapikeysgetresponse.md)>**


## getConfig

Post teams.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.team.getConfig();

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

**Promise<[operations.GetTeamConfigV2TeamLinkConfigGetResponse](../../models/operations/getteamconfigv2teamlinkconfiggetresponse.md)>**


## getSourcePriorities

GET source priorities.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.team.getSourcePriorities({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.GetSourcePrioritiesV2TeamSourcePrioritiesGetRequest](../../models/operations/getsourceprioritiesv2teamsourceprioritiesgetrequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `retries`                                                                                                                                        | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                           | :heavy_minus_sign:                                                                                                                               | Configuration to override the default retry behavior of the client.                                                                              |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.GetSourcePrioritiesV2TeamSourcePrioritiesGetResponse](../../models/operations/getsourceprioritiesv2teamsourceprioritiesgetresponse.md)>**


## getUserCount

Get the current user count for a team.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.team.getUserCount({
    teamId: "3021769b-866d-4c37-8307-789796d71ace",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                  | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                  | [operations.GetTeamUserCountV2TeamTeamIdUsersCountGetRequest](../../models/operations/getteamusercountv2teamteamiduserscountgetrequest.md) | :heavy_check_mark:                                                                                                                         | The request object to use for the request.                                                                                                 |
| `retries`                                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                     | :heavy_minus_sign:                                                                                                                         | Configuration to override the default retry behavior of the client.                                                                        |
| `config`                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                               | :heavy_minus_sign:                                                                                                                         | Available config options for making requests.                                                                                              |


### Response

**Promise<[operations.GetTeamUserCountV2TeamTeamIdUsersCountGetResponse](../../models/operations/getteamusercountv2teamteamiduserscountgetresponse.md)>**


## getWebhookUrl

Get Svix Webhook Url

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.team.getWebhookUrl();

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

**Promise<[operations.GetSvixWebhookUrlV2TeamSvixUrlGetResponse](../../models/operations/getsvixwebhookurlv2teamsvixurlgetresponse.md)>**


## rotateApiKeyV2TeamTeamIdApikeyApiKeyIdRotatePatch

Deprecated. Rotate api key.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.team.rotateApiKeyV2TeamTeamIdApikeyApiKeyIdRotatePatch({
    apiKeyId: "ah Buckinghamshire Computer",
    teamId: "Associate Developer Director",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.RotateApiKeyV2TeamTeamIdApikeyApiKeyIdRotatePatchRequest](../../models/operations/rotateapikeyv2teamteamidapikeyapikeyidrotatepatchrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `retries`                                                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                                     | :heavy_minus_sign:                                                                                                                                         | Configuration to override the default retry behavior of the client.                                                                                        |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.RotateApiKeyV2TeamTeamIdApikeyApiKeyIdRotatePatchResponse](../../models/operations/rotateapikeyv2teamteamidapikeyapikeyidrotatepatchresponse.md)>**


## searchUsersByUuid

Search team users by user_id

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.team.searchUsersByUuid({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                              | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                              | [operations.SearchTeamUsersByUuidOrClientUserIdV2TeamUsersSearchGetRequest](../../models/operations/searchteamusersbyuuidorclientuseridv2teamuserssearchgetrequest.md) | :heavy_check_mark:                                                                                                                                                     | The request object to use for the request.                                                                                                                             |
| `retries`                                                                                                                                                              | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                     | Configuration to override the default retry behavior of the client.                                                                                                    |
| `config`                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                           | :heavy_minus_sign:                                                                                                                                                     | Available config options for making requests.                                                                                                                          |


### Response

**Promise<[operations.SearchTeamUsersByUuidOrClientUserIdV2TeamUsersSearchGetResponse](../../models/operations/searchteamusersbyuuidorclientuseridv2teamuserssearchgetresponse.md)>**


## updateApiKeyLabelV2TeamTeamIdApikeyApiKeyIdPatch

Update API key label.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.team.updateApiKeyLabelV2TeamTeamIdApikeyApiKeyIdPatch({
    updateApiKeyBody: {
      label: "architectures District",
    },
    apiKeyId: "Security",
    teamId: "dolor",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                | Type                                                                                                                                                     | Required                                                                                                                                                 | Description                                                                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                | [operations.UpdateApiKeyLabelV2TeamTeamIdApikeyApiKeyIdPatchRequest](../../models/operations/updateapikeylabelv2teamteamidapikeyapikeyidpatchrequest.md) | :heavy_check_mark:                                                                                                                                       | The request object to use for the request.                                                                                                               |
| `retries`                                                                                                                                                | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                                   | :heavy_minus_sign:                                                                                                                                       | Configuration to override the default retry behavior of the client.                                                                                      |
| `config`                                                                                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                             | :heavy_minus_sign:                                                                                                                                       | Available config options for making requests.                                                                                                            |


### Response

**Promise<[operations.UpdateApiKeyLabelV2TeamTeamIdApikeyApiKeyIdPatchResponse](../../models/operations/updateapikeylabelv2teamteamidapikeyapikeyidpatchresponse.md)>**


## updateSourcePrioritiesV2TeamSourcePrioritiesPatch

Patch source priorities.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.team.updateSourcePrioritiesV2TeamSourcePrioritiesPatch({
    teamId: "purple male incidentally",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.UpdateSourcePrioritiesV2TeamSourcePrioritiesPatchRequest](../../models/operations/updatesourceprioritiesv2teamsourceprioritiespatchrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `retries`                                                                                                                                                  | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                                     | :heavy_minus_sign:                                                                                                                                         | Configuration to override the default retry behavior of the client.                                                                                        |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.UpdateSourcePrioritiesV2TeamSourcePrioritiesPatchResponse](../../models/operations/updatesourceprioritiesv2teamsourceprioritiespatchresponse.md)>**


## updateTeamV2TeamTeamIdPatch

Update team.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.team.updateTeamV2TeamTeamIdPatch({
    teamUpdate: {},
    teamId: "Virginia Decentralized Diesel",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                      | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                      | [operations.UpdateTeamV2TeamTeamIdPatchRequest](../../models/operations/updateteamv2teamteamidpatchrequest.md) | :heavy_check_mark:                                                                                             | The request object to use for the request.                                                                     |
| `retries`                                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                         | :heavy_minus_sign:                                                                                             | Configuration to override the default retry behavior of the client.                                            |
| `config`                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                   | :heavy_minus_sign:                                                                                             | Available config options for making requests.                                                                  |


### Response

**Promise<[operations.UpdateTeamV2TeamTeamIdPatchResponse](../../models/operations/updateteamv2teamteamidpatchresponse.md)>**

