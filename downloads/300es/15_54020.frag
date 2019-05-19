#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float rand(int seed, float ray)
{
	return mod(sin(float(seed)*363.5346+ray*674.2454)*6743.4365, 1.0);
}

void main( void )
{
	float pi = 3.14159265359;
	vec2 position = ( gl_FragCoord.xy / resolution.xy );
	position-=vec2(0.5);
	position *= 0.7-sin(mouse.x*10.+position*5.+10.*length(position)*sign(position))*0.5;
	position *= 0.7-sin(mouse.x*10.+position*5.+10.*length(position)*sign(position))*0.5;
	position *= 0.7-sin(mouse.x*10.+position*5.+10.*length(position)*sign(position))*0.5;
	position *= 0.7-sin(mouse.x*10.+position*5.+10.*length(position)*sign(position))*0.5;
	
	
	position.y *= resolution.y/resolution.x;
	
	float ang = atan(position.y, position.x);
	float dist = length(position);
	_GLF_color.rgb = vec3(0.3, 0.5, 0.7) * (pow(dist, -1.0) * 0.05);
	for (float ray = 0.0; ray < 60.0; ray += 1.0)
	{
		//float rayang = rand(5234, ray)*6.2+time*5.0*(rand(2534, ray)-rand(3545, ray));
		float rayang = rand(5234, ray)*6.2+(time*0.04)*10.0*(rand(2546, ray)-rand(5785, ray))-(rand(3545, ray)-rand(5467, ray));
		rayang = mod(rayang+sin(dist*ray*0.1), pi*2.0);
		if (rayang < ang - pi) {rayang += pi*2.0;}
		if (rayang > ang + pi) {rayang -= pi*2.0;}
		float brite = .1 - abs(ang - rayang);
		brite -= dist * 0.2;
		if (brite > 0.0) {
			_GLF_color.rgb += vec3(0.2+0.4*rand(8644, ray), 0.4+0.4*rand(4567, ray), 0.5+0.4*rand(7354, ray)) * brite;
		}
	}
	_GLF_color.a = 1.0;
}