//https://www.cnblogs.com/webgl-angela/p/9846990.html






uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float snow(vec2 uv, float scale)
{
  float w = smoothstep(1.0 , 0.0, -uv.y * (scale / 10.0));
  
  if (w < 0.1)
    return 0.0;
	
  uv += time / scale;
  uv.y += time * 2.0 / scale;
  
  uv.x += sin(uv.y + time * 0.5) / scale;
  
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
	
  //float c = smoothstep(1.0, 0.3, clamp(uv.y * 0.3 + 0.8, 0.0, 0.75)); 
  float c = 0.0;
  
  c += snow(uv, 30.0) * 0.15;
  c += snow(uv, 20.0) * 0.0;
  c += snow(uv, 15.0) * 0.0;
  c += snow(uv, 10.0);
  c += snow(uv, 8.0);
  c += snow(uv, 6.0);
  c += snow(uv, 5.0);

  finalColor= (vec3(c)); 
	
  gl_FragColor = vec4(finalColor, 1.0 );

}