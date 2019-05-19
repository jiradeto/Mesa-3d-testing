//flower.glsl
precision highp float;
uniform float time;
uniform vec2 resolution;

float circle(vec2 p, float radius1, float radius2)
{
    if (p.x < -1.0 || p.x > 1.0 || p.y < -2.23 || p.y > 2.23) return 0.0;
    p /= 1.5;
	float result = smoothstep(0.0, 0.4 * radius2, radius2 - abs(radius1 - length(p)));
	return result;
}

float squareShape(vec2 p, vec2 d)
{
    if (p.x < -1.0 || p.x > 1.0 || p.y < -2.23 || p.y > 2.23) return 0.0;
	float result = d.x * d.y - abs(d.x * p.y) - abs(d.y * p.x);
	result = step(0.0, result);
	return result;
}

float getLine(float origin, float s1, float s2)
{
	float result = smoothstep(s1, s2, origin);
	return result;
}

struct SubTime
{
	float time1;
	float time2;
	float time3;
	float time4;
	float time5;
	float time6;
	float time7;
	float time8;
	float time9;
	float time10;
	float haloTime1;
} subtime;

SubTime getTime(float originTime)
{
	SubTime mTime;
	float yu = mod(originTime, 3.5);
	float inter = 0.08;
	mTime.time1 = 0.0;
	mTime.time2 = 0.0;
	mTime.time3 = 0.0;
	mTime.time4 = 0.0;
	mTime.time5 = 0.0;
	mTime.time6 = 0.0;
	mTime.time7 = 0.0;
	mTime.time8 = 0.0;
	mTime.time9 = 0.0;
	mTime.time10 = 0.0;
	if(yu >= 0.0 && yu < 1.0)
	{
		mTime.time1 = sin(yu * 3.14);
	}

	if(yu >= inter * 1.0 && yu < inter * 1.0 + 1.0)
	{
		mTime.time2 = sin(3.14 * (yu - inter * 1.0));
	}

	if(yu >= inter * 2.0 && yu < inter * 2.0 + 1.0)
	{
		mTime.time3 = sin((yu - inter * 2.0) * 3.14);
	}

	if(yu >= inter * 3.0 && yu < inter * 3.0 + 1.0)
	{
		mTime.time4 = sin(3.14 * (yu - inter * 3.0));
	}

	if(yu >= inter * 4.0 && yu < inter * 4.0 + 1.0)
	{
		mTime.time5 = sin(3.14 * (yu - inter * 4.0));
	}

	if(yu >= inter * 5.0 && yu < inter * 5.0 + 1.0)
	{
		mTime.time6 = sin(3.14 * (yu - inter * 5.0));
	}

	if(yu >= inter * 6.0 && yu < inter * 6.0 + 1.0)
	{
		mTime.time7 = sin(3.14 * (yu - inter * 6.0));
	}

	if(yu >= inter * 7.0 && yu < inter * 7.0 + 1.0)
	{
		mTime.time8 = sin(3.14 * (yu - inter * 7.0));
	}
	if(yu >= inter * 8.0 && yu < inter * 8.0 + 1.0)
	{
		mTime.time9 = sin(3.14 * (yu - inter * 8.0));
	}
	if (yu >= 0.0 && yu <= inter * 8.0 + 1.0)
	{
		if (cos(yu * 0.157) > 0.0)
		{
			mTime.haloTime1 = yu * 0.157;
		}

	} else
	{
		mTime.haloTime1 = -(yu - 1.4) / 2.1;
	}
	return mTime;
}

float multiCircle(SubTime time, vec2 pos)
{
	vec2 center = vec2(0.0);
	float p = 3.14;
	float cR = 0.01;
	float ch1 = abs(time.time1) * cR;
	float ch2 = abs(time.time2) * cR;
	float ch3 = abs(time.time3) * cR;
	float ch4 = abs(time.time4) * cR;
	float ch5 = abs(time.time5) * cR;
	float ch6 = abs(time.time6) * cR;
	float ch7 = abs(time.time7) * cR;
	float ch8 = abs(time.time8) * cR;
	float ch9 = abs(time.time9) * cR;

	float cW = 0.015;
	float c1 = circle(pos, 0.38 + ch9, cW + ch9 );
	float c2 = circle(pos, 0.335 + ch8, cW + ch8);
	float c3 = circle(pos, 0.29 + ch7, cW + ch7);
	float c4 = circle(pos, 0.245 + ch6, cW + ch6);
	float c5 = circle(pos, 0.2 + ch5, cW + ch5);
	float c6 = circle(pos, 0.155 + ch4, cW + ch4);
	float c7 = circle(pos, 0.11 + ch3, cW + ch3);
	float c8 = circle(pos, 0.065 + ch2, cW + ch2);
	float c9 = circle(pos, 0.02 + ch1, cW + ch1);

	float fC = 0.0;
	fC += c1;
	fC += c2;
	fC += c3;
	fC += c4;
	fC += c5;
	fC += c6;
	fC += c7;
	fC += c8;
	fC += c9;

	return fC;
}

