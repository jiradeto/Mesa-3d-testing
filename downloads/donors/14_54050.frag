

#define PI 3.14159265359

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float plot(vec2 st, float pct) {
	return smoothstep( pct - 0.02, pct, st.y) - 
	       smoothstep( pct, pct  + 0.02, st.y);	
}

void main( void ) {
	vec2 st = gl_FragCoord.xy / resolution;

	float y = st.x;
	
	vec3 color = vec3(y);
	
	float pct = plot(st, y);


	color = (1.0-pct) * color + pct * vec3(0.0,1.0,0.0);


	
	gl_FragColor = vec4(color, 1.0);
}