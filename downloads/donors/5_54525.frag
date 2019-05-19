




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	float y = gl_FragCoord.y / resolution.y;
	
    vec4 white = vec4(1.0, 1.0, 1.0, 1.0);
    vec4 red = vec4(1.0, 0.0, 0.0, 1.0);
    vec4 blue = vec4(0.0, 0.0, 1.0, 1.0);
    vec4 green = vec4(0.0, 1.0, 0.0, 1.0);

    vec4 color;
    color = mix(white, red, smoothstep(0.0, 0.5, y));
    color = mix(color, blue, smoothstep(0.1, 1.0, y));
    gl_FragColor = color;

}