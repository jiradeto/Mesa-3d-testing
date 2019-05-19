




uniform float time;
uniform vec2 resolution;

void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy );

	float color = 0.0;
	
	for (float i=0.; i<3.; i+=0.53) {
		color += sin(time/7. * i + position.x * 3.2);
		color *= cos(position.y * i - time/3.31);
		color += fract(color);
	}

	gl_FragColor = vec4( vec3(color), color );

}