# Physician
(*physician*)

### Available Operations

* [reviewOpenloopV2PhysicianReviewOpenloopPost](#reviewopenloopv2physicianreviewopenlooppost) - Review Openloop

## reviewOpenloopV2PhysicianReviewOpenloopPost

Review Openloop

### Example Usage

```typescript
import { Vital } from "Vital";
import { OpenLoopResourceIdType, OpenLoopWebhookType } from "Vital/dist/sdk/models/shared";

async function run() {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.physician.reviewOpenloopV2PhysicianReviewOpenloopPost({
    eventType: OpenLoopWebhookType.PaymentDeleted,
    resourceId: "string",
    resourceIdType: OpenLoopResourceIdType.Appointment,
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
| `request`                                                           | [shared.OpenLoopEvent](../../sdk/models/shared/openloopevent.md)    | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [utils.RetryConfig](../../internal/utils/retryconfig.md)            | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.ReviewOpenloopV2PhysicianReviewOpenloopPostResponse](../../sdk/models/operations/reviewopenloopv2physicianreviewopenlooppostresponse.md)>**
### Errors

| Error Object               | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 400-600                    | */*                        |
