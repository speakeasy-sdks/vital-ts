/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as errors from "../sdk/models/errors";
import * as operations from "../sdk/models/operations";
import * as shared from "../sdk/models/shared";
import { Insurance } from "./insurance";
import { LabTests } from "./labtests";
import { Link } from "./link";
import { Order } from "./order";
import { Orders } from "./orders";
import { Physician } from "./physician";
import { Providers } from "./providers";
import { Summary } from "./summary";
import { Team } from "./team";
import { Timeseries } from "./timeseries";
import { User } from "./user";
import axios from "axios";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, RawAxiosRequestHeaders } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Production server
     */
    "https://api.tryvital.io",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    apiKey?: string;

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "0.0.0-dev.f0ab7c6";
    sdkVersion = "0.6.4";
    genVersion = "2.194.1";
    userAgent = "speakeasy-sdk/typescript 0.6.4 2.194.1 0.0.0-dev.f0ab7c6 Vital";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Vital API: API for at-home health Wearables and Lab test API for digital health companies.
 */
export class Vital {
    public link: Link;
    public physician: Physician;
    public providers: Providers;
    public summary: Summary;
    public team: Team;
    public timeseries: Timeseries;
    public user: User;
    public insurance: Insurance;
    public labTests: LabTests;
    public order: Order;
    public orders: Orders;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: new shared.Security({ apiKey: props?.apiKey }),

            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.link = new Link(this.sdkConfiguration);
        this.physician = new Physician(this.sdkConfiguration);
        this.providers = new Providers(this.sdkConfiguration);
        this.summary = new Summary(this.sdkConfiguration);
        this.team = new Team(this.sdkConfiguration);
        this.timeseries = new Timeseries(this.sdkConfiguration);
        this.user = new User(this.sdkConfiguration);
        this.insurance = new Insurance(this.sdkConfiguration);
        this.labTests = new LabTests(this.sdkConfiguration);
        this.order = new Order(this.sdkConfiguration);
        this.orders = new Orders(this.sdkConfiguration);
    }

    /**
     * Robots
     */
    async robotsRobotsTxtGet(
        retries?: utils.RetryConfig,
        config?: AxiosRequestConfig
    ): Promise<operations.RobotsRobotsTxtGetResponse> {
        const baseURL: string = utils.templateUrl(
            this.sdkConfiguration.serverURL,
            this.sdkConfiguration.serverDefaults
        );
        const operationUrl: string = baseURL.replace(/\/$/, "") + "/robots.txt";
        const client: AxiosInstance = this.sdkConfiguration.defaultClient;
        let globalSecurity = this.sdkConfiguration.security;
        if (typeof globalSecurity === "function") {
            globalSecurity = await globalSecurity();
        }
        if (!(globalSecurity instanceof utils.SpeakeasyBase)) {
            globalSecurity = new shared.Security(globalSecurity);
        }
        const properties = utils.parseSecurityProperties(globalSecurity);
        const headers: RawAxiosRequestHeaders = { ...config?.headers, ...properties.headers };
        headers["Accept"] = "text/plain";

        headers["user-agent"] = this.sdkConfiguration.userAgent;

        const globalRetryConfig = this.sdkConfiguration.retryConfig;
        let retryConfig: utils.RetryConfig | undefined = retries;
        if (!retryConfig) {
            if (globalRetryConfig) {
                retryConfig = globalRetryConfig;
            } else {
                retryConfig = new utils.RetryConfig(
                    "backoff",
                    new utils.BackoffStrategy(500, 60000, 1.5, 3600000),
                    true
                );
            }
        }
        const httpRes: AxiosResponse = await utils.Retry(() => {
            return client.request({
                validateStatus: () => true,
                url: operationUrl,
                method: "get",
                headers: headers,
                responseType: "arraybuffer",
                ...config,
            });
        }, new utils.Retries(retryConfig, ["5XX"]));

        const responseContentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) {
            throw new Error(`status code not found in response: ${httpRes}`);
        }

        const res: operations.RobotsRobotsTxtGetResponse =
            new operations.RobotsRobotsTxtGetResponse({
                statusCode: httpRes.status,
                contentType: responseContentType,
                rawResponse: httpRes,
            });
        const decodedRes = new TextDecoder().decode(httpRes?.data);
        switch (true) {
            case httpRes?.status == 200:
                if (utils.matchContentType(responseContentType, `text/plain`)) {
                    res.res = decodedRes;
                } else {
                    throw new errors.SDKError(
                        "unknown content-type received: " + responseContentType,
                        httpRes.status,
                        decodedRes,
                        httpRes
                    );
                }
                break;
            case (httpRes?.status >= 400 && httpRes?.status < 500) ||
                (httpRes?.status >= 500 && httpRes?.status < 600):
                throw new errors.SDKError(
                    "API error occurred",
                    httpRes.status,
                    decodedRes,
                    httpRes
                );
        }

        return res;
    }
}
