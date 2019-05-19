




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy);

	float color = 0.0 + mod(position.x * 2.0, 1.0);
	
	if ((position.x + sin(position.y * 2.0 + cos(time / 5.0) + time * 5.0) * 0.05) > 0.5) {
		color = 0.0;
	} else {
		color = 1.0;
	}
	

	gl_FragColor = vec4( vec3(color, color, color), 1.0 );

}