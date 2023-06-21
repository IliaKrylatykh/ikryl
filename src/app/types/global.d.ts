declare module '*.scss' {
	interface IClassNames {
		[className: string]: string
	}
	const classNames: IClassNames
	export = classNames
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.svg' {
	import React from 'react'

	const SVG: React.FC<React.ComponentProps<'svg'>>
	export default SVG
}

declare const __IS_DEV__: boolean
declare const __API__: string
