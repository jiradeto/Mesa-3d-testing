




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 p = ( gl_FragCoord.xy / resolution.xy );

	float color = sin(p.x)*time;

	gl_FragColor = vec4( vec3( sin(color*time), color * 0.5, sin( color + time / 3.0 ) * 0.75 ), 1.0 );

}