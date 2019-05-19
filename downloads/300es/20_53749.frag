#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;
vec4 fColor;

void
main()
{
    fColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}