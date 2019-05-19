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
	if(_GLF_color.xy - float(int(_GLF_color.xy)) != vec2(0.))
		ballSpeedVec = (_GLF_color.xy - float(int(_GLF_color.xy))) * 1000.;
	vec2 ballCoord = vec2(150., 250.) + ballSpeedVec * time;

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

	_GLF_color = vec4( color.xy + ballSpeedVec/1000., color.z, 1.0 );

}