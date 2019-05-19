

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

float rchar(vec2 outer, vec2 inner) {
	//return float(rand(floor(inner * 2.0) + outer) > 0.9);
	
	vec2 seed = floor(inner * 4.0) + outer.y;
	if (rand(vec2(outer.y, 23.0)) > 0.98) {
		seed += floor((time + rand(vec2(outer.y, 49.0))) * 3.0);
	}
	
	return float(rand(seed) > 0.5);
}

void main( void ) {

	vec2 position = gl_FragCoord.xy / resolution.xy;
	//position.y /= resolution.x / resolution.y;

	float rx = gl_FragCoord.x / 2.0;
	float mx = 5.0*fract(position.x * 400.0);
	
	if (mx >2.0) {
		gl_FragColor = vec4(0.0);
	} else {
        	float x = floor(rx);
		float ry = position.y*600.0 + rand(vec2(x, x * 13.0)) * 100000.0 + time * rand(vec2(x, 23.0)) * 120.0;
		float my = mod(ry, 15.0);
		if (my > 12.0) {
			gl_FragColor = vec4(0.0);
		} else {
		
			float y = floor(ry / 15.0);
			
			float b = rchar(vec2(rx, floor((ry) / 15.0)), vec2(mx, my) / 12.0);
			float col = max(mod(-y, 24.0) - 4.0, 0.0) / 20.0;
			vec3 c = col < 0.8 ? vec3(0.0, col / 0.8, 0.0) : mix(vec3(0.0, 1.0, 0.0), vec3(1.0), (col - 0.8) / 0.2);
			
			gl_FragColor = vec4(c * b, 1.0);
		}
	}
}