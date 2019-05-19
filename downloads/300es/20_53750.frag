#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy ) + mouse / 4.0;

	float color = 0.0;
	color += sin( position.x * cos( time / 15.0 ) * 10.0 ) + cos( position.y * cos( 15.0 ) * 10.0 );
	color += sin( position.y * sin( time / 10.0 ) * 10.0 ) + cos( position.x * sin(  25.0 ) * 40.0 );
	color += sin( position.x * sin( time / 5.0 ) * 00.0 ) + sin( position.y * sin(  35.0 ) * 80.0 );
	color *= sin( time / 10.0 ) * 0.5;

	_GLF_color = vec4( vec3( color, color * 0.5, sin( color +  3.0 ) * 0.75 ), 1.0 );

}