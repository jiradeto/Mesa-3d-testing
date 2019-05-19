#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

uniform float time;
uniform vec2 resolution;

float plot(vec2 st, float pct) {
	return smoothstep( pct + 0.015, clamp(pct , 0.,sin(time*2.)), st.y) - 
	       smoothstep( clamp(pct + 0.02, 0.6,10.1), pct  - 0.05, st.y);	
}

void main( void ) {
	
	float c1;
	
	vec2 st = gl_FragCoord.xy / (resolution-200.);
	st.x *= resolution.x / resolution.y-0.1;

	float y = st.x + 0.1;
	
	vec3 color = vec3(pow(10.,y));
	
	float pct = plot(st, pow(y-.3 , .15));


	color -= (1.2-pct) * color + pct * vec3(.0,1.5,1.9);

	
	_GLF_color = vec4(color, .1);
	
}