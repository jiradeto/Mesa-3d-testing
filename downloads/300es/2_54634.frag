#version 300 es 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;
#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform vec2 mouse;

void main( void ) {
	vec3 result;
	vec2 pos = gl_FragCoord.xy - mouse.xy;

	vec2 _pos = pos - (10.0 * floor(pos / 10.0));

	if(_pos.x < 0.5 || _pos.y < 0.5) {
		result = vec3(0,0,0);
	} else {
		result = vec3(1,0,0);
	}
		
	gl_FragColor = vec4(result, 1);

}