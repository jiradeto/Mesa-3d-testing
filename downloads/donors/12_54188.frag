


 

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	float t = cos(mod(time, 200.));
	vec3 color = vec3(0.);
	
	color.x = tan(t);
	color.y = sin(cos(-t));
	color.z = tan(-t);
	
	gl_FragColor = vec4(color, 1.);
}