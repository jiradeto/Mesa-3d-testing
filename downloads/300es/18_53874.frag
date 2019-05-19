#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;
vec2 rand (float x,float y) {
    float a= fract(sin(dot(vec2(x,y),
                         vec2(12.9898,78.233)))*
        43758.5453123);
    float b=fract(sin(dot(vec2(y,x),
                         vec2(12.9898,78.233)))*
        43758.5453123);
	return vec2(a,b);
}
struct Point{
	float r;	
	vec2 pos;
};
vec4 display(Point p){
	vec2 uv=gl_FragCoord.xy/resolution.x;
	float d=distance(uv,p.pos);
	

  return vec4(vec3(smoothstep(p.r,p.r ,d )),1.); 
}

void main( void ) {

	vec2 uv= ( gl_FragCoord.xy / resolution.xy )*2.;

	vec4 c=vec4(0.9);
	Point p=Point(0.05,rand(uv.x,uv.y));
	c=1.0-display(p);
	
	_GLF_color =c;

}