




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define FOR_COUNT 50

void main() {
	vec2 pos = (gl_FragCoord.xy / vec2(min(resolution.x, resolution.y)));
	gl_FragColor = vec4(0.1);
	
	for(int i = 0; i < FOR_COUNT; i++) {
		float tmp0 = float(i) / float(FOR_COUNT) * 6.25 + time;
		
		if(distance(pos, vec2(cos(tmp0), sin(tmp0) * sin(time)) * 0.25 + vec2(1.0, 0.5)) < 0.05) {
			gl_FragColor = vec4(pos.x, pos.y, pos.x, 1.0);
			break;
		}
	}
}