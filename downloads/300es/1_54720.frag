#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;


float hash21(vec2 p) {
    return fract(4e5 * sin(dot(p, vec2(45.64, 575.45))));
}

vec2 hash22(vec2 p) {
    float k = hash21(p);
    return vec2(k, hash21(p + k));
}

vec3 hash33(vec3 p) {
    vec2 k = hash22(fract(p.xy));
    return vec3(k.x, hash21(fract(vec2(p.x, k.x * k.y))), fract(k.y));
}

void main() {
	vec2 uv = (2. * gl_FragCoord.xy - resolution) / resolution.y;
	vec3 col = vec3(0.);
	
	vec3 h = hash33(uv.xyx);
	col += h.z;
	
	_GLF_color = vec4(col, 1.);
}