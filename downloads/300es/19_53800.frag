#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define PI 3.1415926535897932384626433832795

vec2 random2(vec2 st){
    st = vec2( dot(st,vec2(127.1,311.7)),
              dot(st,vec2(269.5,183.3)) );
    return -1.0 + 2.0*fract(sin(st)*43758.5453123);
}

float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);

    vec2 u = f*f*(3.0-2.0*f);

    return mix( mix( dot( random2(i + vec2(0.0,0.0) ), f - vec2(0.0,0.0) ),
                     dot( random2(i + vec2(1.0,0.0) ), f - vec2(1.0,0.0) ), u.x),
                mix( dot( random2(i + vec2(0.0,1.0) ), f - vec2(0.0,1.0) ),
                     dot( random2(i + vec2(1.0,1.0) ), f - vec2(1.0,1.0) ), u.x), u.y);
}

mat2 rotate2d(float _angle){
    return mat2(cos(_angle),-sin(_angle),
                sin(_angle),cos(_angle));
}

void main( void ) {

	vec2 pos = (gl_FragCoord.xy / resolution.xy);
	pos *= resolution.x / resolution.y;
	//Make the position go between -0.5 and -0.5
	pos = vec2(0.5) - pos;
	//pos += vec2(0.5, 0.5);
	//pos = rotate2d(time*20.*PI/180.)*pos;
	
	//convert to spatial coordiante system
	float r = length(pos)*2.0; //(so now r is between 1 and -1)
	float a = atan(pos.y, pos.x); //the angel from the x axis
	a = a + 180.*PI/180.0;
	
	vec3 color = vec3(1.0 - step(0.50, r), 0.3, 0.5);
	
	float angle = 60.0 * (cos(time*20.0) + 1.0)/2.0;
	
	//mouth
	//color *= step(angle, a*180./PI);
	
	//color *= vec3(1.0, 1.0, 0.0);
	
	//float d = (cos(time*2.) + 1.0)/2.0 / 4.0;
	float d = fract(time)/2.0;
	color *= vec3(0.0)* vec3(1.0, 0.0, 0.0) * ((smoothstep(d-0.1, d, r) - smoothstep(d, d+0.02, r)));
	//color *= fract(noise(pos*43.0)*.5 + 0.5);
	d = fract(time)/5.0;
	color += vec3(1.0, 0.0, 0.0) * ((smoothstep(d-0.02, d, r) - smoothstep(d, d+0.02, r)));
	d = fract(time)/3.5;
	color += vec3(1.0, 0.0, 0.0) * ((smoothstep(d-0.02, d, r) - smoothstep(d, d+0.02, r)));
	
	
	color *= vec3(cos(a*12.0));
	//color += vec3(1.0, 0.0, 0.0) * step(0.1, vec3(cos((a+time*PI/180.0)*3.0)));
	//color *= 0.2 + vec3(cos(a*500.0));
	
	color *= abs(1.0 / sin(0.6)*40.0);
	
	_GLF_color = vec4(color, 1.0);
}