#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




// This is a bad raytracing...

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float fun(vec3 x);

void main( void ) {

	vec2 pos = (gl_FragCoord.xy - resolution.xy * 0.5) / resolution.y;

	
	float z = 10.0;
	float step = 0.0155;
	float epsilon = 0.5;
	vec3 dray = normalize(vec3(pos, z)) * step;
	vec3 ray = vec3(0.0);
	
	for(int i = 0; i < 1000; i++){
		
		if(abs(fun(ray)) < epsilon){
			_GLF_color = vec4(vec3(0.0), 1.0);
			return;
		}
		
		ray += dray;
	}
	
	_GLF_color = vec4( vec3(1.0), 1.0 );

}


float fun(vec3 v){
	
	float m = 2.0;
	
	float ans = pow(v.x, m) + pow(v.y, m) + pow(v.z - 20.0, m) - 20.0;
	
	return ans;
}