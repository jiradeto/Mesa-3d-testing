




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 pos = (gl_FragCoord.xy - resolution.xy / 2.0) / resolution.y;
	pos = pos * 10.0;
	pos = fract(pos);
	
	gl_FragColor = vec4(pos, 0.0, 1.0);

}