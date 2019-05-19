

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {
	
	vec2 pos = gl_FragCoord.xy / resolution;
	
	float width = 0.1;

	float paint = step(pos.x, width);
	
	paint += step(pos.y, width);
	
	paint += step(1.0 - width, pos.x);
	
	paint += step(1.0 -width, pos.y);
	
	
	gl_FragColor = vec4(paint, pos.x, pos.y, 1.0);
}