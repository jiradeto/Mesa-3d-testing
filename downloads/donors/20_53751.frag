precision mediump float;

uniform vec2 resolution;
uniform vec2 mouse;
uniform float time;

vec3 hsv2rgb(vec3 c) {
  c = vec3(c.x, clamp(c.yz, 0.0, 1.0));   
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}


void main(void) {
  vec4 mr = vec4(abs(sin(time/6.))*fract(sin(time/5.)*1.0) * resolution, resolution);
  vec2 p = gl_FragCoord.xy * 2.* fract(sin(time/5.)*1.0);
  vec2 q = (p + p - mr.ba) / mr.b;
  for(int i = 0; i <10; i++) {
    q = abs(abs(q)/dot(q,q) -  mr.xy/mr.zw);	
	  if (length(q) > .1 && length(q) < .25) break;
  }
  gl_FragColor = vec4(hsv2rgb((vec3(q, q.x/q.y).xyz) + vec3(time / 50., .9,.5)), 1.0);
}