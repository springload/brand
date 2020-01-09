const lodash = require("lodash");

function createCSSVariablesFromObject(obj, prefix = "") {
	let carry = "";

	for (const key in obj) {
		const value = obj[key];

		if (typeof value === "object") {
			carry += createCSSVariablesFromObject(
				value,
				lodash.camelCase(`${prefix}-${key}`)
			);
		} else if (typeof value === "string") {
			const propertyName = lodash.camelCase(prefix + "-" + key);

			carry += `--${propertyName}: ${value};\n`;
		} else {
			throw new Error("Unhandled value type: " + typeof value);
		}
	}

	return carry.trim();
}

module.exports = createCSSVariablesFromObject;
