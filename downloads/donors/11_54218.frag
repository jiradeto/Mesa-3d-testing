




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define EPS 1e-4
#define MAXD 20.
#define MAXI 64

vec3 rotateX(vec3 p, float phi) {float c = cos(phi); float s = sin(phi); return vec3(p.x, c*p.y - s*p.z, s*p.y + c*p.z);}
vec3 rotateY(vec3 p, float phi) {float c = cos(phi); float s = sin(phi); return vec3(c*p.x + s*p.z, p.y, c*p.z - s*p.x);}
vec3 rotateZ(vec3 p, float phi) {float c = cos(phi); float s = sin(phi); return vec3(c*p.x - s*p.y, s*p.x + c*p.y, p.z);}

float sphere(vec3 p, float r) {
	return length(p) - r;
}

float box(vec3 p, vec3 s) {
	vec3 d = abs(p) - s;
	return length(max(d,0.)) + min(max(d.x,max(d.y,d.z)),0.);
}

float scene(vec3 p) {
	vec3 pr = rotateZ(rotateY(rotateX(p, time*0.9), time*0.8), time*0.7);
	vec3 pr2 = rotateZ(rotateY(rotateX(p, time/2.), time/2.), time/2.);
	return min(max(-box(pr, vec3(0.8)), sphere(pr, 1.)), box(pr2, vec3(0.2)));
}

vec3 normal(vec3 p) {
	vec2 e = vec2(EPS, 0.);
	float d = scene(p);
	return normalize(vec3(scene(p+e.xyy)-d, scene(p+e.yxy)-d, scene(p+e.yyx)-d));
}

float refd = 1./0.;
void raytrace(vec3 ro, vec3 rd, out vec3 p, out bool hit) {
	p = ro;
	float d;
	for (int i=0; i<64; i++) { 
		p += rd*(d=scene(p));
		if (d<EPS) {
			hit = true;
			break;
		}
	}
}

vec3 lighting(vec3 p, vec3 lightPos) {
	vec3 n = normal(p);
	vec3 lightDir = normalize(p-lightPos);
	vec3 color = vec3(max(dot(lightDir,n), 0.));
	color.r *= p.x;
	color.g *= p.y;
	color.b *= p.z;
	return color;
}

void main(void) {
float ss = 8.0*sin(time*0.3);
	vec2 gg = gl_FragCoord.xy;
	gg = ceil(gg / ss) * ss;
		
	vec2 uv = (2.*gg - resolution.xy) / resolution.x;

	vec3 ro = vec3(uv.xy, 2.*sin(time)+5.);
	vec3 rd = vec3(uv.xy*.5,-1);

	vec3 p = ro;
	bool hit = false;
	raytrace(ro, rd, p, hit);
	
	vec3 color = vec3(0);
	if (hit) {
		color = lighting(p, vec3(-10));
	}
	
	float vignette = smoothstep(2.0, 2.0-0.45, length(uv));
	color = mix(color, color*vignette, 0.3);
	
	gl_FragColor = vec4(color, 1);
}