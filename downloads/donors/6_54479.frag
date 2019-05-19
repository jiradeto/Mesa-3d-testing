




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float pi = acos(-1.);

void main( void ) {
	vec2 position = 1.*(gl_FragCoord.xy/2.+resolution/4.);
	
	float color = (cos(distance(position, resolution/2.) - 10.*time)+1.)/ 2.;
	
	gl_FragColor = vec4(1.0, color * .85, 0., 1.);
}