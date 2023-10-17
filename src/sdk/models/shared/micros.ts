/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

export class Micros extends SpeakeasyBase {
    /**
     * Amount of each mineral in grams (g)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "minerals" })
    minerals?: Record<string, number>;

    /**
     * Amount of each trace element in grams (g)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "trace_elements" })
    traceElements?: Record<string, number>;

    /**
     * Amount of each vitamin in grams (g)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "vitamins" })
    vitamins?: Record<string, number>;
}