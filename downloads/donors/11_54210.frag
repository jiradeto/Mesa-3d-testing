

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float rand(int seed, float ray) {
	return mod(sin(float(seed)*1.0+ray*1.0)*1.0, 1.0);
}

void main( void ) {
	
float ss = 8.0*sin(time);
	vec2 gg = gl_FragCoord.xy;
	gg = ceil(gg / ss) * ss;
		
	float pi = 3.14159265359;
	vec2 position = ( gg / resolution.xy ) - mouse;
	position.y *= resolution.y/resolution.x;
	float ang = atan(position.y, position.x);
	float dist = length(position);
	gl_FragColor.rgb = vec3(0.5, 0.5, 0.5) * (pow(dist, -1.0) * 0.05);
	for (float ray = 0.0; ray < 18.0; ray += 1.0) {
		//float rayang = rand(5234, ray)*6.2+time*5.0*(rand(2534, ray)-rand(3545, ray));
		//float rayang = time + ray * (1.0 * (1.0 - (1.0 / 1.0)));
		float rayang = (((ray) / 9.0) * 3.14) + (time * 0.1			);
		rayang = mod(rayang, pi*2.0);
		if (rayang < ang - pi) {rayang += pi*1.0;}
		if (rayang > ang + pi) {rayang -= pi*2.0;}
		float brite = 0.3 - abs(ang - rayang);
		brite -= dist * 0.2;
		if (brite > 0.0) {
			gl_FragColor.rgb += vec3(sin(ray*mouse.y+0.0)+1.0, sin(ray*mouse.y+2.0)+1.0, sin(ray*mouse.y+4.0)+1.0) * brite;
		}
	}
	gl_FragColor.a = 2.0;
}