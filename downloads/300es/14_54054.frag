#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;


float rnd(float x) {
	return fract(sin(x * 9.0)*1.0);
}

void main( void ) {

	vec2 st = gl_FragCoord.xy / resolution;
	
	_GLF_color = vec4( rnd(st.x * st.y),rnd(st.x * st.y * 0.4),rnd(st.x * st.y* 0.3), 1.0 );

}