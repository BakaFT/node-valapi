export namespace Auth {
    const Account: typeof import("./auth/Account");
    const Multifactor: typeof import("./auth/Multifactor");
}
export const ValClient: typeof import("./client/ValClient");
export const RiotApi: typeof import("./client/RiotApi");
export const RiotLocal: typeof import("./client/RiotLocal");
export const ValRegion: typeof import("./resources/ValRegion");
export namespace Resource {
    const Currency: {
        '85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741': string;
        'e59aa87c-4cbf-517a-5983-6e81511be9b7': string;
        'f08d4ae3-939c-4576-ab26-09ce1f23bb37': string;
        data: {
            ValorantPoints: string;
            RadianitePoints: string;
            FreeAgents: string;
        };
    };
    const ItemTypeId: {
        '01bb38e1-da47-4e6a-9b3d-945fe4655707': string;
        'f85cb6f7-33e5-4dc8-b609-ec7212301948': string;
        'd5f120f8-ff8c-4aac-92ea-f2b5acbe9475': string;
        'dd3bf334-87f3-40bd-b043-682a57a8dc3a': string;
        '3f296c07-64c3-494c-923b-fe692a4fa1bd': string;
        'e7c63390-eda7-46e0-bb7a-a6abdacd2433': string;
        '3ad1b2b2-acdb-4524-852f-954a76ddae0a': string;
        'de7caa6b-adf7-4588-bbd1-143831e786c6': string;
        data: {
            Agents: string;
            Contracts: string;
            Sprays: string;
            GunBuddies: string;
            Cards: string;
            Skins: string;
            SkinVariants: string;
            Titles: string;
        };
    };
    const Locale: {
        "ar-AE": string;
        "de-DE": string;
        "en-GB": string;
        "en-US": string;
        "es-ES": string;
        "es-MX": string;
        "fr-FR": string;
        "id-ID": string;
        "it-IT": string;
        "ja-JP": string;
        "ko-KR": string;
        "pl-PL": string;
        "pt-BR": string;
        "ru-RU": string;
        "th-TH": string;
        "tr-TR": string;
        "vi-VN": string;
        "zh-CN": string;
        "zh-TW": string;
        data: {
            Arabic_UAE: string;
            German_Germany: string;
            English_UnitedKingdom: string;
            English_UnitedStates: string;
            Spanish_Spain: string;
            Spanish_Mexico: string;
            French_France: string;
            Indonesian_Indonesia: string;
            Italian_Italy: string;
            Japanese_Japan: string;
            Korean_Korea: string;
            Polish_Poland: string;
            Portuguese_Brazil: string;
            Russian_Russia: string;
            Thai_Thailand: string;
            Turkish_Turkey: string;
            Vietnamese_Vietnam: string;
            Chinese_China: string;
            Chinese_Taiwan: string;
        };
    };
    const QueueId: {
        unrated: string;
        competitive: string;
        spikerush: string;
        deathmatch: string;
        ggteam: string;
        onefa: string;
        snowball: string;
        '': string;
        newmap: string;
        seeding: string;
        data: {
            Unrated: string;
            Competitive: string;
            Spikerush: string;
            Deathmatch: string;
            Escalation: string;
            Replication: string;
            SnowballFight: string;
            Custom: string;
        };
    };
    const Region: {
        na: string;
        latam: string;
        br: string;
        pbe: string;
        eu: string;
        kr: string;
        ap: string;
        data: {
            NorthAmerica: string;
            LatinAmerica: string;
            Brazil: string;
            PublicBetaEnvironment: string;
            Europe: string;
            Korea: string;
            AsiaPacific: string;
        };
    };
    const HTTP_Response: {
        100: string;
        101: string;
        102: string;
        103: string;
        200: string;
        201: string;
        202: string;
        203: string;
        204: string;
        205: string;
        206: string;
        207: string;
        208: string;
        226: string;
        300: string;
        301: string;
        302: string;
        303: string;
        304: string;
        305: string;
        306: string;
        307: string;
        308: string;
        400: string;
        401: string;
        402: string;
        403: string;
        404: string;
        405: string;
        406: string;
        407: string;
        408: string;
        409: string;
        410: string;
        411: string;
        412: string;
        413: string;
        414: string;
        415: string;
        416: string;
        417: string;
        418: string;
        421: string;
        422: string;
        423: string;
        424: string;
        425: string;
        426: string;
        428: string;
        429: string;
        431: string;
        451: string;
        500: string;
        501: string;
        502: string;
        503: string;
        504: string;
        505: string;
        506: string;
        507: string;
        508: string;
        510: string;
        511: string;
        data: {
            Continue: number;
            SwitchingProtocols: number;
            Processing: number;
            EarlyHints: number;
            OK: number;
            Created: number;
            Accepted: number;
            NonAuthoritativeInformation: number;
            NoContent: number;
            ResetContent: number;
            PartialContent: number;
            MultiStatus: number;
            AlreadyReported: number;
            IMUsed: number;
            MultipleChoices: number;
            MovedPermanently: number;
            Found: number;
            SeeOther: number;
            NotModified: number;
            UseProxy: number;
            SwitchProxy: number;
            TemporaryRedirect: number;
            PermanentRedirect: number;
            BadRequest: number;
            Unauthorized: number;
            PaymentRequired: number;
            Forbidden: number;
            NotFound: number;
            MethodNotAllowed: number;
            NotAcceptable: number;
            ProxyAuthenticationRequired: number;
            RequestTimeout: number;
            Conflict: number;
            Gone: number;
            LengthRequired: number;
            PreconditionFailed: number;
            PayloadTooLarge: number;
            URITooLong: number;
            UnsupportedMediaType: number;
            RangeNotSatisfiable: number;
            ExpectationFailed: number;
            ImATeapot: number;
            MisdirectedRequest: number;
            UnprocessableEntity: number;
            Locked: number;
            FailedDependency: number;
            TooEarly: number;
            UpgradeRequired: number;
            PreconditionRequired: number;
            TooManyRequests: number;
            RequestHeaderFieldsTooLarge: number;
            UnavailableForLegalReasons: number;
            InternalServerError: number;
            NotImplemented: number;
            BadGateway: number;
            ServiceUnavailable: number;
            GatewayTimeout: number;
            HTTPVersionNotSupported: number;
            VariantAlsoNegotiates: number;
            InsufficientStorage: number;
            LoopDetected: number;
            NotExtended: number;
            NetworkAuthenticationRequired: number;
        };
    };
}
export namespace Interface {
    const RiotApi_2: {
        apiKey: StringConstructor;
        region: StringConstructor;
    };
    export { RiotApi_2 as RiotApi };
    const RiotLocal_2: {
        ip: StringConstructor;
        lockfile: {
            name: StringConstructor;
            pid: NumberConstructor;
            port: NumberConstructor;
            password: StringConstructor;
            protocol: StringConstructor;
        };
    };
    export { RiotLocal_2 as RiotLocal };
    export const RiotLocalJSON: {
        method: StringConstructor;
        endpoint: StringConstructor;
        body: ObjectConstructor;
        replace: ArrayConstructor;
    };
    export const RiotLocalLockfile: {
        name: StringConstructor;
        pid: NumberConstructor;
        port: NumberConstructor;
        password: StringConstructor;
        protocol: StringConstructor;
    };
    export const RiotLocalReplace: {
        name: StringConstructor;
        with: StringConstructor;
        where: StringConstructor;
    };
    export const RiotLocalResources: {
        Chat: ObjectConstructor;
        Main: ObjectConstructor;
        More: ObjectConstructor;
    };
    const ValClient_2: {
        cookie: ObjectConstructor;
        accessToken: StringConstructor;
        entitlements: StringConstructor;
        region: StringConstructor;
    };
    export { ValClient_2 as ValClient };
    export const ValClientAuth: {
        cookie: ObjectConstructor;
        accessToken: StringConstructor;
        entitlements: StringConstructor;
        multifactor: BooleanConstructor;
    };
    const ValRegion_2: {
        data: {
            base: StringConstructor;
            api: StringConstructor;
            server: StringConstructor;
            riot: StringConstructor;
        };
        url: {
            playerData: StringConstructor;
            partyService: StringConstructor;
            sharedData: StringConstructor;
        };
        riot: {
            api: StringConstructor;
            esports: StringConstructor;
            server: StringConstructor;
        };
    };
    export { ValRegion_2 as ValRegion };
}
//# sourceMappingURL=index.d.ts.map