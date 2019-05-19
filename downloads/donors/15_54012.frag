







#define PIXELATION 0.025

float pixelate( inout vec2 uv )
{
	vec2 pix = mod( uv, PIXELATION );
	uv -= pix - PIXELATION * .5;
	pix -= PIXELATION * .5;
	return smoothstep( PIXELATION, 0., length(pix) );
}










uniform float time;
uniform vec2 resolution;

// "[SH17A] Fireworks" by Martijn Steinrucken aka BigWings/Countfrolic - 2017
// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.
// Based on https://www.shadertoy.com/view/lscGRl

#define N(h) fract(sin(vec4(6,9,1,0)*h) * 9e2)

void main(void)
{
  vec4 o; 
  vec2 u = gl_FragCoord.xy/resolution.y;
    
  float e, d, i=0.;
  vec4 p;
    
  for(float i=1.; i<30.; i++) {
    d = floor(e = i*9.1+time);
    p = N(d)+.3;
    e -= d;
    for(float d=0.; d<5.;d++)
      o += p*(2.9-e)/1e3/length(u-(p-e*(N(d*i)-.5)).xy);  
  }
	 
  gl_FragColor = vec4(o.rgb, 1);
	
	
	
	
	
	
	
	vec2 uv = ( gl_FragCoord.xy / resolution.xy ) * 2. - 1.;
	float shade_pixel = pixelate( uv );
	gl_FragColor *= shade_pixel;	
	
	
	
}