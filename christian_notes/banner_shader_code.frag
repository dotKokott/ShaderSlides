// Author: Christian Kokott
// Title:

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float PI = 3.13159;

float stroke(float x, float s, float w) {
    float d = step(s, x+w*.5) - step(s, x-w*.5);
    return clamp(d, 0.1, 1.);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;

	vec3 color = vec3(0.);

    float bumps = 30.072;
    //float thick = cos(u_time*2.)*.5;
    float thick = 0.268;
    thick = cos(u_time*0.776)*.4;
	float w = 0.074;

    float b2 = bumps + 0.1;
    float t2 = thick + 0.1;
    //t2 = thick + cos(u_time*1.)*.5;
    float w2 = w;

    float b3 = b2 + 0.028;
    float t3 = t2 + -0.684;
    float w3 = w;



    //float pos = 1.+cos(u_time)*2.;
    float pos =1.;

    color.r += stroke((st.x+st.y)+cos(st.y*PI*bumps)*thick, pos+sin(st.x*PI*bumps)*thick, w);
    color.g += stroke((st.x+st.y)+cos(st.y*PI*b2)*t2, pos+sin(st.x*PI*b2)*t2, w2);
    color.b += stroke((st.x+st.y)+cos(st.y*PI*b3)*t3, pos+sin(st.x*PI*b3)*t3, w3);
    //color += stroke(-0.5+(st.x+st.y)+cos(st.x*PI*bumps)*thick, pos+sin(st.y*PI*bumps)*thick, w);

    gl_FragColor = vec4(color,1.0);
}
