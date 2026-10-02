/**
 * Functions for treating Morse strings
 */
//% block="Morse" weight=0 color=#000000 icon="\uf012"
namespace Morse {
    //% block="create Morse string %text"
    //% blockId=morse_create_string text.defl=".-"
    export function createMorseString(text: string): MorseString {
        return new MorseString(text);
    }
}

class MorseString {
    private value: string;
    constructor(value: string) {
        for (let i: number = 0; i < value.length; i++) {
            if (value[i] !== "." && value[i] !== "-" && value[i] !== "/" && value[i] !== " ") {
                console.error("Invalid character.");
                return;
            }
        }
        this.value = value;
    }

    //% block="convert %this to string" blockNamespace=Morse
    //% this.shadow=morse_create_string
    public toString(): string {
        return this.value;
    }
}