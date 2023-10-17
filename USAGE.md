<!-- Start SDK Example Usage -->


```typescript
import { Vital } from "Vital";

(async () => {
    const sdk = new Vital();

    const res = await sdk.vital.robotsRobotsTxtGet();

    if (res.statusCode == 200) {
        // handle response
    }
})();

```
<!-- End SDK Example Usage -->