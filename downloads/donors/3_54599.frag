




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main( void ) {

	vec2 pos = (gl_FragCoord.xy - resolution.xy / 2.0) / gl_FragCoord.y;
	float col = rand(pos);
	gl_FragColor = vec4(col, col, col, 1.0);

}