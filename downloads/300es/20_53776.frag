#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

uniform float time;
uniform vec2 resolution;

vec2 opU(vec2 a, vec2 b) { return a.x < b.x ? a : b; }

mat2 rot(float a) {
	float s = sin(a);
	float c = cos(a);
	
	return mat2(c, s, -s, c);
}


float box(vec3 p, vec3 b) {
	vec3 q = abs(p) - b;
	return max(max(q.x, q.y), q.z);
}

vec2 shape(vec3 p) {
	
	float a = box(p, vec3(1.0, 0.1, 0.1));
	float b = box(p, vec3(0.1, 0.1, 1.0));
	
	vec2 s = vec2(a, 1.0);
	vec2 t = vec2(b, 2.0);
	
	return opU(s, t);
}

float glow = 0.0;
vec2 de(vec3 p) {
	float s = 1.0;
	p.y = mod(p.y + 2.0, 4.0) - 2.0;
	p.xz = abs(p.xz) - 1.0;
	vec4 q = vec4(p*s, 1);
	
	for(int i = 0; i < 2; i++) {
		q.xyz = abs(q.xyz) - vec3(0.6, 0.35, 0.3);
		
		q.xz *= rot(0.6 + 0.4*float(i));
		q.xy *= rot(0.4 + 0.3*float(i));
		
		q *= 1.2;
	}
	
	vec2 f = shape(q.xyz)/vec2(q.w*s, 1);
	
	vec2 t = vec2(length(p.xz) - 0.1 + 0.01*cos(0.3*time*p.y), 3.0);
	glow += 0.1/(0.1 + pow(abs(t.x), 2.0));
	
	return opU(f, t);
	return shape(p);
}

void main( void ) {
	vec2 uv = gl_FragCoord.xy/resolution - 0.5;
	uv.x *= resolution.x/resolution.y;
	
	vec3 col, bg;
	col = bg = vec3(0.4)*(1.0 - length(uv));
	
	float at = 0.6*time;
	vec3 ro = vec3(0.3, at, -0.5);
	vec3 ww = normalize(vec3(0.3, at + 1.0,- 0.5)-ro);
	vec3 uu = normalize(cross(vec3(0, 0, 1), ww));
	vec3 vv = normalize(cross(ww, uu));
	vec3 rd = normalize(mat3(uu, vv, ww)*vec3(uv, 1.0));
	
	float t = 0.0, m = -1.0, mx = 10.0;
	for(int i = 0; i < 200; i++) {
		vec2 d = de(ro + rd*t);
		if(d.x < 0.001 || t >= mx) break;
		t += d.x*0.5;
		m = d.y;
	}
	
	vec3 ld = normalize(vec3(0.3, -0.5, 0.3));
	vec2 e = vec2(1, -1)*0.001;
	
	if(t < mx) {
		vec3 p = ro + rd*t;
		vec3 n = normalize(e.xxx*de(p + e.xxx).x
				   + e.xyy*de(p + e.xyy).x
				   + e.yxy*de(p + e.yxy).x
				   + e.yyx*de(p + e.yyx).x);
		
		float ao = exp2(-pow(max(0.0, 1.0 - de(p + n*(t/50.0)).x/(t/50.0)), 2.0));
		
		float dif = max(0.0, dot(ld, n));
		float sss = smoothstep(0.0, 1.0, de(p + ld*1.5).x/1.5);
		
		float spo = 16.0;
		float sp = pow(max(0.0, dot(reflect(-ld, n), -rd)), spo);
		float fr = pow(1.0 + dot(rd, n), 2.0);
		
		vec3 ab = vec3(1);
		if(m == 1.0) ab = vec3(0);
		else if(m == 2.0) ab = vec3(0.3, 1.0, 0.3);
		else if(m == 3.0) ab = vec3(0.3, 0.3, 4.0);
		
		if(m == 3.0) col = ab;
		else col = mix(sp + ab*ao*(dif + sss), bg, fr);
	}
	
	col += 0.03*vec3(0.3, 0.3, 1.0)*glow;
	col = mix(col, bg, 1.0 - exp(-0.2*t));
	_GLF_color = vec4(pow(col, vec3(0.45)), 1);
}