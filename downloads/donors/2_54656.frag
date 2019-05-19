


uniform vec2 resolution;

void main( void ) {

	vec2 pos = (gl_FragCoord.xy - resolution.xy) / resolution.y;
	pos = pos * 10.0;
	pos = fract(pos);
	
	gl_FragColor = vec4(pos, 0.1, 1.0);

}