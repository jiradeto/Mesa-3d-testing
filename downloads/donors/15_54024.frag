




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy );
	
	float y = sin(time*(position.y))*4.0;
	float x = sin(time*(position.x))*4.0;
	
	float d = distance(vec2(y,1.0),vec2(x,1.0));
	
	gl_FragColor = vec4(x+d/y-d)* cos(time-d)/sin(time+d);

}