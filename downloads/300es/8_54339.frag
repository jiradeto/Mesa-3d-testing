#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 p = (gl_FragCoord.xy / resolution.xy);

	vec3 color = vec3 (0.0);
	
	color.b = pow (1.0 - clamp (mod (abs(3.6 * p.y - sin (p.x * 12.0 + time * 4.5 + 1.0) - 2.0), 0.2) / 0.2, 0.0, 1.0), 4.0) >= 0.2 ? 1.0 : 0.0;
	color.g = pow (1.0 - clamp (mod (abs(3.0 * p.y - sin (p.x * 12.0 + time * 4.0 + 0.5) - 2.0), 0.2) / 0.2, 0.0, 1.0), 4.0) >= 0.2 ? 1.0 : 0.0;
	color.r = pow (1.0 - clamp (mod (abs(3.3 * p.y - sin (p.x * 12.0 + time * 3.5) - 2.0), 0.2) / 0.2, 0.0, 1.0), 4.0) >= 0.2 ? 1.0 : 0.0;
	
	_GLF_color = vec4( color, 1.0 );

}