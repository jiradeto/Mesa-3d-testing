




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec4 translation = vec4(time * 0.5, time, 0, 0);
	
	gl_FragColor = mod(translation + gl_FragCoord, 10.0);

}