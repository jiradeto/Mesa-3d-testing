#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

vec2 ballSpeedVec = vec2(25., 25.);
float radius = 20.;

void main( void ) {

	vec2 ballCoord = vec2(150. + ballSpeedVec.x * time, 250. + ballSpeedVec.y * time);

	vec3 color;
	if (gl_FragCoord.y <= 40.*sin(.025*gl_FragCoord.x) + 150.) {
		color = vec3(0., 0., 1.);
	}
	
	if(pow(gl_FragCoord.x - ballCoord.x, 2.) + pow(gl_FragCoord.y - ballCoord.y, 2.) <= pow(radius, 2.)) {
		color = vec3(1., 0., 0.);
	}
	
	if (ballCoord.y <= radius)
		ballSpeedVec.y = abs(ballSpeedVec.y);
	if (ballCoord.y >= resolution.y - radius)
		ballSpeedVec.y = -abs(ballSpeedVec.y);

	_GLF_color = vec4( color, 1.0 );

}