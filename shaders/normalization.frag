precision mediump float;

//Every pixel now receives the resolution of the canvas
uniform vec2 u_resolution;

void main() {
	float X = gl_FragCoord.x; //?
    float Y = gl_FragCoord.y; //?

	//?

	gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
}
