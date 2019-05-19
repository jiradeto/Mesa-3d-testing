#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float a = resolution.x / resolution.y;

float rand(float n){return fract(sin(n) * 43758.5453123);}

float random (vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233)))*43758.5453123);
}

void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy );
	position.x *= a;
	vec2 rp = vec2(position.x, position.y + time * 0.1);
	float t = smoothstep(0.0, 0.15, rand(floor(1000.0 + time * 2.5) + 0.0025 * distance(position, vec2(0.5 * a, 0.5))) * 0.15);
	float sx = rand(floor(rp.y + time)) + t * 1.25;
	float ix = floor(rp.x * sx);
	float fx = fract(rp.x * sx);
	float sy = rand(floor(rp.x + t)) + t * 0.75;
	float iy = floor(rp.y * sy);
	float fy = fract(rp.y * sy);
	
	float r = mix(rand(iy), rand(ix + 1.0), fy);
	float g = mix(rand(iy), rand(ix + 1.0), fx);
	float b = mix(r * rand(ix), g * rand(ix + 1.0), smoothstep(0.0, 0.1, g - r));

	_GLF_color = vec4(r,g,b,1.0);

}