precision mediump float;

uniform vec2 u_resolution;

void main() {
	float X = gl_FragCoord.x / u_resolution.x;
    float Y = gl_FragCoord.y / u_resolution.y;

	if(X > 0.5) {
		gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
	} else {
		gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
	}
}
