
export const sum = (a: number, b: number) => {
    return a + b;
}

export const multiply = (a: number, b: number) => {
    return a * b;
}


export const splitIntoWords = (sent: string) => {
    const arrayOfWords = sent.toLowerCase().split(" ");
    const filteredArray = arrayOfWords.filter(word =>
        word !== "" && word !== "-");

    return filteredArray.map(word =>
        word.replace(".", "")
            .replace(",", "")
            .replace("!", "")
    )
}