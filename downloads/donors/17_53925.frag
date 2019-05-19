




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

// MEEEEH.
// author: https://www.shadertoy.com/user/zackpudil/sort=newest

float hash(float n) {
    return fract(sin(n)*43578.5453);
}

mat2 rot(float a) {
  float s = sin(a);
  float c = cos(a);
  
  return mat2(c, s, -s, c);
}

vec2 opU(vec2 a, vec2 b) {
  return a.x < b.x ? a : b;
}

float box(vec3 p, vec3 b) {
  vec3 q = abs(p) - b;
  return max(max(q.x, q.y), q.z);
}

float box(vec2 p, vec2 b) {
  vec2 q = abs(p) - b;
  return max(q.x, q.y);
}

vec2 shape(vec3 p) {
  float a = box(abs(p.xz) - vec2(1), vec2(0.1));
  float b = box(abs(p) - vec3(0, 0.5, 0), vec3(1.1, 0.1, 1.1));
  
  p = abs(p) - vec3(0, 0.4, 0);
  b = max(b, -length(p)+0.3);
  float c = box(p.xz, vec2(0.1));
  
  vec2 s = vec2(a, 1.0);
  vec2 t = vec2(b, 2.0);
  vec2 u = vec2(c, 3.0);
  
  return opU(s, opU(t, u));
}

float glow = 0.0;
vec2 de(vec3 p) {
  float sc = 0.2;
  
  vec4 q = vec4(p*sc, 1);
  for(int i = 0; i < 5; i++) {
    q.xyz = abs(q.xyz) - vec3(0.6, 0.6, 0.3);
    q.xz *= rot(0.53);
    q.xy *= rot(0.5);
    q *= 1.9;
  }
  
  vec2 s = shape(q.xyz)/vec2(q.w*sc, 1);
  vec2 t = vec2(length(p*vec3(0.6, 1, 1)) - 0.15 + 0.01*cos(30.0*(p.x*cos(p.y)  + 0.2*time)), 4.0);
  t.x = min(t.x, length(p.yz) - 0.01 + 0.01*cos(30.0*(p.x*cos(p.y) + 0.2*time)));
  
  glow += 0.01/(0.1 + t.x*t.x);
  
  return s.x < t.x ? s : t;
}

float form(vec2 p) {

  p = mod(p + 2.0, 4.0) - 2.0;
  for(int i = 0; i < 10; i++) {
    p = abs(p)/clamp(dot(p, p), 0.5, 0.7) - vec2(0.0, 0.7);
  }
  
  return smoothstep(0.5, 0.6, abs(p.y));
}

float mat(vec3 p, vec3 n) {
  vec3 m = pow(abs(n), vec3(10.0));
  
  float x = form(p.yz);
  float y = form(p.xz);
  float z = form(p.xy);
  
  return (m.x*x + m.y*y + m.z*z)/(m.x + m.y + m.z);
}

vec3 bump(vec3 p, vec3 n, float bf) {
  vec2 h = vec2(0.005, 0.0);
  vec3 g = vec3(
    mat(p - h.xyy, n),
    mat(p - h.yxy, n),
    mat(p - h.yyx, n));
  
  g -= mat(p, n);
  g -= n*dot(g, n);
  
  return normalize(n + bf*g);
}

vec2 trace(vec3 ro, vec3 rd, float mx) {
  float t = 0.0, m = -1.0;
  
  for(int i = 0; i < 200; i++) {
    vec2 d = de(ro + rd*t);
    if(d.x < 0.001 || t >= mx) break;
    t += d.x*0.5;
    m = d.y;
  }
  
  return vec2(t, m);
}

void main(void) {
  vec2 uv = (gl_FragCoord.xy - 0.5*resolution)/resolution.y;
  
  vec3 col = vec3(0);
  
  float at = time*0.3;
  
  vec3 ro = vec3(0.05*sin(at), 0.3*sin(at), 3.0*cos(at));
  vec3 ww = normalize(vec3(sin(at), 0, cos(at))-ro);
  vec3 uu = normalize(cross(vec3(0, 1, 0), ww));
  vec3 vv = normalize(cross(ww, uu));
  vec3 rd = normalize(mat3(uu, vv, ww)*vec3(uv, 1));
  
  float t = 0.0, m = -1.0, mx = 50.0;
  vec2 hit = trace(ro, rd, 50.0);
  
  t = hit.x, m = hit.y;
  
  vec2 h = vec2(0.001, 0.0);
  vec3 salb = vec3(0.6, 0.8, 1);
  
  if(t < mx) {
    vec3 p = ro + rd*t;
    vec3 n = normalize(vec3(
      de(p + h.xyy).x - de(p - h.xyy).x,
      de(p + h.yxy).x - de(p - h.yxy).x,
      de(p + h.yyx).x - de(p - h.yyx).x));
    
    vec3 ld = normalize(-p);
    float glo = 8.0;
    
    vec3 alb = vec3(0.2);
    n = bump(p, n, 2.0);
    
    float occ = exp2(-pow(max(0.0, 1.0 - de(p + n*0.05).x/0.05), 2.0));
    
    float dif = max(0.0, dot(ld, n));
    float sp = pow(max(0.0, dot(reflect(-ld, n), -rd)), glo);
    float fre = pow(1.0 + dot(rd, n), 2.0);
    
    if(m == 4.0) col = salb;
    else col = 0.5*mix(occ*(alb*dif + sp*salb), vec3(0), fre);
  }
  
  col += salb*glow*0.3;
  
  //col = vec3(1)*form(uv);
  gl_FragColor = vec4(pow(col, vec3(0.4545)), 1);
}