/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ClientFacingOrder } from "./clientfacingorder";
import { Expose, Type } from "class-transformer";

export class PostOrderResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message: string;

    @SpeakeasyMetadata()
    @Expose({ name: "order" })
    @Type(() => ClientFacingOrder)
    order: ClientFacingOrder;

    @SpeakeasyMetadata()
    @Expose({ name: "status" })
    status: string;
}
