export interface AnimatedCounterContent {
    counterItems: {value: number, suffix: string, label: string}[]
}

export const animatedCounter: AnimatedCounterContent = {
    counterItems: [
        {value: 10, suffix: "+", label: "Years of Experience"},
        {value: 100, suffix: "+", label: "Satisfied Clients"},
        {value: 108, suffix: "+", label: "Completed Projects"},
        {value: 90, suffix: "%", label: "Client Retention Rate"},
    ]
}

export default animatedCounter;