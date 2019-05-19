




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

mat2 rotate(float a) {
	float c = cos(a);
	float s = sin(a);
	return mat2(c, s, -s, c);
}

float line(vec2 p, vec2 a, vec2 b) {
	vec2 pa = p - a;
	vec2 ba = b - a;
	float t = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
	return length(pa - ba * t);
}

vec3 vertices[8];
vec2 project[8];
void main() {
	
	vec2 uv = (2. * gl_FragCoord.xy - resolution) / resolution.y;
	uv *= 3.;
		
	// setup vertices
	vertices[0] = vec3(-1, -1, -1);
	vertices[1] = vec3(1, -1, -1);
	vertices[2] = vec3(1, 1, -1);
	vertices[3] = vec3(-1, 1, -1);
	vertices[4] = vec3(-1, -1, 1);
	vertices[5] = vec3(1, -1, 1);
	vertices[6] = vec3(1, 1, 1);
	vertices[7] = vec3(-1, 1, 1);
	
	// project
	for (int i = 0; i < 8; i++) {
		vertices[i].xy *= rotate(time);
		vertices[i].xz *= rotate(time);
		float scl = 1000. / (1000. + vertices[i].z);
		project[i] = vertices[i].xy * scl;
	}
	
	// draw based on index
	float d = line(uv, project[0], project[1]);
	d = min(d, line(uv, project[1], project[2]));
	d = min(d, line(uv, project[2], project[3]));
	d = min(d, line(uv, project[3], project[0]));
	d = min(d, line(uv, project[4], project[5]));
	d = min(d, line(uv, project[5], project[6]));
	d = min(d, line(uv, project[6], project[7]));
	d = min(d, line(uv, project[7], project[4]));	
	d = min(d, line(uv, project[0], project[4]));
	d = min(d, line(uv, project[1], project[5]));
	d = min(d, line(uv, project[2], project[6]));
	d = min(d, line(uv, project[3], project[7]));
	
	// color the scene
	vec3 col = vec3(0.);
	col += .01 / d;
	
	gl_FragColor = vec4(col, 1.);

}