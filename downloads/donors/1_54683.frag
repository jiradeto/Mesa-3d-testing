#ifdef GL_ES
precision mediump loat;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 resolution;
#define r resolution
#define t time
void main( void ) {
	vec2 p=gl_FragCoord.xy/r;
	p.x*=r.x/r.y;
	vec3 a=vec3(0.5, 0.5, 0.5);
	vec3 b=vec3(0.5, 0.5, 0.5);
	vec3 c=vec3(cos(t), sin(t), cos(t));
	vec3 d=vec3(0.0, 0.33, 0.67);
	vec3 col=a+b*cos(6.0*(c*p.x+d*(sin(p.y*20.8) )));
	
	float fy=fract(p.y*8.0);
	col*=smoothstep(0.49, 0.485, abs(fy-0.5)+c);
	float fx=fract(p.x*8.0);
	col*=smoothstep(0.49, 0.485, abs(fx-0.5)+c);
	gl_FragColor=vec4(col.rgb, 1.0);
}