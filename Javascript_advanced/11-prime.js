const countPrimeNumbers = (start, end, count = 0) => {
    const isPrime = num => {
        for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    };

    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
};

const calculatePrimesAsync = (iterations, count = 0, currentIteration = 1) => {
    if (currentIteration > iterations) {
        const endTime = performance.now();
        const executionTime = endTime - startTime;
        console.log(`Execution time of calculating prime numbers ${iterations} times was ${executionTime} milliseconds.`);
        return;
    }

    const start = 2 + (currentIteration - 1) * 100;
    const end = start + 99;

    count += countPrimeNumbers(start, end);

    setTimeout(() => {
        calculatePrimesAsync(iterations, count, currentIteration + 1);
    }, 0);
};

const startTime = performance.now();
calculatePrimesAsync(100);
