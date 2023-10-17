/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyMetadata } from "../../../internal/utils";
import { classToPlain, Expose } from "class-transformer";

export class ValidationError extends Error {
    @SpeakeasyMetadata()
    @Expose({ name: "loc" })
    loc: any[];

    @SpeakeasyMetadata()
    @Expose({ name: "msg" })
    msg: string;

    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: string;

    constructor(err?: ValidationError) {
        super();
        if (err) {
            Object.assign(this, err);
            this.message = JSON.stringify(
                classToPlain(err, { exposeUnsetFields: false, excludeExtraneousValues: true })
            );
        }

        this.name = "ValidationError";
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}