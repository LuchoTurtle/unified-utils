[remark-ignore](../README.md) / index

# Module: index

## Table of contents

### References

- [ignoreEnd](index.md#ignoreend)
- [ignoreStart](index.md#ignorestart)

### Functions

- [default](index.md#default)

## References

### ignoreEnd

Renames and re-exports [default](end.md#default)

___

### ignoreStart

Renames and re-exports [default](start.md#default)

## Functions

### default

▸ **default**(`this`, ...`settings`): `void` \| `Transformer`<`Root`, `Root`\>

A remark plugin that takes a Root node as input and returns the same node
with all child nodes following an ignore command having been hidden. After
all registered other plugins are run, this plugin visits the each hidden
child and reveals them.

In this way, nodes hidden by this plugin are unaffected by transformations
from other plugins until said nodes are revealed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | `Processor`<`void`, `Root`, `void`, `void`\> |
| `...settings` | `void`[] |

#### Returns

`void` \| `Transformer`<`Root`, `Root`\>

#### Defined in

node_modules/unified/index.d.ts:531
