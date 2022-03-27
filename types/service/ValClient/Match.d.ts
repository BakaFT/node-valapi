export = Match;
declare class Match {
    /**
    * @param {JSON} data Services Data
    */
    constructor(data: JSON);
    classId: string;
    AxiosClient: import("@ing3kth/core/types/core/AxiosClient");
    Region: any;
    /**
    * @description Get contract definitions
    * @param {String} matchId MatchID
    */
    FetchMatchDetails(matchId: string): Promise<any>;
    /**
    * @param {String} puuid PlayerUUID
    * @param {String} queueId QueueID
    * @param {Number} startIndex startIndex
    * @param {Number} endIndex endIndex
    */
    FetchMatchHistory(puuid: string, queueId?: string, startIndex?: number, endIndex?: number): Promise<any>;
}
//# sourceMappingURL=Match.d.ts.map