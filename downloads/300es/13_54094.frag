#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 resolution;

void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy );

	float color = 0.0;
	
	for (float i=0.; i<3.; i+=0.53) {
		color += sin(time/7. * i + position.x * 3.2);
		color *= cos(position.y * i - time/3.31);
		color += fract(color);
	}

	_GLF_color = vec4( vec3(color), color );

}