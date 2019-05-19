#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

uniform float time;
uniform vec2 resolution;

void main() {
	vec2 uv = (2. * gl_FragCoord.xy - resolution) / resolution.y;
	vec3 col = vec3(0.);

	float l = 2. * exp(-length(uv) * 3. * log(length(uv)));
	float a = 2. * atan(uv.x, uv.y);
	float d = abs(cos(time + l + a));
	col += .09 / d;
	col *= .5 + .5 * cos(time + d * 2. + l / 5. + vec3(23, 21, 0));
	if (mod(gl_FragCoord.y, 2.0) > 1.0) {
		col = vec3(0.);
	}
	
	_GLF_color = vec4(col, 1.);
}