export enum ChessType{
    none,
    red,
    black
}

export enum GamesStatus {
    /**
     * 正在游戏中
     */
    gaming,
    /**
     * 红方胜利
     */
    redWin,
    /**
     * 黑方胜利
     */
    blackWin,
    /**
     * 平局
     */
    equal
}