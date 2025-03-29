# About Content Version 3

## Ch1

### Ch1.1

## 2. Ch2

#### Ch2.1

##### Ch2.1.1 asdfasdfasdfasdfasdfasdfasdfas

##### 2.1 Ch2.1.2

asdfasdf
asdfasdfasdfasdfasdfasdfasdfas asdfasd asdfasdf asdasdfasd asdfasdfasdasd asdfasdf asdfasd adfasdfasdasasdfasdfasd asdfasd

#### Ch2.1 Quote

## Ch3

> asdfasdfa
> aaa
>
> > aaaaaa
> > bbbbb

#### Ch3.1 List

- asdfasdf
- basdfasd
- asdfasdf

1. asasdf
2. asdfasdfasd

---

1. asdfas
2. asdfasdf

#### Math Block

Lift $L$ can be determined by Lift Coefficient $C_L$ like the following
equation.

### MyCard

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
