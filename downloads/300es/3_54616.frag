#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {
	vec3 result;
	vec2 pos = gl_FragCoord.xy;

	vec2 _pos = pos - (10.0 * floor(pos / 10.0));

	if(_pos.x < 0.5 || _pos.y < 0.5) {
		result = vec3(0,0,0);
	} else {
		result = vec3(1,0,0);
	}
		
	_GLF_color = vec4(result, 0.2);

}