#version 300 es 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;
#ifdef GL_ES
precision mediump float;
#endif

//#extension GL_OES_standard_derivatives : enable

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float sin0(float a)
{
  /* C simulation gives a max absolute error of less than 1.8e-7 */
  vec4 c0 = vec4( 0.0,            0.5,
                      1.0,            0.0            );
  vec4 c1 = vec4( 0.25,          -9.0,
                      0.75,           0.159154943091 );
  vec4 c2 = vec4( 24.9808039603, -24.9808039603,
                     -60.1458091736,  60.1458091736  );
  vec4 c3 = vec4( 85.4537887573, -85.4537887573,
                     -64.9393539429,  64.9393539429  );
  vec4 c4 = vec4( 19.7392082214, -19.7392082214,
                     -1.0,            1.0            );

  /* r0.x = sin(a) */
  vec3 r0, r1, r2;

  r1.x  = c1.w * a - c1.x;                // only difference from cos!
  r1.y  = fract( r1.x );                   // and extract fraction
  r2.x  = ( r1.y < c1.x ) ? 1.0 : 0.0;        // range check: 0.0 to 0.25
  //r2.yz = ( r1.yy >= c1.yz ) ? vec2(1.0, 1.0) : vec2(.0 ,.0);    // range check: 0.75 to 1.0
r2.yz = ( r1.yy - c1.yz );	
  r2.y  = dot( r2, c4.zwz );              // range check: 0.25 to 0.75
  r0    = c0.xyz - r1.yyy;                // range centering
  r0    = r0 * r0;
  r1    = c2.xyx * r0 + c2.zwz;           // start power series
  r1    =     r1 * r0 + c3.xyx;
  r1    =     r1 * r0 + c3.zwz;
  r1    =     r1 * r0 + c4.xyx;
  r1    =     r1 * r0 + c4.zwz;
  r0.x  = dot( r1, -r2 );                 // range extract

  return r0.x;
}
void main( void ){
	highp vec3 color;
	highp float len;
	highp float t=time;
	for(int i=0;i<3;i++) {
		highp vec2 uv = gl_FragCoord.xy/resolution;
		
		highp vec2 offset = uv;
		offset-=.5;
		// unsquash circle
		offset.x*=resolution.x/resolution.y;
		len=length(offset);
		
		t+=0.07;
		
		highp vec2 offset_unit_vector = offset/len;
		highp float firstMod = sin(t)+1.0;
		highp float secondMod = abs(sin(len*9.0-t*2.0));
		uv += offset_unit_vector * firstMod * secondMod + mouse*2.;
		//uv += offset_unit_vector * firstMod * secondMod;
		//fract(uv)
		highp float div = .01;
		highp float divdr = length( abs(fract(uv.xy)-.5) );
		color[i] = div / divdr;
		//color[i]= .01 / length( abs(fract(uv.xy)-.5) );
	}
	color[2] = 0.2;
	gl_FragColor=vec4(color/len,t);
}