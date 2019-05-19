#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 resolution;

void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy);
	
	float angle = 35.0 * 3.14 / 180.0;
	float timeShift = time * 50.0;
	
	float posX = (gl_FragCoord.x + timeShift) * sin(angle) + gl_FragCoord.y * cos(angle);
	float posY = gl_FragCoord.y * cos(angle) - gl_FragCoord.x * sin(angle);
	
	float x = position.x + sin(position.y * 7.0 + time * 2.0) * 25.5;
	float y = position.y + cos(position.x * 7.0 + time * 2.0) * 25.5;

	float sizeX = 300.0;
	float sizeY = 50.0;
	
	float colorX = floor(mod(((posX + x / 2.2) / sizeX), 2.0));
	float colorY = floor((mod(((posY + y / 2.2) / sizeY) + y * 0.0, 2.0)));
	
	float colorX1 = floor(mod(((posX + sizeX + x / 2.2) / sizeX), 2.0));
	float colorY2 = floor((mod((((posY + y / 2.2) + sizeY) / sizeY) + y * 0.0, 2.0)));
	
	float squares1 = (colorX * colorY);
	float squares2 = (colorX1 * colorY2);
	float chess = squares1 + squares2;
	
	vec3 color = vec3(chess, chess, chess);
	
	float colorMixF = 0.2;
	vec4 colorMix = vec4(colorMixF, colorMixF, colorMixF, 1.0);

	_GLF_color = colorMix + vec4( color, 1.0 );

}