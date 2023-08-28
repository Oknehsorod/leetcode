let memo: Record<string, number> = {};

type Pair = [number, number];
type Pairs = Pair[];

const cachePair = (pair: Pair, counter: number) => {
    memo[JSON.stringify(pair)] = counter;
};

const getCounterFromPair = (pair: Pair): number =>
    memo[JSON.stringify(pair)] ?? -1;

let maxProbablyChain = 0;

const findLongestChainWithStartPair = (
    pair: Pair,
    pairs: Pairs,
    counter = 1
): number => {
    const cachedPair = getCounterFromPair(pair);
    if (cachedPair > -1) {
        return counter + cachedPair;
    }

    if (cachedPair === -2) return counter;

    const filteredPairs = pairs.filter((curPair) => pair[1] < curPair[0]);

    if (maxProbablyChain > filteredPairs.length + counter) return counter;

    if (filteredPairs.length === 0) {
        maxProbablyChain =
            counter > maxProbablyChain ? counter : maxProbablyChain;
        cachePair(pair, -2);
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
    maxProbablyChain = 0;
    memo = {};
    let result = 1;

    pairs.forEach((pair) => {
        const resultVariant = findLongestChainWithStartPair(pair, [
            ...pairs,
        ]);
        if (resultVariant > result) result = resultVariant;
    });

    return result;
}
