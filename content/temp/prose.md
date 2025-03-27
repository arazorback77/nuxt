# About Content Version 3

## H2

### H3

#### H4

##### H5

asdfasdf
asdfasdfasdfasdfasdfasdfasdfas asdfasd asdfasdf asdasdfasd asdfasdfasdasd asdfasdf asdfasd adfasdfasdasasdfasdfasd asdfasd

#### Quote

> asdfasdfa
> aaa
>
> > aaaaaa
> > bbbbb

#### List

- asdfasdf
- basdfasd
- asdfasdf

1. asasdf
2. asdfasdfasd

---

1. asdfas
2. asdfasdf

#### Math Block

When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

Lift($$L$$) can be determined by Lift Coefficient ($$C_L$$) like the following
equation.

When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are
$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $

Lift $L$ can be determined by Lift Coefficient $C_L$ like the following
equation.

$$
L = \frac{1}{2} \rho v^2 S C_L
$$

$E = mc^2$ asdfasdf asdfasdf asdfasdfasd

$$
E = mc^2
$$

```math
E = mc^2
```

_single asterisks_  
_single underscores_  
**double asterisks**  
**double underscores**  
~~cancelline~~

This is a normal paragraph:

This is a code block.

### MyCard

::MyCard
::

::alert{color="green"}
The current [alert](https://github.com/larbish/starter/blob/content/app/components/Alert.vue) and the [counter](https://github.com/larbish/starter/blob/content/app/components/Counter.vue) below are `Vue` components integrated into the Markdown.
::

::Alert{color="green"}
adfasd
::

#### Code Highlight

```vue[app.vue]
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
```

###### H6

```java
public class BootSpringBootApplication {
  public static void main(String[] args) {
    System.out.println("Hello, Honeymon");
  }
}
```

```js{2}[nuxt.config.ts]
export default () => {
  console.log("Code block");
};
```

`code inline`

`const codeInline: string = 'highlighted code inline'`{lang="ts"}

#### Table

| Key | Type      | Description                                 |
| --- | --------- | ------------------------------------------- |
| 1   | Wonderful | Table with `some long code snippet example` |
| 2   | Wonderful | Data                                        |
| 3   | Wonderful | Website                                     |

#### Link & Image

![img](/G_logo_black.svg){:width="400" height="400"}

// `[Link H2](/prose/#h3)`{lang="ts"}  
[Link H2](/prose/#h3)

[link keyword][id]

Link: [Google][googlelink]

[id]: URL "Optional Title here"
[googlelink]: https://google.com "Go google"

[Back home](/)
