




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main() {
	
	vec2 uv = gl_FragCoord.xy / resolution;
	vec3 col = vec3(0.);
	
	
	vec3 a = vec3(1, 0, 0);
	vec3 b = vec3(0, 1, 0);
	vec3 c = vec3(0, 0, 1);
	
	if (uv.x < .5) {
		float t = uv.x;
		col = mix(a, b, t * 2.);
	} else {
		float t = -.5 + uv.x;
		col = mix(b, c, t * 2.);
	}
	gl_FragColor = vec4(col, 1.);
}