




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;


void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy ) + mouse / 4.0;

	float result = 0.0;
	
	float a = resolution.x / 50.0;
	float b = 2.0;
	float mod = a - (b * floor(a/b));
	
	float color = 0.0;
		
	if (mod != 0.0) {
		color = 1.0;
	}

	gl_FragColor = vec4( vec3(color, color, color), 1.0 );

}