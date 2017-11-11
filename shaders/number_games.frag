precision mediump float;

uniform vec2 u_resolution;

void main() {
	vec2 position = gl_FragCoord.xy / u_resolution.xy;
	vec3 color;

    float steps = 10.;

    float x = floor(position.x * steps);
	float y = floor(position.y * steps);

    float brightness = mod(x + y, 2.);

	color = vec3(brightness);

    gl_FragColor = vec4(color, 1.);
}
