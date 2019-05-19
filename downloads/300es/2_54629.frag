#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;

uniform float time;
uniform vec2 resolution;

void main()
{
    float len = 0.05; // #TODO: as input in REX
    float mTime = clamp(mod(time, 1.0), 0.0, 1.0) * (1.0 + len); // #TODO: no mod needed in REX
    vec2 rPoint = gl_FragCoord.xy / resolution.xy; // #TODO: not needed in REX, as fragCoord will already be normalized
    vec2 dir = vec2(0.6, 0.4); // #TODO: received as input in REX, defines the direction of effect

    // #TODO: as input from vertex part OR direct input from REX
    vec2 start = vec2(0.0, 0.0);
    vec2 end = vec2(1.0, 1.0);
    vec2 dirSign = vec2(1.0, 1.0);
    if(dir.x < 0.0)
    {
	start.x = 1.0;
	end.x = 0.0;
	dirSign.x = -1.0;
    }
    if(dir.y < 0.0)
    {
	start.y = 1.0;
	end.y = 0.0;
	dirSign.y = -1.0;
    }
    // *** //

    // damn zeros, maybe part of vertex?
    vec2 invDir = vec2(dir.y,-dir.x);
    if(dir.x == 0.0)
        invDir = vec2(-dir.y,dir.x);
	
    float eDistance = (start.y*dir.x + end.x*dir.y - start.x*dir.y - end.y*dir.x) / (invDir.y*dir.x - invDir.x*dir.y);
    vec2 eVector = (vec2(end.x + eDistance * invDir.x, end.y + eDistance * invDir.y) - start); // vector to real end point
	
    vec2 tPoint = start + eVector * mTime; // current position on line, based on time
    vec2 fPoint = start + eVector * (mTime - len); // current start of fade

    float iDistance = (rPoint.y*dir.x + tPoint.x*dir.y - rPoint.x*dir.y - tPoint.y*dir.x) / (invDir.y*dir.x - invDir.x*dir.y);
    vec2 iPoint = vec2(tPoint.x + iDistance * invDir.x, tPoint.y + iDistance * invDir.y); // intersection between current line and render position

    float jDistance = (rPoint.y*dir.x + fPoint.x*dir.y - rPoint.x*dir.y - fPoint.y*dir.x) / (invDir.y*dir.x - invDir.x*dir.y);
    vec2 jPoint = vec2(fPoint.x + iDistance * invDir.x, fPoint.y + iDistance * invDir.y); // intersection between fade start and render position

    if((iPoint.y - rPoint.y) / dirSign.y + (iPoint.x - rPoint.x) / dirSign.x > 0.0) // direction I to R
    {
	 if((jPoint.y - rPoint.y) / dirSign.y + (jPoint.x - rPoint.x) / dirSign.x < 0.0) // direction F to R
         {
             float dist = distance(jPoint, rPoint) / distance(start, eVector) / len;
             _GLF_color = vec4(0.0, 0.0, dist, dist);
	 }
	 else
             _GLF_color = vec4(0.0, 0.0, 0.0, 0.0);
    }
    else
	_GLF_color = vec4(0.0, 0.0, 1.0, 1.0);
}