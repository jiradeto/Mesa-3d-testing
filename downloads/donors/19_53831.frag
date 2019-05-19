




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main( void ) {
	
	vec2 pos = gl_FragCoord.xy  / 200.0 + vec2(time, time) / 50.0;

	float a = sin(pos.x) + sin(2.0 * pos.x + 1.3) + sin(3.0 * pos.x - 3.315) + sin(4.0 * pos.x + 7.1) + sin(5.0 * pos.x - 3.4) + sin(6.0 * pos.x - 9.3) + sin(7.0 * pos.x + 6.1) + sin(8.0 * pos.x + 1.0);
	a += sin(pos.y) + sin(2.0 * pos.y + 25.1) + sin(3.0 * pos.y - 6.96) + sin(4.0 * pos.y + 7.54) + sin(5.0 * pos.y - 8.46) + sin(6.0 * pos.y - 19.3) + sin(7.0 * pos.y - 30.1) + sin(8.0 * pos.y - 4.0);
	
	gl_FragColor = vec4(vec3(a, a, a) * .2, 1.0);

}