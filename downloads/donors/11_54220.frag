




// gold thing.
// author: https://www.shadertoy.com/user/zackpudil/sort=newest

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

mat2 rot(float a) {
	float s = sin(a);
	float c = cos(a);
	
	return mat2(c, s, -s, c);
}

float box(vec3 p, vec3 b) {
	return (length(p+b))*1.0-0.5;
}


vec2 shape(vec3 p) {
	
	p.xz *= rot(0.9*smoothstep(-1.0, 1.0, p.y));
	p.xz = abs(p.xz) - vec2(1);
	
	float ba = box(p + vec3(0.9, 0, 0), vec3(1, 0.2, 0.2));
	float bb = box(p + vec3(0, 0, 1), vec3(0.1, 0.1, 1));
	float bc = box(p - vec3(0, 0.5, 0), vec3(0.4, 0.5, 0.4));
	
	vec2 s = vec2(min(ba, min(bb, bc)), 1.0);
	
	return s;
}

float glow = 0.0;
vec2 de(vec3 p) {

	vec4 q = vec4(p, 1);
	
	for(int i = 0; i < 4; i++) {
		q.xyz = abs(q.zyx) - vec3(0.5, 1.1, 0.5);
		q.xy *= rot(float(i)*0.9);
		q.xz *= rot(3.14159*1.0*cos(time*0.1));//cos(time*0.1));
		q.zy *= rot(3.14159*1.0*sin(time*0.1));//cos(time*0.1));
		
		q *= 1.4;
	}
	
	float lig = length(p.xyz) - 0.5;
	
	glow += 0.1/(0.1 + pow(abs(lig), 2.0));
	
	
	return shape(q.xyz)/vec2(q.w, 1);
}

void main( void ) {
float ss = 8.0*sin(time*0.3);
	vec2 gg = gl_FragCoord.xy;
	gg = ceil(gg / ss) * ss;
	
	vec2 uv = (gg - 0.5*resolution)/resolution.y;
	
	vec3 col = vec3(0);
	
	float a = 3.0;
	float at = time*0.003;
	
	vec3 ro = vec3(a*cos(at), 2.0*sin(at*2.0), -a*sin(at));
	vec3 ww = normalize(-ro);
	vec3 uu = normalize(cross(vec3(0, 1, 0), ww));
	vec3 vv = normalize(cross(ww, uu));
	vec3 rd = normalize(mat3(uu, vv, ww)*vec3(uv, 1));
	
	float t = 0.0, m = -1.0, mx = 10.0;
	for(int i = 0; i < 100; i++) {
		vec2 d = de(ro + rd*t);
		if(d.x < 0.001 || t >= mx) break;
		t += d.x*0.75;
		m = d.y;
	}
	
	vec3 ld = normalize(vec3(0, 0.5, -0.5));
	vec2 h = vec2(0.001, 0.0);
	
	if(t < mx) {
		vec3 p = ro + rd*t;
		vec3 n = normalize(vec3(
			de(p + h.xyy).x - de(p - h.xyy).x,
			de(p + h.yxy).x - de(p - h.yxy).x,
			de(p + h.yyx).x - de(p - h.yyx).x));
		
		vec3 al = vec3(1.0, 0.4, 0.2);
		float gloss = 16.0;
		
		float aot = t/50.0;
		float ao = exp2(-pow(max(0.0, 1.0 - de(p + n*aot).x/aot), 2.0));
		float dif = max(0.0, dot(ld, n));
		
		float spe = pow(max(0.0, dot(reflect(-ld, n), -rd)), gloss);
		float fre = pow(1.0 + dot(rd, n), 2.0);
		
		col = mix(ao*(al*(0.25 + dif) + spe), al, fre);
	}
	
	col += 0.1*vec3(1.0, 0.4, 0.2)*glow;

	gl_FragColor = vec4(pow(col, vec3(0.4545)), 1);
}