<script lang="ts" module>
	import type { Component } from 'svelte';
	import button from './button.svelte';
	export type ButtonInstance = InstanceType<typeof button>; // it IS NOT a class in Svelte files
	export type ButtonFunction = ReturnType<typeof button>; // it IS a function in Svelte files

	import type { ComponentProps } from 'svelte';
	export type PropsHelper<C> = C extends Component<infer P> ? P : never;

	import type { Props } from './button.svelte'; // I CAN import types from Svelte files into Svelte files
	export type ButtonProps = ComponentProps<typeof button>['onclick']; // works
	export type ButtonPropsInferred = PropsHelper<typeof button>['onclick']; // works, but I have to create a helper
	export type ButtonPropsAsImported = Props['onclick']; // works, but I have to reexport Props all the time

	export type ButtonPropsFromInstance = ButtonInstance['onclick']; // wrongly typed as any
	export type ButtonPropsFromFunction = ButtonFunction['onclick']; // property doesnt exist
	export type ButtonPropsDirect = (typeof button)['onclick']; // property doesnt exist
</script>
