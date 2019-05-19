




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 position = gl_FragCoord.xy / resolution.xy;

	vec3 color = vec3(0.0);
	vec3 color1 = vec3(1.0 - position.y, 0.0, position.y);
	vec3 color2 = vec3(position.x, 1.0 - position.x, 0.0);
	
	color = normalize(max(color1, color2) * 2.0 - 1.0);

	gl_FragColor = vec4(color, 1.0 );

}