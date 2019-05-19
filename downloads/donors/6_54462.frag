




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy );
	vec2 ballCoord = vec2(150., 250.);

	vec3 color;
	if (gl_FragCoord.y <= 40.*sin(.025*gl_FragCoord.x) + 150.) {
		color = vec3(0., 0., 1.);
	}
	
	if(distance(gl_FragCoord.xy, ballCoord.xy) <= 20.) {
		color = vec3(1., 0., 0.);
	}

	gl_FragColor = vec4( color, 1.0 );

}