#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;//@machine_shaman
precision mediump float;



uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;
void main() {
	
	float mx =2.* (mouse.x*2.-1.);
	
	vec2 uv = (2. * gl_FragCoord.xy - resolution) / resolution.y;
	
	mat2 rot = mat2(cos(mx),-sin(mx),sin(mx),cos(mx));
	
	uv *=rot;
	
	uv.x *= .2 * sin(uv.x + time)*mx; // +
	
	
	
	uv = floor(uv * 128.) / 128.;
	uv *= 3.;
	
	
	
	
	
	float t = 0.001 + abs(uv.y);
	float scl = 1. / t;
	vec2 st = uv * scl + vec2(0.0, scl + time*0.4);
	
		
	

	// color the scene
	vec3 col = vec3(0);
	
	
	col = mix(vec3(0), .5 + .5 * cos(time + st.x + 2. * st.y + vec3(1, 2, 4)), sign(cos(st.x * 10.)) * sign(cos(st.y * 20.))) * t *t;
	 
	
	
	// thanks for the dithering effect :)
	col *= floor(uv.y - fract(dot(gl_FragCoord.xy, vec2(.5, 0.75))) * 100.0) * 0.01;
	
		
	_GLF_color = vec4(col, 1.);

}