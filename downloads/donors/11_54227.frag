





uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float rand(vec2 co) {
	return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453) * 2.;
}

float rand(vec3 cow) {
	return fract(sin(dot(cow.xyz, vec3(12.9797, 78.233, 89.1146))) * 43758.5453) * 6.;
}

float grad(vec2 hash, vec2 pos) {
	float h = rand(hash);
	float val = (h >= 1. ? pos.x : pos.y);
	return (h > floor(h + 0.5) ? val : -val);
}

float grad(vec3 hash, vec3 pos) {
	float h = rand(hash);
	float a = pos.x;
	float b = pos.y;
	if (h >= 4.) {a = pos.y; b = pos.z;}
	else if (h >= 2.) {a = pos.x; b = pos.z;}
	return (h > floor(h + 0.5) ? a : -a) + (2. * h > floor((2. * h) + 0.5) ? b : -b);
}

float fade (float t) {
	return t * t * t * (t * (t * 6. - 15.) + 10.);
}

// ahaha
float laz (float t, float a, float b) {
	return mix(a, b, t);
}

float perlin (vec2 pos) {
	
	vec2 fPos = vec2(floor(pos.x), floor(pos.y));
	vec2 mPos = pos - fPos;
	float a = fade(mPos.x);
	float b = fade(mPos.y);
	return laz(b, laz(a, grad(fPos, 	     mPos), 		 grad(fPos + vec2(1, 0), mPos - vec2(1, 0))), 
		      laz(a, grad(fPos + vec2(0, 1), mPos - vec2(0, 1)), grad(fPos + vec2(1, 1), mPos - vec2(1, 1))));
}


float perlin3 (vec2 pos, float evolution) {
	vec3 tPos = vec3(pos.xy, evolution);
	vec3 fPos = vec3(floor(tPos.x), floor(tPos.y), floor(tPos.z));
	vec3 mPos = tPos - fPos;
	float a = fade(mPos.x);
	float b = fade(mPos.y);
	float c = fade(mPos.z);
	return mix(mix(mix(grad(fPos, mPos), grad(fPos + vec3(1, 0, 0), mPos - vec3(1, 0, 0)), a),
		       mix(grad(fPos + vec3(0, 1, 0), mPos - vec3(0, 1, 0)), grad(fPos + vec3(1, 1, 0), mPos - vec3(1, 1, 0)), a), b),
		   
		   mix(mix(grad(fPos + vec3(0, 0, 1), mPos - vec3(0, 0, 1)), grad(fPos + vec3(1, 0, 1), mPos - vec3(1, 0, 1)), a),
		       mix(grad(fPos + vec3(0, 1, 1), mPos - vec3(0, 1, 1)), grad(fPos + vec3(1, 1, 1), mPos - vec3(1, 1, 1)), a), b), c);
		       
}
float lines (vec2 pos, float scale) {
	return pow(sin(pos.y * scale), 0.04);
}

void main( void ) {
float ss = 16.0*sin(time*0.9);
	vec2 gg = gl_FragCoord.xy;
	gg = ceil(gg / ss) * ss;	

	vec2 position = ( gg / resolution.xy ) + mouse / 1.4;

	gl_FragColor = vec4(lines(position + (perlin3(position * 4., time / 16.) + 0.5), 32.)) / 2.;

}