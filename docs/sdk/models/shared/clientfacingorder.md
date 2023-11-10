# ClientFacingOrder


## Fields

| Field                                                                                                                                                       | Type                                                                                                                                                        | Required                                                                                                                                                    | Description                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                               | :heavy_check_mark:                                                                                                                                          | When your order was created                                                                                                                                 |
| `details`                                                                                                                                                   | *any*                                                                                                                                                       | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `events`                                                                                                                                                    | [shared.ClientFacingOrderEvent](../../../sdk/models/shared/clientfacingorderevent.md)[]                                                                     | :heavy_check_mark:                                                                                                                                          | N/A                                                                                                                                                         |
| `healthInsuranceId`                                                                                                                                         | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | Vital ID of the health insurance.                                                                                                                           |
| `id`                                                                                                                                                        | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | The Vital Order ID                                                                                                                                          |
| `labTest`                                                                                                                                                   | [shared.ClientFacingOrderClientFacingLabTest](../../../sdk/models/shared/clientfacingorderclientfacinglabtest.md)                                           | :heavy_check_mark:                                                                                                                                          | The Vital Test associated with the order                                                                                                                    |
| `notes`                                                                                                                                                     | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | Notes associated with the order                                                                                                                             |
| `patientAddress`                                                                                                                                            | [shared.ClientFacingOrderPatientAddressCompatible](../../../sdk/models/shared/clientfacingorderpatientaddresscompatible.md)                                 | :heavy_minus_sign:                                                                                                                                          | Patient Address                                                                                                                                             |
| `patientDetails`                                                                                                                                            | [shared.ClientFacingPatientDetailsCompatible](../../../sdk/models/shared/clientfacingpatientdetailscompatible.md)                                           | :heavy_minus_sign:                                                                                                                                          | Patient Details                                                                                                                                             |
| `physician`                                                                                                                                                 | [shared.PhysicianClientFacing](../../../sdk/models/shared/physicianclientfacing.md)                                                                         | :heavy_minus_sign:                                                                                                                                          | N/A                                                                                                                                                         |
| `priority`                                                                                                                                                  | *boolean*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                          | Defines whether order is priority or not. Only available for Labcorp. For Labcorp, this corresponds to a STAT order.                                        |
| `requisitionFormUrl`                                                                                                                                        | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | DEPRECATED. Requistion form url.                                                                                                                            |
| `sampleId`                                                                                                                                                  | *string*                                                                                                                                                    | :heavy_minus_sign:                                                                                                                                          | Sample ID                                                                                                                                                   |
| `shippingDetails`                                                                                                                                           | [shared.ClientFacingOrderShippingAddress](../../../sdk/models/shared/clientfacingordershippingaddress.md)                                                   | :heavy_minus_sign:                                                                                                                                          | Shipping Details. For unregistered testkit orders.                                                                                                          |
| `status`                                                                                                                                                    | [shared.OrderTopLevelStatus](../../../sdk/models/shared/ordertoplevelstatus.md)                                                                             | :heavy_minus_sign:                                                                                                                                          | An enumeration.                                                                                                                                             |
| `teamId`                                                                                                                                                    | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | Your team id.                                                                                                                                               |
| `updatedAt`                                                                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                               | :heavy_check_mark:                                                                                                                                          | When your order was last updated.                                                                                                                           |
| `userId`                                                                                                                                                    | *string*                                                                                                                                                    | :heavy_check_mark:                                                                                                                                          | User id returned by vital create user request. This id should be stored in your database against the user and used for all interactions with the vital api. |