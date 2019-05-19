




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy );
	vec3 colour = vec3(1.);
	

	gl_FragColor = vec4( colour, 1.0 );

}