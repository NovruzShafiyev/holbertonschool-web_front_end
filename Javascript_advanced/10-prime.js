const countPrimeNumbers = () => {
    const isPrime = num => {
        for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    };

    let count = 0;
    for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
};

const startTime = performance.now();
for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}
const endTime = performance.now();

const executionTime = endTime - startTime;
console.log(`Execution time of calculating prime numbers 100 times was ${executionTime} milliseconds.`);