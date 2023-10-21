# User
(*user*)

### Available Operations

* [createUser](#createuser) - Create User
* [delete](#delete) - Delete User
* [deregisterProviderV2UserUserIdProviderDelete](#deregisterproviderv2useruseridproviderdelete) - Deregister Provider
* [get](#get) - Get User
* [getAll](#getall) - Get Teams Users
* [getConnectedProviders](#getconnectedproviders) - Get Connected Providers
* [getMetrics](#getmetrics) - Get Teams Metrics
* [getSignInToken](#getsignintoken) - Get User Sign In Token
* [patchUserV2UserUserIdPatch](#patchuserv2useruseridpatch) - Patch User
* [refreshUserIdV2UserRefreshUserIdPost](#refreshuseridv2userrefreshuseridpost) - Refresh User Id
* [resolveByUserId](#resolvebyuserid) - Get User By Client User Id

## createUser

POST Create a Vital user given a client_user_id and returns the user_id.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.user.createUser({
    clientUserId: "string",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [shared.UserCreateBody](../../models/shared/usercreatebody.md)      | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.CreateUserV2UserPostResponse](../../models/operations/createuserv2userpostresponse.md)>**


## delete

Delete User

### Example Usage

```typescript
import { Vital } from "Vital";
import { DeleteUserV2UserUserIdDeleteRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const userId: string = "8db863f6-ef9b-413a-8a70-cb816b33de6b";

  const res = await sdk.user.delete(userId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `userId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.DeleteUserV2UserUserIdDeleteResponse](../../models/operations/deleteuserv2useruseriddeleteresponse.md)>**


## deregisterProviderV2UserUserIdProviderDelete

Deregister Provider

### Example Usage

```typescript
import { Vital } from "Vital";
import { DeregisterProviderV2UserUserIdProviderDeleteRequest } from "Vital/dist/sdk/models/operations";
import { Providers } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const provider: Providers = Providers.Garmin;
const userId: string = "6d48b1ec-267e-4530-bcf8-b4f041e375ee";

  const res = await sdk.user.deregisterProviderV2UserUserIdProviderDelete(provider, userId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `provider`                                                          | [shared.Providers](../../models/shared/providers.md)                | :heavy_check_mark:                                                  | Provider slug. e.g., `oura`, `fitbit`, `garmin`.                    |
| `userId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.DeregisterProviderV2UserUserIdProviderDeleteResponse](../../models/operations/deregisterproviderv2useruseridproviderdeleteresponse.md)>**


## get

GET User details given the user_id.

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetUserV2UserUserIdGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const userId: string = "b18d8d81-fd7b-4764-a31e-475cb1f36591";

  const res = await sdk.user.get(userId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `userId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetUserV2UserUserIdGetResponse](../../models/operations/getuserv2useruseridgetresponse.md)>**


## getAll

GET All users for team.

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetTeamsUsersV2UserGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const limit: number = 178225;
const offset: number = 64345;

  const res = await sdk.user.getAll(limit, offset);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `limit`                                                             | *number*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `offset`                                                            | *number*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetTeamsUsersV2UserGetResponse](../../models/operations/getteamsusersv2usergetresponse.md)>**


## getConnectedProviders

GET Users connected providers

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetConnectedProvidersV2UserProvidersUserIdGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const userId: string = "30ef9033-9974-45c7-af5c-ddc9369dd7a0";

  const res = await sdk.user.getConnectedProviders(userId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `userId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetConnectedProvidersV2UserProvidersUserIdGetResponse](../../models/operations/getconnectedprovidersv2userprovidersuseridgetresponse.md)>**


## getMetrics

GET metrics for team.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.user.getMetrics();

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

**Promise<[operations.GetTeamsMetricsV2UserMetricsGetResponse](../../models/operations/getteamsmetricsv2usermetricsgetresponse.md)>**


## getSignInToken

Get User Sign In Token

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetUserSignInTokenV2UserUserIdSignInTokenPostRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const userId: string = "d738147a-606f-41ac-a296-81a3993405ee";

  const res = await sdk.user.getSignInToken(userId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `userId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetUserSignInTokenV2UserUserIdSignInTokenPostResponse](../../models/operations/getusersignintokenv2useruseridsignintokenpostresponse.md)>**


## patchUserV2UserUserIdPatch

Patch User

### Example Usage

```typescript
import { Vital } from "Vital";
import { PatchUserV2UserUserIdPatchRequest } from "Vital/dist/sdk/models/operations";
import { UserPatchBody } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const userPatchBody: UserPatchBody = {};
const userId: string = "02c6960d-b280-4a76-8c76-467d647deb43";

  const res = await sdk.user.patchUserV2UserUserIdPatch(userPatchBody, userId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `userPatchBody`                                                     | [shared.UserPatchBody](../../models/shared/userpatchbody.md)        | :heavy_check_mark:                                                  | N/A                                                                 |
| `userId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.PatchUserV2UserUserIdPatchResponse](../../models/operations/patchuserv2useruseridpatchresponse.md)>**


## refreshUserIdV2UserRefreshUserIdPost

Trigger a manual refresh for a specific user

### Example Usage

```typescript
import { Vital } from "Vital";
import { RefreshUserIdV2UserRefreshUserIdPostRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const userId: string = "1d35a855-b124-4dda-9838-fdeec970978f";

  const res = await sdk.user.refreshUserIdV2UserRefreshUserIdPost(userId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `userId`                                                            | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.RefreshUserIdV2UserRefreshUserIdPostResponse](../../models/operations/refreshuseridv2userrefreshuseridpostresponse.md)>**


## resolveByUserId

GET user_id from client_user_id.

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetUserByClientUserIdV2UserResolveClientUserIdGetRequest } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const clientUserId: string = "string";

  const res = await sdk.user.resolveByUserId(clientUserId);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                           | Required                                                                                                                                                                                                                       | Description                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `clientUserId`                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                             | A unique ID representing the end user. Typically this will be a user ID number from your application. Personally identifiable information, such as an email address or phone number, should not be used in the client_user_id. |
| `retries`                                                                                                                                                                                                                      | [utils.RetryConfig](../../models/utils/retryconfig.md)                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                             | Configuration to override the default retry behavior of the client.                                                                                                                                                            |
| `config`                                                                                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                             | Available config options for making requests.                                                                                                                                                                                  |


### Response

**Promise<[operations.GetUserByClientUserIdV2UserResolveClientUserIdGetResponse](../../models/operations/getuserbyclientuseridv2userresolveclientuseridgetresponse.md)>**

