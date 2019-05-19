




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {
	vec3 result = vec3(0,0,0);
	vec4 pos = vec4(mouse/resolution, 0, 1);
	pos = pos - 10.0 * floor(pos / 10.0);
	
	//vec2 m = mouse - 10.0 * floor(mouse / 10.0);
	
	//if(m.x - pos.x < 0.5 && m.y - pos.y < 0.5) {
	//	result = vec3(1,1,1);	
	//} else 
	if(pos.x <= 1.0 || pos.y <= 1.0) {
		result = vec3(1,0,0);
	} else if(pos.x <= 2.0 || pos.y <= 2.0) {
		result = vec3(1,1,0);
	}
		
	gl_FragColor = vec4(result, 1);

}