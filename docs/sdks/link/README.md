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

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.link.checkTokenState();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.CheckLinkTokenStateV2LinkStateGetResponse](../../sdk/models/operations/checklinktokenstatev2linkstategetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## checkTokenValidity

Check Token Valid

### Example Usage

```typescript
import { Vital } from "Vital";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.link.checkTokenValidity({
    oauthInfo: {},
    token: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [shared.LinkTokenBase](../../sdk/models/shared/linktokenbase.md)    | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.CheckTokenValidV2LinkTokenIsValidPostResponse](../../sdk/models/operations/checktokenvalidv2linktokenisvalidpostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## connectBleProvider

REQUEST_SOURCE: CUSTOMER
PROVIDER_TYPE: MANUAL-PROVIDER
This connects auth providers that are password based.

### Example Usage

```typescript
import { Vital } from "Vital";
import {
  ConnectBleProviderV2LinkProviderManualProviderPostRequest,
  ProvidersThatAreManuallyAddedDevicesSuchAsBleDevicesAndGeneratedData,
} from "Vital/dist/sdk/models/operations";
import { ManualConnectionData } from "Vital/dist/sdk/models/shared";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const manualConnectionData: ManualConnectionData = {
  userId: "<value>",
};
const provider: ProvidersThatAreManuallyAddedDevicesSuchAsBleDevicesAndGeneratedData = ProvidersThatAreManuallyAddedDevicesSuchAsBleDevicesAndGeneratedData.BeurerBle;

  const res = await sdk.link.connectBleProvider(manualConnectionData, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                              | Type                                                                                                                                                                                   | Required                                                                                                                                                                               | Description                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `manualConnectionData`                                                                                                                                                                 | [shared.ManualConnectionData](../../sdk/models/shared/manualconnectiondata.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                                     | N/A                                                                                                                                                                                    |
| `provider`                                                                                                                                                                             | [operations.ProvidersThatAreManuallyAddedDevicesSuchAsBleDevicesAndGeneratedData](../../sdk/models/operations/providersthataremanuallyaddeddevicessuchasbledevicesandgenerateddata.md) | :heavy_check_mark:                                                                                                                                                                     | An enumeration.                                                                                                                                                                        |
| `retries`                                                                                                                                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                                                                               | :heavy_minus_sign:                                                                                                                                                                     | Configuration to override the default retry behavior of the client.                                                                                                                    |
| `config`                                                                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                     | Available config options for making requests.                                                                                                                                          |


### Response

**Promise<[operations.ConnectBleProviderV2LinkProviderManualProviderPostResponse](../../sdk/models/operations/connectbleproviderv2linkprovidermanualproviderpostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## connectEmailAuth

REQUEST_SOURCE: VITAL-LINK
PROVIDER_TYPE: EMAIL-AUTH
This function is hit by vital-link to authenticate a email provider.

### Example Usage

```typescript
import { Vital } from "Vital";
import { AuthType, Providers, Region } from "Vital/dist/sdk/models/shared";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.link.connectEmailAuth({
    authType: AuthType.Password,
    email: "Samara_Haley@gmail.com",
    provider: Providers.BeurerBle,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [shared.EmailAuthLink](../../sdk/models/shared/emailauthlink.md)    | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.ConnectEmailAuthV2LinkAuthEmailPostResponse](../../sdk/models/operations/connectemailauthv2linkauthemailpostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## connectEmailProvider

This connects auth providers that are email based.

### Example Usage

```typescript
import { Vital } from "Vital";
import {
  ConnectEmailAuthProviderV2LinkProviderEmailProviderPostRequest,
  EmailProvidersThatRequireEmailsFreestyleAuth,
} from "Vital/dist/sdk/models/operations";
import { EmailProviderAuthLink, Providers, Region } from "Vital/dist/sdk/models/shared";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const emailProviderAuthLink: EmailProviderAuthLink = {
  email: "Mabelle_Medhurst23@gmail.com",
};
const provider: EmailProvidersThatRequireEmailsFreestyleAuth = EmailProvidersThatRequireEmailsFreestyleAuth.FreestyleLibre;

  const res = await sdk.link.connectEmailProvider(emailProviderAuthLink, provider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                              | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `emailProviderAuthLink`                                                                                                                | [shared.EmailProviderAuthLink](../../sdk/models/shared/emailproviderauthlink.md)                                                       | :heavy_check_mark:                                                                                                                     | N/A                                                                                                                                    |
| `provider`                                                                                                                             | [operations.EmailProvidersThatRequireEmailsFreestyleAuth](../../sdk/models/operations/emailprovidersthatrequireemailsfreestyleauth.md) | :heavy_check_mark:                                                                                                                     | An enumeration.                                                                                                                        |
| `retries`                                                                                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                               | :heavy_minus_sign:                                                                                                                     | Configuration to override the default retry behavior of the client.                                                                    |
| `config`                                                                                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                           | :heavy_minus_sign:                                                                                                                     | Available config options for making requests.                                                                                          |


### Response

**Promise<[operations.ConnectEmailAuthProviderV2LinkProviderEmailProviderPostResponse](../../sdk/models/operations/connectemailauthproviderv2linkprovideremailproviderpostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## connectIndividualProvider

This connects auth providers that are password based.

### Example Usage

```typescript
import { Vital } from "Vital";
import {
  ConnectIndividualProviderV2LinkProviderPasswordProviderPostRequest,
  ProvidersThatRequirePasswordAuthWhoopRenphoPelotonZwift,
} from "Vital/dist/sdk/models/operations";
import { IndividualProviderData } from "Vital/dist/sdk/models/shared";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const individualProviderData: IndividualProviderData = {
  password: "U7xJdvB5pT6rvW2",
  username: "Chanel73",
};
const provider: ProvidersThatRequirePasswordAuthWhoopRenphoPelotonZwift = ProvidersThatRequirePasswordAuthWhoopRenphoPelotonZwift.Renpho;
const xVitalLinkClientRegion: string = "<value>";

  const res = await sdk.link.connectIndividualProvider(individualProviderData, provider, xVitalLinkClientRegion);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                    | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `individualProviderData`                                                                                                                                     | [shared.IndividualProviderData](../../sdk/models/shared/individualproviderdata.md)                                                                           | :heavy_check_mark:                                                                                                                                           | N/A                                                                                                                                                          |
| `provider`                                                                                                                                                   | [operations.ProvidersThatRequirePasswordAuthWhoopRenphoPelotonZwift](../../sdk/models/operations/providersthatrequirepasswordauthwhooprenphopelotonzwift.md) | :heavy_check_mark:                                                                                                                                           | An enumeration.                                                                                                                                              |
| `xVitalLinkClientRegion`                                                                                                                                     | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |
| `retries`                                                                                                                                                    | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                                                                                     | :heavy_minus_sign:                                                                                                                                           | Configuration to override the default retry behavior of the client.                                                                                          |
| `config`                                                                                                                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                                                                                 | :heavy_minus_sign:                                                                                                                                           | Available config options for making requests.                                                                                                                |


### Response

**Promise<[operations.ConnectIndividualProviderV2LinkProviderPasswordProviderPostResponse](../../sdk/models/operations/connectindividualproviderv2linkproviderpasswordproviderpostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## connectPasswordAuth

REQUEST_SOURCE: VITAL-LINK
PROVIDER_TYPE: PASSWORD-AUTH
This function is hit by vital-link to authenticate a password provider.

### Example Usage

```typescript
import { Vital } from "Vital";
import { ConnectPasswordAuthV2LinkAuthPostRequest } from "Vital/dist/sdk/models/operations";
import { AuthType, PasswordAuthLink, Providers } from "Vital/dist/sdk/models/shared";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const passwordAuthLink: PasswordAuthLink = {
  authType: AuthType.Password,
  password: "HuGgl1Kl3rSJCBn",
  provider: Providers.Wahoo,
  username: "Brett32",
};
const xVitalLinkClientRegion: string = "<value>";

  const res = await sdk.link.connectPasswordAuth(passwordAuthLink, xVitalLinkClientRegion);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                              | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `passwordAuthLink`                                                     | [shared.PasswordAuthLink](../../sdk/models/shared/passwordauthlink.md) | :heavy_check_mark:                                                     | N/A                                                                    |
| `xVitalLinkClientRegion`                                               | *string*                                                               | :heavy_minus_sign:                                                     | N/A                                                                    |
| `retries`                                                              | [utils.RetryConfig](../../internal/utils/retryconfig.md)               | :heavy_minus_sign:                                                     | Configuration to override the default retry behavior of the client.    |
| `config`                                                               | [AxiosRequestConfig](https://axios-http.com/docs/req_config)           | :heavy_minus_sign:                                                     | Available config options for making requests.                          |


### Response

**Promise<[operations.ConnectPasswordAuthV2LinkAuthPostResponse](../../sdk/models/operations/connectpasswordauthv2linkauthpostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## connectProvider

REQUEST_SOURCE: VITAL-LINK
PROVIDER_TYPE: OAUTH
Connect oauth providers

### Example Usage

```typescript
import { Vital } from "Vital";
import { ConnectProviderV2LinkConnectProviderGetRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const provider: string = "<value>";
const xVitalSDKNoRedirect: string = "<value>";

  const res = await sdk.link.connectProvider(provider, xVitalSDKNoRedirect);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `provider`                                                          | *string*                                                            | :heavy_check_mark:                                                  | Provider slug. e.g., `oura`, `fitbit`, `garmin`.                    |
| `xVitalSDKNoRedirect`                                               | *string*                                                            | :heavy_minus_sign:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.ConnectProviderV2LinkConnectProviderGetResponse](../../sdk/models/operations/connectproviderv2linkconnectprovidergetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## createDemoConnection

POST Connect the given Vital user to a demo provider.

### Example Usage

```typescript
import { Vital } from "Vital";
import { DemoProviders } from "Vital/dist/sdk/models/shared";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.link.createDemoConnection({
    provider: DemoProviders.AppleHealthKit,
    userId: "<value>",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                        | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `request`                                                                                        | [shared.DemoConnectionCreationPayload](../../sdk/models/shared/democonnectioncreationpayload.md) | :heavy_check_mark:                                                                               | The request object to use for the request.                                                       |
| `retries`                                                                                        | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                         | :heavy_minus_sign:                                                                               | Configuration to override the default retry behavior of the client.                              |
| `config`                                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                     | :heavy_minus_sign:                                                                               | Available config options for making requests.                                                    |


### Response

**Promise<[operations.CreateDemoConnectionV2LinkConnectDemoPostResponse](../../sdk/models/operations/createdemoconnectionv2linkconnectdemopostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## createToken

Generate a token to invite a user of Vital mobile app to your team

### Example Usage

```typescript
import { Vital } from "Vital";
import { CreateTokenV2LinkCodeCreatePostRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const userId: string = "2795b4e3-bfe4-4e25-a003-d249bbaf85eb";
const expiresAt: Date = new Date("2022-12-10T18:25:02.682Z");

  const res = await sdk.link.createToken(userId, expiresAt);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                                     | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `userId`                                                                                      | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `retries`                                                                                     | [utils.RetryConfig](../../internal/utils/retryconfig.md)                                      | :heavy_minus_sign:                                                                            | Configuration to override the default retry behavior of the client.                           |
| `config`                                                                                      | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                                  | :heavy_minus_sign:                                                                            | Available config options for making requests.                                                 |


### Response

**Promise<[operations.CreateTokenV2LinkCodeCreatePostResponse](../../sdk/models/operations/createtokenv2linkcodecreatepostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## exchangeToken

Redeem an invite token for an api key

### Example Usage

```typescript
import { Vital } from "Vital";
import { ExchangeTokenV2LinkCodeExchangePostRequest } from "Vital/dist/sdk/models/operations";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const code: string = "<value>";

  const res = await sdk.link.exchangeToken(code);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `code`                                                              | *string*                                                            | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.ExchangeTokenV2LinkCodeExchangePostResponse](../../sdk/models/operations/exchangetokenv2linkcodeexchangepostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

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

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.link.generate({
    filterOnProviders: [
      Providers.AccuchekBle,
    ],
    userKey: "8785044a-13a2-491c-af01-0449531f483f",
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `request`                                                                | [shared.LinkTokenExchange](../../sdk/models/shared/linktokenexchange.md) | :heavy_check_mark:                                                       | The request object to use for the request.                               |
| `retries`                                                                | [utils.RetryConfig](../../internal/utils/retryconfig.md)                 | :heavy_minus_sign:                                                       | Configuration to override the default retry behavior of the client.      |
| `config`                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)             | :heavy_minus_sign:                                                       | Available config options for making requests.                            |


### Response

**Promise<[operations.GenerateVitalLinkTokenV2LinkTokenPostResponse](../../sdk/models/operations/generatevitallinktokenv2linktokenpostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getOauthProvider

This endpoint generates an OAuth link for oauth provider

### Example Usage

```typescript
import { Vital } from "Vital";
import { GetOauthProviderV2LinkProviderOauthOauthProviderGetRequest } from "Vital/dist/sdk/models/operations";
import { OAuthProviders } from "Vital/dist/sdk/models/shared";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });
const oauthProvider: OAuthProviders = OAuthProviders.Polar;

  const res = await sdk.link.getOauthProvider(oauthProvider);

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `oauthProvider`                                                     | [shared.OAuthProviders](../../sdk/models/shared/oauthproviders.md)  | :heavy_check_mark:                                                  | An enumeration.                                                     |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetOauthProviderV2LinkProviderOauthOauthProviderGetResponse](../../sdk/models/operations/getoauthproviderv2linkprovideroauthoauthprovidergetresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |

## getProviders

GET List of all available providers given the generated link token.

### Example Usage

```typescript
import { Vital } from "Vital";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.link.getProviders();

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.GetProvidersV2LinkProvidersGetResponse](../../sdk/models/operations/getprovidersv2linkprovidersgetresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## startConnectProcess

REQUEST_SOURCE: VITAL-LINK
Start link token process

### Example Usage

```typescript
import { Vital } from "Vital";
import { Providers } from "Vital/dist/sdk/models/shared";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.link.startConnectProcess({
    linkToken: "<value>",
    provider: Providers.Peloton,
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [shared.BeginLinkTokenRequest](../../sdk/models/shared/beginlinktokenrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `retries`                                                                        | [utils.RetryConfig](../../internal/utils/retryconfig.md)                         | :heavy_minus_sign:                                                               | Configuration to override the default retry behavior of the client.              |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.StartConnectProcessV2LinkStartPostResponse](../../sdk/models/operations/startconnectprocessv2linkstartpostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4xx-5xx                    | */*                        |
