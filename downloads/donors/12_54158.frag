

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;


float rect(in vec2 st, in vec2 size){
	size = 0.25-size*0.25;
    vec2 uv = step(size,st*(1.0-st));
	return uv.x*uv.y;
}

void main( void ) {
	
	vec2 pos = gl_FragCoord.xy / resolution;
		
	//vec3 rect = drawRect(pos, vec4(0.1, 0.1, 0.5, 0.5), vec3(1.0, 0.0, 0.0));	

	//vec3 rect2 = drawRect(pos, vec4(0.5, 0.5, 0.2, 0.2), vec3(0.0, 0.0, 1.0));		

	//vec3 res = rect + rect2;
	
	//gl_FragColor = vec4(res, 1.0);
	
	
	
	gl_FragColor = vec4(rect(pos, vec2(0.1, 0.1)));
}