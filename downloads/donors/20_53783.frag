




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define MARCH for (int i = 0; i < 128; i++) p = ro + rd * (t += 0.5 * map(p));

mat2 rotate(float a) {
	float c = cos(a);
	float s = sin(a);
	return mat2(c, s, -s, c);
}

float mahattan(vec2 p) {
	p = abs(p);
	return max(p.x, p.y);
}

float box(vec3 p, vec2 b) {
	float q = mahattan(p.xz) - b.x;
	return length(vec2(q, p.y)) - b.y;
}

float map(vec3 p) {
	float d = 1000.;	
	
	p.xz = mod(p.xz, 4.) - 2.;
	float s = 1.;
	for (int i = 0; i < 4; i++) {
		p.xz = abs(p.xz) - s;
		p.xz *= rotate(time / 2.);	
		p.y = mod(p.y, 2.) - 1.;
		s *= 1.05;
	}
	
	
		
	float m = box(p, vec2(1., .1));
	d = min(d, m);
	
	return  d;
}

void main() {
	
	
	vec2 uv = (2. * gl_FragCoord.xy - resolution) / resolution.y;
	vec3 col = vec3(0.);

	vec3 ro = vec3(0, sin(time), time);
	vec3 rd = vec3(uv, 1);
	vec3 p = vec3(0);
	
	float t = 0.;
	MARCH;
	
	col += 1. / (1. + t * t * .06);
	gl_FragColor = vec4(col, 1.);
}