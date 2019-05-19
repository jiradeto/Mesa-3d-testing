
////////////////////////////////////////
// For use with resolution set to 0.5 //
////////////////////////////////////////
uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 pos = gl_FragCoord.xy;
	
	float x = pos.x - (resolution.x/2.0);
	float y = pos.y - (resolution.y/2.0);
	
	vec3 color = vec3(sin((time*pos.x*100.0)/7500.0)/4.0+0.5);
	
	color += vec3(sin((time*pos.y*100.0)/7500.0)/4.0+0.5);
	
	if (mod(pos.x, 40.0) > 0.5 && mod(pos.y, 40.0) > 0.5)
		color = vec3(0.5);
	
	gl_FragColor = vec4( color, 1.0);
}