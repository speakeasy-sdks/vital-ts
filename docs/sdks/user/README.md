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
  const sdk = new Vital();

  const res = await sdk.user.createUser({
    clientUserId: "dicta Forward",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                      | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `request`                                                      | [shared.UserCreateBody](../../models/shared/usercreatebody.md) | :heavy_check_mark:                                             | The request object to use for the request.                     |
| `config`                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)   | :heavy_minus_sign:                                             | Available config options for making requests.                  |


### Response

**Promise<[operations.CreateUserV2UserPostResponse](../../models/operations/createuserv2userpostresponse.md)>**


## delete

Delete User

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.user.delete({
    userId: "8db863f6-ef9b-413a-8a70-cb816b33de6b",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                        | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                        | [operations.DeleteUserV2UserUserIdDeleteRequest](../../models/operations/deleteuserv2useruseriddeleterequest.md) | :heavy_check_mark:                                                                                               | The request object to use for the request.                                                                       |
| `config`                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                     | :heavy_minus_sign:                                                                                               | Available config options for making requests.                                                                    |


### Response

**Promise<[operations.DeleteUserV2UserUserIdDeleteResponse](../../models/operations/deleteuserv2useruseriddeleteresponse.md)>**


## deregisterProviderV2UserUserIdProviderDelete

Deregister Provider

### Example Usage

```typescript
import { Vital } from "Vital";
import { Providers } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital();

  const res = await sdk.user.deregisterProviderV2UserUserIdProviderDelete({
    provider: Providers.Garmin,
    userId: "6d48b1ec-267e-4530-bcf8-b4f041e375ee",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                        | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                        | [operations.DeregisterProviderV2UserUserIdProviderDeleteRequest](../../models/operations/deregisterproviderv2useruseridproviderdeleterequest.md) | :heavy_check_mark:                                                                                                                               | The request object to use for the request.                                                                                                       |
| `config`                                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                     | :heavy_minus_sign:                                                                                                                               | Available config options for making requests.                                                                                                    |


### Response

**Promise<[operations.DeregisterProviderV2UserUserIdProviderDeleteResponse](../../models/operations/deregisterproviderv2useruseridproviderdeleteresponse.md)>**


## get

GET User details given the user_id.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.user.get({
    userId: "b18d8d81-fd7b-4764-a31e-475cb1f36591",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetUserV2UserUserIdGetRequest](../../models/operations/getuserv2useruseridgetrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetUserV2UserUserIdGetResponse](../../models/operations/getuserv2useruseridgetresponse.md)>**


## getAll

GET All users for team.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.user.getAll({});

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                            | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `request`                                                                                            | [operations.GetTeamsUsersV2UserGetRequest](../../models/operations/getteamsusersv2usergetrequest.md) | :heavy_check_mark:                                                                                   | The request object to use for the request.                                                           |
| `config`                                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                         | :heavy_minus_sign:                                                                                   | Available config options for making requests.                                                        |


### Response

**Promise<[operations.GetTeamsUsersV2UserGetResponse](../../models/operations/getteamsusersv2usergetresponse.md)>**


## getConnectedProviders

GET Users connected providers

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.user.getConnectedProviders({
    userId: "30ef9033-9974-45c7-af5c-ddc9369dd7a0",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.GetConnectedProvidersV2UserProvidersUserIdGetRequest](../../models/operations/getconnectedprovidersv2userprovidersuseridgetrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.GetConnectedProvidersV2UserProvidersUserIdGetResponse](../../models/operations/getconnectedprovidersv2userprovidersuseridgetresponse.md)>**


## getMetrics

GET metrics for team.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.user.getMetrics();

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.GetTeamsMetricsV2UserMetricsGetResponse](../../models/operations/getteamsmetricsv2usermetricsgetresponse.md)>**


## getSignInToken

Get User Sign In Token

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.user.getSignInToken({
    userId: "d738147a-606f-41ac-a296-81a3993405ee",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                          | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                          | [operations.GetUserSignInTokenV2UserUserIdSignInTokenPostRequest](../../models/operations/getusersignintokenv2useruseridsignintokenpostrequest.md) | :heavy_check_mark:                                                                                                                                 | The request object to use for the request.                                                                                                         |
| `config`                                                                                                                                           | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                       | :heavy_minus_sign:                                                                                                                                 | Available config options for making requests.                                                                                                      |


### Response

**Promise<[operations.GetUserSignInTokenV2UserUserIdSignInTokenPostResponse](../../models/operations/getusersignintokenv2useruseridsignintokenpostresponse.md)>**


## patchUserV2UserUserIdPatch

Patch User

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.user.patchUserV2UserUserIdPatch({
    userPatchBody: {},
    userId: "02c6960d-b280-4a76-8c76-467d647deb43",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                    | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                    | [operations.PatchUserV2UserUserIdPatchRequest](../../models/operations/patchuserv2useruseridpatchrequest.md) | :heavy_check_mark:                                                                                           | The request object to use for the request.                                                                   |
| `config`                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                 | :heavy_minus_sign:                                                                                           | Available config options for making requests.                                                                |


### Response

**Promise<[operations.PatchUserV2UserUserIdPatchResponse](../../models/operations/patchuserv2useruseridpatchresponse.md)>**


## refreshUserIdV2UserRefreshUserIdPost

Trigger a manual refresh for a specific user

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.user.refreshUserIdV2UserRefreshUserIdPost({
    userId: "1d35a855-b124-4dda-9838-fdeec970978f",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                        | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                        | [operations.RefreshUserIdV2UserRefreshUserIdPostRequest](../../models/operations/refreshuseridv2userrefreshuseridpostrequest.md) | :heavy_check_mark:                                                                                                               | The request object to use for the request.                                                                                       |
| `config`                                                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                     | :heavy_minus_sign:                                                                                                               | Available config options for making requests.                                                                                    |


### Response

**Promise<[operations.RefreshUserIdV2UserRefreshUserIdPostResponse](../../models/operations/refreshuseridv2userrefreshuseridpostresponse.md)>**


## resolveByUserId

GET user_id from client_user_id.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.user.resolveByUserId({
    clientUserId: "Granite whiteboard excluding",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                  | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                  | [operations.GetUserByClientUserIdV2UserResolveClientUserIdGetRequest](../../models/operations/getuserbyclientuseridv2userresolveclientuseridgetrequest.md) | :heavy_check_mark:                                                                                                                                         | The request object to use for the request.                                                                                                                 |
| `config`                                                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Available config options for making requests.                                                                                                              |


### Response

**Promise<[operations.GetUserByClientUserIdV2UserResolveClientUserIdGetResponse](../../models/operations/getuserbyclientuseridv2userresolveclientuseridgetresponse.md)>**

