export const isIsomorphic = (s: string, t: string): boolean => {
  const sToTMapping: Record<string, string> = {};
  const usedChars: string[] = [];

  let result = true;

  for (let i = 0; i < s.length; i += 1) {
    if (!sToTMapping[s[i]] && !usedChars.includes(t[i])) {
      sToTMapping[s[i]] = t[i];
      usedChars.push(t[i])
    }

    if (sToTMapping[s[i]] !== t[i]) result = false;
  }

  return result;
};
