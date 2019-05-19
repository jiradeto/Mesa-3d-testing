




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {
	
	
	float amount = 1./10.;
	
	vec2 pos = ( gl_FragCoord.xy / resolution.xy );
	
	float thickness = sin(pos.y / 50.) + 0.02;
	
	vec3 color = vec3(0.97, 0.0, 0.25);
	
	float addition = pos.x * 2.5 + sin(time/2.0+pos.y)/3.0;
	
	if (mod(pos.y + addition, amount) <= thickness) {
		color = vec3(0, 0, 0);
	}
	
	gl_FragColor = vec4( color, 1.0);

}