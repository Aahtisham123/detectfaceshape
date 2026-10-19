/** "a heart", "an oval", "an inverted triangle". */
export const aOrAn = (word: string) => `${/^[aeiou]/i.test(word) ? "an" : "a"} ${word}`;
