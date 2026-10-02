/**
 * Functions for treating Morse strings
 */
//% block="Morse" weight=0 color=#000000 icon="\uf012"
namespace Morse {
    
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
    public get text(): string {
        return this.value;
    }
}