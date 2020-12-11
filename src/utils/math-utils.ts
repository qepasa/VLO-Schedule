
// NOTE(pawelp): using 'number' here is okay since we're not expecting 
// arguments larger than sqrt(2^53-1) (Number.MAX_SAFE_INTEGER). In reality we're expecting ~thousands here at any time?


function gcd(x: number, y: number): number {
    if (y > x) {
        return gcd(y, x);
    }
    if (y == 0) {
        return x;
    }
    return gcd(y, x % y);
}

export function lcm(an: number[]): number {
    if (an.length == 0) { throw Error('You need to pass at least one number!'); }
    if (an.length == 1) return an[0];
    if (an.length == 2) return (an[0] * an[1]) / gcd(an[0], an[1]);

    const last = an.pop();
    const lcm_rec = lcm(an);
    return (last! * lcm_rec) / gcd(last!, lcm_rec);
}