




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;


float rnd(float x) {
	return fract(sin(x * 9.0)*1.0);
}

void main( void ) {

	vec2 st = gl_FragCoord.xy / resolution;
	
	gl_FragColor = vec4( rnd(st.x * st.y),rnd(st.x * st.y * 0.4),rnd(st.x * st.y* 0.3), 1.0 );

}