# Link
(*link*)

### Available Operations

* [checkTokenState](#checktokenstate) - Check Link Token State
* [checkTokenValidity](#checktokenvalidity) - Check Token Valid
* [connectBleProvider](#connectbleprovider) - Connect Ble Provider
* [connectEmailAuth](#connectemailauth) - Connect Email Auth
* [connectEmailProvider](#connectemailprovider) - Connect Email Auth Provider
* [connectIndividualProvider](#connectindividualprovider) - Connect Individual Provider
* [connectPasswordAuth](#connectpasswordauth) - Connect Password Auth
* [connectProvider](#connectprovider) - Connect Provider
* [createDemoConnection](#createdemoconnection) - Create Demo Connection
* [createToken](#createtoken) - Create Token
* [exchangeToken](#exchangetoken) - Exchange Token
* [generate](#generate) - Generate Vital Link Token
* [getOauthProvider](#getoauthprovider) - Get Oauth Provider
* [getProviders](#getproviders) - Get Providers
* [startConnectProcess](#startconnectprocess) - Start Connect Process

## checkTokenState

REQUEST_SOURCE: VITAL-LINK
Check link token state - can be hit continuously used as heartbeat

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.link.checkTokenState();

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

**Promise<[operations.CheckLinkTokenStateV2LinkStateGetResponse](../../models/operations/checklinktokenstatev2linkstategetresponse.md)>**


## checkTokenValidity

Check Token Valid

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.link.checkTokenValidity({
    oauthInfo: {},
    token: "Florida synthesize copying",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.LinkTokenBase](../../models/shared/linktokenbase.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CheckTokenValidV2LinkTokenIsValidPostResponse](../../models/operations/checktokenvalidv2linktokenisvalidpostresponse.md)>**


## connectBleProvider

REQUEST_SOURCE: CUSTOMER
PROVIDER_TYPE: MANUAL-PROVIDER
This connects auth providers that are password based.

### Example Usage

```typescript
import { Vital } from "Vital";
import { ConnectBleProviderV2LinkProviderManualProviderPostProviderManualProviders } from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital();

  const res = await sdk.link.connectBleProvider({
    manualConnectionData: {
      userId: "especially",
    },
    provider: ConnectBleProviderV2LinkProviderManualProviderPostProviderManualProviders.AppleHealthKit,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                    | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                    | [operations.ConnectBleProviderV2LinkProviderManualProviderPostRequest](../../models/operations/connectbleproviderv2linkprovidermanualproviderpostrequest.md) | :heavy_check_mark:                                                                                                                                           | The request object to use for the request.                                                                                                                   |
| `config`                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                 | :heavy_minus_sign:                                                                                                                                           | Available config options for making requests.                                                                                                                |


### Response

**Promise<[operations.ConnectBleProviderV2LinkProviderManualProviderPostResponse](../../models/operations/connectbleproviderv2linkprovidermanualproviderpostresponse.md)>**


## connectEmailAuth

REQUEST_SOURCE: VITAL-LINK
PROVIDER_TYPE: EMAIL-AUTH
This function is hit by vital-link to authenticate a email provider.

### Example Usage

```typescript
import { Vital } from "Vital";
import { AuthType, Providers, Region } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital();

  const res = await sdk.link.connectEmailAuth({
    authType: AuthType.Password,
    email: "Samara_Haley@gmail.com",
    provider: Providers.BeurerBle,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.EmailAuthLink](../../models/shared/emailauthlink.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ConnectEmailAuthV2LinkAuthEmailPostResponse](../../models/operations/connectemailauthv2linkauthemailpostresponse.md)>**


## connectEmailProvider

This connects auth providers that are email based.

### Example Usage

```typescript
import { Vital } from "Vital";
import { ConnectEmailAuthProviderV2LinkProviderEmailProviderPostProviderEmailProviders } from "Vital/dist/sdk/models/operations";
import { Providers, Region } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital();

  const res = await sdk.link.connectEmailProvider({
    emailProviderAuthLink: {
      email: "Mabelle_Medhurst23@gmail.com",
    },
    provider: ConnectEmailAuthProviderV2LinkProviderEmailProviderPostProviderEmailProviders.FreestyleLibre,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                              | Type                                                                                                                                                                   | Required                                                                                                                                                               | Description                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                              | [operations.ConnectEmailAuthProviderV2LinkProviderEmailProviderPostRequest](../../models/operations/connectemailauthproviderv2linkprovideremailproviderpostrequest.md) | :heavy_check_mark:                                                                                                                                                     | The request object to use for the request.                                                                                                                             |
| `config`                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                           | :heavy_minus_sign:                                                                                                                                                     | Available config options for making requests.                                                                                                                          |


### Response

**Promise<[operations.ConnectEmailAuthProviderV2LinkProviderEmailProviderPostResponse](../../models/operations/connectemailauthproviderv2linkprovideremailproviderpostresponse.md)>**


## connectIndividualProvider

This connects auth providers that are password based.

### Example Usage

```typescript
import { Vital } from "Vital";
import {
  ConnectIndividualProviderV2LinkProviderPasswordProviderPostProviderPasswordProviders,
} from "Vital/dist/sdk/models/operations";

(async() => {
  const sdk = new Vital();

  const res = await sdk.link.connectIndividualProvider({
    individualProviderData: {
      password: "U7xJdvB5pT6rvW2",
      username: "Chanel73",
    },
    provider: ConnectIndividualProviderV2LinkProviderPasswordProviderPostProviderPasswordProviders.Renpho,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ConnectIndividualProviderV2LinkProviderPasswordProviderPostRequest](../../models/operations/connectindividualproviderv2linkproviderpasswordproviderpostrequest.md) | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `config`                                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                   | :heavy_minus_sign:                                                                                                                                                             | Available config options for making requests.                                                                                                                                  |


### Response

**Promise<[operations.ConnectIndividualProviderV2LinkProviderPasswordProviderPostResponse](../../models/operations/connectindividualproviderv2linkproviderpasswordproviderpostresponse.md)>**


## connectPasswordAuth

REQUEST_SOURCE: VITAL-LINK
PROVIDER_TYPE: PASSWORD-AUTH
This function is hit by vital-link to authenticate a password provider.

### Example Usage

```typescript
import { Vital } from "Vital";
import { AuthType, Providers } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital();

  const res = await sdk.link.connectPasswordAuth({
    passwordAuthLink: {
      authType: AuthType.Password,
      password: "HuGgl1Kl3rSJCBn",
      provider: Providers.Wahoo,
      username: "Brett32",
    },
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                  | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                  | [operations.ConnectPasswordAuthV2LinkAuthPostRequest](../../models/operations/connectpasswordauthv2linkauthpostrequest.md) | :heavy_check_mark:                                                                                                         | The request object to use for the request.                                                                                 |
| `config`                                                                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                               | :heavy_minus_sign:                                                                                                         | Available config options for making requests.                                                                              |


### Response

**Promise<[operations.ConnectPasswordAuthV2LinkAuthPostResponse](../../models/operations/connectpasswordauthv2linkauthpostresponse.md)>**


## connectProvider

REQUEST_SOURCE: VITAL-LINK
PROVIDER_TYPE: OAUTH
Connect oauth providers

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.link.connectProvider({
    provider: "newton Gasoline Cotton",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                              | [operations.ConnectProviderV2LinkConnectProviderGetRequest](../../models/operations/connectproviderv2linkconnectprovidergetrequest.md) | :heavy_check_mark:                                                                                                                     | The request object to use for the request.                                                                                             |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.ConnectProviderV2LinkConnectProviderGetResponse](../../models/operations/connectproviderv2linkconnectprovidergetresponse.md)>**


## createDemoConnection

POST Connect the given Vital user to a demo provider.

### Example Usage

```typescript
import { Vital } from "Vital";
import { DemoProviders } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital();

  const res = await sdk.link.createDemoConnection({
    provider: DemoProviders.AppleHealthKit,
    userId: "save",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                    | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `request`                                                                                    | [shared.DemoConnectionCreationPayload](../../models/shared/democonnectioncreationpayload.md) | :heavy_check_mark:                                                                           | The request object to use for the request.                                                   |
| `config`                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                 | :heavy_minus_sign:                                                                           | Available config options for making requests.                                                |


### Response

**Promise<[operations.CreateDemoConnectionV2LinkConnectDemoPostResponse](../../models/operations/createdemoconnectionv2linkconnectdemopostresponse.md)>**


## createToken

Generate a token to invite a user of Vital mobile app to your team

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.link.createToken({
    userId: "2795b4e3-bfe4-4e25-a003-d249bbaf85eb",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                              | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                              | [operations.CreateTokenV2LinkCodeCreatePostRequest](../../models/operations/createtokenv2linkcodecreatepostrequest.md) | :heavy_check_mark:                                                                                                     | The request object to use for the request.                                                                             |
| `config`                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                           | :heavy_minus_sign:                                                                                                     | Available config options for making requests.                                                                          |


### Response

**Promise<[operations.CreateTokenV2LinkCodeCreatePostResponse](../../models/operations/createtokenv2linkcodecreatepostresponse.md)>**


## exchangeToken

Redeem an invite token for an api key

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.link.exchangeToken({
    code: "blue",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                      | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                      | [operations.ExchangeTokenV2LinkCodeExchangePostRequest](../../models/operations/exchangetokenv2linkcodeexchangepostrequest.md) | :heavy_check_mark:                                                                                                             | The request object to use for the request.                                                                                     |
| `config`                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                   | :heavy_minus_sign:                                                                                                             | Available config options for making requests.                                                                                  |


### Response

**Promise<[operations.ExchangeTokenV2LinkCodeExchangePostResponse](../../models/operations/exchangetokenv2linkcodeexchangepostresponse.md)>**


## generate

Endpoint to generate a user link token, to be used throughout the vital
link process. The vital link token is a one time use token, that
expires after 10 minutes. If you would like vital-link widget to launch
with a specific provider, pass in a provider in the body. If you would
like to redirect to a custom url after successful or error connection,
pass in your own custom redirect_url parameter.

### Example Usage

```typescript
import { Vital } from "Vital";
import { Providers } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital();

  const res = await sdk.link.generate({
    filterOnProviders: [
      Providers.AccuchekBle,
    ],
    userKey: "8785044a-13a2-491c-af01-0449531f483f",
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                            | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `request`                                                            | [shared.LinkTokenExchange](../../models/shared/linktokenexchange.md) | :heavy_check_mark:                                                   | The request object to use for the request.                           |
| `config`                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)         | :heavy_minus_sign:                                                   | Available config options for making requests.                        |


### Response

**Promise<[operations.GenerateVitalLinkTokenV2LinkTokenPostResponse](../../models/operations/generatevitallinktokenv2linktokenpostresponse.md)>**


## getOauthProvider

This endpoint generates an OAuth link for oauth provider

### Example Usage

```typescript
import { Vital } from "Vital";
import { OAuthProviders } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital();

  const res = await sdk.link.getOauthProvider({
    oauthProvider: OAuthProviders.Polar,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                                                                                      | Type                                                                                                                                                           | Required                                                                                                                                                       | Description                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `request`                                                                                                                                                      | [operations.GetOauthProviderV2LinkProviderOauthOauthProviderGetRequest](../../models/operations/getoauthproviderv2linkprovideroauthoauthprovidergetrequest.md) | :heavy_check_mark:                                                                                                                                             | The request object to use for the request.                                                                                                                     |
| `config`                                                                                                                                                       | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                   | :heavy_minus_sign:                                                                                                                                             | Available config options for making requests.                                                                                                                  |


### Response

**Promise<[operations.GetOauthProviderV2LinkProviderOauthOauthProviderGetResponse](../../models/operations/getoauthproviderv2linkprovideroauthoauthprovidergetresponse.md)>**


## getProviders

GET List of all available providers given the generated link token.

### Example Usage

```typescript
import { Vital } from "Vital";

(async() => {
  const sdk = new Vital();

  const res = await sdk.link.getProviders();

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

**Promise<[operations.GetProvidersV2LinkProvidersGetResponse](../../models/operations/getprovidersv2linkprovidersgetresponse.md)>**


## startConnectProcess

REQUEST_SOURCE: VITAL-LINK
Start link token process

### Example Usage

```typescript
import { Vital } from "Vital";
import { Providers } from "Vital/dist/sdk/models/shared";

(async() => {
  const sdk = new Vital();

  const res = await sdk.link.startConnectProcess({
    linkToken: "Electric",
    provider: Providers.Zwift,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                    | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `request`                                                                    | [shared.BeginLinkTokenRequest](../../models/shared/beginlinktokenrequest.md) | :heavy_check_mark:                                                           | The request object to use for the request.                                   |
| `config`                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                 | :heavy_minus_sign:                                                           | Available config options for making requests.                                |


### Response

**Promise<[operations.StartConnectProcessV2LinkStartPostResponse](../../models/operations/startconnectprocessv2linkstartpostresponse.md)>**

