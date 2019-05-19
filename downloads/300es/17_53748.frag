#version 300 es 

precision highp float; 

layout(location = 0) out vec4 _GLF_color; 

uniform vec2 injectionSwitch;




uniform float time;
uniform vec2 mouse;
uniform vec2 resolution;

#define epsilon 0.0001
#define maxstep 64

// 球体オブジェクトの情報を格納する構造体
struct Sphere
{
	vec3 position;
	float radius;
};

// 球体オブジェクトの距離関数
float Sphere_distance(Sphere sphere, vec3 position)
{
	return length(position - sphere.position) - sphere.radius;
}

// 球体オブジェクトの法線ベクトル
vec3 Sphere_normal(Sphere sphere, vec3 position)
{
	float x = Sphere_distance(sphere, position + vec3(epsilon, 0.0, 0.0)) - Sphere_distance(sphere, position);
	float y = Sphere_distance(sphere, position + vec3(0.0, epsilon, 0.0)) - Sphere_distance(sphere, position);
	float z = Sphere_distance(sphere, position + vec3(0.0, 0.0, epsilon)) - Sphere_distance(sphere, position);
	return normalize(vec3(x, y, z));
}

// 直方体オブジェクトの情報を格納する構造体
struct Box
{
	vec3 position;
	vec3 size;
	float round;
};
	
// 直方体オブジェクトの距離関数
float Box_distance(Box box, vec3 position)
{
	vec3 d = abs(position - box.position) - box.size;
	return length(max(d, 0.0)) - box.round + min(max(d.x,max(d.y,d.z)),0.0);
}

// 直方体オブジェクトの法線ベクトル
vec3 Box_normal(Box box, vec3 position)
{
	float x = Box_distance(box, position + vec3(epsilon, 0.0, 0.0)) - Box_distance(box, position);
	float y = Box_distance(box, position + vec3(0.0, epsilon, 0.0)) - Box_distance(box, position);
	float z = Box_distance(box, position + vec3(0.0, 0.0, epsilon)) - Box_distance(box, position);
	return normalize(vec3(x, y, z));
}

// 光源の方向
vec3 lightDirection = normalize(vec3(1.0, 1.0, -1.0));

// レイの情報を格納する構造体
struct Ray
{
	vec3 position;
	vec3 direction;
};

void main(void) 
{
	
	// GLSL座標の正規化
	vec2 position = (gl_FragCoord.xy * 2.0 - resolution) / max(resolution.x, resolution.y);
	
	// カメラの位置・姿勢
	vec3 camera_pos = vec3(0.0, 0.0, -10.0);
	vec3 camera_up = vec3(0.0, 1.0, 0.0);
	vec3 camera_dir = vec3(0.0, 0.0, 1.0);
	vec3 camera_side = normalize(cross(camera_up, camera_dir));
	
	// レイを生成する
	Ray ray;
	ray.position = camera_pos;
	ray.direction = normalize(position.x * camera_side + position.y * camera_up + camera_dir);
	
	// 直方体を生成する
	Box box1;
	box1.position = vec3(-4.0, -4.0, 2.0);
	box1.size = vec3(1.0);
	box1.round = 0.3;
	
	Box box2;
	box2.position = vec3(-3.0, -3.0, 3.0);
	box2.size = vec3(1.0);
	box2.round = 0.3;
	
	// 距離
	float dist = 0.0;
	
	// 色
	vec3 color = vec3(0.0);
	
	// レイマーチング
	for(int i = 0; i < maxstep; ++i)
	{
		// 物体との当たり判定
		float dist1 = Box_distance(box1, ray.position);
		float dist2 = Box_distance(box2, ray.position);
		
		// 当っていれば色を指定してbreak
		if(dist1 < epsilon)
		{
			// 法線ベクトル
			vec3 normal = Box_normal(box1, ray.position);
			
			// 内積で色を求める
			color = dot(lightDirection, normal) + vec3(0.1);
			
			break;
		}
		
		// 当っていれば色を指定してbreak
		if(dist2 < epsilon)
		{
			// 法線ベクトル
			vec3 normal = Box_normal(box2, ray.position);
			
			// 内積で色を求める
			color = dot(lightDirection, normal) + vec3(0.1);
			
			break;
		}
		
		// そうでなければレイを進める
		else 
		{
			dist = min(dist1, dist2);
			ray.position += ray.direction * dist;
		}
	}
	
	// 色を出力して終わり
	_GLF_color = vec4(color, 1.0);
}