float circle(vec2 pos, float radius)
{
    if (pos.x < -1.0 || pos.x > 1.0 || pos.y < -2.23 || pos.y > 2.23) return 0.0;
	return smoothstep(0.0, 0.01, radius - length(pos));
}

float lines2(float c)
{
	return abs((mod(c * 8.0 , 2.0)) - (0.5 - 0.6 * c));
}

float getMultiLines(vec2 pos)
{
    if (pos.x < -1.0 || pos.x > 1.0 || pos.y < -2.23 || pos.y > 2.23) return 0.0;
	float line2 = lines2(-pos.y / 0.6 + pos.x / 0.6 - 0.2);
	float smallsquare1 = squareShape(pos, vec2(3.2, 3.2));
	return smallsquare1 * getLine(line2, 0.3, 0.4);
}

float circleT(vec2 p, vec2 center, float radius1, float radius2)
{
    if (p.x < -1.0 || p.x > 1.0 || p.y < -2.23 || p.y > 2.23) return 0.0;
	float temp = radius2 - abs(radius1 - distance(p / 1.5, center));
	return smoothstep(0.0, 0.5, temp);
}

float haloCircle(float change, vec2 center, vec2 pos)
{
    if (pos.x < -1.0 || pos.x > 1.0 || pos.y < -2.23 || pos.y > 2.23) return 0.0;
	float rad1 = change * 3.0;
	float temp = (1.0 - smoothstep(0.0, 0.7, rad1));
	return circleT(pos, center, rad1, (rad1 + 0.35 * temp) * temp);

}

