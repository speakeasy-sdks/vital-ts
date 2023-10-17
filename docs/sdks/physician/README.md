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

(async() => {
  const sdk = new Vital({
    apiKey: "<YOUR-API-KEY>",
  });

  const res = await sdk.physician.reviewOpenloopV2PhysicianReviewOpenloopPost({
    eventType: OpenLoopWebhookType.PaymentDeleted,
    resourceId: "soak",
    resourceIdType: OpenLoopResourceIdType.Note,
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `request`                                                           | [shared.OpenLoopEvent](../../models/shared/openloopevent.md)        | :heavy_check_mark:                                                  | The request object to use for the request.                          |
| `retries`                                                           | [utils.RetryConfig](../../models/utils/retryconfig.md)              | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |
| `config`                                                            | [AxiosRequestConfig](https://axios-http.com/docs/req_config)        | :heavy_minus_sign:                                                  | Available config options for making requests.                       |


### Response

**Promise<[operations.ReviewOpenloopV2PhysicianReviewOpenloopPostResponse](../../models/operations/reviewopenloopv2physicianreviewopenlooppostresponse.md)>**

