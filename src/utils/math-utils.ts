
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



/*!
 * Get the contrasting color for any hex color
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * Derived from work by Brian Suda, https://24ways.org/2010/calculating-color-contrast/
 * @param  {String} A hexcolor value
 * @return {String} The contrasting color (black or white)
 */
export function getContrast (hexcolor: string){

	// If a leading # is provided, remove it
	if (hexcolor.slice(0, 1) === '#') {
		hexcolor = hexcolor.slice(1);
	}

	// If a three-character hexcode, make six-character
	if (hexcolor.length === 3) {
		hexcolor = hexcolor.split('').map(function (hex) {
			return hex + hex;
		}).join('');
	}

	// Convert to RGB value
	var r = parseInt(hexcolor.substr(0,2),16);
	var g = parseInt(hexcolor.substr(2,2),16);
	var b = parseInt(hexcolor.substr(4,2),16);

	// Get YIQ ratio
	var yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

	// Check contrast
	return (yiq >= 70) ? 'black' : 'white';
};