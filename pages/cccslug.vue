<script setup lang="ts">
import { queryCollection, queryCollectionNavigation } from "#imports";
import type { Collections } from "@nuxt/content";
// import { withLeadingSlash, joinURL } from 'ufo'

definePageMeta({
  layout: "goflayout2",
});

const route = useRoute();

const slug = computed(() =>
  Array.isArray(route.params.slug)
    ? (route.params.slug as string[])
    : [route.params.slug as string]
);

// const { data: page } = await useAsyncData(path.value, async () =>
//   await queryCollection(collection.value).path(path.value).first() as Collections['content_en'] | Collections['content_fr'],
// )

// const { data: posts } = await useAsyncData('docs', () => queryCollection('docs').all())

// const { data: page } = await useAsyncData(route.path,  () => {
//     return queryCollection('docs').path(route.path).first()
//   }
// )

// alert(route.path.split('/'));
// const collection = computed(() => slug.value.length < 2 ? 'docs': slug.value[0]  as keyof Collections)
// const collection = computed(() => slug.value.length < 2 ? 'docs': slug.value[0]  as keyof Collections)
const collection = computed(() =>
  route.path.split("/").length < 3
    ? "docs"
    : (route.path.split("/")[1] as keyof Collections)
);

// const collection = computed(() =>  ''  as keyof Collections)

// const { data: page } = await useAsyncData(route.path,  () => {
//     return queryCollection(collection.value).path(route.path).first()
//   }
// )
// const { data: posts } = await useAsyncData('all', () => queryCollection(collection.value).all())

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content").path(route.path).first();
  // const rst = queryCollection(collection.value).order('id', "DESC").select('path').first();

  // rst
  // return queryCollection(collection.value).path('ifrs').first()
  // return queryCollection(collection.value).all()
  // return queryCollection(collection.value).order('id', "DESC").first()
});

const { data: navi } = await useAsyncData("navigation", () => {
  // return queryCollectionNavigation(collection.value)
  return queryCollectionNavigation("content");
});
</script>

<template>
  <nav>
    <ul v-if="navi">
      <li v-for="item in navi" :key="item.path">
        <NuxtLink :to="item.path">{{ item.path }}</NuxtLink>
      </li>
    </ul>
  </nav>

  <div>Navi : {{ navi?.length }}</div>
  <div>Slug : {{ slug }}</div>
  <div>Route Path : {{ route.path }}</div>
  <div>collection : {{ collection }}</div>

  <div v-if="page">
    <p>Page Path : {{ route.path }}</p>
  </div>

  <div>Route : {{ route }}</div>

  <div>
    <!-- <div v-for="a in page" :key="a.id">
         <ContentRenderer v-if="a"  :value="a"  />  
    </div> -->
    <ContentRenderer v-if="page" :value="page" />
  </div>

  <!-- <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <p>Post Id : {{ post.id }}</p>
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div> -->
</template>

<!-- <template>
  <div>
    aaaa
    {{ route.params.slug }}
    bbbb
    <div>{{ slug }}</div>
    <ContentRenderer v-if="page"   :value="page"  /> 
    <div v-if="page"> 
        <p> {{ route.path }}</p>
     </div>
  </div>

  <div>
    {{ route}}
  </div>
  
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <p>
          {{  post.id }}

        </p>
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template> -->
