#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float random(vec2 uv) {
	return fract(456455.6 * sin(dot(uv, vec2(45.54, 878.56))));
}

vec2 random2D(vec2 uv) {
	return vec2(random(uv), random(uv + random(uv)));
}


#define hash(u) 2.0 * random2D(u) - 1.0
float gnoise(vec2 uv) {
    vec2 i = floor(uv);
    vec2 f = fract(uv);
    vec2 u = f * f  * (3.0 - 2.0 * f);
    return mix(
        mix(dot(hash(i + vec2(0.0, 0.0)), f - vec2(0.0, 0.0)), 
            dot(hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x), 
        mix(dot(hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)), 
            dot(hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
}

float gfbm(vec2 uv) {
    float t = 0.0;
    float s = 0.0;
    float a = 1.0;
    float f = 1.0;
    for (int i = 0; i < 8; i++) {
        t += a;
        s += gnoise(uv * f) * a;
        a *= 0.5;
        f *= 2.0;
    }
    return s / t;
}

void main() {
	
	vec2 uv = (2. * gl_FragCoord.xy - resolution) / resolution.y;
	vec3 col = vec3(0.);
	
	col += .01 / abs(gfbm(uv + gfbm(uv + time / 10.)));
	
	_GLF_color = vec4(col, 1.);
}