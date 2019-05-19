




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	float ss = 8.0*sin(time);
	vec2 gg = gl_FragCoord.xy;
	gg = ceil(gg / ss) * ss;
	
	vec2 uv = ( gg / resolution.x) - 0.25;	
	
	uv.y = abs(uv.y);
	
	//uv.y += 0.005 * (1.0 + cos(time * 3.2));
	uv.y = max(0.08, uv.y);
	uv.x /= uv.y;
	
	
	uv.x += time;
	
	
	float color = mod(floor(uv.x) + floor(uv.y * 2.0), 2.0) + 0.5;
	float dist = sqrt(uv.y) * 1.0;
	color = color * max(0.1, min(1.0, dist * 1.3));
	
	gl_FragColor = vec4( color );

}