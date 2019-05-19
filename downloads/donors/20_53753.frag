




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

// https://www.shadertoy.com/user/zackpudil/sort=newest

#define PI 3.141592

mat2 rot(float a) {
	float s = sin(a);
	float c = cos(a);
	
	return mat2(c, s, -s, c);
}

vec2 opU(vec2 a, vec2 b) {
	return a.x < b.x ? a : b;
}

float box(vec3 p, vec3 r) {
	vec3 q = abs(p) - r;
	return  max(max(q.x, q.y), q.z);
}

vec2 shape(vec3 p) {
	
	vec3 op = p;
	p = abs(p) - vec3(1, 0.5, 1);
	
	float a = box(p + vec3(1, 0, 0), vec3(1.5, 0.2, 0.2));
	float b = box(p + vec3(0, 0, 1), vec3(0.1, 0.2, 1.5));
	
	vec3 xp = op;
	xp.xz = abs(xp.xz) - vec2(1);
	float c = box(xp, vec3(0.1, 0.5, 0.1));
	
	float e = box(op, vec3(0.5));
	
	vec2 x = vec2(min(a, min(b, c)), 1.0);
	vec2 y = vec2(e, 2.0);
	
	return opU(x, y);
}

float g = 0.0;
vec2 de(vec3 p) {
	float s = 0.7;
	
	p.y = mod(p.y + 2.5, 5.0) - 2.5;
	
	vec4 q = vec4(p*s, 1);
	for(int i = 0; i < 4; i++) {
		q.xyz = abs(q.xyz) - vec3(0.1, 1.0, 0.1);
		q.xz *= rot(0.54 + float(i)*1.4);
		q.xy *= rot(0.14 + float(i)*1.1);
		
		q *= 1.4;
	}
	
	g += 0.1/(0.1 + pow(abs(length(p.xz)), 2.0));
	
	vec2 b = shape(q.xyz)/vec2(q.w*s, 1);
	
	//b.x = max(-b.x, length(p.xz) - 2.0);
	//return shape(p);
	return b;
}

void main( void ) {
	vec2 uv = gl_FragCoord.xy/resolution - 0.5;
	uv.x *= resolution.x/resolution.y;
	
	vec3 col, bg;
	col = bg = vec3(0.04)*(1.0 - length(uv));

	float at = 0.7*time;
	
	vec3 ro = vec3(2.0*sin(at), at, -3.0*cos(at));
	vec3 ww = normalize(vec3(0, at + 4.0, 0)-ro);
	vec3 uu = normalize(cross(vec3(0, 1, 0), ww));
	vec3 vv = normalize(cross(ww, uu));
	vec3 rd = normalize(mat3(uu, vv, ww)*vec3(uv, 1.0));
	
	float t = 0.0, m = -1.0, mx = 10.0;
	for(int i = 0; i < 100; i++) {
		vec2 d = de(ro + rd*t);
		if(d.x < 0.001 || t >= mx) break;
		t += d.x;
		m = d.y;
	}
	
	vec3 ld = normalize(vec3(0.0, 0.5, -0.5));
	vec2 e = vec2(1, -1)*0.001;
	
	if(t < mx) {
		vec3 p = ro + rd*t;
		vec3 n = normalize(
			e.xxx*de(p + e.xxx).x +
			e.xyy*de(p + e.xyy).x +
			e.yxy*de(p + e.yxy).x +
			e.yyx*de(p + e.yyx).x);
		
		float ao = exp2(-pow(max(0.0, 1.0 - de(p + n*(t/50.0)).x/(t/50.0)), 2.0));
		
		float dif = max(0.0, dot(ld, n));
		float sss = smoothstep(-1.0, 1.0, de(p + ld*0.4).x/0.4);
		
		float spo = 16.0;
		vec3 ab = vec3(1);
		
		if(m == 1.0) {
			spo = 4.0;
			ab = vec3(0);
		} else if(m == 2.0) {
			spo = 32.0;
			ab = vec3(2.0, 1.4, 0.6);
		}
		
		float sp = pow(max(0.0, dot(reflect(-ld, n), -rd)), spo);
		float fr = pow(1.0 + dot(rd, n), 2.0);
		
		col = mix(sp*ao + ab*ao*(dif+sss), bg, fr);
		//col = mix(vec3(ao*sss), bg, fr);
	}
	
	col += 0.05*vec3(1.7, 0.3, 1.2)*g;
	col = mix(col, bg, 1.0 - exp(-0.5*t));
	gl_FragColor = vec4(pow(col, vec3(0.45)), 1);
}