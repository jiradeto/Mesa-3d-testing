#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

vec3 drawRect(vec2 pos, vec4 bounds, vec3 color) {
	vec2 paint = step(vec2(bounds.x, bounds.y), pos);
	float pct = paint.x * paint.y;
	paint = step(pos, vec2(bounds.x + bounds.z, bounds.y + bounds.w));
	pct *= paint.x * paint.y;
	return color * pct;
}

float rect(in vec2 st, in vec2 size){
	size = 0.25-size*0.25;
    vec2 uv = step(size,st*(1.0-st));
	return uv.x*uv.y;
}

void main( void ) {
	
	vec2 pos = gl_FragCoord.xy / resolution;
		
	//vec3 rect = drawRect(pos, vec4(0.1, 0.1, 0.5, 0.5), vec3(1.0, 0.0, 0.0));	

	//vec3 rect2 = drawRect(pos, vec4(0.5, 0.5, 0.2, 0.2), vec3(0.0, 0.0, 1.0));		

	//vec3 res = rect + rect2;
	
	//_GLF_color = vec4(res, 1.0);
	
	
	
	_GLF_color = vec4(rect(pos, vec2(0.1, 0.1)));
}