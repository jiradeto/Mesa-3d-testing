




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define remap(v, a, b, c, d) ((v - a) / (b - a) * (d - c))

// IQ cosine pallete -> coeffs: vec3(0, 0.333 * 6.28, 0.666 * 6.28) -> vec3(0, 2.093124, 4.18248)
#define HUE(h) (.5 + .5 * cos(h * 6.28 + vec3(0, 2.093124, 4.18248)))
void main() {
	
	vec2 uv = (2. * gl_FragCoord.xy - resolution) / resolution.y;
	vec3 col = vec3(0.);

	col += HUE(remap(uv.x, -1., 1., 0., 1.));
	
	
	gl_FragColor = vec4(col, 1.);	
	

}
