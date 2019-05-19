

uniform float time;
uniform vec2 resolution;

#define N(h) fract(sin(vec4(6,9,1,0)*h) * 9e2)

void main(void) { 
	vec4 o = vec4(0.);
	vec2 u = gl_FragCoord.xy/resolution.y;

	float e, d, i=1.;
	vec4 p;

	for(float i=0.; i<9.; i++) {
	  d = floor(e = i*9.1+time);
	  p = N(d)+.5;
	  e -= d;
	  for(float d=0.; d<50.;d++)
	    o += p*(2.-e)/1e3/length(u-(p-e*(N(d*i)-.8)).xy);
	}

	if(u.y<N(ceil(u.x*15.+d+e)).x*.9)
	  o-=o*u.y;
	gl_FragColor = vec4(o.rgb, 4.);
}