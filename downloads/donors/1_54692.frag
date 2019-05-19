#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

void main( void ) {

	vec2 pos = ( gl_FragCoord.xy / resolution.xy ) + mouse / 4.0;
	float x  = fract(sin(pos.x)*4.+sin(pos.x*12.+0.5)*3.+sin(pos.x*8.+0.2)*2.);
	float y  = sin(pos.y)*15.+sin(pos.x*22.+time)*0.5+sin(pos.x*8.+0.2)*2.;
	float r  = fract(y+sin(pos.x+time));
	float b  = fract(y);

	gl_FragColor = vec4( r,smoothstep(r,0.03,.3)*.7,smoothstep(b,0.03,.3), 1.0 );
}