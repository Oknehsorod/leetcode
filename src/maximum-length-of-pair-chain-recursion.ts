let memo: Record<string, number> = {};

type Pair = [number, number];
type Pairs = Pair[];

const cachePair = (pair: Pair, counter: number) => {
    memo[pair[1]] = counter;
};

const getCounterFromPair = (pair: Pair): number =>
    memo[pair[1]] ?? -1;

const findLongestChainWithStartPair = (
    pair: Pair,
    pairs: Pairs,
    counter = 1
): number => {
    const cachedPair = getCounterFromPair(pair);
    if (cachedPair > -1) return counter + cachedPair;

    const filteredPairs = pairs.filter((curPair) => pair[1] < curPair[0]);

    if (filteredPairs.length === 0) {
        cachePair(pair, 0);
        return counter;
    }

    const result = Math.max(
        ...filteredPairs.map((curPair) =>
            findLongestChainWithStartPair(curPair, filteredPairs, counter + 1)
        )
    );

    cachePair(pair, result - counter);
    return result;
};

export function findLongestChain(pairs: Pairs): number {
    memo = {};
    let result = 1;

    pairs.forEach((pair) => {
        const resultVariant = findLongestChainWithStartPair(pair, [...pairs]);
        if (resultVariant > result) result = resultVariant;
    });

    return result;
}
