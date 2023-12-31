/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Type } from "class-transformer";

/**
 * Details of fat content
 */
export class Fats extends SpeakeasyBase {
    /**
     * Amount of monounsaturated fats in grams (g)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "monounsaturated" })
    monounsaturated?: number;

    /**
     * Amount of Omega-3 fatty acids in grams (g)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "omega3" })
    omega3?: number;

    /**
     * Amount of Omega-6 fatty acids in grams (g)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "omega6" })
    omega6?: number;

    /**
     * Amount of polyunsaturated fats in grams (g)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "polyunsaturated" })
    polyunsaturated?: number;

    /**
     * Amount of saturated fats in grams (g)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "saturated" })
    saturated?: number;

    /**
     * Total amount of fats in grams (g)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "total" })
    total?: number;
}

export class Macros extends SpeakeasyBase {
    /**
     * Amount of alcohol in grams (g)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "alcohol" })
    alcohol?: number;

    /**
     * Amount of carbohydrates in grams (g)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "carbs" })
    carbs?: number;

    /**
     * Details of fat content
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fats" })
    @Type(() => Fats)
    fats?: Fats;

    /**
     * Amount of dietary fiber in grams (g)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "fibre" })
    fibre?: number;

    /**
     * Amount of protein in grams (g)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "protein" })
    protein?: number;

    /**
     * Amount of sugar in grams (g)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sugar" })
    sugar?: number;

    /**
     * Amount of water in grams (g)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "water" })
    water?: number;
}
