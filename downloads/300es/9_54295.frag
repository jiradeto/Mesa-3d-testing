#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float dotLength(vec2 position) {
	return dot(position, position);
}

void main(void) {
	vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
	vec4 distColor = vec4(vec3(0.0), 1.0);
	float speed = time * 20.0;
	float circle = abs(sin(1.0 / dotLength(uv) * 3.0 + speed));
	distColor += vec4(vec3(circle, 0.0, circle / 2.0), 1.0);
	float gradation = smoothstep(1.0, 0.0, length(uv));
	distColor += vec4(gradation);
	gradation = smoothstep(0.0, 1.0, length(uv));
	distColor -= vec4(gradation, 0.0, 0.0, 1.0);
	_GLF_color = distColor;
}