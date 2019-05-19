




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float circle(in vec2 _st, in float _radius){
      vec2 dist = _st-vec2(
	      0.5 + 
	      0.005 * 						// wiggle
	      sin(_st.y * 80.0 + time * 5.0),
	      0.4);
	
	return 1.-smoothstep(
		_radius-(_radius*0.01),
                _radius+(_radius*0.01)                 + 0.1,   // blur
                dot(dist,dist)*4.0);
}

void main( void )
{
	vec2 st = gl_FragCoord.xy/resolution.xy;
	
vec3 col = mix(vec3(4.0, 0.0, 0.2), vec3(1.0, 1.1, 0.0), st.y);  
	
	vec3 color = vec3(circle(st,0.9)) * col;
	
	gl_FragColor = vec4( color, 1.0 );
}