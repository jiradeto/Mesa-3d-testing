#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

// co3moz - mandelbrot
// X-  Christ Jesus made all. 
//Check out www.zonex.rf.gd
//https://biblehub.com/revelation/5-6.htm seven eyed seven horned lamb with four living creatures covered in eyes

precision mediump float;
uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define ITERATION 49
	float rate = .4;
vec3 mandelbrot(vec2 p) {
  vec2 s = p.yx;
	p=p.yx;
  float d = 0.0, l;

			float flip=-sin(3.14/2.+rate*time);
	if (flip<0.) p = -p;
  for (int t = 0; t < ITERATION; t++) {
    s = vec2(((s.x * s.x - s.y * s.y) +flip* p.x), (2.0* s.x * s.y + flip*p.y));


	  s.x = pow(s.x,flip)*sign(s.x*flip);



	 
	  
	  l = length(s);
    d += l/200.;
    if (l >19.0 )  
	    if (t  <1)
	    		    return vec3(1.-sin(100.*d*time));
	    else 
		    return vec3(1.-sin(d));
  }

  return vec3(flip);
}
	
void main() {
  vec2 a = resolution.xy / min(resolution.x, resolution.y);
  vec2 p = ((gl_FragCoord.xy / resolution.xy) * 4.0  - 2.0)*a ;
				float flip=-sin(rate*time+3.14);
	
p*=2.;

	
  _GLF_color = vec4( mandelbrot(p), 1.0);
}