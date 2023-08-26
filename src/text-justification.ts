const getSeveralSpaces = (amountOfSpaces: number): string =>
  ' '.repeat(amountOfSpaces);

const getJustifiedLine = (words: string[], maxWidth: number): string => {
  const word = words[0];
  const thumbsOfLine = words.length - 1;
  const spacesToFill = maxWidth - words.join('').length;
  const thumbToSpaceRatio = spacesToFill / thumbsOfLine;
  const maxSpacesInOneThumb = Math.ceil(thumbToSpaceRatio);

  if (words.length === 0) return '';

  if (thumbsOfLine === 0)
    return word + getSeveralSpaces(maxWidth - word.length);

  if (Number.isInteger(thumbToSpaceRatio))
    return words.join(getSeveralSpaces(thumbToSpaceRatio));

  return (
    word +
    getSeveralSpaces(maxSpacesInOneThumb) +
    getJustifiedLine(
      words.slice(1),
      maxWidth - maxSpacesInOneThumb - word.length
    )
  );
};

export const fullJustify = (words: string[], maxWidth: number) => {
  const result: string[] = [];
  let currentLine = '';

  words.forEach(word => {
    const wordWithSpace = currentLine.length === 0 ? word : ' ' + word;
    if ((currentLine + wordWithSpace).length <= maxWidth) {
      currentLine += wordWithSpace;
      currentLine = currentLine.trim();
    } else {
      result.push(getJustifiedLine(currentLine.split(' '), maxWidth));
      currentLine = wordWithSpace;
      currentLine = currentLine.trim();
    }
  });

  result.push(currentLine + getSeveralSpaces(maxWidth - currentLine.length))

  return result;
};
