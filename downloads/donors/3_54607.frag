




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {	

	vec2 pos = (gl_FragCoord.xy * 2.0 - resolution) /  max(resolution.x,resolution.y);
	
	float color = 0.01 / length(vec2 (pos.x, pos.x * sin(pos.x * pos.x * 10.0) * 0.3) - pos);
	gl_FragColor = vec4(color,color,color,1.0);
							  
	
}