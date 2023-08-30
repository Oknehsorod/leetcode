type Pair = [number, number];
type Pairs = Pair[];

class ChainCacher {
    private memo: Record<string, number> = {};

    public set(pair: Pair, longestChainLength: number): number {
        return (this.memo[pair[1]] = longestChainLength);
    }

    public get(pair: Pair): number {
        return this.memo[pair[1]] ?? -1;
    }
}

const MIN_PAIR: Pair = [-1002, -1001];

export const findLongestChain = (
    pairs: Pairs,
    pair = MIN_PAIR,
    cacher = new ChainCacher(),
    counter = 0
): number =>
    cacher.set(
        pair,
        pairs.reduce((acc, curPair) => {
            if (pair[1] >= curPair[0]) return acc;
            const cachedPair = cacher.get(curPair);
            const longestChainLength =
                cachedPair > -1
                    ? cachedPair + counter + 1
                    : findLongestChain(pairs, curPair, cacher, counter + 1);
            return longestChainLength > acc ? longestChainLength : acc;
        }, counter) - counter
    ) + counter;
