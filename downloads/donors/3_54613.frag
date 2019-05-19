

// glslsandbox uniforms
uniform float time;
uniform vec2 resolution;

#define iTime time

float DistToLine(vec2 pt1, vec2 pt2, vec2 testPt)
{
  vec2 lineDir = pt2 - pt1;
  vec2 perpDir = vec2(lineDir.y, -lineDir.x);
  vec2 dirToPt1 = pt1 - testPt;
  return dot(normalize(perpDir), dirToPt1);
}

void main( void )
{
	
	vec2 dir = vec2(0.50,0.1) * mod(time, 1.0); // as input from REX, so every direction would be possible, start is in center (0.5 0.5)
	vec2 point = gl_FragCoord.xy / resolution.xy; // not necessary in REX, FragCoord will be normalized per default
	
	// #1 ortogonal line to direction is "g: dir + x * (dir.x, -dir.y)
	// #2 line between point #1 is "g: point + y * (dir.x, dir.y)
	
	
	
	gl_FragColor = vec4( DistToLine(dir+vec2(dir.x,-dir.y), dir+4.0*vec2(dir.x,-dir.y), point), 0.0, 0.0, 0.0);
}