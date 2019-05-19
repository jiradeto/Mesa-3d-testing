





uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;



void main(void) {

	vec2 pos = gl_FragCoord.xy/resolution;
	
	gl_FragColor = vec4(pos.x * abs(0.9 * sin(time)),
			    0.5 * mouse.y,
			    pos.y * abs(0.8 * cos(time)),
			    1.0);
}