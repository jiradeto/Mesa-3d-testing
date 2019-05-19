


uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

vec3 eye(float c){
	c *= 6.;
	c -= 4.;
	float r = exp2(-pow(c, 2.0)) * 0.9 + exp2(-pow((c + 3.0) * 2.0, 2.0)) * 0.3;
	float g = exp2(-pow((c + 1.0),2.0));
	float b = exp2(-pow((c + 2.145) * 1.1, 2.0));
	
	return vec3(r, g, b);
}

void main( void ) {

	vec2 position = gl_FragCoord.xy / resolution.xy;
	vec2 rosition = vec2(length(position), atan(position.x, position.y));
	position = mix(position, rosition, cos(time+rosition.y*12.)+2.5*cos(0.25*time-position.y*40.)*cos(0.25*time-position.x*40.));
	vec3 color = vec3(0.0);
	     color = eye(position.x);
	     color = min(color, eye(position.y))+max(color, eye(position.y));
	color *= 0.5;

	gl_FragColor = vec4(color, 1.0 );

}