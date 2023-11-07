# Team
(*.team*)

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
import { PhysicianNetworkT } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.team.create({
    brandInformation: {
      brandColor: "string",
      companyAddress: "string",
      companyName: "Kuhn - Nienow",
      companyWebsite: "string",
      supportEmail: "Haylie78@hotmail.com",
    },
    name: "string",
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
import { CreateApiKeyV2TeamTeamIdApikeyPostRequest } from "Vital/dist/sdk/models/operations";
import { CreateApiKeyBody } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const createApiKeyBody: CreateApiKeyBody = {
  label: "string",
};
const teamId: string = "string";

  const res = await sdk.team.createApiKey(createApiKeyBody, teamId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `createApiKeyBody`                                                  | [shared.CreateApiKeyBody](../../models/shared/createapikeybody.md)  | :heavy_check_mark:                                                  | N/A                                                                 |
| `teamId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.CreateApiKeyV2TeamTeamIdApikeyPostResponse](../../models/operations/createapikeyv2teamteamidapikeypostresponse.md)>**


## createPriority

Add Team priority row for source

### Example Usage

```typescript
import { Vital } from "Vital";
import { CreatePriorityV2TeamTeamIdPriorityPostRequest } from "Vital/dist/sdk/models/operations";
import { PriorityCreate } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const priorityCreate: PriorityCreate = {
  priority: 548209,
  sourceId: 168326,
  teamId: "0d4e3a38-5a06-40f0-b144-d921de79168b",
};
const teamId: string = "string";

  const res = await sdk.team.createPriority(priorityCreate, teamId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `priorityCreate`                                                    | [shared.PriorityCreate](../../models/shared/prioritycreate.md)      | :heavy_check_mark:                                                  | N/A                                                                 |
| `teamId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.CreatePriorityV2TeamTeamIdPriorityPostResponse](../../models/operations/createpriorityv2teamteamidprioritypostresponse.md)>**


## deleteApiKey

Invalidate api key by key value.

### Example Usage

```typescript
import { Vital } from "Vital";
import { DeleteApiKeyV2TeamTeamIdApikeyApiKeyIdDeleteRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const apiKeyId: string = "string";
const teamId: string = "string";

  const res = await sdk.team.deleteApiKey(apiKeyId, teamId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `apiKeyId`                                                          | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `teamId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.DeleteApiKeyV2TeamTeamIdApikeyApiKeyIdDeleteResponse](../../models/operations/deleteapikeyv2teamteamidapikeyapikeyiddeleteresponse.md)>**


## get

Get team.

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTeamV2TeamTeamIdGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const teamId: string = "b18d8d81-fd7b-4764-a31e-475cb1f36591";

  const res = await sdk.team.get(teamId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `teamId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetTeamV2TeamTeamIdGetResponse](../../models/operations/getteamv2teamteamidgetresponse.md)>**


## getApiKeys

Invalidate api key by key value.

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetApiKeysForTeamV2TeamTeamIdApikeysGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const teamId: string = "string";

  const res = await sdk.team.getApiKeys(teamId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `teamId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


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
import { GetSourcePrioritiesV2TeamSourcePrioritiesGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const dataType: string = "string";

  const res = await sdk.team.getSourcePriorities(dataType);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `dataType`                                                          | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetSourcePrioritiesV2TeamSourcePrioritiesGetResponse](../../models/operations/getsourceprioritiesv2teamsourceprioritiesgetresponse.md)>**


## getUserCount

Get the current user count for a team.

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTeamUserCountV2TeamTeamIdUsersCountGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const teamId: string = "3021769b-866d-4c37-8307-789796d71ace";

  const res = await sdk.team.getUserCount(teamId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `teamId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


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
import { RotateApiKeyV2TeamTeamIdApikeyApiKeyIdRotatePatchRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const apiKeyId: string = "string";
const teamId: string = "string";

  const res = await sdk.team.rotateApiKeyV2TeamTeamIdApikeyApiKeyIdRotatePatch(apiKeyId, teamId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `apiKeyId`                                                          | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `teamId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.RotateApiKeyV2TeamTeamIdApikeyApiKeyIdRotatePatchResponse](../../models/operations/rotateapikeyv2teamteamidapikeyapikeyidrotatepatchresponse.md)>**


## searchUsersByUuid

Search team users by user_id

### Example Usage

```typescript
import { Vital } from "Vital";
import { SearchTeamUsersByUuidOrClientUserIdV2TeamUsersSearchGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const queryId: string = "string";

  const res = await sdk.team.searchUsersByUuid(queryId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `queryId`                                                           | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.SearchTeamUsersByUuidOrClientUserIdV2TeamUsersSearchGetResponse](../../models/operations/searchteamusersbyuuidorclientuseridv2teamuserssearchgetresponse.md)>**


## updateApiKeyLabelV2TeamTeamIdApikeyApiKeyIdPatch

Update API key label.

### Example Usage

```typescript
import { Vital } from "Vital";
import { UpdateApiKeyLabelV2TeamTeamIdApikeyApiKeyIdPatchRequest } from "Vital/dist/sdk/models/operations";
import { UpdateApiKeyBody } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const updateApiKeyBody: UpdateApiKeyBody = {
  label: "string",
};
const apiKeyId: string = "string";
const teamId: string = "string";

  const res = await sdk.team.updateApiKeyLabelV2TeamTeamIdApikeyApiKeyIdPatch(updateApiKeyBody, apiKeyId, teamId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `updateApiKeyBody`                                                  | [shared.UpdateApiKeyBody](../../models/shared/updateapikeybody.md)  | :heavy_check_mark:                                                  | N/A                                                                 |
| `apiKeyId`                                                          | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `teamId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.UpdateApiKeyLabelV2TeamTeamIdApikeyApiKeyIdPatchResponse](../../models/operations/updateapikeylabelv2teamteamidapikeyapikeyidpatchresponse.md)>**


## updateSourcePrioritiesV2TeamSourcePrioritiesPatch

Patch source priorities.

### Example Usage

```typescript
import { Vital } from "Vital";
import { UpdateSourcePrioritiesV2TeamSourcePrioritiesPatchRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const teamId: string = "string";

  const res = await sdk.team.updateSourcePrioritiesV2TeamSourcePrioritiesPatch(teamId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `teamId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.UpdateSourcePrioritiesV2TeamSourcePrioritiesPatchResponse](../../models/operations/updatesourceprioritiesv2teamsourceprioritiespatchresponse.md)>**


## updateTeamV2TeamTeamIdPatch

Update team.

### Example Usage

```typescript
import { Vital } from "Vital";
import { UpdateTeamV2TeamTeamIdPatchRequest } from "Vital/dist/sdk/models/operations";
import { TeamUpdate } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const teamUpdate: TeamUpdate = {};
const teamId: string = "string";

  const res = await sdk.team.updateTeamV2TeamTeamIdPatch(teamUpdate, teamId);


  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `teamUpdate`                                                        | [shared.TeamUpdate](../../models/shared/teamupdate.md)              | :heavy_check_mark:                                                  | N/A                                                                 |
| `teamId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.UpdateTeamV2TeamTeamIdPatchResponse](../../models/operations/updateteamv2teamteamidpatchresponse.md)>**