void main()
{
	vec2 pos = (2.0 * gl_FragCoord.xy - resolution.xy) / resolution.x;
	float ratio = resolution.y / resolution.x;
	vec2 multiCirclePos = pos;
	gl_FragColor = vec4(0.0);
	float time1 = time;
    float time2 = time - 1.57;
    float time3 = time - 0.785;
    float time4 = time - 2.335;
    SubTime mTime1 = getTime(time1 * 0.5);
    SubTime mTime2 = getTime(time2 * 0.5);
    SubTime mTime3 = getTime(time3 * 0.5);
    SubTime mTime4 = getTime(time4 * 0.5);
	float haloChange3 = 0.0;
	float haloChange4 = 0.0;

	if (mTime1.haloTime1 >= 0.0)
    {
        haloChange3 = abs(sin(mTime1.haloTime1));
    } else
    {
        haloChange3 = -smoothstep(0.0, 0.2, -mTime1.haloTime1);
    }

    if (mTime2.haloTime1 >= 0.0)
    {
        haloChange4 = abs(sin(mTime2.haloTime1));
    } else
    {
        haloChange4 = -smoothstep(0.0, 0.5, -mTime2.haloTime1);
    }

	vec2 circlePos1 = vec2(-1.05, ratio * 0.68);
	vec3 circle1Color1 = vec3(0.06, 0.85, 0.31);
	vec3 circle1HaloColor1 = vec3(0.98, 0.94, 0.28);

	vec2 circlePos2 = vec2(-1.29, -0.24 * ratio);
	vec3 circle2Color1 = vec3(0.98, 0.93, 0.59);
	vec3 circle2HaloColor1 = vec3(0.67, 0.93, 0.84);

	vec2 circlePos3 = vec2(-0.275, -0.86 * ratio);
	vec3 circle3Color1 = vec3(0.4, 1.0, 0.70);
	vec3 circle3HaloColor1 = vec3(1.0, 1.0, 0.0);

	vec2 circlePos4 = vec2(0.62, -ratio * 0.34);
	vec3 circle4Color1 = vec3(1.0, 0.97, 0.24);
	vec3 circle4HaloColor1 = vec3(1.0, 0.0, 0.27);

	vec2 linePos1 = vec2(0.18, ratio * 0.32);
	vec2 linePos2 = vec2(0.625, 1.07 * ratio);

	vec2 originCenter = vec2(0.0);
	vec2 circle1Pos = multiCirclePos - circlePos1;
	float circle1 = multiCircle(mTime4, circle1Pos);
	vec3 circle1Color = mix(circle1HaloColor1, circle1Color1, smoothstep(0.2, 0.46, distance(circle1Pos - vec2(0.4, 0.0), originCenter)));
	gl_FragColor += vec4(circle1Color * circle1, 1.0);

	vec2 circle2Pos = multiCirclePos - circlePos2;
	float circle2 = multiCircle(mTime3, circle2Pos);
	vec3 circle2Color = mix(circle2HaloColor1, circle2Color1, smoothstep(0.2, 0.3, distance(circle2Pos- vec2(0.4, 0.0), originCenter)));
	gl_FragColor += vec4(circle2Color * circle2, 1.0);


	vec2 circle3Pos = multiCirclePos - circlePos3;
	float circle3 = multiCircle(mTime2, circle3Pos);
	float circle3Halo =abs(haloChange3 >= 0.0 ? 1.0 : haloChange3) *
		haloCircle(max(0.0, haloChange3), originCenter, circle3Pos);
	vec3 circle3Color = mix(circle3Color1, circle3HaloColor1, circle3Halo);
	gl_FragColor += vec4(circle3Color * circle3, 1.0);

	vec2 circle4Pos = multiCirclePos - circlePos4;

	float circle4 = multiCircle(mTime1, circle4Pos);
	float circle4Halo = abs(haloChange4 >= 0.0 ? 1.0 : haloChange4) *
		haloCircle(max(0.0, haloChange4), originCenter, circle4Pos - vec2(-0.15, 0.0));
	vec3 circle4Color = mix(circle4Color1, circle4HaloColor1, circle4Halo);
	gl_FragColor += vec4(circle4Color * circle4, 1.0);

	vec2 lineCirclePos = pos;
	vec3 lineColor1 = vec3(0.57, 0.98, 0.64);
	vec3 lineColor2 = vec3(0.31, 0.66, 0.86);
	vec3 lineColor3 = vec3(0.85, 0.71, 0.58);
	vec2 lineCircle1Center = lineCirclePos - linePos1;
	vec2 lineCircle2Center = lineCirclePos - linePos2;
	float lineCircle1 = circle(lineCircle1Center, 0.58);
	float lineCircle2 = circle(lineCircle2Center, 0.58);

	float lines = getMultiLines(lineCirclePos - vec2(0.5, 0.9));
	vec3 lineColor = vec3(0.0);

	float xtrans = sin(time * 0.7) * 0.2;
	vec2 colorMove = vec2(-0.3 + xtrans * 4.0, 0.15 + xtrans * 4.0);
	lineColor += mix(lineColor1, lineColor2, smoothstep(0.0, 1.0, distance(lineCirclePos, linePos1 - colorMove)))
	* min(max(lineCircle1, 0.0), max(0.0, lines));
	lineColor += lineColor3 * min(max(lineCircle2, 0.0), max(0.0, lines));

	gl_FragColor += vec4(lineColor, 1.0);
	float ytrans = cos(time) * 0.35;

	float sC = circle(pos + vec2(0.4, 0.1) + 0.3 * vec2(-xtrans, ytrans), 0.14);
	gl_FragColor += vec4(sC * vec3(1.0, 1.0, 0.0), 1.0);

	sC = circle(pos - vec2(0.7, 0.67 * ratio)  + 0.25 * vec2(xtrans, -ytrans), 0.14);
	gl_FragColor += vec4(sC * lineColor1, 1.0);

	sC = circle(pos - vec2(0.62, -0.8 * ratio) + 0.25 * vec2(xtrans, ytrans), 0.14);
	gl_FragColor += vec4(sC * circle1Color1, 1.0);

	sC = circle(pos - vec2(0.2, 0.72 * ratio) + 0.1 * vec2(xtrans, ytrans), 0.08);
	gl_FragColor += vec4(sC * lineColor2 * 0.3, 1.0);

	sC = circle(pos + vec2(0.15, 0.3 * ratio) + 0.1 * vec2(xtrans, ytrans), 0.08);
	gl_FragColor += vec4(sC * lineColor2 * 0.115, 1.0);

	sC = circle(pos + vec2(0.7, 0.5 * ratio) + 0.1 * vec2(xtrans, -ytrans), 0.06);
	gl_FragColor += vec4(sC * lineColor3 * 0.15, 1.0);

	sC = circle(pos - vec2(0.7, 0.05 * ratio) + 0.1 * vec2(xtrans, -ytrans), 0.06);
	gl_FragColor += vec4(sC * circle1Color1 * 0.15, 1.0);

}
