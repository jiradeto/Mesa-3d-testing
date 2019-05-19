




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec3 result = vec3(0,0,0);
	vec4 pos = gl_FragCoord;
	
	if(pos.x >= (resolution.x / 2.0 + resolution.x * (fract(dot(floor(pos.xy), vec2(0.5, 0.75 * floor(pos.y)))) - 0.5))){
		result = vec3(1,0,0);
	}
		
	gl_FragColor = vec4(result, 1);

}