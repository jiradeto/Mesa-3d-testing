#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;#version 330 core //150 core

in vec4 vertexPosition_modelspace;
out vec3 color;

void main(){
	//greatest colour
	float x = vertexPosition_modelspace.x;
	float y = vertexPosition_modelspace.x;
	float z = vertexPosition_modelspace.x;
	
	if(y > x){
		if(z > y){//z
			color = vec3(0,0,1);
		}else{//y
			color = vec3(0,1,0);
		}
	}else if(z > x){//z
		color = vec3(0,0,1);
	}else{//x
		color = vec3(1,0,0);
	}
	
	////just make it red for now
	//color = vec3(1,0,0);
}
