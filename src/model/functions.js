
export function calculateOneRepMax(weight, reps) {
    return Math.round(weight * (1 + (reps / 30)))
}