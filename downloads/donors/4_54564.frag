




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {
	
	float col = floor(mod(gl_FragCoord.x, 64.0) / 32.0 + time * .0);
	col = mod(col + floor(mod(gl_FragCoord.y, 128.0) / 64.0 + time/2.0), 2.0);
	
	gl_FragColor = col * vec4(sin(time), sin(time + (3.14159265 * 3.1 / 3.0)), sin(time + (3.14159265 * 4.0 / 3.0)), 1.0);
}