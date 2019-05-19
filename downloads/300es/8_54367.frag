#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;//https://www.cnblogs.com/webgl-angela/p/9846990.html






uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float snow(vec2 uv, float scale, float ttime)
{
  float w = smoothstep(1.0 , 0.0, -uv.y * (scale / 10.0));
  
  if (w < 0.1)
    return 0.0;
	
  uv += ttime / scale;
  uv.x -= ttime  / scale;
  
  uv.x += sin(uv.y + ttime * 0.5) / scale;
  
  uv *= scale;
  vec2 s = floor(uv),f=fract(uv),p;
  
  float k = 3.0;
  float d = 0.0;
  
  p = 0.5 + 0.35 * sin(11.0 * fract(sin((s + p + scale)* mat2(7.0, 3.0, 6.0, 5.0)) * 5.0)) - f;
  
  d = length(p);
	
  k = min(d,k);
	
  k = smoothstep(0.0, k ,sin(f.x + f.y) * 0.03);
  
  return k* w;
}

void main(void)
{
  vec2 resolution = vec2(500.0);

  vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x,resolution.y);

  vec3 finalColor = vec3(0.0);
	
  float c = 0.0;
  
  float ttime = mod(time * 2.0, resolution.y);
  
  c += snow(uv, 10.0, ttime);
  c += snow(uv, 8.0, ttime);
  c += snow(uv, 6.0, ttime);
  c += snow(uv, 5.0, ttime);
  c += snow(uv, 4.0, ttime);

  finalColor= (vec3(c)); 
	
  _GLF_color = vec4(finalColor, 1.0 );

}