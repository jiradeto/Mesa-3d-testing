

uniform float time;
uniform vec2 resolution;

void main( void ) {
	vec2 uv = gl_FragCoord.xy / resolution.xy;
	uv = uv * 2.0 - 1.;
	uv.x *= resolution.x / resolution.y;  

	vec3 color = vec3(0.0);
			
	gl_FragColor = vec4(color, 1.0);
}