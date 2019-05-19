// Author: @samloeschen
// Title: paint archipelago

// originally made this in like 2017, updated to fix some chonky noise artifacts



uniform vec2 resolution;
uniform vec2 u_mouse;
uniform float time;

float hash(float n) { return fract(sin(n) * 1e4); }
float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }

float noise(float x) {
	float i = floor(x);
	float f = fract(x);
	float u = f * f * (3.0 - 2.0 * f);
	return mix(hash(i), hash(i + 1.0), u);
}

float noise(vec2 x) {
	vec2 i = floor(x);
	vec2 f = fract(x);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	vec2 u = f * f * (3.0 - 2.0 * f);
	return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

#define octaves 14
float fbm (in vec2 p) {

    float value = 0.0;
    float freq = 1.0;
    float amp = 0.5;    

    for (int i = 0; i < octaves; i++) {
        value += amp * (noise((p - vec2(1.0)) * freq));
        freq *= 1.9;
        amp *= 0.6;
    }
    return value;
}

float pattern(in vec2 p) {
    vec2 offset = vec2(-0.5);

    vec2 aPos = vec2(sin(time * 0.005), sin(time * 0.01)) * 6.;
    vec2 aScale = vec2(3.0); //base fbm scale
    float a = fbm(p * aScale + aPos);

    vec2 bPos = vec2(sin(time * 0.01), sin(time * 0.01)) * 1.;
    vec2 bScale = vec2(0.6);
    float b = fbm((p + a) * bScale + bPos);

    vec2 cPos = vec2(-0.6, -0.5) + vec2(sin(-time * 0.001), sin(time * 0.01)) * 2.;
    vec2 cScale = vec2(3.2);
    float c = fbm((p + b) * cScale + cPos);
    return c;
}

//iq palette
vec3 palette(in float t) {
    vec3 a = vec3(0.5, 0.5, 0.5);
    vec3 b = vec3(0.45, 0.25, 0.14);
    vec3 c = vec3(1.0 ,1.0, 1.0);
    vec3 d = vec3(0.0, 0.1, 0.2);
    return a + b * cos(6.28318 * (c * t + d));
}

void main() {
    vec2 p = gl_FragCoord.xy / resolution.xy;
    p.x *= resolution.x / resolution.y;

    float value = pow(pattern(p), 2.); // more "islands"

    vec3 color = palette(value);
	

    gl_FragColor = vec4(color, 1.0);
}