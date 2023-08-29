type Pair = [number, number];
type Pairs = Pair[];

let objMemo: Record<string, number> = {};

const getDippestObjectCounter = (obj: object, counter = 0) => {
    const objKeys = Object.keys(obj);
    if (objKeys.length === 0) return counter;
    return Math.max(
        ...objKeys.map((key) => {
            if (objMemo[key]) return counter + objMemo[key];
            const result = getDippestObjectCounter(obj[key], counter + 1)
            objMemo[key] = result - counter;
            return result;
        })
    );
};

export function findLongestChain(pairs: Pairs): number {
    let chains: Record<string, object> = {};
    objMemo = {};

    console.time('Chain Creation');
    pairs.forEach((pair) => {
        const pairKey = JSON.stringify(pair);
        if (chains[pairKey]) return;
        if (!chains[pairKey]) chains[pairKey] = {};

        Object.keys(chains).forEach((key) => {
            const [firstEl, lastEl] = JSON.parse(key);
            if (lastEl < pair[0]) {
                chains[key][pairKey] = chains[pairKey];
            }
            if (pair[1] < firstEl) {
                chains[pairKey][key] = chains[key];
            }
        });
    });
    console.timeEnd('Chain Creation');

    console.time('Find Deepest Object');
    const res = getDippestObjectCounter(chains);
    console.timeEnd('Find Deepest Object');

    return res;
}
