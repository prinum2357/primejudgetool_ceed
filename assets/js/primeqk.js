// modPow
export function modPow(a, n, mod) {
    let result = 1n;
    while(n > 0) {
        if(n & 1n) {
            result = (result * a) % mod
        }

        a = (a * a) % mod;
        n >>= 1n
    }

    return result;
}

// isPrime
export function isPrime(n, k=50) {
    k = BigInt(k);
    if(n == 2n) {
        return true;
    }

    if(n <= 1n || n % 2n == 0) {
        return false;
    }

    let d = n - 1n;
    let s = 0n;

    while(d % 2n != 0) {
        d /= 2n;
        s += 1n
    }

    // n < (64bit)
    if(n < 2n ** 64n) {
        let aList = [2n, 325n, 9375n, 28178n, 450775n, 9780504n, 1795265022n];

        for(let a of aList) {
            if(modPow(a, d, n) == 1n) {
                continue;
            }

            for(let j = 0n; j < s; j++) {
                if (modPow(a, modPow(2n, j, n) * d, n) == n - 1n) {
                    continue;
                }
            }

            return false;
        }

    // n >= (64bit)
    } else {

        for(let i = 0n; i < k; i++) {
            let a = BigInt(Math.floor(Math.random() * safeInteger));

            if(modPow(a, d, n) == 1n) {
                continue;
            }

            for(let j = 0n; j < s; j++) {
                if (modPow(a, modPow(2n, j, n) * d, n) == n - 1n) {
                    continue;
                }
            }

            return false;
        }
    }

    return true;
}

// card2bigInt
export function card2bigInt(card) {
    card = card.replaceAll('A', '1')
               .replaceAll('T', '10')
               .replaceAll('J', '11')
               .replaceAll('Q', '12')
               .replaceAll('K', '13')
               .replaceAll('a', '1')
               .replaceAll('t', '10')
               .replaceAll('j', '11')
               .replaceAll('q', '12')
               .replaceAll('k', '13')

    return BigInt(card)
}