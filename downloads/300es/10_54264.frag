#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

// hash no sine
float hash(vec2 p) {
	p = fract(p)-vec2(0.5,0.5);
	p += dot(p, p / sin(time)*10.0);
	return abs(fract((p.x/p.y)/abs(p.x+cos(time)+sin(-time))));
}

void main() {
	vec2 uv = ( gl_FragCoord.xy - resolution) / resolution.y;
	uv.x += time*0.2;
	
	vec3 col = vec3(hash(uv));
	_GLF_color = vec4(col.x,col.y,col.x, 1.);
}