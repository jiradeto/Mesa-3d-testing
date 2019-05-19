




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

struct Ray {
	vec3 position;
	vec3 forward;
};
struct Camera {
	vec3 position;
	vec3 forward;
	vec3 up;
	vec3 side;
};
void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy );

	gl_FragColor = vec4( position, 0., 4.);

}