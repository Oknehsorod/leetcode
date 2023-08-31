export const merge = (
    nums1: number[],
    m: number,
    nums2: number[],
    n: number
): void => {
    let result: number[] = [...nums1.slice(0, m), ...nums2].sort((a, b) => a - b);
    nums1.splice(0, nums1.length, ...result.slice(result.length - (m + n)));
};
