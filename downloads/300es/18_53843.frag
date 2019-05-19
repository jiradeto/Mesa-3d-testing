#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

float intpoint_inside_trigon(vec2 s, vec4 a, vec4 b, vec4 c)
{
    float as_x = s.x-a.x;
    float as_y = s.y-a.y;
    bool s_ab = (b.x-a.x)*as_y-(b.y-a.y)*as_x > 0.0 ;
    if((c.x-a.x)*as_y-(c.y-a.y)*as_x > 0.0 == s_ab) return 0.;
    if((c.x-b.x)*(s.y-b.y)-(c.y-b.y)*(s.x-b.x) > 0.0 != s_ab) return 0.;
    return 1.;
}

vec4 project(vec4 vertice){
	return vec4(vertice.x / vertice.z, vertice.y / vertice.z, vertice.z, 0);
}

void applyMat(inout vec4 vert[3], mat4 mat){
	vert[0] *= mat;
	vert[1] *= mat;
	vert[2] *= mat;
}

float distanceToLine(vec2 p1, vec2 p2, vec2 point) {
    float a = p1.y-p2.y;
    float b = p2.x-p1.x;
    return abs(a*point.x+b*point.y+p1.x*p2.y-p2.x*p1.y) / sqrt(a*a+b*b);
}

float blurLine(vec4 p0, vec4 p1, vec2 position){
	return smoothstep(0.8, 0.0, 400. * distanceToLine(vec2(p1), vec2(p0), position));
}

void main( void ) {

	vec2 position = ( gl_FragCoord.xy / resolution.xy ) -0.5;

	vec3 color = vec3(0.5);
	vec4 vert[3];
	vert[0] = vec4(-0.5, 0.0, 0., 1);
	vert[1] = vec4(0., 1.0, 0., 1);
	vert[2] = vec4(.5, 0., 0., 1);
	
	//Rotē
	mat4 rotMat = mat4(
			cos(time), 		0,	-sin(time / 2.), 	0,   
			0, 			1, 	0,			0,  
			-sin(time / 1.), 	0, 	cos(time / 1.),		0,
			0,			0,	0,			1);
	
	applyMat(vert, rotMat);
		
	//Pārvieto
	mat4 trans = mat4(1, 0, 0, 0,    
			  0, 1, 0, 0,   
			  0, 0, 1, abs(sin(time) * 10.0),     
			  0, 0, 0, 1.0);
	
	applyMat(vert, trans);
	//Projicē
	vec4 pv0 = project(vert[0]); vec4 pv1 = project(vert[1]); vec4 pv2 = project(vert[2]);

	vec3 normal = normalize(cross(vec3(vert[2] - vert[0]), vec3(vert[1] - vert[0])));
	float shade = abs(dot(normal, vec3(.0, .0, 1.0)));
	//float shade = 1.;
	
	float triangle = intpoint_inside_trigon (position, pv0, pv1, pv2);
	color += triangle * vec3(1.0, 1.0, 0.1) * shade;
	float border = 0.0;
	border += blurLine(pv0, pv1, position);
	border += blurLine(pv2, pv1, position);
	border += blurLine(pv2, pv0, position);

	vec3 col = color + vec3(position.y * 2. - 0.4 + border);
	_GLF_color = vec4(col, 1.0 );

}