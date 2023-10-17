/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class USAddress extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "city" })
    city: string;

    @SpeakeasyMetadata()
    @Expose({ name: "first_line" })
    firstLine: string;

    @SpeakeasyMetadata()
    @Expose({ name: "second_line" })
    secondLine?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "state" })
    state: string;

    @SpeakeasyMetadata()
    @Expose({ name: "unit" })
    unit?: string;

    @SpeakeasyMetadata()
    @Expose({ name: "zip_code" })
    zipCode: string;
}
