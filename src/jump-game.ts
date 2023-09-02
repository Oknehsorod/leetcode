class JumpCacher {
    private memo: Record<string, boolean> = {};

    public set(startPosition: number, result: boolean) {
        this.memo[startPosition] = result;
    }

    public get(startPosition: number): boolean | null {
        return this.memo[startPosition] ?? null;
    }
}

const canJumpWithStartPosition = (
    startPosition: number,
    nums: number[],
    cacher: JumpCacher
) => {
    const cachedResult = cacher.get(startPosition);
    if (cachedResult !== null) return cachedResult as boolean;

    if (nums.length === 1) return true;
    if (startPosition >= nums.length - 1) return true;

    if (nums[startPosition] === 0 && startPosition !== nums.length - 1)
        return false;

    for (
        let i = nums[startPosition] + startPosition;
        i > startPosition;
        i -= 1
    ) {
        const jumpResult = canJumpWithStartPosition(i, nums, cacher);
        if (jumpResult) return true;
        cacher.set(startPosition, jumpResult);
    }

    return false;
};

export const canJump = (nums: number[]) =>
    canJumpWithStartPosition(0, nums, new JumpCacher());
