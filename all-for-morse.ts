class MorseString {
    private text: string;
    constructor(text: string) {
        for (let i: number = 0; i < text.length; i++) {
            if (text[i] !== "." && text[i] !== "-" && text[i] !== "/" && text[i] !== " ") {
                console.error("Invalid character.");
                return;
            }
        }
        this.text = text;
    }
    public get contents(): string {
        return this.text;
    }
}

/**
 * Functions for treating Morse strings
 */
//% block="Morse" weight=0 color=#000000 icon="\uf012"
namespace Morse {
    //% block="create Morse string %text"
    export function createMorseString(text: MorseString): string {
        return text.contents
    }
}