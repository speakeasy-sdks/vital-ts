# MealInDBBaseClientFacingSource


## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `data`                                                                                                             | Record<string, [ClientFacingFood](../../models/shared/clientfacingfood.md)>                                        | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `energy`                                                                                                           | [Energy](../../models/shared/energy.md)                                                                            | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `id`                                                                                                               | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `macros`                                                                                                           | [Macros](../../models/shared/macros.md)                                                                            | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `micros`                                                                                                           | [Micros](../../models/shared/micros.md)                                                                            | :heavy_minus_sign:                                                                                                 | N/A                                                                                                                |
| `name`                                                                                                             | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `priorityId`                                                                                                       | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `providerId`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `source`                                                                                                           | [ClientFacingSource](../../models/shared/clientfacingsource.md)                                                    | :heavy_check_mark:                                                                                                 | Source summarizes where a sample or a summary is sourced from.<br/>At minimum, the source provider is always included. |
| `sourceId`                                                                                                         | *number*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `timestamp`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `updatedAt`                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                      | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |
| `userId`                                                                                                           | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |