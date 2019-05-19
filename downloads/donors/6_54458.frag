




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

vec2 ballSpeedVec = vec2(0., 0.);

float distanceBetween(vec2 firstDot, vec2 secondDot) {
	return sqrt(pow(firstDot.x - secondDot.x, 2.) + pow(firstDot.y - secondDot.y, 2.));
}

void main( void ) {
	
	vec2 position = gl_FragCoord.xy / resolution.xy;

	vec3 color;
	vec2 ballCoord = vec2(ballSpeedVec.x*time + 40., ballSpeedVec.y*time + 230.);
	
	if (gl_FragCoord.y <= 40.*sin(.05*gl_FragCoord.x) + 50.) {
		color = vec3(.0, .0, 1.0);
	}
	
	if (distanceBetween(ballCoord, gl_FragCoord.xy) <= 20.) {
		color = vec3(1., .0, .0);
	}

	gl_FragColor = vec4( color, 1.0 );

}