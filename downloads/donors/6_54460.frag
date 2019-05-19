




uniform float time;
uniform vec2 resolution;

float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(1.9898,78.233))) * 43758.5453);
}

void main( void ) {

	vec2 position = gl_FragCoord.xy / resolution.xy;

  float value = rand(vec2(position.x + time, position.y + time));

	gl_FragColor = vec4(value, value, value,1.0);
}