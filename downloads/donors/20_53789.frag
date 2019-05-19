




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main() {
	
	float c   = -floor(60.*time)/60.0;
	float r   = resolution.x;
	vec2  fc  = gl_FragCoord.xx;
	float div = 64.0;
	
	
	gl_FragColor = .6 + 0.59 * cos(0.4*time + 6.28 * (floor(div*fc.y / r)/div) + vec4(c, c*4.,c*2.0, 0));
}