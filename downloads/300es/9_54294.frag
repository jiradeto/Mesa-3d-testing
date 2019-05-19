#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;





uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float random(vec2 st) {
	return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

void main( void ) {

	vec2 p = gl_FragCoord.xy / resolution.xy;
	
	
	float x = p.x;
	x += ((mod(mod(floor(p.y * 10.0), 10.0) * 19.0, 11.0) - 5.0) * -time) * 0.0125;
	x = floor(x * 100.0);
	
	float y = floor(p.y * 10.0);
	
	float v = random(vec2(x, y));
	
	v = floor(v * 3.0);
	
	_GLF_color = vec4(vec3(v), 1.0);

}