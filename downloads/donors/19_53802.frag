




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define PI 3.1415926535897932384626433832795


mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

void main( void ) {

	vec2 pos = (gl_FragCoord.xy / resolution.xy);
	//Make the position go between -0.5 and -0.59
	pos = vec2(0.5) - pos;
	pos = rotate2d(-22.0*PI/180.)*pos;
	
	//convert to spatial coordiante system
	float r = length(pos)*2.0; //(so now r is between 1 and -1)
	float a = atan(pos.y, pos.x); //the angel from the x axis
	a = a + 180.*PI/180.0;
	vec3 color = vec3(1.0 - step(0.4, r));
	
	float angle = 60.0 * (cos(time*20.0) + 1.0)/2.0;
	color *= step(angle, a*180./PI);
	color *= vec3(1.0, 1.0, 0.0);
	
	gl_FragColor = vec4(color, 1.0);
}