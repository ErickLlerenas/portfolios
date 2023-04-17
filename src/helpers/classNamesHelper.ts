export const getMenuItemClassNames = (isSelected: boolean) => {
	const classNames = [
		"bg-gray-100",
		"flex",
		"flex-col",
		"justify-center",
		"rounded-xl",
		"items-center",
		"text-gray-700",
		"text-xs",
		"font-medium",
		"cursor-pointer",
		"my-hover",
		"w-14",
		"h-14",
		"md:w-16",
		"md:h-16",
	];

	if (isSelected) {
		classNames.push("my-background");
	}

	return classNames.join(" ");
};
