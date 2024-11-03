import button from './button.svelte'; // typed as: import button
export type ButtonInstance = InstanceType<typeof button>; // it IS a class in ts files
export type ButtonFunction = ReturnType<typeof button>; // it IS NOT a function in ts files

import type { ComponentProps } from 'svelte';
import type { Props } from './button.svelte'; // I CAN NOT import types from Svelte files into Svelte files (error: no exported member 'Props')
export type ButtonProps = ComponentProps<typeof button>['onclick']; // doesn't work, typeof button does not satisfy SvelteComponent
export type ButtonPropsAsImported = Props['onclick']; // doesn't work, since the import failed anyway

export type ButtonPropsFromInstance = ButtonInstance['onclick']; // property doesnt exist
export type ButtonPropsFromFunction = ButtonFunction['onclick']; // doesn't work, ButtonFunction is not typed.
export type ButtonPropsDirect = (typeof button)['onclick']; // property doesnt exist
