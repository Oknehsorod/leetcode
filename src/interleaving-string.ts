const memo: Record<string, string> = {};

const compareStrings = (s1: string, s2: string, s3: string) => {
    let memoizedS1S2 = memo[s1 + s2] ? memo[s1 + s2] : memo[s2 + s1];
    if (!memoizedS1S2) {
        memoizedS1S2 = [...(s1 + s2)].sort((a, b) => a.localeCompare(b)).join('');
        memo[s1 + s2] = memoizedS1S2;
    }
    
    let memoizedS3 = memo[s3];

    if (!memoizedS3) {
        memoizedS3 = [...s3].sort((a, b) => a.localeCompare(b)).join('');
        memo[s3] = memoizedS3;
    }

    return memoizedS1S2 !== memoizedS3;
};

export function isInterleave(s1: string, s2: string, s3: string, isNotFirst: boolean = false): boolean {
    if (!isNotFirst && compareStrings(s1, s2, s3)) return false;
    if (s1.length === 0 && s2.length === 0 && s3.length === 0) return true;
    if (s1.length === 0 && s2.length === 0 && s3.length > 0) return false;
    if ((s1.length > 0 || s2.length > 0) && s3.length === 0) return false;
    if (s1.length > s3.length || s2.length > s3.length) return false;
    if (s1.length + s2.length > s3.length) return false;

    if (s1[0] === s3[0] && isInterleave(s1.slice(1), s2, s3.slice(1), true))
        return true;
    if (s2[0] === s3[0] && isInterleave(s1, s2.slice(1), s3.slice(1), true))
        return true;

    return false;
}
