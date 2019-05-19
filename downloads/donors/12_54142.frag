




float EPSILON = 0.01;

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

vec2 opUnion(vec2 a, vec2 b) {
	return a.y < b.y ? a : b;
}

float sphere(vec3 p, float r) {
	return length(p) - r;
}

float box(vec3 p, vec3 b) {
	vec3 d = abs(p) - b;
	return length(max(d,0.0)) + min(max(d.x,max(d.y,d.z)),0.0);
}

float shape(vec3 p) {
	return min(
		sphere(p - vec3(0.0, 1.6, 0.0), 1.0),
		box(p - vec3(0.0, 0.3, 0.0), vec3(0.6, 0.3, 0.6))
	);
}

vec2 mapWithMat(vec3 p) {
	float repeat = 5.0;
	vec2 qxz = mod(p.xz, repeat)-0.5*repeat;
	vec3 q = vec3(qxz.x, p.y, qxz.y);
	return opUnion(
		vec2(1.0, shape(q)),
		vec2(0.0, p.y)
	);
}

float map(vec3 p) {
	return mapWithMat(p).y;
}

vec3 estimateNormal(vec3 p) {
    return normalize(vec3(
        map(vec3(p.x + EPSILON, p.y, p.z)) - map(vec3(p.x - EPSILON, p.y, p.z)),
        map(vec3(p.x, p.y + EPSILON, p.z)) - map(vec3(p.x, p.y - EPSILON, p.z)),
        map(vec3(p.x, p.y, p.z  + EPSILON)) - map(vec3(p.x, p.y, p.z - EPSILON))
    ));
}

float softshadow(vec3 ro, vec3 rd, float mint, float maxt, float k) {
	float t = mint;
	float res = 1.0;
	for(int i = 0; i < 200; i++) {
		float h = map(ro + rd*t);
		if (h < EPSILON) {
			return 0.0;
		}
		res = min(res, k*h/t);
		t += h;
		if (t >= maxt) {
		    break;
		}
	}
	return res;
}

vec3 draw(vec3 orig, vec3 dir) {
	vec3 col = vec3(0.0);
	float origdepth = 0.0;
	for (int i = 0; i < 2; i++) {
		float depth = 0.0;
		float mat = 0.0;
	
		for (int i = 0; i < 300; i++) {
			vec3 pos = orig + depth * dir;
			vec2 q = mapWithMat(pos);
			if (q.y < EPSILON) {
				mat = q.x;
				break;
			}
			depth += q.y;
			if (i == 199) {
				depth = 1000.0;
			}
		}
		
		if (i == 0) origdepth = depth;
		
		if (depth >= 1000.0) {
			return vec3(1.0);
		}
		
		vec3 pos = orig + depth * dir;
		vec3 normal = estimateNormal(pos);
	
		vec3 dir1 = normalize(vec3(1.0, 1.0, 1.0));
		col += vec3(0.5, 0.1, 0.1) * softshadow(pos, dir1, 20.0 * EPSILON, 100.0, 4.0) * clamp(dot(normal, dir1), 0.0, 1.0);
		//vec3 dir2 = normalize(vec3(-1.0, 1.0, -0.3));
		vec3 pos2 = vec3(-9.0, 60.0, 6.0);
		vec3 dir2 = normalize(pos2 - pos);
		col += vec3(0.0, 0.2, 0.5) * softshadow(pos, dir2, 20.0 * EPSILON, 100.0, 4.0) * clamp(dot(normal, dir2), 0.0, 1.0);
		
		if (mat < 1.0) {
			break;
		}
		
		vec3 reflected = reflect(dir, normal);
		orig = pos + EPSILON * reflected;
		dir = reflected;
	}
	
	col = mix(col, vec3(1.0), origdepth * 0.01);

	return col;
}

mat3 createCameraToWorld(vec3 eye, vec3 target, float roll) {
	vec3 cw = normalize(target - eye);
	vec3 cp = vec3(sin(roll), cos(roll), 0.0);
	vec3 cu = normalize(cross(cw, cp));
	vec3 cv = normalize(cross(cu, cw));
	return mat3(cu, cv, cw);
}

void main(void) {
	float fovy = 3.14 / 5.0;
	vec3 ray_orig = vec3(sin(time * 0.3) * 12.0, 4.0, cos(time * 0.3) * 12.0);
	mat3 cameraToWorld = createCameraToWorld(ray_orig, vec3(2.5, 1.0, 2.5), 0.0);
	
	vec2 ndc = 2.0 * (gl_FragCoord.xy / resolution.xy - vec2(0.5));
	vec3 cam_dir = normalize(vec3(vec2(ndc.x * (resolution.x / resolution.y), ndc.y) * tan(fovy * 0.5), 1.0));
	//vec3 ray_orig = vec3(0.0) + vec3(0.0, 2.0, 8.0);
	vec3 ray_dir = cameraToWorld * cam_dir;
	vec3 res = draw(ray_orig, ray_dir);
	res = pow(res, vec3(0.4545));

	gl_FragColor = vec4(res, 1.0);
}