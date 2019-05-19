#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif

uniform vec2 resolution;
uniform float time;

vec2 MoveSinX(vec2 st, float t, float d)
{
	st.x = sin(t)*d;
	return st;
}
float circleSDF(vec2 st){
	return length(st - .5) * 2.;
}

float fill(float x, float size)
{	return 1. - step(size, x);}
void main(void) {
	vec3 bg = vec3(0.98,0.58,0.5);
	float mx = max(resolution.x, resolution.y);
	vec2 uv = gl_FragCoord.xy / mx;
	vec2 uv2 = gl_FragCoord.xy / vec2(resolution.x, resolution.y); 
	vec2 center = resolution / mx * 0.5;
	vec2 st = uv *2.0;
	vec2 st2 = uv *10.0; 
	float t = time * .5;
	st *= -0.5;
	st = MoveSinX(st, t, 0.5);
	st *= 0.5;

	vec3 col = vec3(0.33,0.58,0.53);
	vec3 col1 = vec3(0.98,0.58,0.5);
	vec3 col2 = vec3(0.98,0.58,0.5);
	float l = cos(t*2.0+ distance(st, center)*255.0);

 
	vec3 circle = vec3(cos(t-distance(uv, center) *255.0))*1.0;
	vec3 line = vec3 (l+ col2.x, l + col2.y, l + col2.z)* 0.2;
	
	bg= vec3(smoothstep(circle, line, vec3(1.0)));
	bg = vec3((circle*col)*line)*vec3(col)*10.0;
	bg *= circleSDF(st2);
	vec3 m = vec3(0.5);
	float sdf = circleSDF(uv2);
	bg *= fill(sdf,.8);
	

	gl_FragColor = vec4(bg, 1.0); 
		
}
