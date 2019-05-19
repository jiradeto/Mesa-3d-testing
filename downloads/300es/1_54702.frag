#version 300 es 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;
#ifdef GL_ES
precision mediump float;
#endif

#extension GL_OES_standard_derivatives : enable

// Inner drop shadow based on texture2D alpha channel

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;
uniform sampler2D backbuffer;

const vec2 offset = vec2(-4,10);        // shadow offset, in pixels
const int blurRadius = 5;               // Blur radius, in pixels
const vec3 color = vec3(0.8, 0.5, 0.2); // Color to apply to solid elements
const float shadowIntensity = 0.66;     // max alpha of shadow

float getAvgAlpha(sampler2D buf, vec2 coord) {
	// Return simple average of alpha values over a square
	float total_alpha = 0.0;
	float total_max = 0.0;

	for (int x=-blurRadius; x<=blurRadius; x++) {
		for (int y=-blurRadius; y<=blurRadius; y++) {
			total_alpha += texture2D(buf, coord + vec2(x,y) / resolution).a;
			total_max += 1.0;
		}
	}
	
	return total_alpha / total_max;
}

void main( void ) {
	vec2 position = ( gl_FragCoord.xy / resolution.xy );
	float alpha = getAvgAlpha(backbuffer, position + offset / resolution);
	gl_FragColor.rgb = color * (1.0-shadowIntensity + shadowIntensity*alpha);

	// set transparent pixels to black
	gl_FragColor.rgb *= texture2D(backbuffer, position).a;
	
	// This sets up the alpha channel to be drop-shadowed in next pass
	gl_FragColor.a = 10.0 * cos(length(position - 0.5) * 50.0);
}

